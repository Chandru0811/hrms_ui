import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";
import api from "../../config/URL";
import { toast } from "react-toastify";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";

const ClaimAdmin = () => {
  const tableRef = useRef(null);
  const [ data,setData]=useState([])  
  // const [datas, setDatas] = useState([]);
  const [ loading,setLoading]=useState([true])
  const [employeeData, setEmployeeData] = useState(null);
  console.log(data)
  const findEmployeeName = (employeeId) => {
    if (!employeeData) return 'Employee data not available'; 
    const employee = employeeData.find(emp => emp.employeeId === employeeId);
    return employee ? `${employee.firstName} ${employee.lastName}` : '';
  };

  const fetchData1 = async () => {
    try {
     
      const employeeData = await fetchAllEmployeeNamesWithId();
      
     
      setEmployeeData(employeeData);
      
    } catch (error) {
      toast.error(error);
    }
  };

  const fetchData = async () => {
    try {
      // setLoading(true);
      const response = await api.get(
        `getAllClaims`,
        {
          headers: {
            "Content-Type": "application/json",
            //Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
      console.log("object",data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // setLoading(false);
    }
  };

  const refreshData = async () => {
    // destroyDataTable();
    setLoading(true);
    try {
      const response = await api.get("getClaimsById");
      setData(response.data);
      // initializeDataTable(); // Reinitialize DataTable after successful data update
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    fetchData1();
    if (!loading) {
      const table = $(tableRef.current).DataTable({
        responsive: true,
      });
      return () => {
        table.destroy();
      };
    }
  }, [loading]);

  return (
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
            <th scope="col">Employee Name</th>
            {/* <th scope="col">Applied Date</th> */}
            {/* <th scope="col">Claim Date</th>
            <th scope="col">Claim Type</th> */}
            <th scope="col">Claim Amount</th>
            <th scope="col">App-Lvl 1</th>
            <th scope="col">App-Lvl 2</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {/* <td>{data.employeeID}</td> */}
              <td> {findEmployeeName(data.claimsEmpId)}</td>
              {/* <td>{data.AppliedDate}</td> */}
              {/* <td>{data.ClaimDate}</td>
              <td>{data.ClaimType}</td> */}
              <td>{data.claimsAmt}</td>
              <td>
                {data.approvalStatusLv1 === "APPROVED" ? (
                  <span className="badge badges-Green">Approved</span>
                ) : data.approvalNameLv1 === "PENDING" ? (
                  <span className="badge badges-Red">Rejected</span>
                ) : (
                  <span className="badge badges-Blue">Pending</span>
                )}
              </td>
              <td>
                {data.approvalStatusLv2 === "APPROVED" ? (
                  <span className="badge badges-Green">Approved</span>
                ) : data.approvalNameLv2 === "Pending" ? (
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
                  <Link to={`/claimadmin/edit/${data.claimsId}`}>
                    <button className="btn btn-sm">
                      <FaEdit />
                    </button>
                  </Link>
                  <Delete path={`/deleteClaimsById/${data.claimsId}`}  onSuccess={refreshData}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimAdmin;
