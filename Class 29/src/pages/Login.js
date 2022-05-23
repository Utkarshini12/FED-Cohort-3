import { Link } from 'react-router-dom'
import {useState} from 'react';

function Login() {
    const BASE_URL = 'http://13.235.87.215:4000';
    const [showSignup, setShowSignup] = useState(false); 

    const toggleSignup = () => {
        setShowSignup(!showSignup);
    }
    return (
        <div>
            <div className="bg-light px-5 py-2">
                <div className="row">
                    <div className="col">
                        <h3>Exommerce</h3>
                    </div>
                </div>
            </div>

            <div className="container text-center my-5">
                <h2>Welcome to Exommerce</h2>

                {!showSignup ? (<div style={{ width: 18 + "rem" }} className='bg-light '>
                    <h4>Login</h4>
                    <form>
                        <div className="input-group">

                            <input type="text" className='form-control m-1' placeholder="username"/>
                        </div>
                        <div className="input-group">
                            <input type="password" className='form-control m-1' placeholder="password"/>
                            <div className="input-group">
                            <Link to='/home'>
                            <input type="submit" className='btn btn-primary form-control m-1 ' value='Log in As User' />
                                 </Link>
                               
                            </div>
                            <div className='text-center'><p className="text-info " onClick={()=> toggleSignup()}>Don't have an account? Signup</p></div>

                        </div>
                    </form>
                </div>) : (
                     <div style={{ width: 18 + "rem" }} className='bg-light '>
                     <h4>Signup</h4>
                     <form>
                         <div className="input-group">
 
                             <input type="text" className='form-control m-1' placeholder="Username"/>
                         </div>
                         <div className="input-group">
                             <input type="password" className='form-control m-1' placeholder="password"/>
                             <div className="input-group">
                                 <Link to='/home'>
                                 <input type="submit" className='btn btn-primary form-control m-1 ' value='Signup As User' />
                                 </Link>
                                
                             </div>
                             <div className='text-center'><p className="text-info " onClick={()=> toggleSignup()}>Already have an account? Login</p></div>
 
                         </div>
                     </form>
                 </div>

                )                
            }

                

               
            </div>




        </div>
    )
}

export default Login;