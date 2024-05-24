import { useState } from "react";
import { Badge, Button, Form, Modal, Table } from "react-bootstrap";
import styles from "./page.module.css";
import ModalRevision from "./ModalRevision";

function ModalDetalle(props) {
  const [modalShow, setModalShow] = useState(false);

  const handleOpenRevisionModal = () => {
    setModalShow(true);
    props.onHide(); 
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Titulo 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table hover size="sm" className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.tdBadge}>
                  <Badge className={styles.badge}>Descripción</Badge>
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  doloribus quos quam sunt in possimus illum autem eligendi
                  accusamus dolor maxime quod, temporibus quis quidem tenetur
                  fuga! Id, beatae nostrum?
                </td>
              </tr>
              <tr>
                <td>
                  <Badge className={styles.badge}>Fecha de creación</Badge>
                </td>
                <td>23/mayo/2024</td>
              </tr>
              <tr>
                <td>
                  <Badge className={styles.badge}>Evidencia</Badge>
                </td>
                <td>evidencia.jpg</td>
              </tr>
              <tr>
                <td>
                  <Badge className={styles.badge}>Estatus</Badge>
                </td>
                <td>En curso</td>
              </tr>
              <tr>
                <td>
                  <Badge className={styles.badge}>
                    Persona asignada para solución
                  </Badge>
                </td>
                <td>Juan Ramirez Ramirez</td>
              </tr>
              <tr>
                <td>
                  <Badge className={styles.badge}>
                    Persona asignada para pruebas
                  </Badge>
                </td>
                <td>Maria Pérez Gómez</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleOpenRevisionModal}
            className={`${styles.buttonHistorial}`}
          >
            Historial de soluciones y revisiones
          </Button>
          <Button onClick={props.onHide} className={`${styles.buttonClose2}`}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <ModalRevision
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalDetalle;
