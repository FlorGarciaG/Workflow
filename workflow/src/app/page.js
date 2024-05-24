import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <div>
        <div className= {` d-flex flex-column align-items-center justify-content-center ${styles.backg}`}>
          <h1 className={styles.h}>Bienvenido a QuickFix, un sistema para control de incidencias</h1>
        </div>
      </div>
    </>
  );
}
