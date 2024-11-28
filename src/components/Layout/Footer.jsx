import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default function Footer() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container className='justify-content-center'> 
                <Navbar.Text>
                    <span>
                        Hecho por Francisco Villalba para CIU Unahur - {new Date().getFullYear()}
                    </span>
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}
