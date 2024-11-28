import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './Jumbotron.css'
import { Link } from 'react-router-dom'

export default function Jumbotron() {
    return (
        <Container className="p-5 mb-5 rounded-3 text-center jumbotron">
            <h1 className="display-4 dt">¡Bienvenido a F-Tech!</h1>
            <p className="lead dt">
                Somos una empresa especializada en la comercialización de componentes electrónicos de alta calidad, ofreciendo una amplia variedad de productos nacionales e internacionales. Nuestro compromiso es satisfacer las necesidades del sector tecnológico, brindando soluciones confiables y adaptadas a las exigencias del mercado. Con F-Tech, la innovación y la excelencia están a tu alcance.
            </p>
            <Link to='/productos'>
                <Button>
                    Ver nuestros productos
                </Button>
            </Link>
        </Container >
    )
}
