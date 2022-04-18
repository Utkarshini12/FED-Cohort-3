import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [count, setCount] = useState(0); //no
  const [text, setText] = useState([]); //no


 


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(count);
    let amount = parseInt(count);
    if(count <=0) {
      amount = 1;
    }

    if(count >5) {  
      amount = 5;   
    }

    setText(data.slice(0, amount));


    

  }

 


  return (
    <div className="App container">
      
      
      
      <div>
      <h3>Tired of boring Lorem Ipsum ? </h3>
      <form onSubmit={handleSubmit}>
        <input
        type='number'
        placeholder='paragraphs'
        className='form-control'
        name='amount'
        id='amount'
        value={count}
        onChange={(e)=>setCount(e.target.value)}
         />
         <button className='btn btn-primary my-1'>Generate</button>
        

      </form>

      <div className='d-flex'>
        <div>
       
        </div>
      </div>
      <p>Hello</p>
        <p>World</p>

      <article className='text-center'>
        {
          text.map((item, index)=> {

            return (
              <div key={index}>
            <p >{item}</p>
       
         </div>
            
            )
          })
        }

 
       
      </article>
      </div>
     
    </div>
  );
}

export default App;

// Print paragraphs more than 5 
// Create a delete functionality



