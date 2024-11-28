import React, { useEffect, useState } from 'react'
import { getFabricante } from '../../api'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Image, Row, Col, Card } from 'react-bootstrap'
import Loading from '../Loading'

export default function Fabricante() {
  const { id } = useParams()
  const [fabricante, setFabricante] = useState({})
  const { nombre, direccion, numeroContacto, pathImgPerfil } = fabricante
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const data = await getFabricante(id)

      if (data.error) navigate('error')

      setFabricante(data)
      setLoading(false)
    } catch (error) {
      navigate('error')
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
        <h1 className='mb-4'>{nombre}</h1>
        <Row>
          <Col sm={12} lg={4}>
            <Image src={`/${pathImgPerfil}`} alt={nombre} thumbnail className='w-100' />
          </Col>
          <Col sm={12} lg={6}>
            <p>Dirección: {direccion}</p>
            <p>Teléfono: {numeroContacto}</p>
          </Col>
        </Row>
      </Container>)
  )
}