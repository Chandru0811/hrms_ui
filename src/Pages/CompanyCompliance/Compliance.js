import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";

const Compliance = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      designationName: "Finance Manager",
      designationCategory: "Permanent",
      leaveLimit: "15",
      salaryDay: "2024-04-30",
    },
    {
      id: 2,
      designationName: "Finance Assistant",
      designationCategory: "Permanent",
      leaveLimit: "10",
      salaryDay: "2024-04-30",
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
        <Link to="/compliance/add">
          <button type="button" className="btn btn-sm btn-button">
            Add <i class="bx bx-plus"></i>
          </button>
        </Link>
      </div>
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col">S No</th>
            <th scope="col">Designation Name</th>
            <th scope="col">Designation Category</th>
            <th scope="col">Leave Limit</th>
            <th scope="col">Salary Day</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.designationName}</td>
              <td>{data.designationCategory}</td>
              <td>{data.leaveLimit}</td>
              <td>{data.salaryDay}</td>
              <td>
                <div className="d-flex">
                  <Link to={`/compliance/view`}>
                    <button className="btn btn-sm">
                      <FaEye />
                    </button>
                  </Link>
                  <Link to={`/compliance/edit`}>
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

export default Compliance;
