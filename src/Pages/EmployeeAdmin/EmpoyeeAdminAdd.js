import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import api from "../../config/URL";
import { toast } from "react-toastify";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import fetchAllDepartmentNamesWithId from "../List/DepartmentNameList";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";

function EmployeeAdminAdd() {
  const [companyData, setCompanyData] = useState(null);
  const [departmentData, setDepartmentData] = useState(null);
  const [selectedIdType, setSelectedIdType] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loadIndicator, setLoadIndicators] = useState(false);
  const navigate = useNavigate();
  const roleName = sessionStorage.getItem("role")

  const validationSchema = Yup.object({
    firstName: Yup.string().required("*First name is required"),
    lastName: Yup.string().required("*Last name is required"),
    empPriPhNumber: Yup.number()
      .required("*Primary phone number is required")
      .typeError("*Must be a number"),
    email: Yup.string()
      .email("*Enter valid email")
      .required("*Primary email id is required"),
    password: Yup.string().required(
      "*Primary email password is required"
    ),
    // empRegCmpId: Yup.string().required("*Company name is required"),
    // // employeeID: Yup.string().required("*Employee id is required"),
    // empRegDeptId: Yup.string().required("*Department name is required"),
    // empDesignation: Yup.string().required(
    //   "*Employee designation is required"
    // ),
    // empDateOfJoin: Yup.string().required(
    //   "*Employee date of joining is required"
    // ),
    // empType: Yup.string().required("*Employee type is required"),
    // noticePeriod: Yup.string().required("*Notice period is required"),
    // repManagerName: Yup.string().required(
    //   "*Reporting manager name is required"
    // ),
    // reportingManagerID: Yup.string().required(
    //   "*Reporting manager id is required"
    // ),
    // ...(selectedIdType === "NRIC" && {
    //   NRICFin: Yup.string().required("*NRIC fin is required"),
    //   NRICType: Yup.string().required("*Select a NRIC type"),
    // }),
    // ...(selectedIdType === "AADHAR" && {
    //   aadharNumber: Yup.string().required("*Aadhar number is required"),
    // }),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      empPriPhNumber: "",
      email: "",
      password: "",
      NRICFin: "",
      NRICType: "",
      aadharNumber: "",
      empRegCmpId: "",
      empRegDeptId: "",
      empDesignation: "",
      proof: "",
      empDateOfJoin: "",
      empType: "",
      noticePeriod: "",
      repManagerName: "",
      reportingManagerID: "",
      file: "",
    },
    validate: (values) => {
      const errors = {};
      if (values.file) {
        // Check if the file is one of the allowed types
        const file = values.file;
        const validTypes = ['image/jpeg', 'image/png'];
        if (!validTypes.includes(file.type)) {
          errors.file = 'Only JPG and PNG files are accepted';
        }
      }
      return errors;
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
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("NRICFin", values.NRICFin);
        formData.append("NRICType", values.NRICType);
        formData.append("aadharNumber", values.aadharNumber);
        formData.append("empRegCmpId", values.empRegCmpId);
        formData.append("empRegDeptId", values.empRegDeptId);
        formData.append("file", values.file);
        
        formData.append("proof", selectedIdType);
        formData.append("empDesignation", values.empDesignation);
        formData.append("empDateOfJoin", values.empDateOfJoin);
        formData.append("empType", values.empType);
        formData.append("noticePeriod", values.noticePeriod);
        formData.append("repManagerName", values.repManagerName);
        formData.append("roleName", roleName);
        // formData.append("reportingManagerID", values.reportingManagerID);

        const response = await api.post("/addEmployeeReg", formData);
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

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCurrentDate(today);
  }, []);

  const handleIdTypeChange = (event) => {
    setSelectedIdType(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                &nbsp;<span>Save</span>
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
                  name="email"
                  className={`form-control  ${
                    formik.touched.email && formik.errors.email
                      ? "is-invalid"
                      : ""
                  }`}
                 
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="invalid-feedback">
                    {formik.errors.email}
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
                  name="password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`form-control  ${
                      formik.touched.password &&
                      formik.errors.password
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("password")}
                    style={{
                      borderRight: "none",
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                    }}
                    
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
                  {formik.touched.password &&
                    formik.errors.password && (
                      <div className="invalid-feedback">
                        {formik.errors.password}
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
                 
                >
                  <option selected></option>
                  {companyData &&
                    companyData.map((cmpId) => (
                      <option key={cmpId.cmpId} value={cmpId.cmpId}>
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
                 
                >
                  <option selected></option>
                  {departmentData &&
                    departmentData.map((deptId) => (
                      <option key={deptId.deptId} value={deptId.deptId}>
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
                  name="empDesignation"
                  className={`form-control  ${
                    formik.touched.empDesignation &&
                    formik.errors.empDesignation
                      ? "is-invalid"
                      : ""
                  }`}
                 
                  {...formik.getFieldProps("empDesignation")}
                />
                {formik.touched.empDesignation &&
                  formik.errors.empDesignation && (
                    <div className="invalid-feedback">
                      {formik.errors.empDesignation}
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
                    value="NRIC"
                    checked={selectedIdType === "NRIC"}
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
                    value="AADHAR"
                    checked={selectedIdType === "AADHAR"}
                    onChange={handleIdTypeChange}
                  />
                  <lable className="form-check-label" htmlFor="aadharRadio">
                    Aadhar
                  </lable>
                </div>
              </div>
              {selectedIdType === "NRIC" && (
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
                        {...formik.getFieldProps("NRICFin")}
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
                      name="NRICType"
                        className={`form-select  ${
                          formik.touched.NRICType && formik.errors.NRICType
                            ? "is-invalid"
                            : ""
                        }`}
                        {...formik.getFieldProps("NRICType")}
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
              {selectedIdType === "AADHAR" && (
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
                  name="empDateOfJoin"
                  className={`form-control  ${
                    formik.touched.empDateOfJoin && formik.errors.empDateOfJoin
                      ? "is-invalid"
                      : ""
                  }`}
                 
                  {...formik.getFieldProps("empDateOfJoin")}
                />
                {formik.touched.empDateOfJoin &&
                  formik.errors.empDateOfJoin && (
                    <div className="invalid-feedback">
                      {formik.errors.empDateOfJoin}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3">
        <label className="form-label">Photo</label>
        <input
          type="file"
          name="file"
          className={`form-control ${
            formik.touched.file && formik.errors.file ? 'is-invalid' : ''
          }`}
          accept=".jpg, .jpeg, .png" // Restrict file types
          onChange={(event) => {
            const file = event.target.files[0];
            if (file) {
              formik.setFieldValue('file', file);
            }
          }}
          onBlur={formik.handleBlur}
        />
        {formik.touched.file && formik.errors.file && (
          <div className="invalid-feedback">
            {formik.errors.file}
          </div>
        )}
      </div>
            <div className="col-md-6 col-12 mb-4">
              <lable className="">Employee Type</lable>
              <span className="text-danger">*</span>
              <select
                {...formik.getFieldProps("empType")}
                name="empType"
                className={`form-select    ${
                  formik.touched.empType && formik.errors.empType
                    ? "is-invalid"
                    : ""
                }`}
                
              >
                <option selected></option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Hourly Basis">Hourly Basis</option>
              </select>
              {formik.touched.empType && formik.errors.empType && (
                <div className="invalid-feedback">{formik.errors.empType}</div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Notice Period<span className="text-danger">*</span>
                </lable>
                <select
                    type="text"
                    className={`form-select  ${
                      formik.touched.noticePeriod &&
                      formik.errors.noticePeriod
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("noticePeriod")}
                  >
                    <option selected></option>
                    <option value="30 days">30 days</option>
                    <option value="60 days">60 days</option>
                    <option value="90 days">90 days</option>
                  </select>
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
                  name="repManagerName"
                  className={`form-control  ${
                    formik.touched.repManagerName &&
                    formik.errors.repManagerName
                      ? "is-invalid"
                      : ""
                  }`}
                 
                  {...formik.getFieldProps("repManagerName")}
                />
                {formik.touched.repManagerName &&
                  formik.errors.repManagerName && (
                    <div className="invalid-feedback">
                      {formik.errors.repManagerName}
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
