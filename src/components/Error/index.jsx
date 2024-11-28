import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Error() {
 

  return (
    <Container className='d-flex flex-column align-items-center justify-content-center'>
        <p className='display-4 mb-4'>Algo salió mal :(</p>
        <Link to='/'>Volver al inicio</Link>
    </Container>
  )
}
