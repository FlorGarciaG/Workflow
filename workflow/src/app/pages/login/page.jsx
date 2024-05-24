"use client";
import React, {useState, useEffect} from "react";
import styles from "./page.module.css";
import LoginForm from "../../components/loginForm/loginForm";
import { Row, Col, Container } from "react-bootstrap";
import { useAuth } from "@/app/context/AuthContext";

function Login() {

    return (
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
    )
}


export default Login;
