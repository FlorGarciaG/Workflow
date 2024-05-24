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
          <Nav className="ms-auto">
            <NavLink className={styles.links} href="#home">
              Tareas terminadas
            </NavLink>
            <NavLink className={styles.links} href="#link">
              Incidencias
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
