import axios from 'axios';
import React, {useEffect, useReducer} from 'react';

const initialState={
    loading : true,
    posts : [],
    error : ''
}
const reducer = (state, action) =>{

    switch(action.type){

        case 'FETCH_SUCCESS' :
            return{
                loading : false,
                error : '',
                posts : action.payload
            }
        case 'FETCH_FAIL' :
            return {
                loading : false,
                posts : '',
                error : "Something went gone wrong"
            }
        default :
            return state
    }
}

function FetchReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then ((response) =>{
            dispatch ({ type : "FETCH_SUCCESS", payload : response.data})
        })

        .catch((error) =>{
            dispatch ({ type : "FETCH_FAIL"})
        })
    },[])

  return (
    <div>
        FetchReducer <br/>

            {
                state.loading ? "loading" : state.posts.title
            }
            {
                state.error ? state.error : null
            }

    </div>
  )
}
export default FetchReducer
