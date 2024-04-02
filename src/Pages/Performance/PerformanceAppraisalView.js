import React from "react";
import { Link } from "react-router-dom";

function PerformanceAppraisalView() {
  return (
    <section className="container ">
      <div className="container">
        <div className="my-5 d-flex align-items-center justify-content-between">
          <h5 class="text-start">View Performance Appraisal</h5>
          <Link to={`/performance`}>
            <button type="button" className="btn btn-border btn-sm m-xl-3">
             Back
            </button>
          </Link>
        </div>

        <div className="row mt-5 pb-3">
          <div className="col-md-6 col-12">
            <div className="row mt-3  mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Overall Self Comment</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: No Comment</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2 mt-3">
              <div className="col-6  ">
                <p className="fw-medium">Performance Goals</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Gaming</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Performance Review</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Good</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Performance Feedback</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: No Feedback</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Appraisal Amt</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 0.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Date</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 25-02-24</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Status</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Approved</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Salary</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Part Time Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerformanceAppraisalView;
