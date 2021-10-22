import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
const NotFound = () => {
    return (
        <Fragment>
        <Container className="error">
            <p className="txt1 text-center text-primary mt-5">ERROR</p>
            <p className="txt2 text-center text-white">404</p>
            <p className="txt3 text-center text-primary">Something is going on in the Universe…</p>
        </Container>
        </Fragment>
    );
}

export default NotFound;