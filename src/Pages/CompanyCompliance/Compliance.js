import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import api from "../../config/URL";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";
import Delete from "../../components/common/Delete";
import { toast } from "react-toastify";

const Compliance = () => {
  const tableRef = useRef(null);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewAction, setViewAction] = useState(false);
  const userName = sessionStorage.getItem("userName");
  const [companyData, setCompanyData] = useState(null);

  const fetchData = async () => {
    try {
      const companyData = await fetchAllCompanyNamesWithId();
      setCompanyData(companyData);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (userName === "Employee") {
      setViewAction(true);
    }
  }, [userName, setViewAction]);

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      responsive: true,
    });
    return () => {
      table.destroy();
    };
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("getAllCompanyComplianceInfo");
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
      const response = await api.get("getAllCompanyComplianceInfo");
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
        <div className="container">
          {!viewAction && (
            <div className="col-12 text-end my-3">
              <Link to="/compliance/add">
                <button type="button" className="btn btn-sm btn-button">
                  Add <i class="bx bx-plus"></i>
                </button>
              </Link>
            </div>
          )}
          <table ref={tableRef} className="display">
            <thead>
              <tr>
                <th scope="col">S No</th>
                <th scope="col">Company Name</th>
                <th scope="col">Designation Name</th>
                <th scope="col">Designation Category</th>
                <th scope="col">Leave Limit</th>
                <th scope="col">Salary Day</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.compComplianceCmpId}</td>
                  <td>{data.compComplianceDesignationName}</td>
                  <td>{data.compComplianceDesignationCategory}</td>
                  <td>{data.compComplianceLeaveLimit}</td>
                  <td>
                    {data.compComplianceSalaryDay &&
                      data.compComplianceSalaryDay
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                  </td>
                  <td>
                    <div className="d-flex">
                      <Link to={`/compliance/view/${data.compComplianceId}`}>
                        <button className="btn btn-sm">
                          <FaEye />
                        </button>
                      </Link>
                      <Link to={`/compliance/edit/${data.compComplianceId}`}>
                        <button className="btn btn-sm">
                          <FaEdit />
                        </button>
                      </Link>
                      <Delete
                        onSuccess={refreshData}
                        path={`/deleteCompanyComplianceInfoById/${data.compComplianceId}`}
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

export default Compliance;
