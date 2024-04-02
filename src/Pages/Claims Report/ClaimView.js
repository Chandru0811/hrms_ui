import React from "react";
import { Link } from "react-router-dom";
import Invoice from "../../assets/images/Invoice.png";

function ClaimView() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 text-end">
          <Link to="/claim">
            <button type="button" className="btn btn-sm btn-border">Back</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Employee ID</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 12</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Employee Name</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Vijayashree</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company ID</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: ECS031</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
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
                <p className="fw-medium">Department ID</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: ECSD002</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Department Name</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: IT</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Date</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 22/01/2024</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Type</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Telephone</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Amount</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 120</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver ID(Lvl 1)</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: ECS006</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver Name(Lvl 1)</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Dillip</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver Status(Lvl 1)</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Approved</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver ID(Lvl 2)</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: ECS010</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver Name(Lvl 2)</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Manoj</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver Status(Lvl 2)</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Approved</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12"></div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Attachment</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm d-flex">
                  :&nbsp;<img src={Invoice} alt="invoice"></img>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Remarks</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClaimView;