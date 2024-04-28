import React, {useReducer} from 'react';

const initialState = {
    firstCounter : 0,
    secondCounter : 10
};
const reducer = (state, action) =>{

    switch (action.type){
        case 'increment' :
            return {...state, firstCounter : state.firstCounter + action.value } ;

        case 'decrement' :
            return {...state, firstCounter : state.firstCounter - action.value};

        case 'increment2' :
            return {...state, secondCounter : state.secondCounter + action.value};

        case 'decrement2' :
            return {...state, secondCounter : state.secondCounter - action.value};

        case 'incrementFive' :
            return {...state, firstCounter : state.firstCounter + action.value};

        case 'decrementFive' :
            return {...state, firstCounter : state.firstCounter - action.value};

        case 'reset' :
            return initialState;
       default :
            return state;
    }

}

function CounterTwo() {

    const [countState, dispatch ] = useReducer(reducer, initialState);
    function handleClick(actionType, value = 1) {
        dispatch({ type: actionType, value });
    }

  return (
    <div>
        <h2> FirstCounter : {countState.firstCounter}</h2>
        <h2> SecondCounter : {countState.secondCounter}</h2>
        {/* <button onClick={ () => {dispatch({ type : 'increment', value : 1})}} > Increment</button>
        <button onClick={ () => {dispatch({ type : 'decrement', value : 1})}}> Decrement</button>
        <button onClick={ () => {dispatch({ type : 'incrementFive', value : 5})}} > Increment 5</button>
        <button onClick={ () => {dispatch({ type : 'decrementFive', value : 5})}} > Decrement 5</button>
        <button onClick={ () => {dispatch({ type : 'reset'})}} > Reset</button> */}

        <button onClick={() => handleClick('increment')}>Increment</button>
        <button onClick={() => handleClick('decrement')}>Decrement</button>
        <button onClick={() => handleClick('incrementFive', 5)}>Increment 5</button>
        <button onClick={() => handleClick('decrementFive', 5)}>Decrement 5</button>
        <button onClick={() => handleClick('reset')}>Reset</button>

        <div>
            <button onClick={ () => {dispatch({ type : 'increment2', value : 10})}} > Increment2</button>
            <button onClick={ () => {dispatch({ type : 'decrement2', value : 10})}} > Decrement2</button>
        </div>
    </div>

  )
}

export default CounterTwo;