import React from "react";
import { Link } from "react-router-dom";

function ExitManagementView() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 text-end">
          <Link to="/exitmanagement">
            <button className="btn btn-sm btn-border">Back</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row mt-5 pb-3">
            <div className="col-md-6 col-12">
              <div className="row   mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Employee ID</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 02</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row   mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Employee Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Suriya</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row  mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Company ID</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: ECS041</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row   mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Date Of Apply</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 01-03-2024</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row   mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Notice Period</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 45 Days</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row   mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Current Date</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 11-03-2024</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row  mb-2 ">
                <div className="col-6  ">
                  <p className="fw-medium">Reason For Relieving</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Career Change</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row  mb-2">
                <div className="col-6  ">
                  <p className="fw-medium">Date Of Relieving</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 10-05-2024</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row  mb-2">
                <div className="col-6  ">
                  <p className="fw-medium">Relieving Approval</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row  mb-2">
                <div className="col-6  ">
                  <p className="fw-medium">Relieving Approval ID</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row  mb-2">
                <div className="col-6  ">
                  <p className="fw-medium">Approval Status</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row  mb-2">
                <div className="col-6  ">
                  <p className="fw-medium">Assets Returned</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default ExitManagementView;
