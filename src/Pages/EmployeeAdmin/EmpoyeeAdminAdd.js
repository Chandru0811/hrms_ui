import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function EmployeeAdminAdd() {

  const [selectedIdType, setSelectedIdType] = useState('nric');

  const validationSchema = Yup.object({
    firstName: Yup.string().required("*First name is required"),
    lastName: Yup.string().required("*Last name is required"),
    primaryPhoneNumber: Yup.number().required(
      "*Primary phone number is required"
    ) .typeError("*Must be a number"),
    primaryEmailID: Yup.string()
      .email("*Enter valid email")
      .required("*Primary email id is required"),
    primaryEmailPassword: Yup.string().required(
      "*Primary email password is required"
    ),
    companyID: Yup.string().required("*Company id is required"),
    employeeID: Yup.string().required("*Employee id is required"),
    departmentID: Yup.string().required("*Select a department id"),
    employeedesignation: Yup.string().required(
      "*Employee designation is required"
    ),
    employeeDateOfJoining: Yup.string().required(
      "*Employee date of joining is required"
    ),
    employeeType: Yup.string().required("*Employee type is required"),
    noticePeriod: Yup.string().required("*Notice period is required"),
    reportingManagerName: Yup.string().required(
      "*Reporting manager name is required"
    ),
    reportingManagerID: Yup.string().required(
      "*Reporting manager id is required"
    ),
    ...(selectedIdType === 'nric' && {
      nricFin: Yup.string().required("*NRIC fin is required"),
      nricType: Yup.string().required("*Select a NRIC type"),
    }),
    ...(selectedIdType === 'aadhar' && {
      aadharNumber: Yup.string().required("*Aadhar number is required"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      primaryPhoneNumber: "",
      primaryEmailID: "",
      primaryEmailPassword: "",
      nricFin: "",
      nricType: "",
      aadharNumber: "",
      companyID: "",
      employeeID: "",
      departmentID: "",
      employeedesignation: "",
      employeeDateOfJoining: "",
      employeeType: "",
      noticePeriod: "",
      reportingManagerName: "",
      reportingManagerID: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });


  const handleIdTypeChange = (event) => {
    setSelectedIdType(event.target.value);
  };

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <div className="container py-3">
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/employeeadmin">
                <button className="btn btn-sm btn-border">Back</button>
              </Link>
              &nbsp;&nbsp;
              <button type="submit" className="btn btn-button btn-sm">
                Save
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 col-12 mb-3">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  First Name<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="firstName"
                  className={`form-control  ${formik.touched.firstName && formik.errors.firstName
                    ? "is-invalid"
                    : ""
                    }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="invalid-feedback">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Last Name<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="lastName"
                  className={`form-control  ${formik.touched.lastName && formik.errors.lastName
                    ? "is-invalid"
                    : ""
                    }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="invalid-feedback">
                    {formik.errors.lastName}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Primary Email ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="email"
                  name="primaryEmailID"
                  className={`form-control  ${formik.touched.primaryEmailID &&
                    formik.errors.primaryEmailID
                    ? "is-invalid"
                    : ""
                    }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("primaryEmailID")}
                />
                {formik.touched.primaryEmailID &&
                  formik.errors.primaryEmailID && (
                    <div className="invalid-feedback">
                      {formik.errors.primaryEmailID}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Primary Email Password<span className="text-danger">*</span>
                </lable>
                <input
                  type="password"
                  name="primaryEmailPassword"
                  className={`form-control  ${formik.touched.primaryEmailPassword &&
                    formik.errors.primaryEmailPassword
                    ? "is-invalid"
                    : ""
                    }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("primaryEmailPassword")}
                />
                {formik.touched.primaryEmailPassword &&
                  formik.errors.primaryEmailPassword && (
                    <div className="invalid-feedback">
                      {formik.errors.primaryEmailPassword}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Primary Phone Number<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="primaryPhoneNumber"
                  className={`form-control  ${formik.touched.primaryPhoneNumber &&
                    formik.errors.primaryPhoneNumber
                    ? "is-invalid"
                    : ""
                    }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("primaryPhoneNumber")}
                />
                {formik.touched.primaryPhoneNumber &&
                  formik.errors.primaryPhoneNumber && (
                    <div className="invalid-feedback">
                      {formik.errors.primaryPhoneNumber}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Company ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="companyID"
                  className={`form-control  ${formik.touched.companyID && formik.errors.companyID
                    ? "is-invalid"
                    : ""
                    }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("companyID")}
                />
                {formik.touched.companyID && formik.errors.companyID && (
                  <div className="invalid-feedback">
                    {formik.errors.companyID}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Employee ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="employeeID"
                  className={`form-control  ${formik.touched.employeeID && formik.errors.employeeID
                    ? "is-invalid"
                    : ""
                    }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("employeeID")}
                />
                {formik.touched.employeeID && formik.errors.employeeID && (
                  <div className="invalid-feedback">
                    {formik.errors.employeeID}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-4">
              <lable className="">Department ID</lable>
              <span className="text-danger">*</span>
              <select
                {...formik.getFieldProps("departmentID")}
                className={`form-select    ${formik.touched.departmentID && formik.errors.departmentID
                  ? "is-invalid"
                  : ""
                  }`}
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="React_01">React_01</option>
                <option value="Java_02">Java_02</option>
                <option value="Flutter_03">Flutter_03</option>
              </select>
              {formik.touched.departmentID && formik.errors.departmentID && (
                <div className="invalid-feedback">
                  {formik.errors.departmentID}
                </div>
              )}
            </div>
            <div>
              <div className="mb-3">
                <div className="form-check form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="idType"
                    id="nricRadio"
                    value="nric"
                    checked={selectedIdType === 'nric'}
                    onChange={handleIdTypeChange}
                  />
                  <lable className="form-check-label" htmlFor="nricRadio">NRIC</lable>
                </div>
                <div className="form-check form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="idType"
                    id="aadharRadio"
                    value="aadhar"
                    checked={selectedIdType === 'aadhar'}
                    onChange={handleIdTypeChange}
                  />
                  <lable className="form-check-label" htmlFor="aadharRadio">Aadhar</lable>
                </div>
              </div>
              {selectedIdType === 'nric' && (
                <div className="row">
                  <div className="col-md-6 col-12 mb-3 ">
                    <div className="mb-2">
                      <lable for="exampleFormControlInput1" className="form-label">
                        NRIC Fin<span className="text-danger">*</span>
                      </lable>
                      <input
                        type="text"
                        name="nricFin"
                        className={`form-control  ${formik.touched.nricFin && formik.errors.nricFin
                          ? "is-invalid"
                          : ""
                          }`}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        {...formik.getFieldProps("nricFin")}
                      />
                      {formik.touched.nricFin && formik.errors.nricFin && (
                        <div className="invalid-feedback">
                          {formik.errors.nricFin}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-3 ">
                    <div className="mb-2">
                      <lable for="exampleFormControlInput1" className="form-label">
                        NRIC Type<span className="text-danger">*</span>
                      </lable>
                      <select
                        className={`form-select  ${formik.touched.nricType && formik.errors.nricType
                          ? "is-invalid"
                          : ""
                          }`}
                        {...formik.getFieldProps("nricType")} >
                        <option selected></option>
                        <option value='Singapore Citizen' >Singapore Citizen</option>
                        <option value='Singapore PR' >Singapore PR</option>
                        <option value='Employment Pass' >Employment Pass</option>
                        <option value='Dependant Pass' >Dependant Pass</option>
                        <option value='S-Pass' >S-Pass</option>
                        <option value='Work Permit' >Work Permit</option>
                      </select>
                      {formik.touched.nricType && formik.errors.nricType && (
                        <div className="invalid-feedback">
                          {formik.errors.nricType}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {selectedIdType === 'aadhar' && (
                <div className="col-md-6 col-12 mb-3 ">
                  <div className="mb-2">
                    <lable for="exampleFormControlInput1" className="form-label">
                      Aadhar Number<span className="text-danger">*</span>
                    </lable>
                    <input
                      type="text"
                      name="aadharNumber"
                      className={`form-control  ${formik.touched.aadharNumber && formik.errors.aadharNumber
                        ? "is-invalid"
                        : ""
                        }`}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      {...formik.getFieldProps("aadharNumber")}
                    />
                    {formik.touched.aadharNumber && formik.errors.aadharNumber && (
                      <div className="invalid-feedback">
                        {formik.errors.aadharNumber}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Employee Designation<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="employeedesignation"
                  className={`form-control  ${formik.touched.employeedesignation &&
                    formik.errors.employeedesignation
                    ? "is-invalid"
                    : ""
                    }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("employeedesignation")}
                />
                {formik.touched.employeedesignation &&
                  formik.errors.employeedesignation && (
                    <div className="invalid-feedback">
                      {formik.errors.employeedesignation}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Employee Date Of Joining<span className="text-danger">*</span>
                </lable>
                <input
                  type="date"
                  name="employeeDateOfJoining"
                  className={`form-control  ${formik.touched.employeeDateOfJoining &&
                    formik.errors.employeeDateOfJoining
                    ? "is-invalid"
                    : ""
                    }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("employeeDateOfJoining")}
                />
                {formik.touched.employeeDateOfJoining &&
                  formik.errors.employeeDateOfJoining && (
                    <div className="invalid-feedback">
                      {formik.errors.employeeDateOfJoining}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-4">
              <lable className="">Employee Type</lable>
              <span className="text-danger">*</span>
              <select
                {...formik.getFieldProps("employeeType")}
                className={`form-select    ${formik.touched.employeeType && formik.errors.employeeType
                  ? "is-invalid"
                  : ""
                  }`}
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Hourly Basis">Hourly Basis</option>
              </select>
              {formik.touched.employeeType && formik.errors.employeeType && (
                <div className="invalid-feedback">
                  {formik.errors.employeeType}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Notice Period<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="noticePeriod"
                  className={`form-control  ${formik.touched.noticePeriod && formik.errors.noticePeriod
                    ? "is-invalid"
                    : ""
                    }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("noticePeriod")}
                />
                {formik.touched.noticePeriod && formik.errors.noticePeriod && (
                  <div className="invalid-feedback">
                    {formik.errors.noticePeriod}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Reporting Manager Name<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="reportingManagerName"
                  className={`form-control  ${formik.touched.reportingManagerName &&
                    formik.errors.reportingManagerName
                    ? "is-invalid"
                    : ""
                    }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("reportingManagerName")}
                />
                {formik.touched.reportingManagerName &&
                  formik.errors.reportingManagerName && (
                    <div className="invalid-feedback">
                      {formik.errors.reportingManagerName}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Reporting Manager ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="reportingManagerID"
                  className={`form-control  ${formik.touched.reportingManagerID &&
                    formik.errors.reportingManagerID
                    ? "is-invalid"
                    : ""
                    }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("reportingManagerID")}
                />
                {formik.touched.reportingManagerID &&
                  formik.errors.reportingManagerID && (
                    <div className="invalid-feedback">
                      {formik.errors.reportingManagerID}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmployeeAdminAdd;