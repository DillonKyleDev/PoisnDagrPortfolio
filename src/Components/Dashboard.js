import React from 'react'
import './css/dashboard.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Dashboard() {
  return (
    <div className='background-cover d-flex align-items-center'>
      <Container>
        <Row>

          <Col xs={12} sm={6} md={4} className='my-4 p-0 d-flex justify-content-center'>
          <Card className='w-100 mx-4'>
            <Card.Header as="h5">Main Gallery</Card.Header>
            <Card.Body>
              <Card.Title>Add or remove photos</Card.Title>
              <Card.Text>
                Edit shown photos.
              </Card.Text>
              <Button className='dark-violet-button'>Edit Gallery</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col xs={12} sm={6} md={4} className='my-4 p-0 d-flex justify-content-center'>
          <Card className='w-100 mx-4'>
            <Card.Header as="h5">18+ Gallery</Card.Header>
            <Card.Body>
              <Card.Title>Add or remove photos</Card.Title>
              <Card.Text>
                Edit shown photos.
              </Card.Text>
              <Button className='dark-violet-button'>Edit Gallery</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col sm={12} md={4} className='my-4 p-0 d-flex justify-content-center'>
          <Card className='w-100 mx-4'>
            <Card.Header as="h5">Settings</Card.Header>
            <Card.Body>
              <Card.Title>Change Admin settings</Card.Title>
              <Card.Text>
                Edit admin settings like password, email, and social links.
              </Card.Text>
              <Button className='dark-violet-button'>Change Settings</Button>
            </Card.Body>
          </Card>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
