import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Navbar } from 'react-bootstrap';

import Auth from '../../components/Auth/Auth';
import Search from '../../components/Search/Search';
import OffCanvas from './OffCanvas/OffCanvas';
import Navigation from '../../Pages/Navigation/Navigation';

const Header = () => {
    const navigate = useNavigate();

    function navigateTo(path) {
        if (path !== null && path !== undefined) {
            navigate(path);
        }
    }

    return (
        <Navbar
            bg="light"
            variant="light"
            fixed="top"
            onSelect={eventKey => navigateTo(eventKey)}
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
            <Col xs={{ span: true, offset: 1 }} sm={{ span: true, offset: 1 }}>
                <Container>
                    <Navigation />
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
