import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Filterbar({handleFilterClick}){

    return(
    <Container>   
        <Row>
            <Col md={{ span: 6, offset: 5 }}>
                <ButtonGroup className="mb-4 mt-3" aria-label="Basic example">
                    <Button variant="primary" onClick={() => handleFilterClick('all')}>All</Button>
                    <Button variant="primary" onClick={() => handleFilterClick('todo')}>TO DO</Button>
                    <Button variant="primary" onClick={() => handleFilterClick('done')}>Completed</Button>
                </ButtonGroup>
            </Col>
        </Row>
    </Container> 
    );
}

export default Filterbar