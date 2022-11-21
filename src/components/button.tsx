import styles from '../App.module.css';

export default ({ value, title, type }: Button) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className={type === 'regulator' ? styles.regulatingButton : styles.displayButton}>
                <div>{value}</div>
            </div>
            {title && <div style={{ color: '#3A8891' }}>{title}</div>}
        </div>
    );
};

interface Button {
    value: number | string;
    title?: string;
    type?: string;
}
