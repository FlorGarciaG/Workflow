import { Button, Table, Modal, Row, Col } from 'react-bootstrap';
import styles from "./page.module.css";

function ModalRevision({ onOpenDetalle, ...props }) {
  const handleClose = () => {
    props.onHide();
    onOpenDetalle();
  };

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title>Atención</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th colSpan={2}>Solución</th>
      <th colSpan={2}>Resolución</th>
    </tr>
  </thead>
  <thead>
    <tr>
      <th>.</th>
      <td>Descripción</td>
      <td>Datos</td>
      <td>Descripción</td>
      <td>Datos</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt eveniet maxime saepe illum fugit reiciendis expedita voluptatibus molestias deserunt possimus provident mollitia dolor veniam, quibusdam ullam quisquam, reprehenderit commodi!</td>
      <td>
        <Row >
          <Col>lorem</Col> 
          <Col>Dato 2</Col>
        </Row>
      </td>
      <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem a dolorum, officiis est maiores quos nihil pariatur similique praesentium velit perferendis necessitatibus numquam quis consequatur tenetur nesciunt? Quis, consectetur aliquam!</td>
      <td> <Row >
          <Col>lorem</Col> 
          <Col>Dato 2</Col>
        </Row></td>
    </tr>
    <tr>
      <td>1</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt eveniet maxime saepe illum fugit reiciendis expedita voluptatibus molestias deserunt possimus provident mollitia dolor veniam, quibusdam ullam quisquam, reprehenderit commodi!</td>
      <td>
        <Row >
          <Col>lorem</Col> 
          <Col>Dato 2</Col>
        </Row>
      </td>
      <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem a dolorum, officiis est maiores quos nihil pariatur similique praesentium velit perferendis necessitatibus numquam quis consequatur tenetur nesciunt? Quis, consectetur aliquam!</td>
      <td> <Row >
          <Col>lorem</Col> 
          <Col>Dato 2</Col>
        </Row></td>
    </tr>
    <tr>
      <td>1</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt eveniet maxime saepe illum fugit reiciendis expedita voluptatibus molestias deserunt possimus provident mollitia dolor veniam, quibusdam ullam quisquam, reprehenderit commodi!</td>
      <td>
        <Row >
          <Col>lorem</Col> 
          <Col>Dato 2</Col>
        </Row>
      </td>
      <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem a dolorum, officiis est maiores quos nihil pariatur similique praesentium velit perferendis necessitatibus numquam quis consequatur tenetur nesciunt? Quis, consectetur aliquam!</td>
      <td> <Row >
          <Col>lorem</Col> 
          <Col>Dato 2</Col>
        </Row></td>
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
