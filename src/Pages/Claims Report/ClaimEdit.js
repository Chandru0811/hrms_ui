import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import fetchAllDepartmentNamesWithId from "../List/DepartmentNameList";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";
import api from "../../config/URL";
import { toast } from "react-toastify";

function ClaimEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
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
    // attachment: Yup.string().required("*attachment is required"),
    // claimsApprovalLv1Id: Yup.string().required(
    //   "*Approver id(lvl 1) is required"
    // ),
    // approvalNameLv1: Yup.string().required("*Approver name(lvl 1) is required"),
    // approvalStatusLv1: Yup.string().required(
    //   "*Select the approver status(lvl 1)"
    // ),
    // claimsApprovalLv2Id: Yup.string().required(
    //   "*Approver id(lvl 2) is required"
    // ),
    // approvalNameLv2: Yup.string().required("*Approver name(lvl 2) is required"),
    // approvalStatusLv2: Yup.string().required(
    //   "*Select the approver status(lvl 2)"
    // ),
  });

  const formik = useFormik({
    initialValues: {
      //   claimsEmpId: "12",
      claimsEmpId: "",
      //   companyID: "ECS031",
      cmpId: "",
      //   departmentID: "ECSD002",
      deptId: "",
      claimsDate: "",
      claimsType: "",
      claimsAmt: "",
      attachment: "",
      claimsApprovalLv1Id: "",
      approvalNameLv1: "",
      approvalStatusLv1: "",
      claimsApprovalLv2Id: "",
      approvalNameLv2: "",
      approvalStatusLv2: "",
      remarks: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);

      try {
        const response = await api.put(`/updateClaimsById/${id}`, values, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("values", values);
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/claim");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error);
      }
    },
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/getClaimsById/${id}`);
        formik.setValues({
          ...response.data,
        });
      } catch (error) {
        toast.error("Error fetching data:", error);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-fluid">
      <div className="container py-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/claim">
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
                      <option
                        key={claimsEmpId.id}
                        value={claimsEmpId.employeeId}
                      >
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
                  formik.touched.claimsDate && formik.errors.claimsDate
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("claimsDate")}
              />
              {formik.touched.claimsDate && formik.errors.claimsDate && (
                <div className="invalid-feedback">
                  {formik.errors.claimsDate}
                </div>
              )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable class="form-lable">
                Type<span class="text-danger">*</span>
              </lable>
              <select
                aria-label="Default select example"
                className={`form-select  ${
                  formik.touched.claimsType && formik.errors.claimsType
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("claimsType")}
              >
                <option value="TELEPHONE">TELEPHONE</option>
                <option value="TAXI">TAXI</option>
                <option value="HOTEL_AND_ACC">HOTEL AND ACC</option>
                <option value="LEAVE_ENHANCE">LEAVE ENHANCE</option>
              </select>
              {formik.touched.claimsType && formik.errors.claimsType && (
                <div className="invalid-feedback">
                  {formik.errors.claimsType}
                </div>
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
                <div className="invalid-feedback">
                  {formik.errors.claimsAmt}
                </div>
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
                onChange={(event) => {
                  formik.setFieldValue(
                    "attachment",
                    event.currentTarget.files[0]
                  );
                }}
              />

              {formik.touched.attachment && formik.errors.attachment && (
                <div className="invalid-feedback">
                  {formik.errors.attachment}
                </div>
              )}
            </div>
            {/* <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Approver ID(Lvl 1)<span className="text-danger">*</span>
              </lable>
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.claimsApprovalLv1Id &&
                  formik.errors.claimsApprovalLv1Id
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("claimsApprovalLv1Id")}
              />
              {formik.touched.claimsApprovalLv1Id &&
                formik.errors.claimsApprovalLv1Id && (
                  <div className="invalid-feedback">
                    {formik.errors.claimsApprovalLv1Id}
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
                  formik.touched.approvalNameLv1 &&
                  formik.errors.approvalNameLv1
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("approvalNameLv1")}
              />
              {formik.touched.approvalNameLv1 &&
                formik.errors.approvalNameLv1 && (
                  <div className="invalid-feedback">
                    {formik.errors.approvalNameLv1}
                  </div>
                )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Approver Status(Lvl 1)<span className="text-danger">*</span>
              </lable>
              <select
                className={`form-select  ${
                  formik.touched.approvalStatusLv1 &&
                  formik.errors.approvalStatusLv1
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("approvalStatusLv1")}
              >
                <option value="PENDING">PENDING</option>
                <option value="APPROVED">APPROVED</option>
                <option value="REJECTED">REJECTED</option>
              </select>
              {formik.touched.approvalStatusLv1 &&
                formik.errors.approvalStatusLv1 && (
                  <div className="invalid-feedback">
                    {formik.errors.approvalStatusLv1}
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
                  formik.touched.claimsApprovalLv2Id &&
                  formik.errors.claimsApprovalLv2Id
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("claimsApprovalLv2Id")}
              />
              {formik.touched.claimsApprovalLv2Id &&
                formik.errors.claimsApprovalLv2Id && (
                  <div className="invalid-feedback">
                    {formik.errors.claimsApprovalLv2Id}
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
                  formik.touched.approvalNameLv2 &&
                  formik.errors.approvalNameLv2
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("approvalNameLv2")}
              />
              {formik.touched.approvalNameLv2 &&
                formik.errors.approvalNameLv2 && (
                  <div className="invalid-feedback">
                    {formik.errors.approvalNameLv2}
                  </div>
                )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">
                Approver Status(Lvl 2)<span className="text-danger">*</span>
              </lable>
              <select
                className={`form-select  ${
                  formik.touched.approvalStatusLv2 &&
                  formik.errors.approvalStatusLv2
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("approvalStatusLv2")}
              >
                <option value="PENDING">PENDING</option>
                <option value="APPROVED">APPROVED</option>
                <option value="REJECTED">REJECTED</option>
              </select>
              {formik.touched.approvalStatusLv2 &&
                formik.errors.approvalStatusLv2 && (
                  <div className="invalid-feedback">
                    {formik.errors.approvalStatusLv2}
                  </div>
                )}
            </div> */}
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

export default ClaimEdit;
