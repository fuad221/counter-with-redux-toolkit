import classes from './Counter.module.css';

const Counter = () => {

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>counter</div>
            <div>
                <button>Increment</button>
                <button>Increase by 10</button>
                <button>Decrement</button>
            </div>




        </main>
    );
};

export default Counter;
