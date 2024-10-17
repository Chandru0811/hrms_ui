import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEdit, FaEye } from "react-icons/fa";
import Delete from "../../components/common/Delete";
import api from "../../config/URL";

const Policy = () => {
  const userRole = sessionStorage.getItem("userName");
  const tableRef = useRef(null);
  const [datas, setDatas] = useState([]);
  // console.log(datas)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("hR-policy");
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
      const response = await api.get("hR-policy");
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
        <div className="container my-3">
          {(userRole === "Super Admin" || userRole === "Admin") && (
            <div className="my-3 d-flex align-items-end justify-content-end">
              <Link to="/policy/add">
                <button type="button" className="btn btn-button btn-sm">
                  Add <i className="bx bx-plus"></i>
                </button>
              </Link>
            </div>
          )}
          <table ref={tableRef} className="display">
            <thead>
              <tr>
                <th scope="col" style={{ whiteSpace: "nowrap" }}>
                  S No
                </th>
                <th scope="col">Hr Policy</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.hrPolicyList}</td>
                  <td>
                    <div className="d-flex">
                      <Link to={`/policy/view/${data.hrPolicyId}`}>
                        <button className="btn btn-sm">
                          <FaEye />
                        </button>
                      </Link>
                      {(userRole === "Admin" || userRole === "Super Admin") && (
                        <Link to={`/policy/edit/${data.hrPolicyId}`}>
                          <button className="btn btn-sm">
                            <FaEdit />
                          </button>
                        </Link>
                      )}
                      {(userRole === "Admin" || userRole === "Super Admin") && (
                        <Delete
                          onSuccess={refreshData}
                          path={`/hR-policy/${data.hrPolicyId}`}
                        />
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

export default Policy;
