"use client";
import React, {useState, useEffect} from "react";
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
    const [storedUser, setStoredUser] = useState(null);

    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            setStoredUser(JSON.parse(userFromStorage));
        }
    }, []);

    const handleCerrarSesion = () => {
        try{
            localStorage.clear("user");
        }catch(err){
            console.log(err);
        }
    }

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
                        {storedUser !== null ? (
                            <>
                            <NavLink className={styles.links} href="/pages/user/terminadoUser">
                                    Tareas terminadas
                                </NavLink>
                                <NavLink className={styles.links} href="/pages/user/incidenciasUser">
                                    Incidencias
                                </NavLink>
                                <Button variant="light" className={styles.boton} href="/" onClick={handleCerrarSesion()}>
                                    Salir
                                </Button>
                            </>
                        ):(
                            <>
                            <Button variant="light" className={styles.boton} href="/pages/login">
                                Ingresar
                            </Button>
                                </>
                        )}
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;