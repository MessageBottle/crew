import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Col, Container, Nav, Navbar } from 'react-bootstrap';

import Auth from '../../components/Auth/Auth';
import Search from '../../components/Search/Search';
import OffCanvas from './OffCanvas/OffCanvas';

const Header = () => {
    // const navigate = useNavigate();

    return (
        <Navbar
            bg="light"
            variant="light"
            fixed="top"
            // onSelect={eventKey => navigate(eventKey)}
        >
            <Col xs="auto" sm="auto">
                <Container>
                    <OffCanvas />
                </Container>
            </Col>
            <Col xs="auto" sm="auto">
                <Container>
                    <Search />
                </Container>
            </Col>
            <Navbar.Toggle aria-controls="off-canvas-nav-bar" />
            <Col xs={{ span: true, offset: 1 }} sm={{ span: true, offset: 1 }}>
                <Container>
                    <Nav variant="pills" justify activeKey="/">
                        <Nav.Item>
                            <Nav.Link eventKey="/getting-started">
                                Getting Started
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/my-crew">My Crew</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/about-us">About Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Col>
            <Col
                xs={{ span: 'auto', offset: 1 }}
                sm={{ span: 'auto', offset: 1 }}
            >
                <Container>
                    <Auth />
                </Container>
            </Col>
        </Navbar>
    );
};

export default Header;
