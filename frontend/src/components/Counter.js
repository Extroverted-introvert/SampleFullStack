import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(100)

    return(
        <div>
            <h2>{count}</h2>
            <br></br>
            <button onClick={() => setCount(count + 100)}>CLick to increase</button>
            <br></br>
            <button onClick={() => setCount(count - 100)}>CLick to decrease</button>
        </div>
    )
}

export default Counter