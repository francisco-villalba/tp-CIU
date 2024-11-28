import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Producto({ producto }) {
  const { nombre, descripcion, pathImg, id, precio } = producto

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card className='h-100'>
        <Card.Img variant="top" alt={pathImg} src={pathImg} />
        <Card.Body  className="d-flex flex-column justify-content-between">
          <Card.Text>${precio}</Card.Text>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Link className='mt-auto' to={`/productos/${id}`}>
            <Button>
              Ver más
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}
