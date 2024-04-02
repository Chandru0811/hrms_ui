import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEdit, FaEye } from "react-icons/fa";
import Delete from "../../components/common/Delete";

const Policy = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      sno: 1,

      hrpolicy: "Financy Policy",
    },
    {
      sno: 2,

      hrpolicy: "Marketing Policy",
    },
    {
      sno: 3,

      hrpolicy: "Healthy & Safety Policy ",
    },
    {
      sno: 4,

      hrpolicy: "Leave Policy",
    },
    {
      sno: 5,

      hrpolicy: "Attendance Policy",
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
        <Link to="/policy/add">
          <button type="button" className="btn btn-button btn-sm">
            Add <i class="bx bx-plus"></i>
          </button>
        </Link>
      </div>
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col" style={{ whiteSpace: "nowrap" }}>
              S No
            </th>
            <th scope="col">Hr Policy</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.hrpolicy}</td>
              <td>
                <div className="d-flex">
                  <Link to={`/policy/view`}>
                    <button className="btn btn-sm">
                      <FaEye />
                    </button>
                  </Link>
                  <Link to={`/policy/edit`}>
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

export default Policy;
