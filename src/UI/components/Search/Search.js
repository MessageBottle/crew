import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const Search = () => (
    <Form className="d-flex">
        <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
    </Form>
);

export default Search;
