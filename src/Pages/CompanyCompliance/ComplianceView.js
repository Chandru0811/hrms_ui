import React from "react";
import { Link } from "react-router-dom";

function ComplianceView() {

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 text-end">
          <Link to="/compliance">
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
                <p className="fw-medium">Designation Name</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Manager</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Designation Category</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Permanent</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Leave Limit</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 8</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Salary Day</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 2024-04-30</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Salary Calculation Day</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 2024-04-29</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Remarks</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Good</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplianceView;
