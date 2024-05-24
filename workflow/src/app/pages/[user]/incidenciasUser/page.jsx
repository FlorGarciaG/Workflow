"use client";
import React from "react";
import styles from "./page.module.css";
import { Row, Col, Container } from "react-bootstrap";

function incidenciasUser() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Button>
                            Crear Incidencia
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default incidenciasUser;
