import Navbar from '../components/Navbar'




function Home() {

     // category => /api/v1/category/all' GET 
    /* 
        fetch api => .then(update the state) .catch(catch the error) 
        map the state values and print all categories horizantally
    */


    return (
        <div>
            <Navbar />
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <h2 className='text-center'>Welcome to ecommerce</h2>
                        <p className='text-center'>Choose a category to start shopping now!</p>

                        <div className="row m-5">
                            <div className="col ">
                                <div className="card py-5 bg-dark text-white rounded-3">

                                    <h5 className='text-center'>Electronics</h5>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="card py-5 bg-dark text-white rounded-3">

                                    <h5 className='text-center'>Fashion</h5>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="card py-5 bg-dark text-white rounded-3">

                                    <h5 className='text-center'>Household</h5>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="card py-5 bg-dark text-white rounded-3">

                                    <h5 className='text-center'>Appliances</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home;