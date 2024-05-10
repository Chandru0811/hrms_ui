import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";
import api from '../../config/URL'
import axios from "axios";

const LeaveAdmin = () => {
  const tableRef = useRef(null);
  const [ data,setData]=useState([])
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      // setLoading(true);
      const response = await api.get(
        `getAllLeaveRequests`,
        {
          headers: {
            "Content-Type": "application/json",
            //Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
      setloading(false)
      console.log("object",data)
    } catch (error) {
      console.error("Error fetching data:", error);
    } 
  };

 {/* const datas = [
    {
      id: 1,
      employename: "Sathish",
      department: "Health Department",
      reasonforleave: "Fever",
      // fromdate: "25-02-2024",
      // todate: "30-02-2024",
      // approvalid: "12",
      approvername: "Meena",
      status: "active",
    },
    {
      id: 2,
      employename: "Deepak",
      department: "Product Department",
      reasonforleave: "Causal leave",
      // fromdate: "21-01-2024",
      // todate: "30-01-2024",
      // approvalid: "15",
      approvername: "Dilip",
      status: "in_active",
    },
    {
      id: 3,
      employename: "Deepak",
      department: "Product Department",
      reasonforleave: "Relative marriage",
      // fromdate: "21-01-2024",
      // todate: "30-01-2024",
      // approvalid: "15",
      approvername: "",
      status: "pending",
    },
  ];*/}

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
  }, [loading]);

  return (
    <div className="container my-4">
      <div className="my-5 d-flex justify-content-between">
      </div>

      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col" style={{ whiteSpace: "nowrap" }}>
              S No
            </th>
            <th scope="col">Employee Name</th>
            <th scope="col">Department</th>
            <th scope="col">Reason For Leave</th>
            {/* <th scope="col">From Date</th>
            <th scope="col">To Date</th>
            <th scope="col">Approval ID</th> */}
            <th scope="col">Approver Name</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.leaveReqApproverName}</td>
              <td>{data.department}</td>
              <td>{data.leaveReqRemarks}</td>
              {/* <td>{data.fromdate}</td>
              <td>{data.todate}</td>
              <td>{data.approvalid}</td> */}
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
                  <Link to="/leaveadmin/edit">
                    <button className="btn btn-sm">
                      <FaEdit/>
                    </button>
                  </Link>
                  
                  <Delete />
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
