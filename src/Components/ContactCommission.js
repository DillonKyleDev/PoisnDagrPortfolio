import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import './css/contactcommission.css'

function ContactCommission() {
  return (
    <div className='white-page d-flex align-items-center'>
      <Container fluid className='bg-light py-3 d-flex justify-content-center'>
        <Row>
          <Col>
            <Form>
              <Form.Group className='mb-3' controlId='formContactInfo'>
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder='First Name' />
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder='Last Name' />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder='Enter Email' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formMessageDetails'>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button className='dark-violet-button' type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactCommission
