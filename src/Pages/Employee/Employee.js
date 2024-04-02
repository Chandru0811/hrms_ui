import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";

const Employee = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      empId: "01",
      firstName: "Dineshh",
      lastName: "Kumar",
      nric: "S83745461",
      //   nricType: "PR",
      phone: "89326354",
      emailId: "dineshkumar@gmail.com",
      //   disignation:"Data Analyst",
    },
    {
      id: 2,
      empId: "03",
      firstName: "Suja",
      lastName: "Jayan",
      nric: "S8373653H",
      //   nricType: "PR",
      phone: "92761589",
      emailId: "sujakarthick@gmail.com",
      //   disignation:"Financial Asst",
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
      <div className="my-3 d-flex justify-content-end mb-5">
        <Link to="/employee/add">
          <button type="button" className="btn btn-button btn-sm">
            <i class="bx bx-plus"></i> Add
          </button>
        </Link>
      </div>
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col" style={{ whiteSpace: "nowrap" }}>
              S No
            </th>
            <th scope="col">Employee ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">NRIC</th>
            {/* <th scope="col">NRIC Type</th> */}
            <th scope="col">Phone No</th>
            <th scope="col">Email ID</th>
            {/* <th scope="col">Designation</th> */}
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.empId}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.nric}</td>
              {/* <td>{data.nricType}</td> */}
              <td>{data.phone}</td>
              <td>{data.emailId}</td>
              {/* <td>{data.disignation}</td> */}
              <td>
                <div className="d-flex">
                  <Link to={`/employee/view`}>
                    <button className="btn btn-sm">
                      <FaEye />
                    </button>
                  </Link>
                  <Link to={`/employee/edit`}>
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

export default Employee;
