import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import styles from "./page.module.css";


function ModalAtencion(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Atención</Modal.Title>
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
                    <Form.Group
                        className="mb-3"
                        controlId="descripción"
                    >
                        <Form.Label className={`${styles.label}`}>Descripción de la solución/resolución</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Descripción amplia solución/resolución" />
                    </Form.Group>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className={`${styles.buttonClose}`}>
                    Cerrar
                </Button>
                <Button onClick={props.onHide} className={`${styles.button}`}>
                    Devolver
                </Button>
                <Button onClick={props.onHide} className={`${styles.buttonFinish}`}>
                    Terminar
                </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default ModalAtencion;