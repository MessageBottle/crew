import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

import OffCanvasBody from '../../../components/OffCanvasBody/OffCanvasBody';

const OffCanvas = () => {
    const [showOffCanvas, setshowOffCanvas] = useState(false);

    return (
        <>
            <Button
                variant="outline-dark"
                onClick={() => {
                    setshowOffCanvas(true);
                }}
            >
                Menu
            </Button>
            <Offcanvas
                show={showOffCanvas}
                onHide={() => {
                    setshowOffCanvas(false);
                }}
                placement="start"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Crew</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <OffCanvasBody />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OffCanvas;
