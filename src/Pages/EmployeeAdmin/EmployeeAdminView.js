import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/URL";
import { toast } from "react-toastify";

const EmployeeAdminView = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`getEmployeeRegDetailsById/${id}`);
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
                      <p className="fw-medium">Address</p>
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
                <div className="col-md-6 col-12">
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
                </div>
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
          </div>
        </div>
      )}
    </section>
  );
};

export default EmployeeAdminView;
