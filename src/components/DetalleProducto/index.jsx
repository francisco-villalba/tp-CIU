import React, { useEffect, useState } from 'react'
import { getComponentesProducto, getFabricantesProducto } from '../../api'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Container, Image, Row, Col, Card } from 'react-bootstrap'
import Loading from '../Loading'

export default function DetalleProducto() {
  const { id } = useParams()
  const [componentes, setComponentes] = useState({})
  const [fabricantes, setFabricantes] = useState({})
  const [loading, setLoading] = useState(true)
  const { nombre, descripcion, precio, pathImg, Componentes } = componentes
  const { Fabricantes } = fabricantes
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      
      const comp = await getComponentesProducto(id)
      const fabr = await getFabricantesProducto(id)
      
      if(!comp || !fabr) navigate('/error')

      setComponentes(comp)
      setFabricantes(fabr)

      setLoading(false)
    } catch (error) {
      setLoading(false)
      navigate('/error')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    loading ?
    <Loading /> :

    (<Container className='py-5'>
      <h1 className='mb-4'>{nombre}</h1>
      <Row>
        <Col sm={12} lg={4}>
          <Image src={`/${pathImg}`} alt={nombre} thumbnail className='w-100' />
        </Col>
        <Col sm={12} lg={6}>
          <p className="display-5">${precio}</p>
          <p>{descripcion}</p>

          <p>Componentes:</p>
          <ul>
            {Componentes?.map(c => <li key={c.id}><Link to={`/componentes/${c.id}`}>{c.nombre}</Link></li>)}
          </ul>

          <p>Fabricantes:</p>
          <ul>
            {Fabricantes?.map(f => <li key={f.id}><Link to={`/fabricantes/${f.id}`}>{f.nombre}</Link></li>)}
          </ul>


        </Col>
      </Row>
    </Container>)
  )
}