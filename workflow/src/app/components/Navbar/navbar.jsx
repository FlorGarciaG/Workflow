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

function NavBar() {
    return (
        <Navbar
        className={` bg-body-tertiary py-4 ${styles.navbar}`}
        expand="lg"
        variant="dark"
        >
        <Container>
            <NavbarBrand className={styles.links} href="#home">
            QuickFix
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="ms-auto gap-2">
                <NavLink className={styles.links} href="#home">
                Tareas terminadas
                </NavLink>
                <NavLink className={styles.links} href="#link">
                Incidencias
                </NavLink>
                <Button variant="light" className={styles.boton} href="#link">
                Ingresar
                </Button>
                <Button variant="light" className={styles.boton} href="#link">
                Salir
                </Button>
            </Nav>
            </NavbarCollapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;
