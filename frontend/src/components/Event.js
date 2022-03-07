import React from 'react'
import { Card } from 'react-bootstrap'

const Event = ({event}) => {
  return (
  <Card className = 'my-3 rounded'>
      <a href={`/event/${event._id}`}>
      <Card.Img src= {event.image} variant='top'/>
        </a>
      <Card.Body>
        <a href={`/event/${event._id}`}>
          <Card.Title as='div'>
            <strong>{event.title}</strong>
          </Card.Title>
        </a>

        {/* <Card.Text as='div'>
          <Rating 
            value={product.rating}
            text={`${product.numReviews} reviews`}
            />
        </Card.Text> */}
        <Card.Text className ='schedule'as='h7'>{event.schedule}</Card.Text><br/>
        <Card.Text as='h7'>{event.Address}</Card.Text><br/>
        <Card.Text as='h7'>${event.price}</Card.Text><br/><br/>
        <Card.Text as='h6'>{event.name}</Card.Text>
        <Card.Text as='h6'><i className="fa-solid fa-person-running mx-1"></i>{event.followers} followers</Card.Text>

      </Card.Body>

      
      </Card>
  )
}

export default Event