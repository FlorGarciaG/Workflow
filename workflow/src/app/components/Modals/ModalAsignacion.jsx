import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import styles from "./page.module.css";


function ModalAsignacion(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Asignar Incidencia</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="titulo">
                        <Form.Label className={`${styles.label}`}>Título</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa el título"
                            disabled
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="descripción"
                    >
                        <Form.Label className={`${styles.label}`}>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Ingresa la descripcion" disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="solucion">
                        <Form.Label className={`${styles.label}`}>Solucion</Form.Label>
                        <Form.Select aria-label="Solucion">
                            <option>Solucion Asignar a</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="revision">
                        <Form.Label className={`${styles.label}`}>Revisión</Form.Label>
                        <Form.Select aria-label="Solucion">
                            <option>Prueba Asignar a</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className={`${styles.buttonClose}`}>
                    Cerrar
                </Button>
                <Button onClick={props.onHide} className={`${styles.button}`}>
                    Asignar
                </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default ModalAsignacion;