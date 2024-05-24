"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import LoginForm from "../../components/loginForm/loginForm";
import { Row, Col, Container } from "react-bootstrap";
import IncidenciasUser from "../user/incidenciasUser/page";

function Login() {
    const [storedUser, setStoredUser] = useState(null);

    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            setStoredUser(JSON.parse(userFromStorage));
        }
    }, []);

    return (
        <>
            {storedUser !== null ? (
                <IncidenciasUser/>
            ) : (
                <>
                    <Container className="d-flex justify-content-center align-items-center">
                        <div className="p-5">
                            <Col className="m-4">
                                <div className={` ${styles.formlogin}`}>
                                    <LoginForm />
                                </div>
                            </Col>
                        </div>
                    </Container>
                </>
            )}
        </>
    )
}


export default Login;
