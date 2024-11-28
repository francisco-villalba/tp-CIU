import React, { useEffect, useState } from 'react'
import { getComponente } from '../../api'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'
import Loading from '../Loading'

export default function Componente() {
  const { id } = useParams()
  const [componente, setComponente] = useState({})
  const { nombre, descripcion } = componente
  const imgName = nombre?.toLowerCase().replaceAll(" ", "-")
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const data = await getComponente(id)

      if(data.error || !data) navigate('/error')

      setComponente(data)
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

      (<Container className='py-5 text-center'>
        <h1 className='mb-4'>{nombre}</h1>

        <Image src={`/images/componentes/${imgName}.jpg`} alt={nombre} thumbnail className='w-25 mb-2' />

        <p>{descripcion}</p>
      </Container>)
  )
}