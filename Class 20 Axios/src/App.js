import { useState } from "react";
import axios from 'axios'; 
import {FaSearch} from 'react-icons/fa'
import BookCard from "./BookCard";


function App() {
  const [query, setQuery] = useState("rich dad")

  // handle search 
  const handleSubmit = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(res => console.log(res))

  }


  return(
    <div>
      <input 
      type="text"
      value= {query}
      onChange = {e => setQuery(e.target.value)}
      />
      <button onClick={handleSubmit}><i><FaSearch /></i></button>
      <BookCard 
      thumbnail={}
      title= {}
      />
    </div>
  )
}

export default App; 