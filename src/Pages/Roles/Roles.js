import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";
import api from "../../config/URL";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";
import { toast } from "react-toastify";

const Roles = () => {
  const tableRef = useRef(null);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewAction, setViewAction] = useState(false);
  const userName = sessionStorage.getItem("userName");
  



  const fetchData = async () => {
    try {
      const response = await api.get(`roles`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setDatas(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userName === "Employee") {
      setViewAction(true);
    }
  }, [userName]);

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
      const response = await api.get("roles");
      setDatas(response.data);
      // initializeDataTable(); // Reinitialize DataTable after successful data update
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    
  }, []);

  useEffect(() => {
    if (!loading) {
      const table = $(tableRef.current).DataTable({
        responsive: true,
      });
      return () => {
        table.destroy();
      };
    }
  }, [loading]);

  return (
    <section>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!loading && (
        <div className="container my-3">
          {!viewAction && (
            <div className="col-12 text-end mb-3">
              <Link to="/roles/add">
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
                <th scope="col">Role Name</th>
                {/* <th scope="col">Employee Name</th> */}
                {/* <th scope="col">Company Name</th> */}
                <th scope="col">Role Owner</th>
                {/* <th scope="col">Date</th> */}
                {/* <th scope="col">Mode of Working</th> */}
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.roleName}</td>
                  {/* <td>{data.firstName}</td> */}
                  {/* <td>{findEmployeeName(data.dailyAttendanceCmpId)}</td> */}
                  <td>{data.rolesOwner}</td>
                  {/* <td>
                    {data.attendanceDate &&
                      data.attendanceDate
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                  </td> */}
                  {/* <td>{data.attendanceModeOfWorking}</td> */}
                  <td>
                    {data.roleStatus === "Active" ? (
                      <span className="badge badges-Green">Active</span>
                    ) : (
                      <span className="badge badges-Red">InActive</span>
                    )}
                  </td>
                  <td>
                    <div className="d-flex">
                      {viewAction ? (
                        <Link to={`/roles/view/${data.roleId}`}>
                          <button className="btn btn-sm">
                            <FaEye />
                          </button>
                        </Link>
                      ) : (
                        <span>
                          <Link to={`/roles/view/${data.roleId}`}>
                            <button className="btn btn-sm">
                              <FaEye />
                            </button>
                          </Link>
                          <Link to={`/roles/edit/${data.roleId}`}>
                            <button className="btn btn-sm">
                              <FaEdit />
                            </button>
                          </Link>
                          <Delete
                            onSuccess={refreshData}
                            path={`/roles/${data.roleId}`}
                          />
                        </span>
                      )}
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

export default Roles;
