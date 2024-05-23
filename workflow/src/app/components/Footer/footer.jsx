import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={`d-flex justify-content-center align-items-center text-center ${styles.footer}`}>
            <Container>
                <Row className="justify-content-center m-3">
                    <Col md="auto" className={`d-flex align-items-center`}>
                        <p>
                            © QuickFix Inc.
                        </p>
                    </Col>
                    <Row  className="justify-content-center">
                        <Col md="auto" className={`d-flex align-items-center`}>
                            <p>
                                Privacy Policy
                            </p>
                        </Col>
                        <Col md="auto" className={`d-flex align-items-center`}>
                            <p>
                                Terms
                            </p>
                        </Col>
                        <Col md="auto" className={`d-flex align-items-center`}>
                            <p>
                                Copyright Policy
                            </p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
