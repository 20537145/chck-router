import React, { useState } from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'

function FIlter({setSearch ,addamovie, setRate , rating }) {
  const [show,setShow]=useState(false)
  const rate = [1, 2, 3, 4, 5];
  const [newMovie,setNewMovie]=useState({
    title:'',
    descripotion:'',
    posterURL:'',
    rating:1
  })
  const Close=()=>{
    setShow(false)
  }
  const Open=()=>{
    setShow(true)
  }
  const handleShow=()=>{
    addamovie({...newMovie,id:Math.random()})
    Close()
  }

  return (<div>
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e)=>setSearch(e.target.value)}
          />
      </InputGroup>
    <button onClick={Open}>
      Add a movie
    </button>
    <div style={{width:'320px'}}>
    <Modal show={show} onHide={Close}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie name</Form.Label>
              <Form.Control
                placeholder="type movie name here"
                autoFocus
                value={newMovie.title}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie description</Form.Label>
              <Form.Control
                placeholder="type movie description here"
                autoFocus
                value={newMovie.description}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie poster</Form.Label>
              <Form.Control
                placeholder="type movie poster url here"
                autoFocus
                value={newMovie.posterURL}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, posterURL: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie rating</Form.Label>
              <Form.Control
                placeholder="enter movie rating"
                autoFocus
                type="number"
                value={newMovie.rating}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, rating: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Close}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    <div>
      {rate.map((el) =>
        rating < el ? (
          <i className="fa-regular fa-star"></i>
        ) : (
          <i className="fa-solid fa-star"  onClick={()=>setRate(el)}></i>
        )
      )}
    </div>
    </div>
  )
}

export default FIlter