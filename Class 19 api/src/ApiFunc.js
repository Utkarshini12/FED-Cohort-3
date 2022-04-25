import { useEffect } from "react";
import { useState } from "react";

function ApiFunc() {
    const [postId, setPostId]= useState(null);


    useEffect(()=> {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: "Utkarshini"}), 
        }

        fetch("https://reqres.in/api/posts", requestOptions)
        .then((response)=> response.json())
        .then((data)=> setPostId(data.id))

    }, [])


    return(
        <div>
            <h3>Post APi with classes</h3>
            <p>Returned post Id: {postId}</p>
        </div>
    )
}


export default ApiFunc;

