import React, {useState} from 'react';


export default function Button({title}) {
    const [count, setCount] = useState(0);

    const incrementCount = event => {
        event.preventDefault();
        setCount(count + 1);
    }

    return(
        <div>
            <h3>{title}</h3>
            <button onClick={incrementCount}>{count}</button>
        </div>
    )
}