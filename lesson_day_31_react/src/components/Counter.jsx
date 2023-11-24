import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <span>{count}</span>
            <button onClick={increment}>Incremennt</button>
        </div>
    );
}

export default Counter;