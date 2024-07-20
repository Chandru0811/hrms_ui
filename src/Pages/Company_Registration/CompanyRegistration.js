import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";
import api from "../../config/URL";

const CompanyRegistration = () => {
  const tableRef = useRef(null);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await api.get("getAllCompanyReg");
      setDatas(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data ", error);
    }
  };

  useEffect(() => {
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
      setDatas(response.data);
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
            <Link to="/companyregisteration/add">
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
                <th scope="col">Company City</th>
                <th scope="col">Company Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.cmpId}</td>
                  <td>{data.cmpName}</td>
                  <td>{data.cmpCity}</td>
                  <td>{data.cmpEmail}</td>
                  <td>
                    <div className="d-flex">
                      <Link to={`/companyregisteration/view/${data.cmpId}`}>
                        <button className="btn btn-sm">
                          <FaEye />
                        </button>
                      </Link>
                      <Link to={`/companyregisteration/edit/${data.cmpId}`}>
                        <button className="btn btn-sm">
                          <FaEdit />
                        </button>
                      </Link>
                      <Delete
                        path={`/deleteCompanyRegById/${data.cmpId}`}
                        onSuccess={refreshData}
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

export default CompanyRegistration;
