import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ResentItemCard.css';

function ResentItemCard() {

  const itemName = "Smart Phone"; // Example item name
  const itemDescription = "Some quick example text to build on the card title and make up the bulk of the card's content."; // Example description
  const itemLocation = "New York, USA"; // Example location
  const itemDate = "2023-10-01"; // Example date
  const itemImage = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"; // Example image URL
  
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