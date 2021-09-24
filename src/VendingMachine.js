import React from 'react'
import {ListGroup,ListGroupItem, Row, Col,Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import vending from './Vending.svg'

const VendingMachine=({items})=>{
    
    return(
        <Container fluid className='vending-machine mt-4 justify-content-center h-100'>
            <h1 className='text-center'>Get your snacks!</h1>
            <Row className='mt-5 flex-column-reverse flex-md-row'>
                <Col className='mb-4'xs='12' md='6' className='vending-machine-machine align-items-center mb-4'>
                    <img className='d-block mx-auto'src={vending}/>
                </Col>
                <Col className='mb-4'xs='12' md='6'>
                    <Row>
                        <Col sm='12' md='6'>
                            <ListGroup>
                                <ListGroupItem>
                                    <p className='lead'>
                                        
                                    Item Choices:

                                    </p>
                                </ListGroupItem>
                                {items.map(i=><ListGroupItem key={i.name}><Link className='vending-machine-link'to={i.url}>{i.name}</Link></ListGroupItem>)}
                            </ListGroup>
                        </Col>
                        <Col></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    )

}

export default VendingMachine