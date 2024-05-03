import React from "react";
import { Link } from "react-router-dom";

function ViewCompanyRegistration() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 text-end">
          <Link to="/companyregisteration">
            <button type="button" className="btn btn-sm btn-border">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 pb-3">
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Name</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: ECS Cloud</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Company Role ID</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: ECS978</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Address</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Skathi Tower</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company City</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Chennai</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Company Pincode</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 600001</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Email</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: ecscloud@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Phone Number</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 9807917199</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Tax Code</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: THS679NSUY88QW9</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Registration Number</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: ECSCLOUD88992</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCompanyRegistration;
