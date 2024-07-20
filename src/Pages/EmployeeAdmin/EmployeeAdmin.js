import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";
import api from "../../config/URL";
import $ from "jquery";

const EmployeeAdmin = () => {
  const tableRef = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("getAllEmployeeRegDetails");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (!loading) {
      initializeDataTable();
    }
    return () => {
      destroyDataTable();
    };
  }, [loading]);

  const initializeDataTable = () => {
    if ($.fn.DataTable.isDataTable(tableRef.current)) {
      return;
    }
    $(tableRef.current).DataTable({
      responsive: true,
    });
  };

  const destroyDataTable = () => {
    const table = $(tableRef.current).DataTable();
    if (table && $.fn.DataTable.isDataTable(tableRef.current)) {
      table.destroy();
    }
  };

  const refreshData = async () => {
    destroyDataTable();
    setLoading(true);
    try {
      const response = await api.get("getAllCompanyReg");
      setData(response.data);
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
    setLoading(false);
  };

  return (
    <section>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!loading && (
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
                <th scope="col">Employee ID</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Designation</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.employeeId}</td>
                  <td>
                    {data.firstName}&nbsp;
                    {data.lastName}
                  </td>
                  <td>{data.empDes}</td>
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
                      <Delete onSuccess={refreshData} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default EmployeeAdmin;
