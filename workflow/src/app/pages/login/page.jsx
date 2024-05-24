"use client";
import React from "react";
import styles from "./page.module.css";
import LoginForm from "../../components/loginForm/loginForm";
import { Row, Col, Container } from "react-bootstrap";

function Login() {
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Row>   
                    <Col md={24} className="m-4">
                        <div className={`rounded p-4 ${styles.formlogin}`}>
                            <LoginForm />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Login;
