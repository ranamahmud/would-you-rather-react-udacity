import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container>
            <Alert variant={'danger'}>
                The page you are looking for is not found.
  </Alert>
        </Container>
    );
};

export default NotFound;