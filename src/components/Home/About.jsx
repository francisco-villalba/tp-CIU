import React from 'react'
import { Container } from 'react-bootstrap'

export default function About() {
    return (
        <Container className='mb-5'>
            <h1 className='mb-4 text-center'>Sobre nosotros</h1>
            <div className='text-center'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ycs7gq_fRcA?si=5tFM9QE_s_-5tlWw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </Container>
    )
}
