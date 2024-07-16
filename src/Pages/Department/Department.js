import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEdit, FaEye } from "react-icons/fa";
import Delete from "../../components/common/Delete";
import api from "../../config/URL";

const Department = () => {
  const tableRef = useRef(null);
  const userRole = sessionStorage.getItem("userName");

  const [datas, setDatas] = useState([]);
  // console.log(datas)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("getAllDepartment");
        // console.log(response)
        setDatas(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data ", error);
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
      // DataTable already initialized, no need to initialize again
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
      const response = await api.get("getAllDepartment");
      setDatas(response.data);
      // initializeDataTable(); // Reinitialize DataTable after successful data update
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
        <div className="container my-5">
          {userRole === "Admin" && (
            <div className="my-3 d-flex align-items-end justify-content-end">
              <Link to="/departments/add">
                <button type="button" className="btn btn-button btn-sm">
                  Add <i class="bx bx-plus"></i>
                </button>
              </Link>
            </div>
          )}
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
                  <td>{data.deptName}</td>
                  <td>
                    <Link to={`/departments/view/${data.deptId}`}>
                      <button className="btn btn-sm">
                        <FaEye />
                      </button>
                    </Link>
                    {(userRole === "Admin" || userRole === "Super Admin") && (
                      <Link to={`/departments/edit/${data.deptId}`}>
                        <button className="btn btn-sm">
                          <FaEdit />
                        </button>
                      </Link>
                    )}
                    {(userRole === "Admin" || userRole === "Super Admin") && (
                      <Delete
                        onSuccess={refreshData}
                        path={`/deleteDepartmentById/${data.deptId}`}
                      />
                    )}
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

export default Department;
