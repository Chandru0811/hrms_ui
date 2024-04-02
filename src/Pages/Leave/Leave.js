import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
// import Delete from "../../components/common/Delete";

const Leave = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      fromdate:"25-02-2022",
      todate:"27-02-2022",
      reasonforleave:"Fever",
      // leavetype:"",
      approverid:"ecs101",
      approvername: "Meena",
      status: "active",
    },
    {
      id: 2,
      fromdate:"20-06-2022",
      todate:"21-06-2022",
      reasonforleave:"Casual leave",
      // leavetype:"",
      approverid:"ecs121",
      approvername: "Dilip",
      status: "in_active",
    },
    {
      id: 3,
      fromdate:"15-03-2022",
      todate:"17-03-2022",
      reasonforleave:"Relative marriage",
      // leavetype:"",
      approverid:"",
      approvername: "",
      status: "pending",
    },
  ];

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      responsive: true,
    });

    return () => {
      table.destroy();
    };
  }, []);

  return (
    <div className="container my-4">
      <div className="my-5 d-flex justify-content-end">
        <Link to="/leave/add">
          <button type="button" className="btn btn-button btn-sm">
            Add <i class="bx bx-plus"></i>
          </button>
        </Link>
      </div>
      <div className="row mt-5 pb-3">
          <div className="col-md-6 col-12">
            <div className="row mt-3  mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Employee ID</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 10</p>
              </div>
            </div>
          </div>
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
            <div className="row  mb-2">
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
          {datas.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.fromdate}</td>
              <td>{data.todate}</td>
              <td>{data.reasonforleave}</td>
              {/* <td>{data.leavetype}</td> */}
              <td>{data.approverid}</td>
              <td>{data.approvername}</td>
              <td>
                {data.status === "active" ? (
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
