import React from "react";
import Logo from "../../../assets/images/ecs_logo.png";
import "../../../styles/custom.css";
import { Link } from "react-router-dom";

function Payslip() {
  return (
    <section>
      <div className="container">
        <div className="row mt-4">
          <div className="offset-md-1 col-md-5 col-12">
            <lable className="form-lable fw-medium">PAYSLIP MONTH</lable>
            <input type="month" className="form-control" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="offset-md-1 col-md-3 col-12">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </div>
          <div className="col-md-8 col-12 mt-4">
            <h5>ECS CLOUD INFOTECH PVT LTD</h5>
          </div>
        </div>
        <div className="row">
          <div className="offset-md-1 col-md-10 col-12 pb-4">
            <div
              className="px-3 py-3"
              style={{ width: "100%", border: "2px solid #000" }}
            >
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium d-flex justify-content-end">
                        EMPLOYEE ID
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: 01</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium d-flex justify-content-end">
                        EMPLOYEE NAME
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: Nalina Sri</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium d-flex justify-content-end">
                        DATE OF JOINING
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: 01/01/2024</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium d-flex justify-content-end">
                        PAYSLIP MONTH
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: JANUARY</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium d-flex justify-content-end">
                        DESIGNATION
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: JUNIOR DEVELOPER</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium d-flex justify-content-end">
                        DEPARTMENT
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: IT</p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-6 col-12">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium d-flex justify-content-end">
                        BANK NAME
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: HDFC BANK</p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-md-6 col-12">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium d-flex justify-content-end">
                        BANK A/C NO
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: 1234567890</p>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-6 col-12">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium d-flex justify-content-end">
                        PAID DAYS
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: 31</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium d-flex justify-content-end">
                        LOP
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: 0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row paysliptable ">
                <div className="col-md-6 col-12">
                  <table class="table table-end-border table-borderless">
                    <thead className="table-bordered">
                      <tr>
                        <th scope="col">EARNING</th>
                        <th scope="col">HOURS</th>
                        <th scope="col">AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>BASIC SALARY</td>
                        <td>224</td>
                        <td>$4480.00</td>
                      </tr>
                      <tr>
                        <td>OVERTIME</td>
                        <td>5</td>
                        <td>$100.00</td>
                      </tr>
                      <tr>
                        <td>BONUS</td>
                        <td>-</td>
                        <td>$100.00</td>
                      </tr>
                      <tr className="table-bordered">
                        <td>GROSS PAY</td>
                        <td>265</td>
                        <td>$4680.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6 col-12">
                  <table class="table table-borderless">
                    <thead className="table-bordered">
                      <tr>
                        <th scope="col">DEDUCTION</th>
                        <th scope="col">AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>HEALTH</td>
                        <td>$100.00</td>
                      </tr>
                      <tr>
                        <td>LOSS OF PAY</td>
                        <td>$160.00</td>
                      </tr>
                      <tr>
                        <td style={{ visibility: "hidden" }}>jjk</td>
                        <td style={{ visibility: "hidden" }}>fvbg</td>
                      </tr>
                      <tr className="table-bordered">
                        <td>DEDUCTION TOTAL</td>
                        <td>$260.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium">NET PAY</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: $4420.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-3">
                      <p className="fw-medium">IN WORDS</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : Four Thousand Four Hundred Twenty Dollars Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end align-item-end mt-4">
                <Link to="/">
                  <button className="btn btn-sm btn-border mx-2">Back</button>
                </Link>
                <Link to="/">
                  <button className="btn btn-sm btn-button1 mx-2">
                    Download
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payslip;