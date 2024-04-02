import React from "react";
import { Link } from "react-router-dom";

function DepartmentView() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 text-end">
          <Link to="/departments">
            <button className="btn btn-sm btn-border">Back</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 col-12">
              <div className="row mb-2">
                <div className="col-6">
                  <p className="fw-medium">Enter Department Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Health Department</p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-6">
                  <p className="fw-medium">Enter Department Description</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: IT Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentView;
