import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function MovieCard({hello}) {
  return (
    <div>
        <Card  style={{   width: '18rem' }}>
      <Card.Img variant="top" src={hello.posterURL}  alt='' />
      <Card.Body>
        <Card.Title>{hello.title}</Card.Title>
        <Card.Text>
      <p>{hello.description}</p>
        </Card.Text>
        <p>Rating: <b>{hello.rating}</b> </p>
      <button className='crd-btn'><NavLink to='/trailer' >Watch Trailer</NavLink></button> 
      </Card.Body>
    </Card>
    </div>
  )
}
export default MovieCard