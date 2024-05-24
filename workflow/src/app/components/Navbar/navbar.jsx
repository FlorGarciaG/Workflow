"use client";
import React from "react";
import {
    Navbar,
    Nav,
    Container,
    NavbarBrand,
    NavbarToggle,
    NavbarCollapse,
    NavLink,
    Button,
} from "react-bootstrap";
import styles from "./navbar.module.css";
import { useAuth } from "../../context/AuthContext";

function NavBar() {
    const { isAuthen } = useAuth();

    return (
        <Navbar
            className={` bg-body-tertiary py-4 ${styles.navbar}`}
            expand="lg"
            variant="dark"
        >
            <Container>
                <NavbarBrand className={styles.links} href="/">
                    QuickFix
                </NavbarBrand>
                <NavbarToggle aria-controls="responsive-navbar-nav" />
                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className="ms-auto gap-2">
                        <NavLink className={styles.links} href="/pages/user/terminadoUser">
                            Tareas terminadas
                        </NavLink>
                        <NavLink className={styles.links} href="/pages/user/incidenciasUser">
                            Incidencias
                        </NavLink>
                        {isAuthen && (
                            <Button variant="light" className={styles.boton} href="/">
                                Salir
                            </Button>
                        )}
                        {!isAuthen && (
                            <Button variant="light" className={styles.boton} href="/pages/login">
                                Ingresar
                            </Button>
                        )}
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
