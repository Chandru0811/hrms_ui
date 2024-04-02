import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../../components/common/Delete";

const ExitManagement = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      employeeid: "12",
      reasonforrelieving: "Career Change",
      employeename: "Vijayashree",
      approvalstatus: <span className="badge  badges-Green">Approved</span>,
      assetsreturned: "Yes",
    },
    {
      id: 2,
      employeeid: "15",
      reasonforrelieving: "Relocation",
      employeename: "Vijay",
      approvalstatus: <span className="badge  badges-Red">Rejected</span>,
      assetsreturned: "Yes",
    },
    {
      id: 3,
      employeeid: "20",
      reasonforrelieving: "Personal Issue",
      employeename: "Raguvaran",
      approvalstatus: <span className="badge  badges-Blue">Pending</span>,
      assetsreturned: "Yes",
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
    <div className="container">
      <div className="my-3 d-flex align-items-end justify-content-end">
       
          {/* <button type="button" className="btn btn-button btn-sm">
            Add <i class="bx bx-plus"></i>
          </button> */}
        
      </div>
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col" style={{ whiteSpace: "nowrap" }}>
              S No
            </th>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Reason For Relieving</th>
            <th scope="col">Approval Status</th>
            {/* <th scope="col">Assets Returned</th> */}
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.employeeid}</td>
              <td>{data.employeename}</td>
              <td>{data.reasonforrelieving}</td>
             <td>{data.approvalstatus}</td>
              {/* <td>{data.assetsreturned}</td> */}
              <td>
                <div className="d-flex">
                  <Link to="/exitmanagement/view">
                    <button className="btn btn-sm">
                      <FaEye />
                    </button>
                  </Link>
                  <Link to="/exitmanagement/edit">
                    <button className="btn btn-sm">
                      <FaEdit />
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

export default ExitManagement;
