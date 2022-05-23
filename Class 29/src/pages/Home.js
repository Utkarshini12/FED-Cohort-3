import {Link} from 'react-router-dom'
import Header from '../components/Header'

// function Home() {
//     return(

//     )
// }
// const Home = () => {
//     return(

//     )
// }
// () => {
//     return()
// }
// () => ()


function Home() {

    let data=['Electronics', 'Appliances', 'Fashion', 'Household'];
    return(
        <div >
          <Header />
            <div className="display-5 text-center">All Products</div>
            <Link to="/products">
            <button className="btn btn-info">Show all Products</button>
            </Link>
<div className="row">
            {data.map((item, i)=> (
                <div className="col">
                    <div className="card bg-dark text-white" key={i}>
                    <Link to="/products">
                        <div className="p-5 text-decoration-none">{item}</div>
                    </Link>
                </div>
                </div>
                
            ))}
            </div>
            
         

        </div>
    )
}

export default Home;