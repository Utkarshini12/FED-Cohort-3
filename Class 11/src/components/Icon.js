
/*
// flow
States :whose turn it is 
       : who is the winner 
// restart 
// who is player : X, O
// update marking 

winner logic {
    winner can be : horizantally, vertically, diagonally

}
// draw game 

*/

 /*

 UI of the game 

 grid layout -- bootstrap, 
 // show message whose turn it is 
 // icons for the players 
 // wrong move 
 // show who the winner is 
 // show a restart button
*/

import {FaRegCircle, FaTimes, FaPen} from "react-icons/fa";


const Icon = ({name}) => {
    switch(name) {
        case "circle": 
        return <FaRegCircle className="icons" />
        case "cross": 
        return <FaTimes className="icons" />
        default: 
        return <FaPen className="icons" />
    }

}

export default Icon;
