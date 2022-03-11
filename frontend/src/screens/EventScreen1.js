import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Dropdown,
} from "react-bootstrap";
import events from "../events";

const EventScreen1 = () => {
  const params = useParams();
  const event = events.find((e) => e._id === params.id);
  return (
    <>
      <div className="container">
        <Row class="justify-content-md-center">
          <Col class="column" md={9} xs={12} sm={12}>
            <Image src={event.image1} alt={event.name} />
          </Col>
          <Col class="column" md={3} xs={12} sm={12}>
            <ListGroup>
              <ListGroup.Item>{event.schedule.slice(5, 11)}</ListGroup.Item>
              <ListGroup.Item>
                <h3>{event.title}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>by <span style={{ color: "red" }}>{event.name}</span></p>
                <p>{event.followers} followers</p>
              </ListGroup.Item>

              {/* <ListGroup.Item>Price: ${event.adtprice?event.adtprice: "Free"}</ListGroup.Item>
            <ListGroup.Item>Price: ${event.kidprice?event.kidprice: "Free"}</ListGroup.Item>     */}

<ListGroup.Item>{event.adtprice?`Price:  ${event.adtprice} and ${event.kidprice}`: "Free"}</ListGroup.Item>


{/* <ListGroup.Item>{event.adtprice?`Price:  ${event.kidprice}`: "Free"}</ListGroup.Item>  */}


             
              </ListGroup>
            <Button
              className="btn-block"
              type="button"
              disabled={event.tickets === 0}
            >
             {event.price === "Free" ? "Register" : "Tickets"}
            </Button>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col md={9} xs={12} sm={12}>
        <ListGroup.Item>
          <h5>{event.description}</h5>{" "}
        </ListGroup.Item>
        </Col>
        <Col md={3} xs={12} sm={12}>
        <p>Date and time</p>
        <p>{event.schedule}</p>
        <p>Location <br/> {event.Address}</p>
        <Link to ={`/event/${event._id}`}>
      <iframe src= {event.source} variant='top'/>
        </Link>
        {/* <iframe src={event.source} >View Map</iframe> */}
        </Col>
        </Row>
      </div>
    </>
  );
};

export default EventScreen1;
