import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import styles from "./page.module.css";
import ModalRevision from "./ModalRevision";

function ModalAtencion({ onOpenDetalle, ...props }) {
    const [modalShowRevision, setModalShowRevision] = React.useState(false);
    return (
        <>
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
                <Button onClick={() => setModalShowRevision(true)} className={`${styles.buttonhistorial2}`}>
                    Historial de soluciones
                </Button>
                <Button onClick={props.onHide} className={`${styles.button}`}>
                    Devolver
                </Button>
                <Button onClick={props.onHide} className={`${styles.buttonFinish}`}>
                    Terminar
                </Button>
            </Modal.Footer>
        </Modal>
        <ModalRevision
            show={modalShowRevision}
            onHide={() => setModalShowRevision(false)}
            onOpenDetalle={onOpenDetalle} 
        />
        </>
    );
}

export default ModalAtencion;
