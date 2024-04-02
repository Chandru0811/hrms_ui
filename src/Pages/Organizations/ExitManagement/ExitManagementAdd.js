import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function ExitManagementAdd() {

  const [approvalStatus, setApprovalStatus] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const handleApprovalStatusChange = (event) => {
    setApprovalStatus(event.target.value);
    setCurrentDate(new Date().toISOString().slice(0, 10));
  };
  return (
    <section className="ExitAdd p-3">
      <h5 class="text-start my-5">Add Exit Management</h5>
      <div className="container">
        <div className="row">
        <div className="container">
      <div className="row">
        <div class="col-md-6 col-12 mb-2">
          <lable className="form-lable">Employee ID</lable>
          <div class="input-group mb-3">
            <input
              type="text"
              className={`form-control iconInput `}
              placeholder=""
              value={"23"}
            />
          </div>
        </div>
        <div class="col-md-6 col-12 mb-2">
          <lable class="form-lable">Employee Name</lable>
          <div class="input-group mb-3">
            <input
              type="text"
              className={`form-control iconInput `}
              placeholder=""
              value={"Raguvaran"}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-md-6 col-12 mb-2">
          <lable className="form-lable">Company Id</lable>
          <div class="input-group mb-3">
            <input type="text" className={`form-control iconInput `}
            value={"EMP#01"}
            />
          </div>
        </div>
        <div class="col-md-6 col-12 mb-2">
          <lable class="form-lable">Reason For Relieving</lable>
          <div class="input-group mb-3">
            <input
              type="text"
              className={`form-control iconInput`}
              placeholder=""
              value={"Personal Issue"}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-md-6 col-12 mb-2">
          <lable className="form-lable">Date of Relieving</lable>
          <div class="input-group mb-3">
            <input
              type="date"
              className={`form-control iconInput`}
              value={"2024-04-03"}
            />
          </div>
        </div>
        <div class="col-md-6 col-12 mb-2">
          <lable class="form-lable">Date Of Apply </lable>
          <div class="input-group mb-3">
          <input
              type="date"
              className={`form-control iconInput`}
              value={"2024-04-03"}
            />
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div class="col-md-6 col-12 mb-2">
          <lable className="form-lable">Notice Period</lable>
          <div class="input-group mb-3">
            <input
              type="text"
              className={`form-control iconInput `}
              placeholder=""
              value={"2 Months"}
            />
          </div>
        </div>
        <div class="col-md-6 col-12 mb-2"></div>
      </div>
    
    </div>
          <div class="col-md-6 col-12 mb-2">
            <lable className="form-lable">Employee ID</lable>
            <div class="input-group mb-3">
              <input
                type="text"
                className={`form-control iconInput `}
                
                placeholder=""
              />
            </div>
          </div>
          <div class="col-md-6 col-12 mb-2">
            <lable class="form-lable">Reason For Relieving</lable>
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
            <lable className="form-lable">Date Of Relieving</lable>
            <div class="input-group mb-3">
              <input type="date" className={`form-control iconInput `} />
            </div>
          </div>
          <div class="col-md-6 col-12 mb-2">
            <lable class="form-lable">Relieving Approver</lable>
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
            <lable className="form-lable">Relieving Approver ID</lable>
            <div class="input-group mb-3">
              <input
                type="text"
                className={`form-control iconInput`}
                placeholder=""
              />
            </div>
          </div>
          <div class="col-md-6 col-12 mb-2">
            <lable className="form-lable">Assets Returned</lable>
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
            <lable class="form-lable">Approval Status </lable>
            <div class="input-group mb-3">
              <select
               className="form-select iconInput"
               aria-label="Default select example"
               value={approvalStatus}
               onChange={handleApprovalStatusChange}
              >
                <option selected></option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Rejected">Pending</option>
              </select>
            </div>
          </div>
            <div class="col-md-6 col-12 mb-2">
            <lable className="form-lable">Current Date</lable>
            <div class="input-group mb-3">
              <input
               type="date"
               className="form-control iconInput"
               value={currentDate}
               readOnly
             />
            </div>
          </div>
        </div>
        <div className="my-3 d-flex justify-content-end align-items-end  mb-5">
          <Link to="/exitmanagement">
            <button type="button " className="btn btn-border btn-sm   ">
              Cancel
            </button>
          </Link>
          &nbsp;&nbsp;
          <Link to="/exitmanagement">
            <button type="button" className="btn btn-button btn-sm ">
              Save
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ExitManagementAdd;