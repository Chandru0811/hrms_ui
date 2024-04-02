import React from "react";
// import QR from "../../assets/images/";
// import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

function PolicyView() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 text-end">
          <Link to="/policy">
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
                  <p className="fw-medium">Enter Policy Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Michelle Sng</p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-6">
                  <p className="fw-medium">Enter Policy Description</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 6 Months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolicyView;
