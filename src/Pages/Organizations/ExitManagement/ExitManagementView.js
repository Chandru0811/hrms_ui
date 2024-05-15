import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../config/URL";

function ExitManagementView() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`getExitManagementById/${id}`);
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
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 text-end">
              <Link to="/exitmanagement">
                <button className="btn btn-sm btn-border">Back</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="row mt-5 pb-3">
                {/* <div className="col-md-6 col-12">
                  <div className="row   mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Employee ID</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.exitMgmtEmpId}
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-6 col-12">
                  <div className="row   mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Employee Name</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.exitMgmtEmpId}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row  mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Company Name</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.exitMgmtCmpId}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row  mb-2 ">
                    <div className="col-6  ">
                      <p className="fw-medium">Reason For Relieving</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.reasonForRelieving}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row  mb-2">
                    <div className="col-6  ">
                      <p className="fw-medium">Date Of Relieving</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.dateOfRelieving
                          ? data.dateOfRelieving.substring(0, 10)
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row   mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Date Of Apply</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.exitMgmtDateOfApply
                          ? data.exitMgmtDateOfApply.substring(0, 10)
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row   mb-2">
                    <div className="col-6 ">
                      <p className="fw-medium">Notice Period</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.exitMgmtNoticePeriod}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-6 col-12">
                <div className="row   mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Current Date</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: 11-03-2024</p>
                  </div>
                </div>
              </div> */}
                <div className="col-md-6 col-12">
                  <div className="row  mb-2">
                    <div className="col-6  ">
                      <p className="fw-medium">Relieving Approval ID</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.relievingApproverId}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row  mb-2">
                    <div className="col-6">
                      <p className="fw-medium">Relieving Approval Name</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.relievingApproverName}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row  mb-2">
                    <div className="col-6  ">
                      <p className="fw-medium">Assets Returned</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.assetsReturned ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row  mb-2">
                    <div className="col-6  ">
                      <p className="fw-medium">Approval Status</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.relievingApprovalStatus}
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
}

export default ExitManagementView;
