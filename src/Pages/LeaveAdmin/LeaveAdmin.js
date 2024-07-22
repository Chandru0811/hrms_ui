import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import api from "../../config/URL";
// import axios from "axios";

const LeaveAdmin = () => {
  const tableRef = useRef(null);
  const [data, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const userRole = sessionStorage.getItem("userName");
  // console.log("object",)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("getAllLeaveRequests");
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
      const response = await api.get("getAllLeaveRequests");
      setDatas(response.data);
      // initializeDataTable(); // Reinitialize DataTable after successful data update
    } catch (error) {
      console.error("Error refreshing data:", error.message);
    }
    setLoading(false);
  };

  return (
    <div className="container my-4">
      {userRole === "Admin" && (
        <div className="my-3 d-flex align-items-end justify-content-end">
          <Link to="/leave/add">
            <button type="button" className="btn btn-button btn-sm">
              Add <i className="bx bx-plus"></i>
            </button>
          </Link>
        </div>
      )}
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col" style={{ whiteSpace: "nowrap" }}>
              S No
            </th>

            <th scope="col">Employee Id</th>
            <th scope="col">Employee Name</th>
            {/* <th scope="col">Department</th> */}
            {/* <th scope="col">Reason For Leave</th> */}
            {/* <th scope="col">From Date</th>
            <th scope="col">To Date</th>
            <th scope="col">Approval ID</th> */}
            <th scope="col">Approver Id</th>
            <th scope="col">Approver Name</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.leaveRequestId}</td>
              <td>{data.leaveReqApproverName}</td>
              {/* <td>{data.department}</td> */}
              {/* <td>{data.leaveReqRemarks}</td> */}
              {/* <td>{data.fromdate}</td>
              <td>{data.todate}</td>
              <td>{data.approvalid}</td> */}
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
                  <Link to={`/leaveadmin/view/${data.leaveRequestId}`}>
                    <button className="btn btn-sm">
                      <FaEye />
                    </button>
                  </Link>
                  <Link to={`/leaveadmin/edit/${data.leaveRequestId}`}>
                    <button className="btn btn-sm">
                      <FaEdit />
                    </button>
                  </Link>

                  {/* <Delete /> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveAdmin;
