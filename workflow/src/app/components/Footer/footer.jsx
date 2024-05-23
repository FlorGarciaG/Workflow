import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className={`d-flex justify-content-center align-items-center text-center p-3`}>
            <Container>
                <Row className="justify-content-center">
                    <Col md="auto" className={`d-flex align-items-center`}>
                        <p>
                            © QuickFix Inc.
                        </p>
                    </Col>
                    <Col md="auto" className={`d-flex align-items-center`}>
                        <p>
                            Privacy Policy
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
