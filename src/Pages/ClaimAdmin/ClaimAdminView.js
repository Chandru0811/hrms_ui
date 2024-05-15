import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Invoice from "../../assets/images/Invoice.png";
import api from "../../config/URL";
import { toast } from "react-toastify";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";
import fetchAllDepartmentNamesWithId from "../List/DepartmentNameList";

function ClaimView() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [companyData, setCompanyData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const [departmentData, setDepartmentData] = useState(null);
  const findEmployeeName = (employeeId) => {
    if (!employeeData) return "Employee data not available"; // Check if employeeData is null or undefined
    const employee = employeeData.find((emp) => emp.employeeId === employeeId);
    return employee
      ? `${employee.firstName} ${employee.lastName}`
      : "Employee not found";
  };

  const fetchData = async () => {
    try {
      const companyData = await fetchAllCompanyNamesWithId();
      const employeeData = await fetchAllEmployeeNamesWithId();
      const departmentData = await fetchAllDepartmentNamesWithId();
      setCompanyData(companyData);
      setEmployeeData(employeeData);
      setDepartmentData(departmentData);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/getClaimsById/${id}`);
        setData(response.data);
      } catch (error) {
        toast.error("Error Fetching Data ", error);
      }
    };
    getData();
    fetchData();
  }, [id]);

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 text-end">
          <Link to="/claimadmin">
            <button type="button" className="btn btn-sm btn-border">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          {/* <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Employee ID</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: 12</p>
              </div>
            </div>
          </div> */}
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Employee Name</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">
                  : {findEmployeeName(data.claimsEmpId)}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company ID</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: ECS031</p>
              </div>
            </div>
          </div> */}
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Name</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">
                  :
                  {companyData &&
                  companyData.find((cmp) => cmp.cmpId === parseInt(data.cmpId))
                    ? companyData.find(
                        (cmp) => cmp.cmpId === parseInt(data.cmpId)
                      ).cmpName
                    : ""}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Department ID</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: ECSD002</p>
              </div>
            </div>
          </div> */}
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Department Name</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">
                  :
                  {departmentData &&
                  departmentData.find(
                    (dept) => dept.deptId === parseInt(data.deptId)
                  )
                    ? departmentData.find(
                        (dept) => dept.deptId === parseInt(data.deptId)
                      ).deptName
                    : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Date</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">
                  :{" "}
                  {data.claimsDate
                    ? data.claimsDate
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")
                    : "--"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Type</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.claimsType}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Amount</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.claimsAmt}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver ID(Lvl 1)</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">
                  : {data.claimsApprovalLv1Id}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver Name(Lvl 1)</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">:{data.approvalNameLv1}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver Status(Lvl 1)</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.approvalStatusLv1}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver ID(Lvl 2)</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">
                  : {data.claimsApprovalLv2Id}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver Name(Lvl 2)</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">:{data.approvalNameLv2}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Approver Status(Lvl 2)</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">:{data.approvalStatusLv2}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12"></div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Attachment</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm d-flex">:{data.attachment}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Remarks</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.remarks} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClaimView;
