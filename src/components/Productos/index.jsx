import React, { useEffect, useState } from 'react'
import { getProductos } from '../../api'
import Producto from './Producto'
import { Button, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading'

export default function Productos() {
    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useState({})
    const [totalCarrito, setTotalCarrito] = useState(0)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const data = await getProductos()

            if (!data || data.error) navigate('/error')

            setProductos(data)
            setLoading(false)

        } catch (error) {
            navigate('/error')
            setLoading(false)
        }
    }

    const calcularCarrito = () => {
        let sumaTotalPrecios = 0

        for (const key in carrito) {
            sumaTotalPrecios += carrito[key].precio * carrito[key].cantidad
        }

        setTotalCarrito(sumaTotalPrecios)
    }

    useEffect(() => {
        fetchData()
        calcularCarrito()
    }, [])

    return (
        loading ?
            <Loading /> :
            (<Container className='py-5'>
                <div className='mb-4 text-center'>
                    <p className='display-5 text-center mb-4'>Total carrito: ${totalCarrito}</p>
                    <Button onClick={calcularCarrito}>Calcular</Button>
                </div>
                <Row className="g-3">
                    {
                        productos.map(p => (
                            <Producto producto={p} key={p.id} carrito={carrito} setCarrito={setCarrito}/>
                        ))
                    }
                </Row>
            </Container>)
    )
}
