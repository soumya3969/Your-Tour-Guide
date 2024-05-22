import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./../Pages/Home";
import Tours from "./../Pages/Tours";
import TourDetails from "./../Pages/TourDetails";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";
import SearchResultList from "./../Pages/SearchResultList";
import ThankYou from "../Pages/ThankYou";

import Gallery from "../Pages/Gallery";
import About from "../Pages/About";

import Dashboard from "../Pages/Admin/Dashboard";
import ManageTours from "../Pages/Admin/ManageTours";
import ManageUsers from "../Pages/Admin/ManageUsers";
import ManageBookings from "../Pages/Admin/ManageBookings";
import ManageReviews from "../Pages/Admin/ManageReviews";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />

      <Route path="/admin" exact element={<Dashboard />} />
      <Route path="/admin/manage-tours" element={<ManageTours />} />
      <Route path="/admin/manage-users" element={<ManageUsers />} />
      <Route path="/admin/manage-bookings" element={<ManageBookings />} />
      <Route path="/admin/manage-reviews" element={<ManageReviews />} />
    </Routes>
  );
};
export default Routers;
