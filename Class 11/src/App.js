
import React, {useState} from 'react';
import Icon from './components/Icon';

import {Card, CardBody, Container, Row, Col} from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const itemArray = new Array(9).fill("empty");
function App() {

  const [isCross, setIsCross] = useState(false);
  // create a state which will isWinner

  const reloadgame = () =>{
    // set everything to initisla state


  }

  // const checkWinner = () => {
  //   if(
  //     itemArray[0] === itemArray[1] && itemArray[1] === itemArray[2] && itemArray[0] !== "empty"
  //   ) 
  // }

  const changePlayer = () => {
    // loop through the array 
    // check if it is empty 
    // if not empty then fill with either cross or circle
  }
  return (
    <Container className="p-5">
      <Row>
        <Col md={6} className="offset-md-3">
          {/* if someone wins i want to show the win message and reload the game  */}

          <h1 className="text-warning text-center">
              {isCross ? "cross" : "circle"} turns
          </h1>

          <div className="grid">
            {itemArray.map((item, index)=> (
              <Card color="warning">
              <CardBody className="box">
              <Icon name={item} />
              </CardBody>
            </Card>
            ))}
            
          </div>

        </Col>
      </Row>

    </Container>
  );
}

export default App;
