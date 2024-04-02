import React from "react";
import { Link } from "react-router-dom";

function DeductionView() {
  return (
    <div className="container ">
      <div className="row  mt-3">
        <div className="col-12 text-end">
          <Link to="/deductions">
            <button className="btn btn-sm btn-border">Back</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row mt-5 pb-3">
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Employee ID </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: ECS01</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Employee Name </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Suriya</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row  mb-2  ">
                <div className="col-6  ">
                  <p className="fw-medium">Company ID</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: ECS74</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Company Name </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: ECS Cloud</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Department ID</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: TechECS678</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Department Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Deduction Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: CPF Contribution</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Deduction Month</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 2024-03-11</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Deduction Amount</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 350</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Total Deduction Amount</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 1360</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeductionView;
