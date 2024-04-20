import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
const Home = () => {
    const {count, setCount}= useContext(AppContext)
    return (
        <div>
            <h1>Home</h1>
            <p>Count: {count} </p>
            <button onClick={()=>setCount(count+1)}>Count Up</button>
        </div>
    );
}

export default Home;
