import {Link} from 'react-router-dom'


function Cart() {
    return(
        <div className="container">
          
            <div className="text-center display-5">All Products added here</div>
            <Link to="/home">
            <button className="btn btn-danger">Proceed to Checkout</button>
            </Link>
           
        </div>
    )
}

export default Cart;