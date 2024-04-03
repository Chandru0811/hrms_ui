import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";

const ClaimAdmin = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      employeeID: "12",
      employeeName: "Vijayashree",
      AppliedDate: "25/01/2024",
      ClaimDate: "22/01/2024",
      ClaimType: "Telephone",
      ClaimAmount: "$120",
      AppLvl1: "Approved",
      AppLvl2: "Approved",
    },
    {
      id: 2,
      employeeID: "15",
      employeeName: "Vijay",
      AppliedDate: "25/01/2024",
      ClaimDate: "22/01/2024",
      ClaimType: "Taxi",
      ClaimAmount: "$120",
      AppLvl1: "Approved",
      AppLvl2: "Pending",
    },
    {
      id: 3,
      employeeID: "20",
      employeeName: "Raguvaran",
      AppliedDate: "18/01/2024",
      ClaimDate: "10/01/2024",
      ClaimType: "Hotel and Acc",
      ClaimAmount: "$60",
      AppLvl1: "Rejected",
      AppLvl2: "Rejected",
    },
    {
      id: 4,
      employeeID: "2",
      employeeName: "Nalini Sri",
      AppliedDate: "16/01/2024",
      ClaimDate: "12/01/2024",
      ClaimAmount: "$80",
      ClaimType: "Leave Enhance",
      AppLvl1: "Approved",
      AppLvl2: "Pending",
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
      <div className="col-12 text-end my-3">
        <Link to="/claimadmin/add">
          <button type="button" className="btn btn-sm btn-button">
            Add <i class="bx bx-plus"></i>
          </button>
        </Link>
      </div>
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col">S No</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee Name</th>
            {/* <th scope="col">Applied Date</th> */}
            {/* <th scope="col">Claim Date</th>
            <th scope="col">Claim Type</th> */}
            <th scope="col">Claim Amount</th>
            <th scope="col">App-Lvl 1</th>
            <th scope="col">App-Lvl 2</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.employeeID}</td>
              <td>{data.employeeName}</td>
              {/* <td>{data.AppliedDate}</td> */}
              {/* <td>{data.ClaimDate}</td>
              <td>{data.ClaimType}</td> */}
              <td>{data.ClaimAmount}</td>
              <td>
                {data.AppLvl1 === "Approved" ? (
                  <span className="badge badges-Green">Approved</span>
                ) : data.AppLvl1 === "Pending" ? (
                  <span className="badge badges-Blue">Pending</span>
                ) : (
                  <span className="badge badges-Red">Rejected</span>
                )}
              </td>
              <td>
                {data.AppLvl2 === "Approved" ? (
                  <span className="badge badges-Green">Approved</span>
                ) : data.AppLvl2 === "Pending" ? (
                  <span className="badge badges-Blue">Pending</span>
                ) : (
                  <span className="badge badges-Red">Rejected</span>
                )}
              </td>
              <td>
                <div className="d-flex">
                  <Link to="/claimadmin/view">
                    <button className="btn btn-sm">
                      <FaEye />
                    </button>
                  </Link>
                  <Link to="/claimadmin/edit">
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

export default ClaimAdmin;
