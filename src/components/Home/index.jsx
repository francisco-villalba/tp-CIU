import React from 'react'
import { Container } from 'react-bootstrap'
import Jumbotron from './Jumbotron'
import Mapa from './Mapa'
import Ingresos from './Ingresos'
import About from './About'

export default function Home() {
    return (
        <Container className='py-5'>
            <Jumbotron />
            <About />
            <Ingresos />
            <Mapa />
        </Container>
    )
}
