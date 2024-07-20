import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";
import api from "../../config/URL";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";
import { toast } from "react-toastify";

const Holiday = () => {
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

  const tableRef = useRef(null);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("companyData", datas);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("getAllPublicHolidays");
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
      const response = await api.get("getAllPublicHolidays");
      setDatas(response.data);
      // initializeDataTable(); // Reinitialize DataTable after successful data update
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
    setLoading(false);
  };

  const getCompanyNameById = (pubHolidayCmpId) => {
    if (companyData) {
      const company = companyData.find(
        (company) => company.cmpId === pubHolidayCmpId
      );
      console.log("name", datas.pubHolidayCmpId);
      return company ? company.cmpName : "";
    }
  };

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
              <Link to="/Holiday/add">
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
                <th scope="col">Company Id</th>
                <th scope="col">Company Name</th>
                <th scope="col">Holiday Name</th>
                <th scope="col">Start Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{getCompanyNameById(data.pubHolidayId)}</td>
                  <td>{getCompanyNameById(data.pubHolidayCmpId)}</td>
                  <td>{data.pubHolidayName}</td>
                  <td>
                    {data.startDate &&
                      data.startDate
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                  </td>
                  <td>
                    <div className="d-flex">
                      {viewAction ? (
                        <span>
                          <Link to={`/Holiday/view/${data.pubHolidayId}`}>
                            <button className="btn btn-sm">
                              <FaEye />
                            </button>
                          </Link>
                        </span>
                      ) : (
                        <span>
                          <Link to={`/Holiday/view/${data.pubHolidayId}`}>
                            <button className="btn btn-sm">
                              <FaEye />
                            </button>
                          </Link>
                          <Link to={`/Holiday/edit/${data.pubHolidayId}`}>
                            <button className="btn btn-sm">
                              <FaEdit />
                            </button>
                          </Link>
                          <Delete
                            onSuccess={refreshData}
                            path={`/deletePublicHolidaysById/${data.pubHolidayId}`}
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

export default Holiday;
