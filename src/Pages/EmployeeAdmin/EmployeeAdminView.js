import React from "react";
import { Link } from "react-router-dom";

const EmployeeAdminView = () => {
  return (
    <div className="container ">
      <div className="row  mt-3">
        <div className="col-12 text-end">
          <Link to="/employeeadmin">
            <button className="btn btn-sm btn-border">Back</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row mt-5 pb-3">
            <div className="col-md-6 col-12">
              <div className="row mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">First Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Suriya</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Last Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Suresh</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row  mb-2  ">
                <div className="col-6  ">
                  <p className="fw-medium">Primary Phone No</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 1234567890</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Address</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Singapore</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Primary Email ID</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: suriya00@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Primary Email Password</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">NRIC Fin</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">NRIC Type</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Company ID</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: ECS01</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Employee Referral ID</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: ECS845</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Employee ID</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: ECS54</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Department ID</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: TechECS57</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Employee Designation</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Employee Date Of Joining</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 2024-03-13</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Notice Period</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 45 Days</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Reporting Manager Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Manoj</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Reporting Manager ID</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: ECS17</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAdminView;
