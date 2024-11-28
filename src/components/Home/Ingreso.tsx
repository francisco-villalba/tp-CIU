import React from 'react'
import { Card, Col } from 'react-bootstrap'

export default function Ingreso({ imagen, link, alt }) {
    return (
        <Col xs={12} sm={12} md={4} lg={4}>
            <a href={link} target='_blank'>
                <Card className='h-100'>
                    <Card.Img variant="top" alt={alt} src={imagen} />
                </Card>
            </a>
        </Col>
    )
}
