import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../../components/common/Delete";
import api from "../../../config/URL";
import fetchAllEmployeeNamesWithId from "../../List/EmployeeNameList";
import { toast } from "react-toastify";

const ExitManagement = () => {
  const tableRef = useRef(null);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [employeeData, setEmployeeData] = useState(null);

  const fetchData = async () => {
    try {
      const employeeData = await fetchAllEmployeeNamesWithId();
      setEmployeeData(employeeData);
    } catch (error) {
      toast.error(error);
    }
  };

  const findEmployeeName = (attendanceId) => {
    if (!employeeData) return "Employee data not available";
    const employee = employeeData.find(
      (emp) => emp.employeeId === attendanceId
    );
    return employee ? `${employee.firstName} ${employee.lastName}` : "";
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("exit-management");
        setDatas(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data ", error);
      }
    };
    getData();
    fetchData();
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
      const response = await api.get("exit-management");
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
          <div className="my-3 d-flex align-items-end justify-content-end">
         <Link to="/exitmanagementadmin">
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
                <th scope="col">Employee ID</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Reason For Relieving</th>
                {/* <th scope="col">Notice Period</th> */}
                <th scope="col">Approval Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.exitMgmtEmpId}</td>
                  <td> {findEmployeeName(data.exitMgmtEmpId)}</td>
                  <td>{data.reasonForRelieving}</td>
                  {/* <td>{data.exitMgmtNoticePeriod}</td> */}
                  <td>
                    {data.relievingApproverStatus === "Approved" ? (
                      <span className="badge text-bg-success">Approved</span>
                    ) : data.relievingApproverStatus === "Rejected" ? (
                      <span className="badge text-bg-danger">Rejected</span>
                    ) : (
                      <span className="badge text-bg-warning">Pending</span>
                    )}
                  </td>
                  <td>
                    <div className="d-flex">
                      <Link to={`/exitmanagement/view/${data.exitMgmtId}`}>
                        <button className="btn btn-sm">
                          <FaEye />
                        </button>
                      </Link>
                      <Link to={`/exitmanagement/edit/${data.exitMgmtId}`}>
                        <button className="btn btn-sm">
                          <FaEdit />
                        </button>
                      </Link>
                      <Delete
                        onSuccess={refreshData}
                        path={`/exit-management/${data.exitMgmtId}`}
                      />
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

export default ExitManagement;
