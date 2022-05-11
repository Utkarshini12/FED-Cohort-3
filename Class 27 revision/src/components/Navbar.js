import {Link} from 'react-router-dom';

function Navbar() {
    // print the username 
    // create  a state and grab the username from local storage and print it 

    // logout the user 
    // localStorage.removeItem => username, userid and token 


    return(
        <div className="bg-light p-4 ">
            <div className="row">
                <div className="col-4">
                <h4> <Link to={"/"} className='text-decoration-none text-dark'>Ecommerce</Link></h4> 
                </div>
                <div className="col-4">
                        Hi, User!
                </div>
                <div className="col-4">
                       <button className='btn btn-danger'>Logout</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar;