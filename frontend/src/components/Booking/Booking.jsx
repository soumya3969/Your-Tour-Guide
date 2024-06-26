import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = yyyy + "-" + mm + "-" + dd;
  // const formattedToday = dd + "/" + mm + "/" + yyyy;
  // console.log(formattedToday)

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: ""
  });
  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // *Send data to the server
  const handleClick = async (e) => {
    e.preventDefault();
    // console.log(booking);

    try {
      if (!user || user === undefined || user === null) {
        return alert("Please sign in Book...");
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(booking)
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/thank-you");
    } catch (err) {
      alert(err.message);
    }
  };

  // * Taking 5 % service charge of each place
  const serviceCrg = Math.trunc(
    Number(Number(price) * 0.05) * Number(booking.guestSize)
  );
  const totalAmt =
    Number(price) * Number(booking.guestSize) + Number(serviceCrg);
  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ₹ {price} <span>Per/Person</span>{" "}
        </h3>
        <span className="tour__rating d-flex align-items-center ">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/* ---Booking Form start--- */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              min={formattedToday}
              defaultValue={formattedToday}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="No Of Guests"
              id="guestSize"
              required
              defaultValue={1}
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* ---Booking Form end--- */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ₹ {price} <i class="ri-close-line"></i> 1 person
            </h5>
            <span>₹ {price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge</h5>
            <span>₹ {serviceCrg}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>₹ {totalAmt}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
