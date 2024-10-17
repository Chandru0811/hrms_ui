import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import api from "../../config/URL";
// import Delete from "../../components/common/Delete";

const Leave = () => {
  const tableRef = useRef(null);
  const [data, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  // const userRole = sessionStorage.getItem("userName");
  // console.log("object",)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("leave-request");
        setDatas(response.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data ", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (!loading) {
      initializeDataTable();
    }
    return () => {
      destroyDataTable();
    };
  }, [loading]);
  const initializeDataTable = () => {
    if ($.fn.DataTable.isDataTable(tableRef.current)) {
      return;
    }
    $(tableRef.current).DataTable({
      responsive: true,
    });
  };

  const destroyDataTable = () => {
    const table = $(tableRef.current).DataTable();
    if (table && $.fn.DataTable.isDataTable(tableRef.current)) {
      table.destroy();
    }
  };

  const refreshData = async () => {
    destroyDataTable();
    setLoading(true);
    try {
      const response = await api.get("leave-request");
      setDatas(response.data);
      // initializeDataTable(); // Reinitialize DataTable after successful data update
    } catch (error) {
      console.error("Error refreshing data:", error.message);
    }
    setLoading(false);
  };

  return (
    <div className="container my-3">
      <div className="my-3 d-flex justify-content-end">
        <Link to="/leave/add">
          <button type="button" className="btn btn-button btn-sm">
            Add <i class="bx bx-plus"></i>
          </button>
        </Link>
      </div>
      <div className="row mt-5 pb-3">
        <div className="col-md-6 col-12">
          <div className="row  mb-2 mt-3">
            <div className="col-6  ">
              <p className="fw-medium">Employee Name</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: Suriya</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row mb-2 mt-3">
            <div className="col-6  ">
              <p className="fw-medium">Leave Limit</p>
            </div>
            <div className="col-6">
              <p className="text-muted text-sm">: 18</p>
            </div>
          </div>
        </div>
      </div>

      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col" style={{ whiteSpace: "nowrap" }}>
              S No
            </th>
            <th scope="col">From Date</th>
            <th scope="col">To Date</th>
            <th scope="col">Reason For Leave</th>
            {/* <th scope="col">Leave Type</th> */}
            <th scope="col">Approver ID</th>
            <th scope="col">Approver Name</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.leaveReqStartDate.split('T')[0]}</td>
              <td>{data.leaveReqEndDate.split('T')[0]}</td>
              <td>{data.leaveReqRemarks}</td>
              {/* <td>{data.leavetype}</td> */}
              <td>{data.leaveReqApproverId}</td>
              <td>{data.leaveReqApproverName}</td>
              <td>
                {data.leaveReqStatus === "active" ? (
                  <span className="badge badges-Green">Approved</span>
                ) : data.status === "in_active" ? (
                  <span className="badge badges-Red">Rejected</span>
                ) : (
                  <span className="badge badges-Blue">Pending</span>
                )}
              </td>
              <td>
                <div className="d-flex">
                  <Link to="/leave/view">
                    <button className="btn btn-sm">
                      <FaEye />
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leave;
