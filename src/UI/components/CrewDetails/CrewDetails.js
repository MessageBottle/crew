import React from 'react';
import { Card } from 'react-bootstrap';

const CrewDetails = () => {
    return (
        <Card className="bg-white text-dark" style={{ height: '300px' }}>
            {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
            {/* <Card> */}
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            {/* </Card> */}
        </Card>
    );
};

export default CrewDetails;
