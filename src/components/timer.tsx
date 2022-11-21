import { useState } from 'react';
import styles from '../App.module.css';
import Button from './button';
import Input from './input';

export default () => {
    const [state, setState] = useState({ ms: 0, s: 0, m: 0, h: 0 });

    const runTimer = () => {
        let h = state.h;
        let m = state.m;
        let s = state.s;
        let ms = state.ms;

        if (h === 0 && m === 0 && s === 0 && ms === 0) {
            console.log('timout');
        }

        if (m === 0 && s === 0 && ms === 0) {
            h--;
            m = 60;
        }

        if (s === 0 && ms === 0) {
            m--;
            s = 60;
        }

        if (ms === 0) {
            s--;
            ms = 100;
        }

        ms--;

        setState({ h, m, s, ms });
    };

    const start = () => {};
    const stop = () => {};

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
                            <Input id={'h'} setState={setState} title='hour' />
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
                            <div onClick={start}>
                                <Button value={'start'} type={'regulator'} />
                            </div>
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div className={styles.chart} style={{ '--p': 50 }}></div>
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
