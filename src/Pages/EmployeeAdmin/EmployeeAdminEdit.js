import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import fetchAllDepartmentNamesWithId from "../List/DepartmentNameList";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";
import api from "../../config/URL";

function EmployeeAdminEdit() {
  const [companyData, setCompanyData] = useState(null);
  const [departmentData, setDepartmentData] = useState(null);
  const [selectedIdType, setSelectedIdType] = useState("nric");
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadIndicator, setLoadIndicators] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("*First name is required"),
    lastName: Yup.string().required("*Last name is required"),
    empPriPhNumber: Yup.number()
      .required("*Primary phone number is required")
      .typeError("*Must be a number"),
    empPriEmail: Yup.string()
      .email("*Enter valid email")
      .required("*Primary email id is required"),
    empPriEmailPassword: Yup.string().required(
      "*Primary email password is required"
    ),
    // empRegCmpId: Yup.string().required("*Company name is required"),1
    // employeeID: Yup.string().required("*Employee id is required"),
    // empRegDeptId: Yup.string().required("*Department name is required"),1
    // employeedesignation: Yup.string().required(
    //   "*Employee designation is required"
    // ),1
    // employeeDateOfJoining: Yup.string().required(
    //   "*Employee date of joining is required"
    // ),1
    // employeeType: Yup.string().required("*Employee type is required"),1
    // noticePeriod: Yup.string().required("*Notice period is required"),1
    // reportingManagerName: Yup.string().required(
    //   "*Reporting manager name is required"
    // ),1
    // reportingManagerID: Yup.string().required(
    //   "*Reporting manager id is required"
    // ),
    ...(selectedIdType === "nric" && {
      NRICFin: Yup.string().required("*NRIC fin is required"),
      NRICType: Yup.string().required("*Select a NRIC type"),
    }),
    ...(selectedIdType === "aadhar" && {
      aadharNumber: Yup.string().required("*Aadhar number is required"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      empPriPhNumber: "",
      empPriEmail: "",
      empPriEmailPassword: "",
      NRICFin: "",
      NRICType: "",
      aadharNumber: "",
      empRegCmpId: "",
      empRegDeptId: "",
      employeedesignation: "",
      proof: "",
      employeeDateOfJoining: "",
      employeeType: "",
      noticePeriod: "",
      reportingManagerName: "",
      reportingManagerID: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoadIndicators(true);
      try {
        const formData = new FormData();

        // Add each data field manually to the FormData object
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("empPriPhNumber", values.empPriPhNumber);
        formData.append("empPriEmail", values.empPriEmail);
        formData.append("empPriEmailPassword", values.empPriEmailPassword);
        formData.append("NRICFin", values.NRICFin);
        formData.append("NRICType", values.NRICType);
        // formData.append("aadharNumber", values.aadharNumber);
        formData.append("empRegCmpId", "1");
        formData.append("empRegDeptId", "2");
        formData.append("file", values.file);
        formData.append("aadharNumber", "gytrhh56696");
        formData.append("proof", "AADHAR");
        // formData.append("employeedesignation", values.employeedesignation);
        // formData.append("proof", values.proof);
        // formData.append("employeeDateOfJoining", values.employeeDateOfJoining);
        // formData.append("employeeType", values.employeeType);
        // formData.append("noticePeriod", values.noticePeriod);
        // formData.append("reportingManagerName", values.reportingManagerName);
        // formData.append("reportingManagerID", values.reportingManagerID);

        const response = await api.put(
          `emp-reg-details/${id}`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/employeeadmin");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error);
      } finally {
        setLoadIndicators(false);
      }
    },
  });

  const fetchData = async () => {
    try {
      const companyData = await fetchAllCompanyNamesWithId();
      const departmentData = await fetchAllDepartmentNamesWithId();
      setCompanyData(companyData);
      setDepartmentData(departmentData);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleIdTypeChange = (event) => {
    setSelectedIdType(event.target.value);
  };

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`emp-reg-details/${id}`);
        formik.setValues(response.data);
        setLoading(false);
      } catch (error) {
        // console.log(error.message);
        toast.error("Error Fetching Data ", error.message);
      }
    };
    getData();
  }, [id]);

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
              <button
                type="submit"
                className="btn btn-sm btn-button"
                disabled={loadIndicator}
              >
                {loadIndicator ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                ) : (
                  <span></span>
                )}
                &nbsp;<span>Update</span>
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
                  className={`form-control  ${
                    formik.touched.firstName && formik.errors.firstName
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
                  className={`form-control  ${
                    formik.touched.lastName && formik.errors.lastName
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
                  name="empPriEmail"
                  className={`form-control  ${
                    formik.touched.empPriEmail && formik.errors.empPriEmail
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("empPriEmail")}
                />
                {formik.touched.empPriEmail && formik.errors.empPriEmail && (
                  <div className="invalid-feedback">
                    {formik.errors.empPriEmail}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Primary Email Password<span className="text-danger">*</span>
                </lable>
                <div className={`input-group mb-3`}>
                  <input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`form-control  ${
                      formik.touched.empPriEmailPassword &&
                      formik.errors.empPriEmailPassword
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("empPriEmailPassword")}
                    style={{
                      borderRight: "none",
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                    }}
                    name="empPriEmailPassword"
                  />
                  <span
                    className={`input-group-text bg-white`}
                    id="basic-addon1"
                    onClick={togglePasswordVisibility}
                    style={{
                      cursor: "pointer",
                      borderRadius: "5px",
                      borderLeft: "none",
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                  >
                    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </span>
                  {formik.touched.empPriEmailPassword &&
                    formik.errors.empPriEmailPassword && (
                      <div className="invalid-feedback">
                        {formik.errors.empPriEmailPassword}
                      </div>
                    )}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Primary Phone Number<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="empPriPhNumber"
                  className={`form-control  ${
                    formik.touched.empPriPhNumber &&
                    formik.errors.empPriPhNumber
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("empPriPhNumber")}
                />
                {formik.touched.empPriPhNumber &&
                  formik.errors.empPriPhNumber && (
                    <div className="invalid-feedback">
                      {formik.errors.empPriPhNumber}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Company Name<span className="text-danger">*</span>
              </lable>
              <div className="input-group mb-3">
                <select
                  {...formik.getFieldProps("empRegCmpId")}
                  className={`form-select  ${
                    formik.touched.empRegCmpId && formik.errors.empRegCmpId
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
                {formik.touched.empRegCmpId && formik.errors.empRegCmpId && (
                  <div className="invalid-feedback">
                    {formik.errors.empRegCmpId}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Department Name<span className="text-danger">*</span>
              </lable>
              <div className="input-group mb-3">
                <select
                  {...formik.getFieldProps("empRegDeptId")}
                  className={`form-select  ${
                    formik.touched.empRegDeptId && formik.errors.empRegDeptId
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
                {formik.touched.empRegDeptId && formik.errors.empRegDeptId && (
                  <div className="invalid-feedback">
                    {formik.errors.empRegDeptId}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Employee Designation<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="employeedesignation"
                  className={`form-control  ${
                    formik.touched.employeedesignation &&
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
            <div>
              <div className="mb-3">
                <div className="form-check form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="idType"
                    id="nricRadio"
                    value="nric"
                    checked={selectedIdType === "nric"}
                    onChange={handleIdTypeChange}
                  />
                  <lable className="form-check-label" htmlFor="nricRadio">
                    NRIC
                  </lable>
                </div>
                <div className="form-check form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="idType"
                    id="aadharRadio"
                    value="aadhar"
                    checked={selectedIdType === "aadhar"}
                    onChange={handleIdTypeChange}
                  />
                  <lable className="form-check-label" htmlFor="aadharRadio">
                    Aadhar
                  </lable>
                </div>
              </div>
              {selectedIdType === "nric" && (
                <div className="row">
                  <div className="col-md-6 col-12 mb-3 ">
                    <div className="mb-2">
                      <lable
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        NRIC Fin<span className="text-danger">*</span>
                      </lable>
                      <input
                        type="text"
                        name="NRICFin"
                        className={`form-control  ${
                          formik.touched.NRICFin && formik.errors.NRICFin
                            ? "is-invalid"
                            : ""
                        }`}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        {...formik.getFieldProps("nricfin")}
                      />
                      {formik.touched.NRICFin && formik.errors.NRICFin && (
                        <div className="invalid-feedback">
                          {formik.errors.NRICFin}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-3 ">
                    <div className="mb-2">
                      <lable
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        NRIC Type<span className="text-danger">*</span>
                      </lable>
                      <select
                        className={`form-select  ${
                          formik.touched.NRICType && formik.errors.NRICType
                            ? "is-invalid"
                            : ""
                        }`}
                        {...formik.getFieldProps("nrictype")}
                      >
                        <option selected></option>
                        <option value="Singapore Citizen">
                          Singapore Citizen
                        </option>
                        <option value="Singapore PR">Singapore PR</option>
                        <option value="Employment Pass">Employment Pass</option>
                        <option value="Dependant Pass">Dependant Pass</option>
                        <option value="S-Pass">S-Pass</option>
                        <option value="Work Permit">Work Permit</option>
                      </select>
                      {formik.touched.NRICType && formik.errors.NRICType && (
                        <div className="invalid-feedback">
                          {formik.errors.NRICType}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {selectedIdType === "aadhar" && (
                <div className="col-md-6 col-12 mb-3 ">
                  <div className="mb-2">
                    <lable
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Aadhar Number<span className="text-danger">*</span>
                    </lable>
                    <input
                      type="text"
                      name="aadharNumber"
                      className={`form-control  ${
                        formik.touched.aadharNumber &&
                        formik.errors.aadharNumber
                          ? "is-invalid"
                          : ""
                      }`}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      {...formik.getFieldProps("aadharNumber")}
                    />
                    {formik.touched.aadharNumber &&
                      formik.errors.aadharNumber && (
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
                  Employee Date of Joining
                  <span className="text-danger">*</span>
                </lable>
                <input
                  type="date"
                  name="employeeDateOfJoining"
                  className={`form-control  ${
                    formik.touched.employeeDateOfJoining &&
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
            <div className="col-md-6 col-12 mb-3">
              <lable>Photo</lable>
              <span className="text-danger">*</span>
              <input
                type="file"
                name="file"
                className="form-control"
                onChange={(event) => {
                  formik.setFieldValue("file", event.target.files[0]);
                }}
                onBlur={formik.handleBlur}
              />
              {formik.touched.file && formik.errors.file && (
                <div className="error text-danger ">
                  <small>{formik.errors.file}</small>
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-4">
              <lable className="">Employee Type</lable>
              <span className="text-danger">*</span>
              <select
                {...formik.getFieldProps("employeeType")}
                className={`form-select    ${
                  formik.touched.employeeType && formik.errors.employeeType
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
                  className={`form-control  ${
                    formik.touched.noticePeriod && formik.errors.noticePeriod
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
                  className={`form-control  ${
                    formik.touched.reportingManagerName &&
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
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmployeeAdminEdit;
