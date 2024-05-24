import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import styles from "./page.module.css";


function ModalCreate(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Crear Incidencia</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="titulo">
                        <Form.Label className={`${styles.label}`}>Título</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa el título"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="descripción"
                    >
                        <Form.Label className={`${styles.label}`}>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Ingresa la descripcion" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control type="file" placeholder="Adjuta Evidencia"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className={`${styles.buttonClose}`}>
                    Cerrar
                </Button>
                <Button onClick={props.onHide} className={`${styles.button}`}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default ModalCreate;