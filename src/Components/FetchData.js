import React, {useState,useEffect} from 'react';
import axios from 'axios';

function FetchData() {

    const [post, setPost] =  useState([]);
    const [error, setError] = useState();
    const [loading, isLoading] = useState (true);

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then ((response) =>{
            isLoading(false);
            setError('');
            setPost(response.data)
        })
        .catch((error) =>{
            isLoading(false);
            setPost([]);
            setError("Something went wrong");
        })
    },[])

  return (
    <div>
        FetchData :
            {
                loading ? "loading" : post.title
            }
            {
                error ? error : null
            }
    </div>
  )
}

export default FetchData