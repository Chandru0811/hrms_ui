import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";

const Deduction = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      EmployeeId: "345",
      EmployeeName: "Suriya",
      DeductionName: "CPF",
      DeductionAmount: "$20",
    },
    {
      id: 2,
      EmployeeId: "567",
      EmployeeName: "Chandru",
      DeductionName: "Loss Of Pay",
      DeductionAmount: "$15",
    },
    {
      id: 3,
      EmployeeId: "567",
      EmployeeName: "Saravana",
      DeductionName: "Loss Of Pay",
      DeductionAmount: "$15",
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
      <div className="my-3 d-flex align-items-end justify-content-end">
        <Link to="/deductions/add">
          <button type="button" className="btn btn-button btn-sm">
            Add <i className="bx bx-plus"></i>
          </button>
        </Link>
      </div>
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col">S No</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Deduction Name</th>
            <th scope="col">Deduction Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.EmployeeId}</td>
              <td>{data.EmployeeName}</td>
              <td>{data.DeductionName}</td>
              <td>{data.DeductionAmount}</td>
              <td>
                <Link to="/deductions/view">
                  <button className="btn btn-sm">
                    <FaEye />
                  </button>
                </Link>
                <Link to="/deductions/edit">
                  <button className="btn btn-sm">
                    <FaEdit />
                  </button>
                </Link>
                <Delete />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Deduction;
