import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button,Dropdown } from 'react-bootstrap'
import events from '../events'

const EventScreen = () => {
  const params = useParams();
  const event = events.find((e) => e._id === params.id)
  return (
<>
<Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={event.image} alt={event.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{event.title}</h3>
            </ListGroup.Item>
            
            <ListGroup.Item>Price: ${event.adtprice?event.adtprice: "Free"}</ListGroup.Item>
            <ListGroup.Item>Price: ${event.kidprice?event.kidprice: "Free"}</ListGroup.Item>
            <ListGroup.Item>Description: {event.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{event.price!=="Free"?event.price.substring(10,16):"Free"}</strong>
                    
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {event.tickets === 0 ? 'Sold Out': "Available"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Quantity:</Col>
                  <Col>
                  <Dropdown >
    <Dropdown.Toggle id="dropdown-button-dark" variant="secondary" disabled={event.tickets === 0}>
      Select quantity
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item >1</Dropdown.Item>
      <Dropdown.Item>2</Dropdown.Item>
      <Dropdown.Item>3</Dropdown.Item>
      <Dropdown.Item>4</Dropdown.Item>
      <Dropdown.Item>5</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item >Group Price</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                 disabled={event.tickets === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

</>

  )

}

export default EventScreen