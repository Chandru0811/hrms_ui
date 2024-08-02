import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";
import { toast } from "react-toastify";
import api from "../../config/URL";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";

const Deduction = () => {
  const tableRef = useRef(null);
  const [employeeData, setEmployeeData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeeData = await fetchAllEmployeeNamesWithId();
        setEmployeeData(employeeData);
        console.log("Employee data fetched:", employeeData);
      } catch (error) {
        toast.error(error.message);
      }
    };

    const getData = async () => {
      try {
        const response = await api.get("getAllDeductionWithIds");
        setDatas(response.data);
        setLoading(false);
        console.log("Deduction data fetched:", response.data);
      } catch (error) {
        console.error("Error fetching data ", error);
      }
    };

    fetchData();
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
      const response = await api.get("getAllDeductionWithIds");
      setDatas(response.data);
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
    setLoading(false);
  };

  // const getEmployeeNameById = (deductionEmpId) => {
  //   if (employeeData) {
  //     const employee = employeeData.find(
  //       (employee) => employee.employeeId === deductionEmpId
  //     );
  //     console.log(
  //       "Finding employee for ID:",
  //       deductionEmpId,
  //       "Found:",
  //       employee
  //     );
  //     return employee ? `${employee.firstName} ${employee.lastName}` : "";
  //   }
  //   return ""; // Return empty string if employeeData is not defined
  // };

  return (
    <div className="container my-4">
      <div className="my-3 d-flex align-items-end justify-content-end">
        <Link to="/deductions/add">
          <button type="button" className="btn btn-button btn-sm">
            Add <i className="bx bx-plus"></i>
          </button>
        </Link>
      </div>
      <table ref={tableRef} className="display">
        <thead>
          <tr>
            <th scope="col">S No</th>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee Name</th>
          
            {/* <th scope="col">Deduction Id</th> */}
            <th scope="col">Deduction Name</th>
            <th scope="col">Deduction Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.deductionId}</td>
              <td>{data.firstName}</td>
              {/* <td>{data.deductionId}</td> */}
              <td>{data.deductionName}</td>
              <td>{data.deductionAmt}</td>
              <td>
                <Link to={`/deductions/view/${data.deductionId}`}>
                  <button className="btn btn-sm">
                    <FaEye />
                  </button>
                </Link>
                <Link to={`/deductions/edit/${data.deductionId}`}>
                  <button className="btn btn-sm">
                    <FaEdit />
                  </button>
                </Link>
                <Delete path={`/deleteDeductionById/${data.deductionId}`}  onSuccess={refreshData}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Deduction;
