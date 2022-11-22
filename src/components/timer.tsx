import { useState } from 'react';
import styles from '../App.module.css';
import Button from './button';
import Input from './input';

export default () => {
    const [state, setState] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [runningInterval, setRunningInterval] = useState(0);
    const [percentage, setPercentage] = useState(20);

    let h = state.h;
    let m = state.m;
    let s = state.s;
    let ms = state.ms;
    let frac = 0;
    let sum = (state.h * 60 * 60 + state.m * 60 + state.s) * 1000;

    const run = () => {
        const currentPercentage = (frac / sum) * 50;
        setPercentage(currentPercentage);

        h = Number(Math.floor((sum / (1000 * 60 * 60)) % 24));
        m = Number(Math.floor((sum / (1000 * 60)) % 60));
        s = Number(Math.floor((sum / 1000) % 59));

        console.log('ruuufusad', sum, currentPercentage, '-------', h, m, s);

        if (sum === 0) {
            h += 1;
            m += 1;
        }

        // if (h === 0 && m === 0 && s === 0 && ms === 0) {
        //     console.log('timout');

        //     clearInterval(runningInterval);
        //     // runNegative();
        //     return;
        // }

        // if (m === 0 && s === 0 && ms === 0) {
        //     h -= 1;
        //     m += 60;
        // }

        // if (s === 0 && ms === 0) {
        //     m -= 1;
        //     s += 60;
        // }

        // if (ms === 0) {
        //     s -= 1;
        //     ms += 100;
        // }

        // ms--;
        sum -= 10;
        frac += 10;

        setState({ h, m, s, ms });
    };

    const runNegative = () => {
        if (m === 60) {
            h += 1;
            m = 0;
        }

        if (s === 60) {
            m += 1;
            s = 0;
        }

        if (ms === 100) {
            s += 1;
            ms = 0;
        }
        ms++;
        setState({ ms, s, m, h });
    };

    const start = () => {
        setRunningInterval(setInterval(run, 10));
    };

    const stop = () => {
        clearInterval(runningInterval);
    };

    const reset = () => {
        clearInterval(runningInterval);
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
                        <div
                            style={{
                                display: 'flex',
                                marginBottom: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Input id={'h'} setState={setState} title='hour' />
                            <Input id={'m'} setState={setState} title='min' />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flex: 1,
                            }}
                        >
                            <div onClick={stop} style={{ marginRight: 20 }}>
                                <Button value={'stop'} type={'regulator'} />
                            </div>
                            <div onClick={start} style={{ marginRight: 20 }}>
                                <Button value={'start'} type={'regulator'} />
                            </div>
                            <div onClick={reset}>
                                <Button value={'reset'} type={'regulator'} />
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            position: 'relative',
                            display: 'flex',
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div style={{ position: 'absolute' }}>
                            <div>hours : {state.h}</div>
                            <div>minutes : {state.m}</div>
                            <div>seconds : {state.s}</div>
                        </div>
                        <div className={styles.chart} style={{ '--p': percentage }}></div>
                    </div>
                </div>
            </div>
            {/* <div className={styles.buttonBox} style={{ backgroundColor: 'red' }}>
                <Button title='ms' value={state.ms} />
                <Button title='sec' value={state.s} />
                <Button title='min' value={state.m} />
                <Button title='hours' value={state.h} />
            </div>
            <div className={styles.buttonBox}>
                <div onClick={start}>
                    <Button value={'start'} type={'regulator'} />
                </div>
                <div onClick={stop}>
                    <Button value={'stop'} type={'regulator'} />
                </div>
            </div> */}
        </>
    );
};
