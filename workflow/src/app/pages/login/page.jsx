"use client";
import React from "react";
import styles from "./page.module.css";
import LoginForm from "../../components/loginForm/loginForm";
import { Row, Col, Container } from "react-bootstrap";

function Login() {
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center">
                <div className="p-5">   
                    <Col md={12} className="m-4">
                        <div className={` p-5 ${styles.formlogin}`}>
                            <LoginForm />
                        </div>
                    </Col>
                </div>
            </Container>
        </>
    )
}


export default Login;
