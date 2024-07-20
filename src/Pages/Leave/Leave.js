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
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      // setLoading(true);
      const response = await api.get(`getAllLeaveRequests`, {
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setData(response.data);
        console.log("object", data);
        setloading(false)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const datas = [
  //   {
  //     id: 1,
  //     fromdate: "25-02-2022",
  //     todate: "27-02-2022",
  //     reasonforleave: "Fever",
  //     // leavetype:"",
  //     approverid: "ecs101",
  //     approvername: "Meena",
  //     status: "active",
  //   },
  //   {
  //     id: 2,
  //     fromdate: "20-06-2022",
  //     todate: "21-06-2022",
  //     reasonforleave: "Casual leave",
  //     // leavetype:"",
  //     approverid: "ecs121",
  //     approvername: "Dilip",
  //     status: "in_active",
  //   },
  //   {
  //     id: 3,
  //     fromdate: "15-03-2022",
  //     todate: "17-03-2022",
  //     reasonforleave: "Relative marriage",
  //     // leavetype:"",
  //     approverid: "",
  //     approvername: "",
  //     status: "pending",
  //   },
  // ];

  useEffect(() => {
    fetchData();
    if (!loading) {
      const table = $(tableRef.current).DataTable({
        responsive: true,
      });
      return () => {
        table.destroy();
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
