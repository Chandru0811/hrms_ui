import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";
import api from "../../config/URL";

const Claim = () => {
  const tableRef = useRef(null);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const userRole = sessionStorage.getItem("userName");

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
        const response = await api.get("getAllClaims");
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
      const response = await api.get("getAllClaims");
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
        <div className="container my-4">
          <div className="col-12 text-end my-3">
            <Link to="/claimadmin/add">
              <button type="button" className="btn btn-sm btn-button">
                Add <i class="bx bx-plus"></i>
              </button>
            </Link>
          </div>
          <table ref={tableRef} className="display">
            <thead>
              <tr>
                <th scope="col">S No</th>
                {/* <th scope="col">Employee ID</th> */}
                {/* <th scope="col">Employee Name</th> */}
                {/* <th scope="col">Applied Date</th> */}
                <th scope="col">Claim Date</th>
                <th scope="col">Claim Type</th>
                <th scope="col">Claim Amount</th>
                <th scope="col">App-Lvl 1</th>
                <th scope="col">App-Lvl 2</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {/* <td>{data.employeeID}</td> */}
                  {/* <td> {findEmployeeName(data.claimsEmpId)}</td> */}
                  {/* <td>{data.AppliedDate}</td> */}
                  {/* <td>{data.claimsDate}</td> */}
                  <td>
                    {" "}
                    {data.claimsDate &&
                      data.claimsDate
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                  </td>
                  <td>{data.claimsType}</td>
                  <td>{data.claimsAmt}</td>
                  <td>
                    {data.approvalStatusLv1 === "APPROVED" ? (
                      <span className="badge badges-Green">Approved</span>
                    ) : data.approvalStatusLv1 === "REJECTED" ? (
                      <span className="badge badges-Red">Rejected</span>
                    ) : (
                      <span className="badge badges-Blue">Pending</span>
                    )}
                  </td>
                  <td>
                    {data.approvalStatusLv2 === "APPROVED" ? (
                      <span className="badge badges-Green">Approved</span>
                    ) : data.approvalStatusLv2 === "REJECTED" ? (
                      <span className="badge badges-Red">Rejected</span>
                    ) : (
                      <span className="badge badges-Blue">Pending</span>
                    )}
                  </td>
                  <td>
                    <div className="d-flex">
                      <Link to={`/claimadmin/view/${data.claimsId}`}>
                        <button className="btn btn-sm">
                          <FaEye />
                        </button>
                      </Link>
                      {(userRole === "Super Admin" || userRole === "Admin") && (
                        <Link to={`/claimadmin/edit/${data.claimsId}`}>
                          <button className="btn btn-sm">
                            <FaEdit />
                          </button>
                        </Link>
                      )}
                      {(userRole === "Super Admin" || userRole === "Admin") && (
                        <Delete
                          path={`/deleteClaimsById/${data.claimsId}`}
                          onSuccess={refreshData}
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

export default Claim;
