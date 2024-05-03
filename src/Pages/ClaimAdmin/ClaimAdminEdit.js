import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import fetchAllDepartmentNamesWithId from "../List/DepartmentNameList";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";

function ClaimAdminEdit() {
  const [companyData, setCompanyData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const [departmentData, setDepartmentData] = useState(null);

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
    fetchData();
  }, []);

  const validationSchema = Yup.object({
    // employeeID: Yup.string().required("*Employee id is required"),
    employeeId: Yup.string().required("*Employee name is required"),
    // companyID: Yup.string().required("*Company id is required"),
    cmpId: Yup.string().required("*Company name is required"),
    // departmentID: Yup.string().required("*Department id is required"),
    deptId: Yup.string().required("*Department name is required"),
    date: Yup.string().required("*Date is required"),
    type: Yup.string().required("*Select the type"),
    amount: Yup.number()
      .required("*Amount is required")
      .typeError("*Must be a number"),
    attachment: Yup.string().required("*Attachment is required"),
    approverId1: Yup.string().required("*Approver id(lvl 1) is required"),
    approverName1: Yup.string().required("*Approver name(lvl 1) is required"),
    approverStatus1: Yup.string().required(
      "*Select the approver status(lvl 1)"
    ),
    approverId2: Yup.string().required("*Approver id(lvl 2) is required"),
    approverName2: Yup.string().required("*Approver name(lvl 2) is required"),
    approverStatus2: Yup.string().required(
      "*Select the approver status(lvl 2)"
    ),
  });

  const formik = useFormik({
    initialValues: {
      //   employeeID: "12",
      employeeId: "Ram Charan",
      //   companyID: "ECS031",
      cmpId: "AWS",
      //   departmentID: "ECSD002",
      deptId: "IT",
      date: "2024-01-22",
      type: "Telephone",
      amount: "120",
      attachment: "",
      approverId1: "",
      approverName1: "",
      approverStatus1: "",
      approverId2: "",
      approverName2: "",
      approverStatus2: "",
      remarks: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container-fluid">
      <div className="container py-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/claimadmin">
                <button type="button" className="btn btn-sm btn-border">
                  Back
                </button>
              </Link>
              &nbsp;&nbsp;
              <button type="submit" className="btn btn-sm btn-button">
                Update
              </button>
            </div>
          </div>
          <div className="row mt-3">
            {/* <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Employee ID<span className="text-danger">*</span>
              </lable>
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.employeeID && formik.errors.employeeID
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("employeeID")}
              />
              {formik.touched.employeeID && formik.errors.employeeID && (
                <div className="invalid-feedback">
                  {formik.errors.employeeID}
                </div>
              )}
            </div> */}
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Employee Name<span className="text-danger">*</span>
              </lable>
              <div className="input-group mb-3">
                <select
                  {...formik.getFieldProps("employeeId")}
                  className={`form-select  ${
                    formik.touched.employeeId && formik.errors.employeeId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  {employeeData &&
                    employeeData.map((employeeId) => (
                      <option key={employeeId.id} value={employeeId.id}>
                        {employeeId.firstName} {employeeId.lastName}
                      </option>
                    ))}
                </select>
                {formik.touched.employeeId && formik.errors.employeeId && (
                  <div className="invalid-feedback">
                    {formik.errors.employeeId}
                  </div>
                )}
              </div>
            </div>
            {/* <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Company ID<span className="text-danger">*</span>
              </lable>
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.companyID && formik.errors.companyID
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("companyID")}
              />
              {formik.touched.companyID && formik.errors.companyID && (
                <div className="invalid-feedback">
                  {formik.errors.companyID}
                </div>
              )}
            </div> */}
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Company Name<span className="text-danger">*</span>
              </lable>
              <div className="input-group mb-3">
                <select
                  {...formik.getFieldProps("cmpId")}
                  className={`form-select  ${
                    formik.touched.cmpId && formik.errors.cmpId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  {companyData &&
                    companyData.map((cmpId) => (
                      <option key={cmpId.id} value={cmpId.id}>
                        {cmpId.cmpName}
                      </option>
                    ))}
                </select>
                {formik.touched.cmpId && formik.errors.cmpId && (
                  <div className="invalid-feedback">{formik.errors.cmpId}</div>
                )}
              </div>
            </div>
            {/* <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Department ID<span className="text-danger">*</span>
              </lable>
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.departmentID && formik.errors.departmentID
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("departmentID")}
              />
              {formik.touched.departmentID && formik.errors.departmentID && (
                <div className="invalid-feedback">
                  {formik.errors.departmentID}
                </div>
              )}
            </div> */}
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Department Name<span className="text-danger">*</span>
              </lable>
              <div className="input-group mb-3">
                <select
                  {...formik.getFieldProps("deptId")}
                  className={`form-select  ${
                    formik.touched.deptId && formik.errors.deptId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  {departmentData &&
                    departmentData.map((deptId) => (
                      <option key={deptId.id} value={deptId.id}>
                        {deptId.deptName}
                      </option>
                    ))}
                </select>
                {formik.touched.deptId && formik.errors.deptId && (
                  <div className="invalid-feedback">{formik.errors.deptId}</div>
                )}
              </div>
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Date<span className="text-danger">*</span>
              </lable>
              <input
                type="date"
                className={`form-control  ${
                  formik.touched.date && formik.errors.date ? "is-invalid" : ""
                }`}
                {...formik.getFieldProps("date")}
              />
              {formik.touched.date && formik.errors.date && (
                <div className="invalid-feedback">{formik.errors.date}</div>
              )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable class="form-lable">
                Type<span class="text-danger">*</span>
              </lable>
              <select
                aria-label="Default select example"
                className={`form-select  ${
                  formik.touched.type && formik.errors.type ? "is-invalid" : ""
                }`}
                {...formik.getFieldProps("type")}
              >
                <option value="Telephone">Telephone</option>
                <option value="Taxi">Taxi</option>
                <option value="Hotel and Acc">Hotel and Acc</option>
                <option value="Leave Enhance">Leave Enhance</option>
              </select>
              {formik.touched.type && formik.errors.type && (
                <div className="invalid-feedback">{formik.errors.type}</div>
              )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Amount<span className="text-danger">*</span>
              </lable>
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.amount && formik.errors.amount
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("amount")}
              />
              {formik.touched.amount && formik.errors.amount && (
                <div className="invalid-feedback">{formik.errors.amount}</div>
              )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Attachment<span className="text-danger">*</span>
              </lable>
              <input
                type="file"
                className={`form-control  ${
                  formik.touched.attachment && formik.errors.attachment
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("attachment")}
              />
              {formik.touched.attachment && formik.errors.attachment && (
                <div className="invalid-feedback">
                  {formik.errors.attachment}
                </div>
              )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Approver ID(Lvl 1)<span className="text-danger">*</span>
              </lable>
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.approverId1 && formik.errors.approverId1
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("approverId1")}
              />
              {formik.touched.approverId1 && formik.errors.approverId1 && (
                <div className="invalid-feedback">
                  {formik.errors.approverId1}
                </div>
              )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Approver Name(Lvl 1)<span className="text-danger">*</span>
              </lable>
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.approverName1 && formik.errors.approverName1
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("approverName1")}
              />
              {formik.touched.approverName1 && formik.errors.approverName1 && (
                <div className="invalid-feedback">
                  {formik.errors.approverName1}
                </div>
              )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Approver Status(Lvl 1)<span className="text-danger">*</span>
              </lable>
              <select
                className={`form-select  ${
                  formik.touched.approverStatus1 &&
                  formik.errors.approverStatus1
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("approverStatus1")}
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
              {formik.touched.approverStatus1 &&
                formik.errors.approverStatus1 && (
                  <div className="invalid-feedback">
                    {formik.errors.approverStatus1}
                  </div>
                )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Approver ID(Lvl 2)<span className="text-danger">*</span>
              </lable>
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.approverId2 && formik.errors.approverId2
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("approverId2")}
              />
              {formik.touched.approverId2 && formik.errors.approverId2 && (
                <div className="invalid-feedback">
                  {formik.errors.approverId2}
                </div>
              )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Approver Name(Lvl 2)<span className="text-danger">*</span>
              </lable>
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.approverName2 && formik.errors.approverName2
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("approverName2")}
              />
              {formik.touched.approverName2 && formik.errors.approverName2 && (
                <div className="invalid-feedback">
                  {formik.errors.approverName2}
                </div>
              )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Approver Status(Lvl 2)<span className="text-danger">*</span>
              </lable>
              <select
                className={`form-select  ${
                  formik.touched.approverStatus2 &&
                  formik.errors.approverStatus2
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("approverStatus2")}
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
              {formik.touched.approverStatus2 &&
                formik.errors.approverStatus2 && (
                  <div className="invalid-feedback">
                    {formik.errors.approverStatus2}
                  </div>
                )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">Remarks</lable>
              <textarea
                id="floatingTextarea2"
                style={{ height: "100px" }}
                className={`form-control`}
                {...formik.getFieldProps("remarks")}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClaimAdminEdit;
