import React from 'react';

export default ({ setState, id, title }: Input) => {
    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <div>{title}</div>
            <input
                type='number'
                style={{ height: '100%', width: '60%', padding: '1rem', fontSize: 20 }}
                placeholder={title}
                onChange={({ target: { value } }) => {
                    setState((prev: Object) => {
                        console.log(prev, 'daisfj');
                        return { ...prev, [id]: Number(value) };
                    });
                }}
            />
        </div>
    );
};

interface Input {
    setState: React.SetStateAction<Number>;
    id: String;
    title: String;
}
