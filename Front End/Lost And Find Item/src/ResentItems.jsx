import ResentItemCard from './ResentItemCard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ResentItems() {

    return (
        <>
            <h1 className='text-center resentHeader'>Resent Items</h1>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <ResentItemCard />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <ResentItemCard />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <ResentItemCard />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ResentItems;