import {useState} from 'react';

function Todo() {
    const [todoText, setTodoText] = useState("");
    const [todoList, setTodoList] = useState(["Add items"]);

    const handleChange = ({target}) =>{
        setTodoText(target.value)

    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList((arr)=> [...arr, todoText] )
        setTodoText(""); 
        console.log(todoList);
    }

    return(
        <div className="container">
            <h1 className='bg-dark text-white'>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    What do you want to do today? 
                    <br />
                    <input 
                    type="text" 
                    className='form-control'
                    onChange={(e) => handleChange(e)}
                    value={todoText}
                    />
                </label>
                <br />
                <input className='btn btn-dark m-1' type="submit" value="Submit" />
            </form>

            {
                todoList.map((td, index) => (
                    <div >
                        <ul className='list-group'>
                            <li className='list-group-item' key={index}>
                                {td}
                            </li>
                            <button className='btn btn-danger'>X</button>
                        </ul>
                         </div>
                ))
            }
        </div>
    )
}

export default Todo;