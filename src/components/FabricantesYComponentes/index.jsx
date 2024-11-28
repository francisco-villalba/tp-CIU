import React, { useEffect, useState } from 'react'
import { getFabricantes, getComponentes } from '../../api'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../Loading'

export default function FabricantesYComponentes() {
  const [fabricantes, setFabricantes] = useState([])
  const [componentes, setComponentes] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const fabr = await getFabricantes()
      const comp = await getComponentes()

      if (!fabr || !comp || fabr.erro || comp.error)navigate('/error')

      setFabricantes(fabr)
      setComponentes(comp)

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
      <Loading />
      :
      (<Container className='py-5'>
        <Row className='g-3'>
          <Col sm={12} lg={6}>
            <h1 className='mb-4'>Fabricantes</h1>
            <ul>
              {fabricantes.map(f => <li key={f.id}><Link to={`/fabricantes/${f.id}`}>{f.nombre}</Link></li>)}
            </ul>
          </Col>

          <Col sm={12} lg={6}>
            <h1 className='mb-4'>Componentes</h1>
            <ul>
              {componentes.map(c => <li key={c.id}><Link to={`/componentes/${c.id}`}>{c.nombre}</Link></li>)}
            </ul>
          </Col>
        </Row>
      </Container>)
  )
}
