

function Key() {
    const numbers = [1, 2, 3, 4, 5];

    const arr = [{name: 'Utk', age: '24'}, {name: 'Rambo', age: '1'}]


    const listItems = numbers.map((number, id)=> (
            <li key={id}>{number*2}</li>
    )) 
    console.log(numbers);

        const data = arr.map((arrItem, id)=> (
            <div key={id} className="border">
                <li >{arrItem.name}</li>
                <li >{arrItem.age}</li>
            </div>
        ))


    // // map iterates and returns something 

    // Array.map((someValue )=> {
    //     // console.log(someValue);

    //     // returning html code 
    //     return(
    //         // one parent div is returned : html part 
    //        <div>
    //            {/* returning some js value so im using {} */}
    //            {someValue}
    //        </div>
    //     )
    // })


    // // function 
    // // const func = () => {}
    // // () => { return ()}

    // // () => ()


    return(

        <div>
            {listItems}
           {data} 
            </div>

    )
}

export default Key;

// class Keys extends Component {
//     render() {
//         // js code 
//         return (
//             //html code 
//         )
//     }
// }

// function Keys() {
//     // js code 
//     return (
//         // html code 
//     )
// }