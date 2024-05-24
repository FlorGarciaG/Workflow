"use client";
import React from "react";
import styles from "./page.module.css";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import ModalCreate from "@/app/components/Modals/ModalCreate";
import ModalDetalle from "@/app/components/Modals/ModalDetalle";
import { FaPlusCircle } from "react-icons/fa";

function incidenciasUser() {
  const [modalShowDetalle, setModalShowDetalle] = React.useState(false);
  const [modalShowCreate, setModalShowCreate] = React.useState(false);
  const [modalShowHistorial, setModalShowHistorial] = React.useState(false);
  return (
    <>
      <Container className="my-4">
        <Row className=" mb-3">
          <Col className="d-flex  flex-row-reverse mb-3">
            <Button  className={`${styles.crear}`} onClick={() => setModalShowCreate(true)}>Crear Incidencia <FaPlusCircle /></Button>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={6} xs={12} className="mb-3">
            <div className={` ${styles.card}`}>
              <div className={`py-2 px-3 ${styles.cardTitle}`}>Titulo</div>
              <div className={`p-3 ${styles.subCard}`}>
              <div className={`mb-2 ${styles.cardSubtitle}`}>Descripcion</div>
              <div className={styles.cardBody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, sed sit accusantium ex iste dolor, ea saepe
                voluptatum fugit nostrum alias! Possimus fugiat distinctio
                quibusdam. .
              </div>
              <hr />
              <div className={`d-flex flex-wrap justify-content-center gap-2 ${styles.btns}`}>
                <button className={`mb-2 ${styles.btnD}`}  onClick={() => setModalShowDetalle(true)}>Detalles</button>
                {/* <button className={styles.btn}>Asignar</button> */}
                {/* <button className={`mb-2 ${styles.btn}`}>Atención</button> */}
              </div>
              </div>
            </div>
          </Col>
          
          
        </Row>
      </Container>

      <ModalDetalle
        show={modalShowDetalle}
        onHide={() => setModalShowDetalle(false)}
      />

      <ModalCreate
        show={modalShowCreate}
        onHide={() => setModalShowCreate(false)}
      />


      
    </>
  );
}

export default incidenciasUser;
