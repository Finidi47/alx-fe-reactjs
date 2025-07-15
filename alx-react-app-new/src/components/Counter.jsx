import { useState } from "react";

function Home(){

    const [count , useCount] = useState(0);

    function IncreaseCount(){
        useCount(count + 1);
    }

    function decreaseCount(){
        useCount(count - 1);
    }

    function ResetCount(){
        useCount(0);
    }



    return(
        <div style={{margin:"15px"}}>
            <p>{count}</p>
            <button onClick={IncreaseCount}>Increment</button>
            <button onClick={decreaseCount}>Decrement</button>
            <button onClick={ResetCount}>Reset</button>
        </div>
    );
}

export default Home;