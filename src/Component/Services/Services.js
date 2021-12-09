import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect( () => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
      <div className="container py-2">
        <h1>Movie <span className="text-danger">Theater</span></h1>
        <h1 className="text-start text-danger border-2 border-bottom border-danger">Articles</h1>
        <Row xs={1} sm={1} md={2} lg={3} className="g-3">
          {services.map((service) => (
            <Service key={service.score} service={service}></Service>
          ))}
        </Row>
      </div>
    );
};

export default Services;