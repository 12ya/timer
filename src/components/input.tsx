import React from 'react';
import styles from '../App.module.css';

export default ({ setState, id, title, state }: Input) => {
    return (
        <div className={styles.inputComponent}>
            <div>{title}</div>
            <input
                type='number'
                value={state[id]}
                style={{ height: '100%', width: '60%', padding: '1rem', fontSize: 20 }}
                placeholder={title as string}
                onChange={({ target: { value } }) => {
                    setState((prev: Object) => {
                        console.log(prev, 'daisfj');
                        return { ...prev, [id as string]: Number(value) };
                    });
                }}
            />
        </div>
    );
};

interface Input {
    state: {};
    setState: React.SetStateAction<Number>;
    id: String;
    title: String;
}
