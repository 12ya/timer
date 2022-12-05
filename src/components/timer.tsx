import { useState } from 'react';
import Button from './button';
import Input from './input';
import Pie from './pie';
import styles from '../App.module.css';

export default () => {
    const [state, setState] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [runningInterval, setRunningInterval] = useState(0);
    const [percentage, setPercentage] = useState(20);

    let h = state.h;
    let m = state.m;
    let s = state.s;
    let ms = state.ms;
    let frac = 0;
    let sum = (Math.abs(state.h * 60 * 60) + Math.abs(state.m * 60) + state.s) * 1000;

    const run = () => {
        const currentPercentage = (frac / sum) * 50;
        setPercentage(currentPercentage);

        h = Number(Math.floor((sum / (1000 * 60 * 60)) % 24));
        m = Number(Math.floor((sum / (1000 * 60)) % 60));
        s = Number(Math.floor((sum / 1000) % 60));

        sum -= 10;
        frac += 10;

        setState({ h, m, s, ms });
    };

    const start = () => {
        if (!state.h && !state.m && !state.s && !state.ms) return;
        setRunningInterval(setInterval(run, 10));
    };

    const stop = () => {
        clearInterval(runningInterval);
        setRunningInterval(0);
    };

    const reset = () => {
        clearInterval(runningInterval);
        setRunningInterval(0);
        setState({ h: 0, m: 0, ms: 0, s: 0 });
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: 100,
                            alignItems: 'flex-start',
                        }}
                    >
                        <div className={styles.inputBox}>
                            <Input id={'h'} setState={setState} state={state} title='hour' />
                            <Input id={'m'} setState={setState} state={state} title='min' />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flex: 1,
                            }}
                        >
                            {runningInterval ? (
                                <div onClick={stop} style={{ marginRight: 20 }}>
                                    <Button value={'stop'} type={'regulator'} />
                                </div>
                            ) : (
                                <div onClick={start} style={{ marginRight: 20 }}>
                                    <Button value={'start'} type={'regulator'} />
                                </div>
                            )}
                            <div onClick={reset}>
                                <Button value={'reset'} type={'regulator'} />
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: 150 }}>
                        <Pie h={state.h} m={state.m} s={state.s} percentage={percentage} />
                    </div>
                </div>
            </div>
        </>
    );
};
