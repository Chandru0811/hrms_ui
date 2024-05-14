import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";
import fetchAllDepartmentNamesWithId from "../List/DepartmentNameList";
import { toast } from "react-toastify";
import api from "../../config/URL";

function ClaimAdminAdd() {
  const navigate = useNavigate();
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
    // claimsEmpId: Yup.string().required("*Employee id is required"),
    claimsEmpId: Yup.string().required("*Employee name is required"),
    // companyID: Yup.string().required("*Company id is required"),
    cmpId: Yup.string().required("*Company name is required"),
    // departmentID: Yup.string().required("*Department id is required"),
    deptId: Yup.string().required("*Department name is required"),
    claimsDate: Yup.string().required("*claimsDate is required"),
    claimsType: Yup.string().required("*Select the type"),
    claimsAmt: Yup.number()
      .required("*claimsAmt is required")
      .typeError("*Must be a number"),
    claimsAttachment: Yup.string().required("*claimsAttachment is required"),
  });

  const formik = useFormik({
    initialValues: {
      // claimsEmpId: "",
      claimsEmpId: "",
      // companyID: "",
      cmpId: "",
      // departmentID: "",
      deptId: "",
      claimsDate: "",
      claimsType: "",
      claimsAmt: "",
      claimsAttachment: "",
      remarks: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      const payload={
        claimsEmpId:values.claimsEmpId,
        cmpId:parseInt(values.cmpId),
        deptId:parseInt(values.deptId),
        claimsDate:values.claimsDate,
        claimsType:values.type,
        claimsAmt:parseInt(values.claimsAmt),
        claimsclaimsAttachment:values.claimsAttachment,
        remarks:values.remarks
      }
      try {
       
        const response = await api.post("/addClaims", payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("payload",payload);
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/claimadmin");
          
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error);
      }
    },
  });
console.log("departmentData",departmentData)
console.log("companyData",companyData)
console.log("employeeData",employeeData)
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
                Save
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
                  formik.touched.claimsEmpId && formik.errors.claimsEmpId
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("claimsEmpId")}
              />
              {formik.touched.claimsEmpId && formik.errors.claimsEmpId && (
                <div className="invalid-feedback">
                  {formik.errors.claimsEmpId}
                </div>
              )}
            </div> */}
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Employee Name<span className="text-danger">*</span>
              </lable>
              <div className="input-group mb-3">
                <select
                  {...formik.getFieldProps("claimsEmpId")}
                  className={`form-select  ${
                    formik.touched.claimsEmpId && formik.errors.claimsEmpId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  {employeeData &&
                    employeeData.map((claimsEmpId) => (
                      <option key={claimsEmpId.id} value={claimsEmpId.employeeId}>
                        {claimsEmpId.firstName} {claimsEmpId.lastName}
                      </option>
                    ))}
                </select>
                {formik.touched.claimsEmpId && formik.errors.claimsEmpId && (
                  <div className="invalid-feedback">
                    {formik.errors.claimsEmpId}
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
                      <option key={cmpId.id} value={cmpId.cmpId}>
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
                      <option key={deptId.id} value={deptId.deptId}>
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
                  formik.touched.claimsDate && formik.errors.claimsDate ? "is-invalid" : ""
                }`}
                {...formik.getFieldProps("claimsDate")}
              />
              {formik.touched.claimsDate && formik.errors.claimsDate && (
                <div className="invalid-feedback">{formik.errors.claimsDate}</div>
              )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable class="form-lable">
                Type<span class="text-danger">*</span>
              </lable>
              <select
                aria-label="Default select example"
                className={`form-select  ${
                  formik.touched.claimsType && formik.errors.claimsType ? "is-invalid" : ""
                }`}
                {...formik.getFieldProps("claimsType")}
              >
                <option selected></option>
                <option value="Telephone">Telephone</option>
                <option value="Taxi">Taxi</option>
                <option value="Hotel and Acc">Hotel and Acc</option>
                <option value="Leave Enhance">Leave Enhance</option>
              </select>
              {formik.touched.claimsType && formik.errors.claimsType && (
                <div className="invalid-feedback">{formik.errors.claimsType}</div>
              )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Amount<span className="text-danger">*</span>
              </lable>
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.claimsAmt && formik.errors.claimsAmt
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("claimsAmt")}
              />
              {formik.touched.claimsAmt && formik.errors.claimsAmt && (
                <div className="invalid-feedback">{formik.errors.claimsAmt}</div>
              )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Attachment<span className="text-danger">*</span>
              </lable>
              <input
                type="file"
                className={`form-control  ${
                  formik.touched.claimsAttachment && formik.errors.claimsAttachment
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("claimsAttachment")}
              />
              {formik.touched.claimsAttachment && formik.errors.claimsAttachment && (
                <div className="invalid-feedback">
                  {formik.errors.claimsAttachment}
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

export default ClaimAdminAdd;
