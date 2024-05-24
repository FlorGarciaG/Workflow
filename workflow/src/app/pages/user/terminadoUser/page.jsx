"use client";
import React from "react";
import styles from "./page.module.css";
import { Row, Col, Container, Table } from "react-bootstrap";
import ModalDetalle from "@/app/components/Modals/ModalDetalle";

function terminadoUser() {
    const [modalShowDetalle, setModalShowDetalle] = React.useState(false);

    return (
        <>
        <Container className="my-4">
            <Row>
            <Col lg={4} md={4} sm={6} xs={12} className="mb-3">
                <div className={` ${styles.card}`}>
                <div className={`py-2 px-3 ${styles.cardTitle}`}>Titulo</div>
                <div className={`p-3 ${styles.subCard}`}>
                    <div className={styles.cardBody}>
                    <Table className={styles.table}>
                        <tbody>
                        <tr>
                            <td className={styles.tableTitle}>Fecha de Inicio:</td>
                            <td className={styles.tableInfo}>23 de mayo 23:22:10</td>
                        </tr>
                        <tr>
                            <td className={styles.tableTitle}>Fecha de Fin:</td>
                            <td className={styles.tableInfo}>23 de mayo 23:22:10</td>
                        </tr>
                        
                        </tbody>
                    </Table>
                    </div>
                    <hr />
                    <div
                    className={`d-flex flex-wrap justify-content-center gap-2 ${styles.btns}`}
                    >
                    <button className={`mb-2 ${styles.btnD}`} onClick={() => setModalShowDetalle(true)}>Detalles</button>
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
        </>
        
    );
}

export default terminadoUser;
