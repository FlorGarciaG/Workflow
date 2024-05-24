"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container } from "react-bootstrap";
import styles from "./page.module.css";
import { useAuth } from "@/app/context/userContext";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singin, errors: singinErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    singin(data);
  });

  return (
    <>
      <Form onSubmit={onSubmit}>
        <div className="mb-3">
          <Form.Label className={`${styles.label}`}>Usuario</Form.Label>
          <Form.Control
            type="email"
            {...register("correo", { required: true })}
            placeholder="Ingrese su correo electrónico"
          />
        </div>

        <div className="mb-3">
          <Form.Label className={`${styles.label}`}>Contraseña</Form.Label>
          <Form.Control
            type="password"
            {...register("password", { required: true })}
            placeholder="Ingrese la contraseña"
          />
        </div>
        <Button type="submit" className={`${styles.button}`}>
          Ingresar
        </Button>
      </Form>
    </>
  );
}

export default LoginForm;
