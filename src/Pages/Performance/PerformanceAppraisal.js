import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";
import api from "../../config/URL";
// import { Formik } from "formik";

const PerformanceAppraisal = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("getAllPerformanceAppraisal");
        setDatas(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data ", error);
      }
    };
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
      const response = await api.get("getAllPerformanceAppraisal");
      setDatas(response.data);
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
    setLoading(false);
  };

  const formatDate = (date) => {
    return date ? new Date(date).toISOString().substring(0, 10) : null;
  };

  return (
    <section>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!loading && (
        <div className="container my-4">
        <div className="my-3 d-flex justify-content-end align-items-end">
          <Link to="/performance/add">
            <button type="button" className="btn btn-button btn-sm">
              Add <i className="bx bx-plus"></i>
            </button>
          </Link>
        </div>
  
        <div className="row mb-3">
          <div className="col-md-4 col-12 mb-2">
            <div className="input-group mb-3">
              <input
                type="text"
                className={`form-control iconInput `}
                placeholder="Appraisalid"
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <div className="input-group mb-3">
              <input
                type="text"
                className={`form-control iconInput `}
                placeholder="Empid"
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <div className="input-group mb-3">
              <input
                type="text"
                className={`form-control iconInput `}
                placeholder="Appraisal date"
              />
            </div>
          </div>
        </div>
        <table ref={tableRef} className="display ">
          <thead>
            <tr>
              <th scope="col" style={{ whiteSpace: "nowrap" }}>
                S No
              </th>
              <th scope="col">Date</th>
              <th scope="col">Goals</th>
              <th scope="col">Review</th>
              <th scope="col">Feedback</th>
              {/* <th scope="col">Overall Self Comment</th> */}
              <th scope="col">Amount</th>
              {/* <th scope="col">Status</th> */}
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
        
            {datas.map((data, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{formatDate(data.perfAppraisalDate)}</td>
                <td>{data.perfAppraisalGoals}</td>
                <td>{data.perfAppraisalReviews}</td>
                <td>{data.perfAppraisalFeedback}</td>
                {/* <td>{data.overallselfcomment}</td> */}
                <td>{data.perfAppraisalAmount}</td>
                {/* <td>{data.status}</td> */}
                <td>
                  <div className="d-flex">
                    <Link to={`/performance/view/${data.perfAppraisalId}`}>
                      <button className="btn btn-sm">
                        <FaEye />
                      </button>
                    </Link>
                    <Link to={`/performance/edit/${data.perfAppraisalId}`}>
                      <button className="btn btn-sm">
                        <FaEdit />
                      </button>
                    </Link>
                    <Delete
                      onSuccess={refreshData}
                      path={`deletePerformanceAppraisalById/${data.perfAppraisalId}`}
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

export default PerformanceAppraisal;
