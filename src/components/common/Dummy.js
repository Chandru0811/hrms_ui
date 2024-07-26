import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Invoice from "../../assets/images/Invoice.png";
import api from "../../config/URL";
import { toast } from "react-toastify";

export default function ExpensesView() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`getEmployeeRegDetailsById/49`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        // console.log(error.message);
        toast.error("Error Fetching Data ", error.message);
      }
    };
    getData();
  }, [id]);

  return (
    <section>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!loading && (
        <div className="container py-4">
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
          <div>
            <div className="container mt-5">
              <h4>Personal Information</h4>
              <div className="row mt-5 pb-3">
                <div className="col-md-6 col-12">
                  <div className="row mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">First Name</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: {data.firstName}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Last Name</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: {data.lastName}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row  mb-2  ">
                    <div className="col-6  ">
                      <p className="fw-medium">Primary Phone No</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.empPriPhNumber}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Start Date</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: {data.address}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Primary Email ID</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: {data.empPriEmail}</p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Primary Email Password</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.empPriEmailPassword}
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">NRIC Fin</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: {data.nricfin}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">NRIC Type</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: {data.nrictype}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Company Name</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.empRegCmpName}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Employee ID</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">: {data.employeeId}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Employee Name</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.firstName}&nbsp;{data.lastName}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Department Name</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.empRegDeptName}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Employee Designation</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.employeeDesignation}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Employee Date Of Joining</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.employeeDateOfJoining}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Notice Period</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.noticePeriod}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Reporting Manager ID</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.reportingManagerId}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Reporting Manager Name</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.reportingManagerName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-3">
              <h4>Contact Details</h4>
              <div className="row mt-5 pb-3">
                <div className="col-md-6 col-12">
                  <div className="row mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Date of Birth</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].dob
                          ? data.empPersonalDetailsEntities[0].dob.substring(
                              0,
                              10
                            )
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Gender</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].gender
                          ? data.empPersonalDetailsEntities[0].gender
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row  mb-2  ">
                    <div className="col-6  ">
                      <p className="fw-medium">Marital Status</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].maritalStatus
                          ? data.empPersonalDetailsEntities[0].maritalStatus
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Religion</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].religion
                          ? data.empPersonalDetailsEntities[0].religion
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Address</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].empAddr
                          ? data.empPersonalDetailsEntities[0].empAddr
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Primary Email Password</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.empPriEmailPassword}
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">City</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        {" "}
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].city
                          ? data.empPersonalDetailsEntities[0].city
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Pincode</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        {" "}
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].pincode
                          ? data.empPersonalDetailsEntities[0].pincode
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Secondary Email ID</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].empSecEmail
                          ? data.empPersonalDetailsEntities[0].empSecEmail
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Secondary Phone Number</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        {" "}
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].empSecPhNumber
                          ? data.empPersonalDetailsEntities[0].empSecPhNumber
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="container mt-3">
              <h4>Qualification Details</h4>
              <div className="row mt-5 pb-3">
                <div className="col-md-6 col-12">
                  <div className="row mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Qualification Name</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].dob
                          ? data.empPersonalDetailsEntities[0].dob.substring(
                              0,
                              10
                            )
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Qualification Type</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].gender
                          ? data.empPersonalDetailsEntities[0].gender
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row  mb-2  ">
                    <div className="col-6  ">
                      <p className="fw-medium">Field of Study</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].maritalStatus
                          ? data.empPersonalDetailsEntities[0].maritalStatus
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">
                      Mode of Study</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].religion
                          ? data.empPersonalDetailsEntities[0].religion
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Start Date</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].empAddr
                          ? data.empPersonalDetailsEntities[0].empAddr
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">End Date</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        {" "}
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].city
                          ? data.empPersonalDetailsEntities[0].city
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Institution</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        {" "}
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].pincode
                          ? data.empPersonalDetailsEntities[0].pincode
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Secondary Email ID</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].empSecEmail
                          ? data.empPersonalDetailsEntities[0].empSecEmail
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row    mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Secondary Phone Number</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        {" "}
                        :{" "}
                        {data.empPersonalDetailsEntities &&
                        data.empPersonalDetailsEntities.length > 0 &&
                        data.empPersonalDetailsEntities[0].empSecPhNumber
                          ? data.empPersonalDetailsEntities[0].empSecPhNumber
                          : "--"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div class="container mt-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed  bg-light fs-5 shadow-none border-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Parent / Guardian
                </button>
              </h2>
              {data.studentParentsDetails &&
                data.studentParentsDetails.length > 0 &&
                data.studentParentsDetails.map((parent, index) => (
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                    key={index}
                  >
                    <div class="accordion-body">
                      <div className="row pb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <button
                            className="btn btn-sm border-none text-primary px-3 my-3 fw-bold fs-4"
                            style={{ backgroundColor: "#b2d3df" }}
                          >
                            {index + 1}
                          </button>
                        </div>
                        <div className="col-10"></div>
                        <div className="col-2">
                          {parent.primaryContact && (
                            <div className="col-12 mb-2">
                              <p className="badge text-bg-primary">primary</p>
                            </div>
                          )}
                        </div>
                        <div className="col-md-6 col-12">
                          <div className="row  mb-2">
                            <div className="col-6  ">
                              <p className="fw-medium">
                                Parents / Guardian Name
                              </p>
                            </div>
                            <div className="col-6">
                              <p className="text-muted text-sm">
                                <b className="mx-2">:</b>
                                {parent.parentName || "--"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-12">
                          <div className="row  mb-2">
                            <div className="col-6  ">
                              <p className="fw-medium">Occupation</p>
                            </div>
                            <div className="col-6">
                              <p className="text-muted text-sm">
                                <b className="mx-2">:</b>
                                {parent.occupation || "--"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-12">
                          <div className="row  mb-2">
                            <div className="col-6  ">
                              <p className="fw-medium">Date of Birth</p>
                            </div>
                            <div className="col-6">
                              <p className="text-muted text-sm">
                                <b className="mx-2">:</b>
                                {(parent.parentDateOfBirth &&
                                  parent.parentDateOfBirth.substring(0, 10)) ||
                                  "--"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-12">
                          <div className="row  mb-2">
                            <div className="col-6  ">
                              <p className="fw-medium">Email</p>
                            </div>
                            <div className="col-6" style={{ overflow: "auto" }}>
                              <p className="text-muted text-sm">
                                <b className="mx-2">:</b>
                                {parent.email || "--"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-12">
                          <div className="row  mb-2">
                            <div className="col-6  ">
                              <p className="fw-medium">Mobile No</p>
                            </div>
                            <div className="col-6">
                              <p className="text-muted text-sm">
                                <b className="mx-2">:</b>
                                {parent.mobileNumber || "--"}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* <div className="col-md-6 col-12">
                        <div className="row  mb-2">
                          <div className="col-6  ">
                            <p className="fw-medium">Relation</p>
                          </div>
                          <div className="col-6">
                            <p className="text-muted text-sm">
                              <b className="mx-2">:</b>
                              {parent.relation || "--"}
                            </p>
                          </div>
                        </div>
                      </div> */}
                        <div className="col-md-6 col-12">
                          <div className="row  mb-2">
                            <div className="col-6  ">
                              <p className="fw-medium">Postal Code</p>
                            </div>
                            <div className="col-6">
                              <p className="text-muted text-sm">
                                <b className="mx-2">:</b>
                                {parent.postalCode || "--"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-12">
                          <div className="row  mb-2">
                            <div className="col-6  ">
                              <p className="fw-medium">Profile Image</p>
                            </div>
                            <div className="col-6">
                              <p className="text-muted text-sm">
                                <b className="mx-2">:</b>
                                <p className="my-2 d-flex">
                                  {parent.profileImage ? (
                                    <img
                                      src={parent.profileImage}
                                      className="img-fluid ms-2 w-100 rounded"
                                      alt=""
                                    />
                                  ) : (
                                    <div></div>
                                  )}
                                </p>
                                {/* {data.studentParentsDetails &&
                          data.studentParentsDetails.length > 0 &&
                          data.studentParentsDetails[0].profileImage
                            ? data.studentParentsDetails[0].profileImage
                            : "--"} */}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-12">
                          <div className="row  mb-2">
                            <div className="col-6  ">
                              <p className="fw-medium">Address</p>
                            </div>
                            <div className="col-6">
                              <p className="text-muted text-sm">
                                <b className="mx-2">:</b>
                                {data.studentParentsDetails &&
                                data.studentParentsDetails.length > 0 &&
                                data.studentParentsDetails[0].address
                                  ? data.studentParentsDetails[0].address
                                  : "--"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <br />
                    </div>
                  </div>
                ))}
              {(!data.studentParentsDetails ||
                data.studentParentsDetails.length === 0) && (
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    <div className="text-muted">
                      No parent/guardian information available
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
