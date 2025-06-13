import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ResentItemCard.css';

function ResentItemCard() {

  const itemName = "Smart Phone"; // Example item name
  const itemDescription = "Some quick example text to build on the card title and make up the bulk of the card's content."; // Example description
  return (
    <Card className='card-item'>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" />
        <Card.Body>
            <Card.Title>{itemName}</Card.Title>
            <Card.Text>
                {itemDescription}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
  );
}

export default ResentItemCard;