import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Filterbar from "./Filterbar";
import { useCustomContext } from "../Context/MyContext";

function Tasklist(){

  const { filteredTasks, handleFilterClick, editTaskStatus  } = useCustomContext();

  return(
        <Container>
            <Filterbar handleFilterClick={handleFilterClick}/>
            <Row xs={1} md={3} className="g-4">
            {filteredTasks.map( 
            (item) => (
              <Col>
                <Card bg={item.color}>
                  <Card.Body>
                    <Card.Title>
                      <Row xs={1} md={2}>
                        <Col _id={item._id}>{item.title}</Col>
                        <Col className="mt-1">
                        {item.status !== 'done' ? (
                        <DropdownButton variant="secondary" size="sm" title="Opciones">
                            <Dropdown.Item eventKey="1">Editar</Dropdown.Item>
                            <Dropdown.Item onClick={() => { editTaskStatus(item._id) }}>Marcar como finalizado</Dropdown.Item>
                        </DropdownButton>
                        ): ""}
                        </Col>
                      </Row>
                    </Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            </Row>
        </Container>
        
  )
}

export default Tasklist;