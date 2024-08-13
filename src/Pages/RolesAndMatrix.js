import React, { useEffect, useState } from "react";
// import api from "../../config/URL";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({});

function RolesAndMatrix() {
  const [role, setRole] = useState("1");
  const formik = useFormik({
    initialValues: {
      companyRegistrationIndex: true,
      companyRegistrationRead: true,
      companyRegistrationCreate: true,
      companyRegistrationUpdate: true,
      companyRegistrationDelete: true,
      companyComplianceIndex: true,
      companyComplianceRead: true,
      companyComplianceCreate: true,
      companyComplianceUpdate: true,
      companyComplianceDelete: true,
      hrPolicyIndex: true,
      hrPolicyRead: true,
      hrPolicyCreate: true,
      hrPolicyUpdate: true,
      hrPolicyDelete: true,
      departmentIndex: true,
      departmentRead: true,
      departmentCreate: true,
      departmentUpdate: true,
      departmentDelete: true,
      exitManagementIndex: true,
      exitManagementRead: true,
      exitManagementCreate: true,
      exitManagementUpdate: true,
      exitManagementDelete: true,
      employeeAdminIndex: true,
      employeeAdminRead: true,
      employeeAdminCreate: true,
      employeeAdminUpdate: true,
      employeeAdminDelete: true,
      attendanceHrmsIndex: true,
      attendanceHrmsRead: true,
      attendanceHrmsCreate: true,
      attendanceHrmsUpdate: true,
      attendanceHrmsDelete: true,
      leaveIndex: true,
      leaveRead: true,
      leaveUpdate: true,
      performanceIndex: true,
      performanceRead: true,
      performanceCreate: true,
      performanceUpdate: true,
      performanceDelete: true,
      holidayIndex: true,
      holidayRead: true,
      holidayCreate: true,
      holidayUpdate: true,
      holidayDelete: true,
      expenseIndex: true,
      expenseRead: true,
      expenseCreate: true,
      expenseUpdate: true,
      expenseDelete: true,
      claimIndex: true,
      claimRead: true,
      claimCreate: true,
      claimUpdate: true,
      claimDelete: true,
      deductionIndex: true,
      deductionRead: true,
      deductionCreate: true,
      deductionUpdate: true,
      deductionDelete: true,
      payrollIndex: true,
      payrollRead: true,
      payrollCreate: true,
      payrollUpdate: true,
      payrollDelete: true,
      rolesIndex: true,
      rolesRead: true,
      rolesCreate: true,
      rolesUpdate: true,
      rolesDelete: true,
      rolesAndMatrixIndex: true,
      rolesAndMatrixRead: true,
      rolesAndMatrixCreate: true,
      rolesAndMatrixUpdate: true,
      
      

    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Api Data:", values);
    //   try {
    //     const response = await api.put(`/updateRoleInfo/${role}`, values, {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
    //     if (response.status === 200) {
    //       toast.success(response.data.message);
    //     } else {
    //       toast.error(response.data.message);
    //     }
    //   } catch (error) {
    //     toast.error(error);
    //   }
    },
  });

//   useEffect(() => {
//     getRoleData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [role]);

  const handleCheckboxChange = (fieldName) => {
    return (event) => {
      formik.setFieldValue(fieldName, event.target.checked);
    };
  };

//   const getRoleData = async () => {
//     try {
//       const response = await api.get(`/getAllRoleInfoById/${role}`);
//       formik.setValues(response.data);
//       // console.log(response.data, "getroleData");
//     } catch (error) {
//       console.error("Error fetching role data:", error);
//     }
//   };

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <div className="my-3 d-flex justify-content-end align-items-end  mb-5">
          <button type="submit" className="btn btn-button btn-sm ">
            Save
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div class="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                User Role <span class="text-danger">*</span>
              </lable>
              <div class="input-group mb-3">
                <select
                  class="form-select iconInput "
                  aria-label="Default select example"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="1">Admin</option>
                  <option value="2">Super Admin</option>
                  <option value="4">Employee</option>
                 
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="clo-12">
              <div className="table-responsive">
                <table class="table table-light table-striped table-hover">
                  <thead className="table-warning">
                    <tr>
                      <th scope="col">Module Permission</th>
                      <th scope="col">Index</th>
                      <th scope="col">Read</th>
                      <th scope="col">Create</th>
                      <th scope="col">Update</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Course  */}
                    <tr>
                      <th colspan="6">Organization</th>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Company Registration
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="companyRegistrationIndex"
                          checked={formik.values.companyRegistrationIndex}
                          onChange={handleCheckboxChange(`companyRegistrationIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="companyRegistrationRead"
                          checked={formik.values.companyRegistrationRead}
                          onChange={handleCheckboxChange(`companyRegistrationRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="companyRegistrationCreate"
                          checked={formik.values.companyRegistrationCreate}
                          onChange={handleCheckboxChange(`companyRegistrationCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="companyRegistrationUpdate"
                          checked={formik.values.companyRegistrationUpdate}
                          onChange={handleCheckboxChange(`companyRegistrationUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="companyRegistrationDelete"
                          checked={formik.values.companyRegistrationDelete}
                          onChange={handleCheckboxChange(`companyRegistrationDelete`)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Company Compliance
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="companyComplianceIndex"
                          checked={formik.values.companyComplianceIndex}
                          onChange={handleCheckboxChange(`companyComplianceIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="companyComplianceRead"
                          checked={formik.values.companyComplianceRead}
                          onChange={handleCheckboxChange(`companyComplianceRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="companyComplianceCreate"
                          checked={formik.values.companyComplianceCreate}
                          onChange={handleCheckboxChange(`companyComplianceCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="companyComplianceUpdate"
                          checked={formik.values.companyComplianceUpdate}
                          onChange={handleCheckboxChange(`companyComplianceUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="companyComplianceDelete"
                          checked={formik.values.companyComplianceDelete}
                          onChange={handleCheckboxChange(`companyComplianceDelete`)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Hr Policy
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="hrPolicyIndex"
                          checked={formik.values.hrPolicyIndex}
                          onChange={handleCheckboxChange(`hrPolicyIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="hrPolicyRead"
                          checked={formik.values.hrPolicyRead}
                          onChange={handleCheckboxChange(`hrPolicyRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="hrPolicyCreate"
                          checked={formik.values.hrPolicyCreate}
                          onChange={handleCheckboxChange(`hrPolicyCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="hrPolicyUpdate"
                          checked={formik.values.hrPolicyUpdate}
                          onChange={handleCheckboxChange(`hrPolicyUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="hrPolicyDelete"
                          checked={formik.values.hrPolicyDelete}
                          onChange={handleCheckboxChange(`hrPolicyDelete`)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Department
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="departmentIndex"
                          checked={formik.values.departmentIndex}
                          onChange={handleCheckboxChange(`departmentIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="departmentRead"
                          checked={formik.values.departmentRead}
                          onChange={handleCheckboxChange(`departmentRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="departmentCreate"
                          checked={formik.values.departmentCreate}
                          onChange={handleCheckboxChange(`departmentCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="departmentUpdate"
                          checked={formik.values.departmentUpdate}
                          onChange={handleCheckboxChange(`departmentUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="departmentDelete"
                          checked={formik.values.departmentDelete}
                          onChange={handleCheckboxChange(`departmentDelete`)}
                        />
                      </td>
                    </tr>
                    {/* Curriculum */}
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Exit Management
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="exitManagementIndex"
                          checked={formik.values.exitManagementIndex}
                          onChange={handleCheckboxChange(`exitManagementIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="exitManagementRead"
                          checked={formik.values.exitManagementRead}
                          onChange={handleCheckboxChange(`exitManagementRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="exitManagementCreate"
                          checked={formik.values.exitManagementCreate}
                          onChange={handleCheckboxChange(`exitManagementCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="exitManagementUpdate"
                          checked={formik.values.exitManagementUpdate}
                          onChange={handleCheckboxChange(`exitManagementUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="exitManagementDelete"
                          checked={formik.values.exitManagementDelete}
                          onChange={handleCheckboxChange(`exitManagementDelete`)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="6">Employee Info</th>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Employee Info
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="employeeAdminIndex"
                          checked={formik.values.employeeAdminIndex}
                          onChange={handleCheckboxChange(`employeeAdminIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="employeeAdminRead"
                          checked={formik.values.employeeAdminRead}
                          onChange={handleCheckboxChange(`employeeAdminRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="employeeAdminCreate"
                          checked={formik.values.employeeAdminCreate}
                          onChange={handleCheckboxChange(`employeeAdminCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="employeeAdminUpdate"
                          checked={formik.values.employeeAdminUpdate}
                          onChange={handleCheckboxChange(`employeeAdminUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="employeeAdminDelete"
                          checked={formik.values.employeeAdminDelete}
                          onChange={handleCheckboxChange(`employeeAdminDelete`)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="6">Attendance</th>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Attendance
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="attendanceHrmsIndex"
                          checked={formik.values.attendanceHrmsIndex}
                          onChange={handleCheckboxChange(`attendanceHrmsIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="attendanceHrmsRead"
                          checked={formik.values.attendanceHrmsRead}
                          onChange={handleCheckboxChange(`attendanceHrmsRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="attendanceHrmsCreate"
                          checked={formik.values.attendanceHrmsCreate}
                          onChange={handleCheckboxChange(`attendanceHrmsCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="attendanceHrmsUpdate"
                          checked={formik.values.attendanceHrmsUpdate}
                          onChange={handleCheckboxChange(`attendanceHrmsUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="attendanceHrmsDelete"
                          checked={formik.values.attendanceHrmsDelete}
                          onChange={handleCheckboxChange(`attendanceHrmsDelete`)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="6">Leave</th>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Leave
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="leaveIndex"
                          checked={formik.values.leaveIndex}
                          onChange={handleCheckboxChange(`leaveIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="leaveRead"
                          checked={formik.values.leaveRead}
                          onChange={handleCheckboxChange(`leaveRead`)}
                        />
                      </td>
                      <td>
                        {/* <input
                          class="form-check-input"
                          type="checkbox"
                          name="leaveCreate"
                          checked={formik.values.leaveCreate}
                          onChange={handleCheckboxChange(`leaveCreate`)}
                        /> */}
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="leaveUpdate"
                          checked={formik.values.leaveUpdate}
                          onChange={handleCheckboxChange(`leaveUpdate`)}
                        />
                      </td>
                      <td>
                        {/* <input
                          class="form-check-input"
                          type="checkbox"
                          name="leaveDelete"
                          checked={formik.values.leaveDelete}
                          onChange={handleCheckboxChange(`leaveDelete`)}
                        /> */}
                      </td>
                    </tr>
                    <tr>
                      <th colspan="6">Performance</th>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Performance
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="performanceIndex"
                          checked={formik.values.performanceIndex}
                          onChange={handleCheckboxChange(`performanceIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="performanceRead"
                          checked={formik.values.performanceRead}
                          onChange={handleCheckboxChange(`performanceRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="performanceCreate"
                          checked={formik.values.performanceCreate}
                          onChange={handleCheckboxChange(`performanceCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="performanceUpdate"
                          checked={formik.values.performanceUpdate}
                          onChange={handleCheckboxChange(`performanceUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="performanceDelete"
                          checked={formik.values.performanceDelete}
                          onChange={handleCheckboxChange(`performanceDelete`)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="6">Holiday</th>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Holiday
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="holidayIndex"
                          checked={formik.values.holidayIndex}
                          onChange={handleCheckboxChange(`holidayIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="holidayRead"
                          checked={formik.values.holidayRead}
                          onChange={handleCheckboxChange(`holidayRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="holidayCreate"
                          checked={formik.values.holidayCreate}
                          onChange={handleCheckboxChange(`holidayCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="holidayUpdate"
                          checked={formik.values.holidayUpdate}
                          onChange={handleCheckboxChange(`holidayUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="holidayDelete"
                          checked={formik.values.holidayDelete}
                          onChange={handleCheckboxChange(`holidayDelete`)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="6">Expense</th>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Expense
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="expenseIndex"
                          checked={formik.values.expenseIndex}
                          onChange={handleCheckboxChange(`expenseIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="expenseRead"
                          checked={formik.values.expenseRead}
                          onChange={handleCheckboxChange(`expenseRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="expenseCreate"
                          checked={formik.values.expenseCreate}
                          onChange={handleCheckboxChange(`expenseCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="expenseUpdate"
                          checked={formik.values.expenseUpdate}
                          onChange={handleCheckboxChange(`expenseUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="expenseDelete"
                          checked={formik.values.expenseDelete}
                          onChange={handleCheckboxChange(`expenseDelete`)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="6">Claims</th>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Claims
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="claimIndex"
                          checked={formik.values.claimIndex}
                          onChange={handleCheckboxChange(`claimIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="claimRead"
                          checked={formik.values.claimRead}
                          onChange={handleCheckboxChange(`claimRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="claimCreate"
                          checked={formik.values.claimCreate}
                          onChange={handleCheckboxChange(`claimCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="claimUpdate"
                          checked={formik.values.claimUpdate}
                          onChange={handleCheckboxChange(`claimUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="claimDelete"
                          checked={formik.values.claimDelete}
                          onChange={handleCheckboxChange(`claimDelete`)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="6">Deduction</th>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Deduction
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="deductionIndex"
                          checked={formik.values.deductionIndex}
                          onChange={handleCheckboxChange(`deductionIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="deductionRead"
                          checked={formik.values.deductionRead}
                          onChange={handleCheckboxChange(`deductionRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="deductionCreate"
                          checked={formik.values.deductionCreate}
                          onChange={handleCheckboxChange(`deductionCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="deductionUpdate"
                          checked={formik.values.deductionUpdate}
                          onChange={handleCheckboxChange(`deductionUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="deductionDelete"
                          checked={formik.values.deductionDelete}
                          onChange={handleCheckboxChange(`deductionDelete`)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="6">Payroll</th>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Payroll
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="payrollIndex"
                          checked={formik.values.payrollIndex}
                          onChange={handleCheckboxChange(`payrollIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="payrollRead"
                          checked={formik.values.payrollRead}
                          onChange={handleCheckboxChange(`payrollRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="payrollCreate"
                          checked={formik.values.payrollCreate}
                          onChange={handleCheckboxChange(`payrollCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="payrollUpdate"
                          checked={formik.values.payrollUpdate}
                          onChange={handleCheckboxChange(`payrollUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="payrollDelete"
                          checked={formik.values.payrollDelete}
                          onChange={handleCheckboxChange(`payrollDelete`)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="6">Settings</th>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Roles
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="rolesIndex"
                          checked={formik.values.rolesIndex}
                          onChange={handleCheckboxChange(`rolesIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="rolesRead"
                          checked={formik.values.rolesRead}
                          onChange={handleCheckboxChange(`rolesRead`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="rolesCreate"
                          checked={formik.values.rolesCreate}
                          onChange={handleCheckboxChange(`rolesCreate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="rolesUpdate"
                          checked={formik.values.rolesUpdate}
                          onChange={handleCheckboxChange(`rolesUpdate`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="rolesDelete"
                          checked={formik.values.rolesDelete}
                          onChange={handleCheckboxChange(`rolesDelete`)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginLeft: "30px", marginBottom: "0px" }}>
                          Roles And Matrix
                        </p>
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="rolesAndMatrixIndex"
                          checked={formik.values.rolesAndMatrixIndex}
                          onChange={handleCheckboxChange(`rolesAndMatrixIndex`)}
                        />
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="rolesAndMatrixRead"
                          checked={formik.values.rolesAndMatrixRead}
                          onChange={handleCheckboxChange(`rolesAndMatrixRead`)}
                        />
                      </td>
                      <td>
                        {/* <input
                          class="form-check-input"
                          type="checkbox"
                          name="rolesAndMatrixCreate"
                          checked={formik.values.rolesAndMatrixCreate}
                          onChange={handleCheckboxChange(`rolesAndMatrixCreate`)}
                        /> */}
                      </td>
                      <td>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="rolesAndMatrixUpdate"
                          checked={formik.values.rolesAndMatrixUpdate}
                          onChange={handleCheckboxChange(`rolesAndMatrixUpdate`)}
                        />
                      </td>
                      <td>
                        {/* <input
                          class="form-check-input"
                          type="checkbox"
                          name="rolesAndMatrixDelete"
                          checked={formik.values.rolesAndMatrixDelete}
                          onChange={handleCheckboxChange(`rolesAndMatrixDelete`)}
                        /> */}
                      </td>
                    </tr>


                  </tbody>
                </table>
              </div>
            </div>
          </div>

       
        </div>
      </form>
    </div>
  );
}

export default RolesAndMatrix;
