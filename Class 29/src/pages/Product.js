import {Link} from 'react-router-dom'

function Product() {
    return(
        <div className="container">
          
            <div className="text-center display-5">All Products Listed here</div>
            <Link to="/cart">
            <button className="btn btn-danger">Add to cart</button>
            </Link>
           
        </div>
    )
}

export default Product;