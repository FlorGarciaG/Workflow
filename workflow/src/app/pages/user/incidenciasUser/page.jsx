"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import ModalCreate from "@/app/components/Modals/ModalCreate";
import ModalDetalle from "@/app/components/Modals/ModalDetalle";
import ModalRevision from "@/app/components/Modals/ModalRevision";
import { FaPlusCircle } from "react-icons/fa";
import ModalAtencion from "@/app/components/Modals/ModalAtencion";
import { useAuth } from "@/app/context/AuthContext";
import api from "../../../api/axios";

function IncidenciasUser() {
  const [modalShowDetalle, setModalShowDetalle] = React.useState(false);
  const [modalShowCreate, setModalShowCreate] = React.useState(false);
  const [modalShowRevision, setModalShowRevision] = React.useState(false);
  const [modalShowAtencion, setModalShowAtencion] = React.useState(false);

  const [ getUser, setUser ] = useState([]);

  const { user } = useAuth();

  const rol = user.rol;
  const correo = user.correo;
  
  console.log(user);
  



  const handleOpenRevision = () => {
    setModalShowDetalle(false);
    setModalShowRevision(true);
  };

  const handleOpenDetalle = () => {
    setModalShowRevision(false);
    setModalShowDetalle(true);
  };

  if (!user) {
    return (
      <Row className="d-flex align-items-center p-5">
        <Button href="/pages/login">Login</Button>
      </Row>
    );
  } else {
    return (
      <>
        <Container className="my-4">
          <Row className=" mb-3">
            <Col className="d-flex  flex-row-reverse mb-3">
              <Button
                className={`${styles.crear}`}
                onClick={() => setModalShowCreate(true)}
              >
                Crear Incidencia <FaPlusCircle />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={6} xs={12} className="mb-3">
              <div className={` ${styles.card}`}>
                <div className={`py-2 px-3 ${styles.cardTitle}`}>Titulo</div>
                <div className={`p-3 ${styles.subCard}`}>
                  <div className={`mb-2 ${styles.cardSubtitle}`}>
                    Descripcion
                  </div>
                  <div className={styles.cardBody}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam, sed sit accusantium ex iste dolor, ea saepe
                    voluptatum fugit nostrum alias! Possimus fugiat distinctio
                    quibusdam. .
                  </div>
                  <br />
                  <div className={`mb-2 ${styles.cardSubtitle}`}>Estatus</div>
                  <div className={styles.cardBody}>Sin asignar</div>
                  <hr />
                  <div
                    className={`d-flex flex-wrap justify-content-center gap-2 ${styles.btns}`}
                  >
                    <button
                      className={`mb-2 ${styles.btnD}`}
                      onClick={() => setModalShowDetalle(true)}
                    >
                      Detalles
                    </button>

                    {rol !== "general" && rol !== "coordinador" && (
                      <button
                        className={`mb-2 ${styles.btn}`}
                        onClick={() => setModalShowAtencion(true)}
                      >
                        Atencion
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <ModalDetalle
          show={modalShowDetalle}
          onHide={() => setModalShowDetalle(false)}
          onOpenRevision={handleOpenRevision}
        />

        <ModalCreate
          show={modalShowCreate}
          onHide={() => setModalShowCreate(false)}
        />

        <ModalRevision
          show={modalShowRevision}
          onHide={() => setModalShowRevision(false)}
          onOpenDetalle={handleOpenDetalle}
        />

        <ModalAtencion
          show={modalShowAtencion}
          onHide={() => setModalShowAtencion(false)}
        />
      </>
    );
  }
}

export default IncidenciasUser;
