import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from 'axios'
import Event from "../components/Event";
import myImg from "../../src/images/homePage.jpg";

const HomeScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await axios.get('/api/events');
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <>
      <div>
        <img className="img" src={myImg} alt="homepage"></img>
      </div>
      <h1 className="my-4">Upcoming Events Near You !!!</h1>
      <Row>
        {events.map((event) => (
          <Col key={event._id} sm={12} md={6} lg={4} xl={3}>
            <Event event={event} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
