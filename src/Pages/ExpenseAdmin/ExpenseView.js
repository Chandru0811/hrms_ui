import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/URL";
import { toast } from "react-toastify";

export default function ExpensesView() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  console.log("data", data);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`expenses/${id}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        // console.log(error.message);
        toast.error("Error Fetching Data ", error.message);
      }
    };
    getData();
    // fetchData();
  }, [id]);
  return (
    <div className="container">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <div className="row mt-3">
        <div className="col-12 text-end">
          <Link to="/expenseadmin">
            <button type="button" className="btn btn-sm btn-border">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          {/* <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Employee ID</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: ECS01</p>
              </div>
            </div>
          </div> */}
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Employee Name</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">:{data.expensesEmpId}</p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company ID</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: ECS13</p>
              </div>
            </div>
          </div> */}
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Name</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.cmpId}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Expense Date</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">
                  : {new Date(data.expenseDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Expense Type</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.expenseType}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Expense Amount</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.expenseAmt}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver ID</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver Name</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.approverName}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Status</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.approverStatus}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Attachment</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm d-flex">
                  :&nbsp;<img src={data.attachment} alt="invoice"></img>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Remarks</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.expenseDetails}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
