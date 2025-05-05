import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useCustomContext } from '../Context/MyContext';
import {Toaster} from 'react-hot-toast'

function Navbars () {

    const { show, form, handleShow, handleClose, handleSubmit, handleChange } = useCustomContext();

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>TaskManager</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                   <Button variant="primary" onClick={handleShow}>Add</Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Agregar Tarea</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={handleSubmit}>
                            <Modal.Body>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="agregue su tarea"
                                            id="title"
                                            name="title"
                                            value={form.title}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Descripcion</Form.Label>
                                        <Form.Control
                                            as="textarea" id="description" name="description" rows={3} value={form.description} onChange={handleChange}
                                        />
                                    </Form.Group>
                                
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" type="submit">
                                    Agregar
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </Nav>
                </Navbar.Collapse>
                <Toaster
                    position="top-right"
                    gutter={8}  
                    toastOptions={
                        {
                        style: {
                            background: '#fff',
                            color: 'black',
                        },
                        success: {
                            duration: 2000,
                            iconTheme: {
                            primary: 'green',
                            secondary: 'black',
                            },
                        }
                        }
                    }
                />
            </Container>
        </Navbar>
    )
}

export default Navbars
