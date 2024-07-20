import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/URL";
import { toast } from "react-toastify";

function ComplianceView() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`getCompanyComplianceInfoById/${id}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("Error Fetching Data ", error.message);
      }
    };
    getData();
  }, [id]);

  // const reverseDateFormat = (dateString) =>
  //   dateString.split("-").reverse().join("-");

  return (
    <section>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!loading && (
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 text-end">
              <Link to="/compliance">
                <button type="button" className="btn btn-sm btn-border">
                  Back
                </button>
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="row mt-5 pb-3">
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Company Name</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">
                      : {data.compComplianceCmpName}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6  ">
                    <p className="fw-medium">Designation Name</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">
                      : {data.compComplianceDesignationName}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Designation Category</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">
                      : {data.compComplianceDesignationCategory}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Leave Limit</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">
                      : {data.compComplianceLeaveLimit}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Salary Calculation Day</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">
                      :{" "}
                      {data.compComplianceSalaryCalculationDay
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6  ">
                    <p className="fw-medium">Salary Day</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">
                      :{" "}
                      {data.compComplianceSalaryDay
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Remarks</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">
                      : {data.compComplianceRemarks}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ComplianceView;
