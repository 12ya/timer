import { useState } from 'react';
import Button from './button';
import styles from '../App.module.css';

export default () => {
    const [state, setState] = useState({ ms: 0, s: 55, m: 59, h: 0 });

    const [runningInterval, setRunningInterval] = useState(0);

    let ms = state.ms;
    let s = state.s;
    let m = state.m;
    let h = state.h;

    const run = () => {
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
        setRunningInterval(0);
    };

    const reset = () => {
        clearInterval(runningInterval);
        setRunningInterval(0);
        setState({ h: 0, m: 0, ms: 0, s: 0 });
    };
    return (
        <>
            <div className={styles.buttonBox}>
                <Button title='ms' value={state.ms} />
                <Button title='sec' value={state.s} />
                <Button title='min' value={state.m} />
                <Button title='hours' value={state.h} />
            </div>
            <div className={styles.buttonBox}>
                {runningInterval ? (
                    <div onClick={stop}>
                        <Button value={'stop'} type={'regulator'} />
                    </div>
                ) : (
                    <div onClick={start}>
                        <Button value={'start'} type={'regulator'} />
                    </div>
                )}

                <div onClick={reset}>
                    <Button value={'reset'} type={'regulator'} />
                </div>
            </div>
        </>
    );
};
