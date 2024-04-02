import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEdit, FaEye } from "react-icons/fa";
import Delete from "../../components/common/Delete";

const Department = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      departmentlist: "Financy",
    },
    {
      id: 2,
      departmentlist: "Marketing",
    },
    {
      id: 3,
      departmentlist: "Healthy & Safety",
    },
    {
      id: 4,
      departmentlist: "Accounting",
    },
    {
      id: 5,
      departmentlist: "Information Technology",
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
        <Link to="/departments/add">
          <button type="button" className="btn btn-button btn-sm">
            Add <i class="bx bx-plus"></i>
          </button>
        </Link>
      </div>
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col">S No</th>
            <th scope="col">Department List </th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.departmentlist}</td>
              <td>
               <Link to={`/departments/view`}>
                  <button className="btn btn-sm">
                    <FaEye />
                  </button>
                </Link> 
                <Link to={`/departments/edit`}>
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

export default Department;
