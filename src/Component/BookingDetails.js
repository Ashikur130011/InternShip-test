import React from 'react';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookingDetails = () => {
    const booking = localStorage.getItem("BookingDetails");
    const data=JSON.parse(booking)
    console.log(data);
    
    return (
      <div className="container mx-auto mt-5">
          <h1> Your Booking Details</h1>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Name: {data.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Email: {data.email}
            </Card.Subtitle>
            <Card.Title>Movie: {data.movieName}</Card.Title>
            <Card.Text>Writter: {data.writter}</Card.Text>
            <Card.Text>Time: {data.schedule}</Card.Text>
            <Link to="/">
              <Button
                variant="primary"
                className="bg-primary fw-bold text-white rounded px-4 me-3"
              >
                Home <i className="text-dark fas fa-home"></i>
              </Button>
            
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
};

export default BookingDetails;