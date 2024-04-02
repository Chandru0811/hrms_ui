import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";

const EmployeeAdmin = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      empDes: "Manager",
      deteOfjoining: "24/02/2002",
      repManId: "05",
      repManName: "Dinesh",
    },
    {
      id: 2,
      empDes: "Devoloper",
      deteOfjoining: "24/02/2002",
      repManId: "10",
      repManName: "Shakthi",
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
        <Link to="/employeeadmin/add">
          <button type="button" className="btn btn-button btn-sm">
            Add <i className="bx bx-plus"></i>
          </button>
        </Link>
      </div>
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col" style={{ whiteSpace: "nowrap" }}>
              S No
            </th>
            <th scope="col">Designation</th>
            <th scope="col">Date Of Joining</th>
            <th scope="col">Reporting Manager ID</th>
            <th scope="col">Reporting Manager</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.empDes}</td>
              <td>{data.deteOfjoining}</td>
              <td>{data.repManId}</td>
              <td>{data.repManName}</td>
              <td>
                <div className="d-flex">
                  <Link to={`/employee/view`}>
                    <button className="btn btn-sm">
                      <FaEye />
                    </button>
                  </Link>
                  <Link to={`/employeeadmin/edit`}>
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

export default EmployeeAdmin;
