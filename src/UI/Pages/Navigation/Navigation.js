import React from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import { ALL_ROUTES_ARRAY } from '../routes/routes';

const Navigation = () => {
    const location = useLocation();

    return (
        <Nav variant="pills" justify activeKey={location.pathname}>
            {ALL_ROUTES_ARRAY.map(parentRoute => (
                <Nav.Item key={parentRoute.path}>
                    <Nav.Link eventKey={parentRoute.path}>
                        {parentRoute.pageName}
                    </Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
};

export default Navigation;
