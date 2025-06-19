import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemCard.css';


function ResentItemCard(props) {

  const itemName = props.itemName; // Example item name
  const itemDescription = props.itemDescription; // Example description
  const itemLocation = props.itemLocation; // Example location
  const itemDate = props.itemDate; // Example date
  const itemImage = props.itemImage; // Example image URL
  
  return (
    <Card className='card-item'>
       
        
        <Card.Img variant="" src={itemImage} />
        <Card.Body>
            <Card.Title>{itemName}</Card.Title>
            <Card.Text>
                {itemDescription}
            </Card.Text>
            <Card.Text>
                <small className="text-muted">Location: {itemLocation}</small><br />
                <small className="text-muted">Date: {itemDate}</small>  
                
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
  );
}

export default ResentItemCard;