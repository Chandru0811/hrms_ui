import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";

const Attendancehrms = () => {
  const [viewAction, setViewAction] = useState(false);
  const userName = sessionStorage.getItem("userName");
  useEffect(() => {
    if (userName === "Employee") {
      setViewAction(true);
    }
  }, [userName, setViewAction]);
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      employeeid: "ECS01",
      employeename: "Suriya",
      date: "2024-2-11",
      shift: " Day Shift",
      status: "Present",
    },
    {
      id: 2,
      employeeid: "ECS17",
      employeename: "Kumar",
      date: "2024-2-11",
      shift: " Night Shift",
      status: "Absent",
    },
    {
      id: 3,
      employeeid: "ECS04",
      employeename: "Kishore",
      date: "2024-2-11",
      shift: " Night Shift",
      status: "Present",
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

  //   const handleStatusChange = (id, value) => {
  //     setStatus({ ...status, [id]: value });
  //   };

  return (
    <div className="container my-5">
      {!viewAction && (
      <div className="col-12 text-end mb-3">
        <Link to="/attendancehrms/add">
          <button type="button" className="btn btn-button btn-sm">
            Add <i className="bx bx-plus"></i>
          </button>
        </Link>
      </div>
      )}
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col">S No</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Date</th>
            <th scope="col">Shift</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.employeeid}</td>
              <td>{data.employeename}</td>
              <td>{data.date}</td>
              <td>{data.shift}</td>
              <td>
                {data.status === "Present" ? (
                  <span
                    className="badge badges-Green"
                  >
                    Present
                  </span>
                ) : (
                  <span
                    className="badge badges-Red"
                  >
                    Absent
                  </span>
                )}
              </td>
              <td>
              {viewAction ? (
                <Link to={`/attendancehrms/view`}>
                  <button className="btn btn-sm">
                    <FaEye />
                  </button>
                </Link>
                ) : (
                <span>
                  <Link to={`/attendancehrms/view`}>
                  <button className="btn btn-sm">
                    <FaEye />
                  </button>
                </Link>
                  <Link to={`/attendancehrms/edit`}>
                  <button className="btn btn-sm">
                    <FaEdit />
                  </button>
                </Link>
                <Delete />
                </span>
              )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendancehrms;
