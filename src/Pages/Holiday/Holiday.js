import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";
import api from "../../config/URL";

const Holiday = () => {
  const [viewAction, setViewAction] = useState(false);
  const userName = sessionStorage.getItem("userName");
  useEffect(() => {
    if (userName === "Employee") {
      setViewAction(true);
    }
  }, [userName, setViewAction]);
  const tableRef = useRef(null);
  const [datas, setDatas] = useState([]);
  // console.log(datas)
  const [loading, setLoading] = useState(true);

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
      const response = await api.get("getAllPublicHolidays");
      setDatas(response.data);
      // initializeDataTable(); // Reinitialize DataTable after successful data update
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
    setLoading(false);
  };

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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.pubHolidayCmpId}</td>
              <td>{data.companyName}</td>
              <td>{data.pubHolidayName}</td>
              <td>{data.startDate}</td>
              <td>
                <div className="d-flex">
                  {viewAction ? (
                    <span>
                      <Link to={`/Holiday/view`}>
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
                      path={`/deletePublicHolidaysById/${data.pubHolidayId}`} />
                    </span>
                  )}
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
