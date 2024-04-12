import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../../components/common/Delete";
import api from "../../../config/URL";

const Payroll = () => {
  const tableRef = useRef(null);
  const [datas, setDatas] = useState([]);
  // console.log(datas)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("getAllPayroll");
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
      const response = await api.get("getAllPayroll");
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
          <div className="col-12 text-end my-3">
            <Link to={`/payrolladmin/add`}>
              <button type="button" className="btn btn-button btn-sm">Add  <i class="bx bx-plus"></i></button>
            </Link>
          </div>
          <table ref={tableRef} className="display">
            <thead>
              <tr>
                <th scope="col">S No</th>
                <th scope="col">Employee ID</th>
                <th scope="col">Emplopee Name</th>
                <th scope="col">Bonus</th>
                <th scope="col">Gross Pay</th>
                {/* <th scope="col">Deduction</th> */}
                <th scope="col">Net Pay</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.payrollEmpId}</td>
                  <td>{data.employeeName}</td>
                  <td>{data.bonus}</td>
                  <td>{data.grossPay}</td>
                  {/* <td>{data.deduction}</td> */}
                  <td>{data.netPay}</td>
                  <td>
                    {data.payrollWorkingStatus === "Approved" ? (
                      <span className="badge badges-Green">Approved</span>
                    ) : data.payrollWorkingStatus === "Pending" ? (
                      <span className="badge badges-Yellow">Pending</span>
                    ) : (
                      <span className="badge badges-Red">Rejected</span>
                    )}
                  </td>
                  <td>
                    <Link to={`/payrolladmin/view/${data.payrollId}`}>
                      <button className="btn btn-sm">
                        <FaEye />
                      </button>
                    </Link>
                    <Link to={`/payrolladmin/edit/${data.payrollId}`}>
                      <button className="btn btn-sm">
                        <FaEdit />
                      </button>
                    </Link>
                    <Delete
                      onSuccess={refreshData}
                      path={`/deletePayrollById/${data.payrollId}`} />
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

export default Payroll;