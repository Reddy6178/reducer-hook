import React, {useReducer} from 'react';
import './App.css';
import ComponentA from './Components/ContextReducer/ComponentA';
import ComponentB from './Components/ContextReducer/ComponentB';
import ComponentC from './Components/ContextReducer/ComponentC';

import FetchReducer from './Components/FetchReducer';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) =>{

    switch (action){
        case 'increment' :
            return state +1 ;

        case 'decrement' :
            return state -1;

        case 'reset' :
            return initialState;
       default :
            return state;
    }

}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value ={{ countState : count, countDispatch : dispatch}}>
      <div className="App">
        <h2> Count : {count}</h2>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <FetchReducer />
      </div>

    </CountContext.Provider>

  );
}

export default App;
