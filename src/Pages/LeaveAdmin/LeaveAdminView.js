import React from "react";
import { Link } from "react-router-dom";

function LeaveView() {
    return (
        <div className="container">
        <div className="row mt-3">
          <div className="col-12 text-end">
            <Link to="/leaveadmin">
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
                    <p className="fw-medium">Employee Name</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: Sathish</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row   mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Department</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: Health Department</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row   mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Company Name</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: Ecs Cloud</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row   mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">From Date</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: 06/05/2023</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row   mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">To Date</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: 07/05/20023</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row  mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Reason For Leave</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: Fever</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row   mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Approver Name</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: Meena</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row   mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Status</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: Approved</p>
                  </div>
                </div>
              </div>
              
              
              </div>
            </div>
          </div>
        </div>
    );
}

export default LeaveView;
