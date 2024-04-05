import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../assets/images/Profile_Image_1.jpg";

function EmployeeView() {
  return (
    <div class="container-fluid minHeight mb-5 px-2">
      <div class="container-fluid py-4">
        <div className="row">
          <div className="col-12 text-end">
            <Link to="/employeeadmin">
              <button className="btn btn-sm btn-border">Back</button>
            </Link>
            &nbsp;&nbsp;
            <Link to="/employee/add">
              <button className="btn btn-sm btn-button">Update</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="headColor">Personal Details</p>
        <div className="d-flex align-items-center justify-content-center ">
          <img className="img-fluid rounded-circle" width={100} height={100} src={Profile} alt="Profile"></img>
        </div>
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
                <p className="text-muted text-sm">: 12345678</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2  ">
              <div className="col-6  ">
                <p className="fw-medium">Primary Phone No</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 9876543210</p>
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
                <p className="text-muted text-sm">: React_01</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row    mb-2">
              <div className="col-6 ">
                <p className="fw-medium">NRIC Fin</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 5678</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row    mb-2">
              <div className="col-6 ">
                <p className="fw-medium">NRIC Type</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Singapore PR</p>
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
                <p className="fw-medium">Employee Type</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: Full Time</p>
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

      {/* <p class="headColor mt-3 ps-3">Designation Details</p>
      <div className="row mt-4">
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Department ID</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">:25</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Date Of Joining</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: 2020-05-25</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Department Name</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: Health Department</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 ">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Reporting Manager</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">:Deepak</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Designation</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: Singapore Citizen</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Reporting Manager Ref IF</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: high-level management</p>
            </div>
          </div>
        </div>
      </div>

      <p class="headColor mt-3 ps-3">Qualification Details</p>
      <div className="row mt-4">
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Qualification Name</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: Master</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Field of study</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">:University of Dubai</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Qualification Type</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: Computer Science</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 ">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Mode Of Study</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: Developer</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Instution Name</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: University of Dubai</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Start Date</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">:25-05-22</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">start Date</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">:25-08-22</p>
            </div>
          </div>
        </div>
      </div>

      <p class="headColor mt-3 ps-3">Skills Details</p>
      <div className="row mt-4">
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Skill Name</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: React js</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Years of Experience </p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: 3 years</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Skill Description </p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: React is a JavaScript-based UI development library.</p>
            </div>
          </div>
        </div>
      </div>

      <p class="headColor mt-3 ps-3">Experience Details</p>
      <div className="row mt-4">
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Company Name </p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: cloud Ecs infotech</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Company Address </p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: 282A SengKang East Avenue #07-591</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Start Date</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">:25-01-21</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 ">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">start Date</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: 25-02-2023</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Experience Description</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: Evelyn Chia Si Ting</p>
            </div>
          </div>
        </div>
      </div>

      <p class="headColor mt-3 ps-3">Previous Company Reference Details</p>
      <div className="row mt-4">
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Company Name </p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: Cloud Ecs infotech pvt Ltd</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Company Address </p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: 282A SengKang East Avenue #07-591</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Refferal Name</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: Evelyn Chia Si Ting</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 ">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Refferal Contact No</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: 852579345</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-3 ps-3">
            <div className="col-6 d-flex justify-content-start">
              <p className="text-sm fw-medium">Refferal Job title</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: React</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default EmployeeView;
