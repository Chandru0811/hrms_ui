import React from "react";
import { Link } from "react-router-dom";

function PerformanceAppraisalEdit() {
  return (
    <section className="ExitAdd">
     <div className="container">
     <h5 class="text-start my-5">Edit Performance Appraisal</h5>
          <div className="row">
            <div class="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Date
              </lable>
              <div class="input-group mb-3">
              <input
                type="date"
                className={`form-control iconInput `}
                placeholder=""
              />
              </div>
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="form-lable">
                Overall Self Comment
              </lable>
              <div class="input-group mb-3">
              <input
                type="text"
                className={`form-control iconInput `}
                placeholder=""
              />
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Performance Goals 
              </lable>
              <div class="input-group mb-3">
                <input
                  type="text"
                  className={`form-control iconInput `}
                />
                </div>
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="form-lable">
                Appraisal Amt 
              </lable>
              <div class="input-group mb-3">
              <input
                type="text"
                className={`form-control iconInput`}
                placeholder=""
              />
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Performance Review
              </lable>
              <div class="input-group mb-3">
              <input
                type="text"
                className={`form-control iconInput`}
                placeholder=""
              />
              </div>
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="form-lable">Status </lable>
              <div class="input-group mb-3">
                <select
                  class="form-select iconInput "
                  aria-label="Default select example"
                >
                  <option value="Approved">Approved</option>
                  <option selected value="Rejected">Rejected</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-md-6 col-12 mb-2">
              <lable className="form-lable">Performance Feedback</lable>
              <div class="input-group mb-3">
                <input
                  type="text"
                  className={`form-control iconInput `}
                  placeholder=""
                />
              </div>
            </div>
            <div class="col-md-6 col-12 mb-2">
            </div>
          </div>
          <div className="my-3 d-flex justify-content-end align-items-end  mb-5">
          <Link to="/performance">
            <button type="button " className="btn btn-border btn-sm   ">
              Cancel
            </button>
          </Link>
          &nbsp;&nbsp;
          <Link to="/performance">
            <button type="button" className="btn btn-button btn-sm ">
              Update
            </button>
          </Link>
        </div>
        </div>
    </section>
  );
}

export default PerformanceAppraisalEdit;
