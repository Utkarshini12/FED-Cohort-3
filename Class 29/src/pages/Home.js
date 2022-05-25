import {Link} from 'react-router-dom'
import Header from '../components/Header'
import {useState, useEffect} from 'react';
import {getAllCategories} from '../api/category'


function Home() {

   const [categories, setCategories] = useState();

   const init = async () => {
       const result = await getAllCategories();
       setCategories(result.data);
       console.log(result.data);
   }

   console.log(categories);

   useEffect(()=> {
       init()
   }, [])


   
   

    
    return(
        <div >
          <Header />
            <div className="display-5 text-center">All Products</div>
            <Link to="/products">
            <button className="btn btn-info">Show all Products</button>
            </Link>
<div className="row">
            {categories.map((category)=> (
              
                <div className="col">
                      {console.log(category.id)}
                <div className="card bg-dark text-white" key={category.id}>
                <Link to="/products">
                    <div className="p-5 text-decoration-none">{category.name}</div>
                </Link>
            </div>
            </div>
                
                
            ))}
            </div>
            
         

        </div>
    )
}

export default Home;