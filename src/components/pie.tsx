import styles from '../App.module.css';

export default ({ h, m, s, percentage }) => {
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
            <div style={{ position: 'absolute' }}>
                <div>hours : {h}</div>
                <div>minutes : {m}</div>
                <div>seconds : {s}</div>
            </div>
            <div className={styles.chart} style={{ '--p': percentage }}></div>
        </div>
    );
};
