import React from "react";
import { Link } from "react-router-dom";

function HolidayView() {
  return (
    <div className="container">
    <div className="row mt-3">
      <div className="col-12 text-end">
        <Link to="/Holiday">
          <button type="button" className="btn btn-sm btn-border">Back</button>
        </Link>
      </div>
    </div>
    <div className="container">
      <div className="row mt-5 pb-3">
        <div className="col-md-6 col-12">
          <div className="row mb-2">
            <div className="col-6 ">
              <p className="fw-medium">Company ID</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: 01</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-2">
            <div className="col-6  ">
              <p className="fw-medium">Company Name</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: Cloud ECS Infotech</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-2">
            <div className="col-6 ">
              <p className="fw-medium">Holiday Name</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: New Year</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-2">
            <div className="col-6 ">
              <p className="fw-medium">Start Date</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: 01/01/2024</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-2">
            <div className="col-6  ">
              <p className="fw-medium">End Date</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: 01/01/2024</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-2">
            <div className="col-6 ">
              <p className="fw-medium">Country Code</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: +91 9876543210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default HolidayView;
