import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";
// import ExpenseStatus from "../ExpenseAdmin/ExpenseStatus";

const Payroll = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      employeeID: "2",
      expenseID: "1",
      date: "01/01/2024",
      type: "Office Supplies",
      amount: "$350",
      status: "Approved",
    },
    {
      id: 2,
      employeeID: " 4",
      expenseID: "2",
      date: "22/01/2024",
      type: "Equipment",
      amount: "$270",
      status: "Pending",
    },
    {
      id: 3,
      employeeID: " 6",
      expenseID: "2",
      date: "16/01/2024",
      type: "Training",
      amount: "$1500",
      status: "Rejected",
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
      <div className="col-12 text-end my-3">
        <Link to="/expenseadmin/add">
          <button type="button" className="btn btn-button btn-sm">Add  <i class="bx bx-plus"></i></button>
        </Link>
      </div>
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col">S No</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Expense ID</th>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.employeeID}</td>
              <td>{data.expenseID}</td>
              <td>{data.date}</td>
              <td>{data.type}</td>
              <td>{data.amount}</td>
              <td>
                {data.status === "Approved" ? (
                  <span className="badge badges-Green">Approved</span>
                ) : data.status === "Pending" ? (
                  <span className="badge badges-Yellow">Pending</span>
                ) : (
                  <span className="badge badges-Red">Rejected</span>
                )}
              </td>
              <td>
                <Link to="/expenseadmin/view">
                  <button className="btn btn-sm">
                    <FaEye />
                  </button>
                </Link>
                <Link to="/expenseadmin/edit">
                  <button className="btn btn-sm">
                    <FaEdit />
                  </button>
                </Link>
                {/* <ExpenseStatus /> */}
                <Delete />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payroll;