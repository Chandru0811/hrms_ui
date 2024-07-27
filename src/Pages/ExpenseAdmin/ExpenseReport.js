import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";
import api from "../../config/URL";
// import ExpenseStatus from "../ExpenseAdmin/ExpenseStatus";

const Payroll = () => {
  const tableRef = useRef(null);
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("object", datas);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("getAllExpenses");
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
      const response = await api.get("getAllExpenses");
      setDatas(response.data);
      // initializeDataTable(); // Reinitialize DataTable after successful data update
    } catch (error) {
      console.error("Error refreshing data:", error.message);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      <div className="col-12 text-end my-3">
        <Link to="/expenseadmin/add">
          <button type="button" className="btn btn-button btn-sm">
            Add <i class="bx bx-plus"></i>
          </button>
        </Link>
      </div>
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col">S No</th>
            <th scope="col">Expense ID</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas?.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.expenseId}</td>
              <td>{data.expensesEmpId}</td>
              <td>{new Date(data.expenseDate).toLocaleDateString()}</td>
              <td>{data.expenseType}</td>
              <td>{data.expenseAmt}</td>
              <td>
                {data.status === "Approved" ? (
                  <span className="badge badges-Green">Approved</span>
                ) : data.status === "Pending" ? (
                  <span className="badge badges-Yellow">Pending</span>
                ) : (
                  <span className="badge badges-Red">Rejected</span>
                )}
              </td>
              <td>
                <Link to={`/expenseadmin/view/${data.expenseId}`}>
                  <button className="btn btn-sm">
                    <FaEye />
                  </button>
                </Link>
                <Link to={`/expenseadmin/edit/${data.expenseId}`}>
                  <button className="btn btn-sm">
                    <FaEdit />
                  </button>
                </Link>
                {/* <ExpenseStatus /> */}
                <Delete onSuccess={refreshData} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payroll;
