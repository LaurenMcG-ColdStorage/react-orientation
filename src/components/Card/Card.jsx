//To use state, use hooks
//Object deconstruction
import { useState } from 'react';

function Card ({ globalName }){
    const [myName, setMyName] = useState('What in tarnation');
    const [count, setCount] = useState(0);
    
    function clickChangeName(){
        console.log('TEST');
        setMyName('Max is my dog');
    };

    function clickCount(){
        setCount(count + 1);
    };


    return(
        <div className="card">
            {/* Create state to increment counter */}
        <button onClick={clickCount}>count is {count}</button>
        <p>{globalName ? globalName : myName}</p>
        <button onClick={clickChangeName}>Change Name</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR. <br />

          I could really use a taco right now.
        </p>
      </div>
    );
};

export default Card;