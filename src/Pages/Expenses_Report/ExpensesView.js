import React from "react";
import { Link } from "react-router-dom";
import Invoice from "../../assets/images/Invoice.png";

function ExpensesView() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 text-end">
          <Link to="/expensesreport">
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
                <p className="text-muted text-sm">: ECS01</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Employee Name</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Suriya</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company ID</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: ECS17</p>
              </div>
            </div>
          </div>
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
              <div className="col-6 ">
                <p className="fw-medium">Expense Date</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 01/01/2024</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Expense Type</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Office Supplies</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Expense Amount</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 350</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver ID</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver Name</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Status</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Pending</p>
              </div>
            </div>
          </div>
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
                <p className="text-muted text-sm">: Purchase of Stationery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExpensesView;