import React, { useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Producto({ producto, setCarrito, carrito }) {
  const { nombre, descripcion, pathImg, id, precio } = producto
  const [contador, setContador] = useState(0)

  const modificarCarrito = (operacion) => {
    let newCarrito = { ...carrito }
    if (operacion === 'agregar') {
      setContador(prev => prev + 1)

      newCarrito[id] = {
        precio,
        cantidad: (newCarrito[id]?.cantidad || 0) + 1

      }
    } else if (operacion === 'quitar' && contador !== 0) {
      setContador(prev => prev - 1)

      newCarrito[id] = {
        precio,
        cantidad: newCarrito[id]?.cantidad - 1

      }
      if(contador === 1) delete newCarrito[id]
    }
    
    setCarrito(newCarrito)
  }

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card className='h-100'>
        <Card.Img variant="top" alt={pathImg} src={pathImg} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Text>${precio}</Card.Text>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>

          <Link className='mt-auto mb-2' to={`/productos/${id}`}>
            <Button className='w-100'>
              Ver más
            </Button>
          </Link>
          <div className='d-flex justify-content-between align-items-center'>
            <Button className='btn-warning' onClick={() => modificarCarrito('quitar')}>-</Button>
            <span className='text-center'>{contador}</span>
            <Button className='btn-success' onClick={() => modificarCarrito('agregar')}>+</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}
