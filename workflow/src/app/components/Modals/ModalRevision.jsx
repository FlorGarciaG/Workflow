import { Button, Table, Modal } from 'react-bootstrap';
import styles from "./page.module.css";

function ModalRevision({ onOpenDetalle, ...props }) {
  const handleClose = () => {
    props.onHide();
    onOpenDetalle();
  };

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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Solución</th>
              <th>Resolución</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} className={`${styles.buttonFinish}`}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalRevision;
