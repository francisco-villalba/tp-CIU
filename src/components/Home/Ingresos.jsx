import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Ingreso from './Ingreso'
 
export default function Ingresos() {
  return (
    <Container className='mb-5'>
        <h1 className='text-center mb-4'>Próximos ingresos</h1>
        <Row className='g3'>
            <Ingreso imagen='images/productos/sistema-iluminacion.jpg' link='https://www.youtube.com/shorts/GzYi7gAp0vI/' alt='Sistema de iluminación'/>
            <Ingreso imagen='images/productos/repetidor-wifi.jpg' link='https://www.youtube.com/shorts/sbOjP9y56UQ' alt='Repetidor de señal WiFi'/>
            <Ingreso imagen='images/productos/hub-usb.jpg' link='https://www.youtube.com/shorts/PXOUpey_dMs' alt='Hub multi-USB'/>
        </Row>
    </Container>
  )
}
