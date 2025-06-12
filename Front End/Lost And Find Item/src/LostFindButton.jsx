import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LostFindButton.css';


function LostFindButton(){
    return (
        <>
        <div class ="lost-find-button" >
            <Button className='find-button' variant="primary">FOUND</Button>
            <Button className='lost-button' variant="secondary">LOST</Button>
        </div>
        </>
    )
    
}
export default LostFindButton;