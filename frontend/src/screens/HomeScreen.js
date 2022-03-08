import React from 'react'
import { Col, Row } from 'react-bootstrap'
import events from '../events'
import Event from '../components/Event'

const HomeScreen = () => {
  return (
    <>
    <h1 className='my-4'>Latest Events</h1>
    <Row>
        {events.map((event) => (
          <Col key={event._id} sm={12} md={6} lg={4} xl={3}>
            <Event event={event} />
          </Col>
        ))}
      </Row>
      </>
  )
}

export default HomeScreen