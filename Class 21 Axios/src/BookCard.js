import {useState} from 'react'; 
import {Card, Button, CardTitle, CardImg, Modal} from 'reactstrap'; 


const BookCard = ({thumbnail, title, pageCount, description, authors }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    }
    return (
        <Card style={{width: "200px"}} className=''>
            <CardImg
            top
            style={{width: "100%", height: "200px"}}
            src= {thumbnail}
            alt={title}
            
           />
           <CardTitle>{title}</CardTitle>
           <Button onClick={toggle}>More Info</Button>
           <Modal isOpen={modal} toggle={toggle}>
           <h5 class="modal-title">{title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle}></button>
   <div>
       <div className="modal-body">
           <img src={thumbnail} alt = {title}  style={{width: "100%", height: "200px"}}/>
           <p >Page Count : {pageCount}</p>
           <p>Author: {authors}</p>
           <div className='mt-3'>{description}</div>


       </div>
   </div>

           </Modal>

        </Card>

    )
}

export default BookCard;