"use client";
import React from "react";
import styles from "./page.module.css";
import { Row, Col, Container, Table } from "react-bootstrap";
import ModalCreate from "@/app/components/Modals/ModalCreate";

function terminadoUser() {
    const [modalShow, setModalShow] = React.useState(false);

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
                    <button className={`mb-2 ${styles.btnD}`}>Detalles</button>
                    {/* <button className={styles.btn}>Asignar</button> */}
                    {/* <button className={`mb-2 ${styles.btn}`}>Atención</button> */}
                    </div>
                </div>
                </div>
            </Col>
            </Row>
        </Container>

        <ModalCreate show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default terminadoUser;
