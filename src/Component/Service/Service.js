import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({service}) => {
    const {show} = service;

    return (
      <Card className="pb-3 card_container shadow-sm">
        <div>
          <img
            className="w-100 mt-2"
            style={{ height: "30rem" }}
            src={show.image.original}
            alt=""
          />
        </div>

        <Card.Body>
          <h2 className="border-bottom border-warning border-3 pb-1">
            Movie: {show.name}
          </h2>
          <div className="">
            <p className="">Written on {show.premiered} by {show?.network?.name}</p>

            <h6 className="">
              <i className="far fa-calendar-alt"></i> Schedule:{" "}
              {show.schedule.days.map((day, i) => (
                <span key={i}>{day}</span>
              ))}
              ,<span>at {show.schedule.time}</span>
            </h6>
          </div>

          <div className=" d-flex justify-content-between align-items-center">
            <div className="text-start">
              <h6 className="card-text fw-bold">
                Country: {show?.network?.country?.name}
              </h6>

              <h6 className="card-text fw-bold">
                Time Zone: {show?.network?.country?.timezone}
              </h6>
            </div>
            <div className="">
              <h6 className="d-inline fw-bold">
                Genres:{" "}
                {show?.genres.map((genere, i) => (
                  <h6 key={i}>
                    {i + 1}- {genere}
                  </h6>
                ))}
              </h6>
            </div>
          </div>

          <Rating
            className=" text-warning"
            initialRating={parseFloat(show.rating?.average)}
            readonly
            fullSymbol="fas fa-star"
            emptySymbol="far fa-star"
          />
        </Card.Body>
        <div className="">
          <Link to={`/service/${show.id}`}>
            <Button
              variant="primary"
              className="bg-primary fw-bold rounded px-4"
            >
              See Details <i className="fas fa-arrow-circle-right"></i>
            </Button>
          </Link>
        </div>
      </Card>
    );
};

export default Service;