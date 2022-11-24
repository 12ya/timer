import styles from '../App.module.css';

interface Pie {
    h: number;
    m: number;
    s: number;
    percentage: number;
}

export default ({ h, m, s, percentage }: Pie) => {
    return (
        <div
            style={{
                position: 'relative',
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    height: '50%',
                    position: 'absolute',
                    justifyContent: 'space-evenly',
                    flexDirection: 'column',
                    fontSize: 20,
                }}
            >
                <div>hours : {h}</div>
                <div>minutes : {m}</div>
                <div>seconds : {s}</div>
            </div>
            <div className={styles.pie} style={{ '--p': percentage as number }}></div>
        </div>
    );
};
