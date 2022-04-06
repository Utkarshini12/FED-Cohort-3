import {useState, createContext, useContext} from 'react'


const UserContext = createContext(null); // creating a context whih is providing some value 

const UserInfo =() => {
    const user = useContext(UserContext); // this will return user 
    // user : {name: "Utkarshini"}
    
    return(
        <div>
            {user ? 'Loggin in as' + user.name : 'Guest'}
        </div>
    )
}

function Solution() {
    const [user, setUser] = useState(null);
    const [password, setpassword] = useState(null);
    const [email, setEmail] = useState(null); 
    return(
        <UserContext.Provider value={user}>
            <div>
                input
                input 
                input 

                <button onClick={()=> setUser({name: 'Utkarshini'})}>Log in</button>
                <UserInfo />
            </div>
        </UserContext.Provider>
    )
}


export default Solution;