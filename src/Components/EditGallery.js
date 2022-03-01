import React, { useState, useEffect, useRef } from 'react'
import { ListGroup, Form, Button } from 'react-bootstrap'
import './css/editmaingallery.css'

function EditGallery(props) {
  const { jsonPath } = props;
  const [ numberList, setNumberList ] = useState([ 'One', 'Two', 'Three', 'Four', 'Five' ]);
  const [ list, setList ] = useState();
  const dragged = useRef();
  const dropped = useRef();
  const tempArray = useRef();
  const image = useRef();

  //Initialize image data
  useEffect(() => {
    
  }, [ ]);

  useEffect(() => {   
    setList( numberList.map((number, index) => (
      <ListGroup.Item key={ number } id={ number } draggable="true" onDragStart={(e) => drag(e)}> { number }, { index } </ListGroup.Item>
    )));
  }, [ numberList ]);

  function allowDrop(e) {
    e.preventDefault();
  }

  function drag(e) {
    dragged.current = numberList.indexOf(e.target.id);
  }

  function drop(e) {
    e.preventDefault();
    dropped.current = numberList.indexOf(e.target.id);
    shiftArray(dragged.current, dropped.current);
  }

  function shiftArray(movedIndex, movedToIndex) {
    tempArray.current = numberList; 
    if(movedIndex < movedToIndex) {
      tempArray.current.splice(movedToIndex + 1, 0, tempArray.current[movedIndex]);
      tempArray.current.splice(movedIndex, 1);
      
    } else if(movedIndex > movedToIndex) {
      tempArray.current.splice(movedToIndex, 0, tempArray.current[movedIndex]);
      tempArray.current.splice(movedIndex + 1, 1);
    }
    setNumberList([...tempArray.current]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/editMain')
    console.log(image.current.value);
  }

  return (
    <div className='background-cover d-flex align-items-center justify-content-center'>
      <div>
        <ListGroup onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
          { list }
        </ListGroup>
        <br />
        <Form onSubmit={(e) => handleSubmit(e)} >
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Upload Images to Gallery</Form.Label>
            <Form.Control ref={image} type="file" multiple />
          </Form.Group>
          <Form.Group controlId="forButton" className="mb-3">
            <Button className='dark-violet-button' type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default EditGallery