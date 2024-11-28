import React from 'react'
import { Container, Spinner } from 'react-bootstrap'
export default function Loading() {
    return (
        <Container className='d-flex justify-content-center align-items-center'>
            <Spinner />
        </Container>
    )
}
