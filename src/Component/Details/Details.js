import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import BookingDetails from '../BookingDetails';

const Details = () => {
 const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [fieldValue,setFieldValue]=useState({});
    const navigate=useNavigate()
    useEffect( () => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res => res.json())
        .then(data => setMovie(data))
    },[])
    const singleService =movie.find(single=>single.show.id===parseInt(id)); 
    const handleInputField=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newValue={...fieldValue};
        newValue[field]=value;
        setFieldValue(newValue);
    }
const handleSubmit=e=>{
  e.preventDefault();
  fieldValue.movieName = singleService?.show?.name || "";
  fieldValue.schedule = singleService?.show?.schedule.time || " ";
  fieldValue.writter = singleService?.show?.network?.name || " ";
  localStorage.setItem("BookingDetails", JSON.stringify(fieldValue));

  handleClose();
  navigate('/bookingDetails')
  
  
}
    return (
      <div className="container">
        <div className="row">
          <h1 className="mt-3">
            Movie <span className="text-danger">Details</span>
          </h1>
          <h2>
            Ratings Roundup for the next{" "}
            {singleService?.show.schedule.days.map((day, i) => (
              <span key={i}>{day}</span>
            ))}
            ,<span>at {singleService?.show.schedule.time}</span>
          </h2>
          <div className="col-md-6">
            <img
              src={singleService?.show?.image?.original}
              style={({ width: "100%" }, { height: "500px" })}
              alt=""
            />
          </div>
          <div className="col-md-6 ">
            <div className="card-body">
              <h1 className="card-title ">
                Movie Name: {singleService?.show?.name}
              </h1>
              <h3 className="text-success">
                <i className="fas fa-film"></i> Written on{" "}
                {singleService?.show?.premiered} by{" "}
                {singleService?.show?.network?.name}
              </h3>
              <div className="d-flex justify-content-between">
                <Card.Text className="text-start"></Card.Text>
              </div>
              <div>
                <Rating
                  className=" text-warning"
                  initialRating={parseFloat(
                    singleService?.show?.rating?.average
                  )}
                  readonly
                  fullSymbol="fas fa-star"
                  emptySymbol="far fa-star"
                />
                <div className=" d-flex justify-content-between text-end align-items-center">
                  <div className="fw-bold mb-0">
                    <p className="d-inline fs-5">
                      Genres:{" "}
                      {singleService?.show?.genres.map((genere, i) => (
                        <h6 key={i}>
                          {i + 1}- {genere}
                        </h6>
                      ))}
                    </p>
                  </div>
                  <div className="">
                    <h5 className="card-text fw-bold">
                      Country: {singleService?.show?.network?.country?.name}
                    </h5>

                    <h5 className="card-text fw-bold">
                      Time Zone:{" "}
                      {singleService?.show?.network?.country?.timezone}
                    </h5>
                  </div>
                </div>
              </div>
              <p className="card-text fw-bold mt-2">
                {singleService?.show?.summary}
              </p>
              <div>
                <div className="d-flex justify-content-evenly">
                  <Link to="/">
                    <Button
                      variant="primary"
                      className="bg-primary fw-bold text-white rounded px-4 me-3"
                    >
                      Home <i className="text-dark fas fa-home"></i>
                    </Button>
                  </Link>

                  <Button
                    onClick={handleShow}
                    variant="primary"
                    className="bg-primary fw-bold text-white rounded px-4"
                  >
                    <i className="text-dark far fa-check-square"></i> Ticket
                    Booking
                  </Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                  <h3 className="mx-auto py-1">Enter Your Personal Info</h3>
                  <form className="px-5">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Movie Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={singleService?.show?.name || ""}
                        onChange={handleInputField}
                        name="movieName"
                      />
                      <Form.Label>Writter by</Form.Label>
                      <Form.Control
                        type="text"
                        value={singleService?.show?.network?.name || " "}
                        onChange={handleInputField}
                        name="writter"
                      />
                      <Form.Label>Schedule</Form.Label>
                      <Form.Control
                        type="text"
                        value={singleService?.show?.schedule.time || " "}
                        name="Schedule"
                        onChange={handleInputField}
                      />
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="enter your name"
                        onChange={handleInputField}
                        name="name"
                      />
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="enter your email"
                        onChange={handleInputField}
                        name="email"
                      />
                    </Form.Group>
                  </form>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;