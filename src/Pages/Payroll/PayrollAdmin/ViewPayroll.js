import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../../config/URL";
import { toast } from "react-toastify";

function Viewpayroll() {

  const [data, setData] = useState([]);
  const { id } = useParams();
  // console.log(id)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`getPayrollById/${id}`);
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
              <Link to="/payrolladmin">
                <button type="button" className="btn btn-sm btn-border">Back</button>
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
                    <p className="text-muted text-sm">: {data.payrollEmpId}</p>
                  </div>
                </div>
              </div> */}
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6  ">
                    <p className="fw-medium">Employee Name</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.employeeName}</p>
                  </div>
                </div>
              </div>
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
                    <p className="fw-medium">Department Name</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.deptId}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6  ">
                    <p className="fw-medium">Gross Pay</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.grossPay}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Bonus</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.bonus}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Deduction</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.deduction}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6  ">
                    <p className="fw-medium">Net Pay</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.netPay}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6">
                    <p className="fw-medium">Status</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.payrollWorkingStatus}</p>
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

export default Viewpayroll;