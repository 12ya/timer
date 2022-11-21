import Stopwatch from './stopwatch';
import Timer from './timer';

export default () => {
    return (
        <>
            <div>
                <Stopwatch />
            </div>
            <div style={{ marginTop: 100 }}>
                <Timer />
            </div>
        </>
    );
};
