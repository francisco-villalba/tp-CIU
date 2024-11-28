import React from 'react'
import { Container } from 'react-bootstrap'

export default function Mapa() {
  return (
    <Container className='d-flex flex-column align-items-center'>
      <h1 className='text-center mb-4'>Ubicación</h1>
      <div className='d-flex flex-column  align-items-center w-50'>
        <iframe className='mb-3'src="https://www.openstreetmap.org/export/embed.html?bbox=-58.64043831825257%2C-34.61994755224179%2C-58.636329174041755%2C-34.61736056406505&amp;layer=mapnik" style={{ border: '1px solid black', width: '100%' }} target='_blank'></iframe>
        <p>Contamos con un local al público en Tte. Origone 150, Hurlingham. A metros de la UNAHUR. Vení a conocernos!</p>
      </div>
    </Container>
  )
}
