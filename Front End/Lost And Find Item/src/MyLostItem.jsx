import SideBar from "./SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyLostItem.css';
import ItemCard from "./ItemCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyFoundItem(){
    return(
       <div>
            <SideBar />
            <div className="ItemsContainer"> 
                <h1>My Lost Item</h1>
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <ItemCard />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <ItemCard />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <ItemCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        
        </div>
    )

}

export default MyFoundItem;