import React from 'react';
import {Card, CardBody,CardTitle, Button,CardSubtitle, CardImg,Row,Col, Container} from 'reactstrap'
import {Link} from 'react-router-dom'


const Item=({item})=>{


    return(
        <Container fluid className='mt-4 justify-content-center'>
            <Row className='justify-content-center'>
                <Col xs='10' sm='6' md='3'>
                    <Card>
                        <CardImg top width="100px" src={item.image} alt="Vending item picture" />
                        <CardBody>
                        <CardTitle tag="h5">{item.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{item.msg}</CardSubtitle>
                        <Link to='/' className='btn btn-primary'>Get another item!</Link>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
           
        </Container>
    )
}

export default Item