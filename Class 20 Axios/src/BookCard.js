import {useState} from 'react'; 
import {Card, CardBody, CardTitle, CardImg} from 'reactstrap'; 


const BookCard = ({thumbnail, title}) => {
    return (
        <Card style={{width: "200px"}} className='m-auto'>
            <CardImg
            top
            style={{width: "100%", height: "200px"}}
            src= {thumbnail}
            alt={title}
            
           />

        </Card>

    )
}

export default BookCard;