//To use state, use hooks
//Object deconstruction
import { useState } from 'react';

function Card (){
    const [myName, setMyName] = useState();

    function clickChangeName(){
        console.log('Test');
        setMyName('Reili');
    }
    return(
        <div className="card">
        <button>count is 0</button>
        <p>{myNamed}</p>
        <button onclick={clickChangeName}>Change Name</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR.

          I could really use a taco right now.
        </p>
      </div>
    );
};

export default Card;