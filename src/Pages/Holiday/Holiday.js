import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";

const Holiday = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      companyID: "01",
      companyName: "Cloud ECS Infotech",
      holidayName: "New Year",
      startDate: "2024-01-01",
      endDate: "2024-01-01",
      day: "Monday",
    },
    {
      id: 2,
      companyID: "02",
      companyName: "ECS Cloud Technology",
      holidayName: "Chinese New Year",
      startDate: "2024-20-10",
      endDate: "2024-20-12",
      day: "Sat,Sun,Mon",
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
        <Link to="/Holiday/add">
          <button type="button" className="btn btn-sm btn-button">
            Add <i class="bx bx-plus"></i>
          </button>
        </Link>
      </div>
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col">S No</th>
            <th scope="col">Company ID</th>
            <th scope="col">Company Name</th>
            <th scope="col">Holiday Name</th>
            <th scope="col">Start Date</th>
            {/* <th scope="col">End Date</th> */}
            {/* <th scope="col">Day</th> */}
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.companyID}</td>
              <td>{data.companyName}</td>
              <td>{data.holidayName}</td>
              <td>{data.startDate}</td>
              {/* <td>{data.endDate}</td> */}
              {/* <td>{data.day}</td> */}
              <td>
                <div className="d-flex">
                  <Link to={`/Holiday/view`}>
                    <button className="btn btn-sm">
                      <FaEye />
                    </button>
                  </Link>
                  <Link to={`/Holiday/edit`}>
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

export default Holiday;
