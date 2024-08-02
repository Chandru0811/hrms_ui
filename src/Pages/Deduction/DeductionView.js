import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../config/URL";
import fetchAllDepartmentNamesWithId from "../List/DepartmentNameList";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";

function DeductionView() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [companyData, setCompanyData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const [departmentData, setDepartmentData] = useState(null);

  // const findEmployeeName = (employeeId) => {
  //   if (!employeeData) return "Employee data not available"; // Check if employeeData is null or undefined
  //   const employee = employeeData.find((emp) => emp.employeeId === employeeId);
  //   return employee
  //     ? `${employee.firstName} ${employee.lastName}`
  //     : "";
  // };

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
        const response = await api.get(`/getDeductionById/${id}`);
        setData(response.data);
      } catch (error) {
        toast.error("Error Fetching Data ", error);
      }
    };
    getData();
    fetchData();
  }, [id]);

  return (
    <div className="container ">
      <div className="row  mt-3">
        <div className="col-12 text-end">
          <Link to="/deductions">
            <button className="btn btn-sm btn-border">Back</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row mt-5 pb-3">
            {/* <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Employee ID </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: ECS01</p>
                </div>
              </div>
            </div> */}
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Employee Name </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">
                    : {data.claimsEmpId}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-12">
              <div className="row  mb-2  ">
                <div className="col-6  ">
                  <p className="fw-medium">Company ID</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: ECS74</p>
                </div>
              </div>
            </div> */}
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Company Name </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">
                    :{data.cmpName}
                    {/* {companyData &&
                    companyData.find(
                      (cmp) => cmp.cmpId === parseInt(data.cmpId)
                    )
                      ? companyData.find(
                          (cmp) => cmp.cmpId === parseInt(data.cmpId)
                        ).cmpName
                      : ""} */}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Department ID</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: TechECS678</p>
                </div>
              </div>
            </div> */}
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Department Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">
                    :{data.dptName}
                    {/* {departmentData &&
                    departmentData.find(
                      (dept) => dept.deptId === parseInt(data.deptId)
                    )
                      ? departmentData.find(
                          (dept) => dept.deptId === parseInt(data.deptId)
                        ).deptName
                      : ""} */}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Deduction Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.deductionName}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Deduction Month</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">
                    :{" "}
                    {data.deductionMonth
                      ? data.deductionMonth
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
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Deduction Amount</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.deductionAmt}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Total Deduction Amount</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">
                    : {data.totalDeductionAmt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeductionView;
