import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div className='bg-light px-5 py-2 text-center'>
        <div className="row">
                    <div className="col">
                        <h3>Exommerce</h3>
                    </div>
                    <div className="col">
                        <Link to="/cart">
                            <h5>Cart</h5>
                        </Link>
                    </div>
                    <div className="col">Hi, User</div>
                    <div className="col">
                    <Link to="/">
                    <button className='btn btn-danger'>
                            Logout
                            </button>
                    </Link>
                      
                    </div>


                </div>

    </div>
  )
}

export default Header;