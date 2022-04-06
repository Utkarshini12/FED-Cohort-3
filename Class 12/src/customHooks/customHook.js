import {useState, useEffect} from 'react';


const useFetchData = (url) => {
    const [data, setData] = useState(null);

    useEffect(()=> {
        fetch(url)
        .then((res)=> res.json())
        .then((data)=> setData(data))
    }, [])

    return [data];
}

function CustomHook() {
    const [dogData] = useFetchData("https://dog.ceo/api/breeds/image/random")
    console.log(dogData);
    return(
        <div>
            <h1>I am usinng custom hooks</h1>
          <img src={dogData.message} height={200} width={200}/>

        </div>
    )
}

export default CustomHook;