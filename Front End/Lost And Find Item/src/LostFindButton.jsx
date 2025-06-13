import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LostFindButton.css';

function LostFindButton(){
    return (
        <>
        <div className="lost-find-button" >
            <Button className='find-button' >FOUND</Button>
            <Button className='lost-button' >LOST</Button>
        </div>
        </>
    )
    
}
export default LostFindButton;