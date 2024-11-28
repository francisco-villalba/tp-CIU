import React, { useEffect, useState } from 'react'
import { getProductos } from '../../api'
import Producto from './Producto'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading'

export default function Productos() {
    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const data = await getProductos()

            if(!data || data.error) navigate('/error')

            setProductos(data)
            setLoading(false)
            
        } catch (error) {
            navigate('/error')
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        loading ? 
        <Loading /> :
        (<Container className='py-5'>
            <Row className="g-3">
                {
                    productos.map(p => (
                        <Producto producto={p} key={p.id} setCarrito={setCarrito}/>
                    ))
                }
            </Row>
        </Container>)
    )
}
