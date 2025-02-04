import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import api from "../../../config/URL";
import fetchAllCompanyNamesWithId from "../../List/CompanyNameList";
import fetchAllEmployeeNamesWithId from "../../List/EmployeeNameList";

function ExitManagementEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [companyData, setCompanyData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);

  const fetchData = async () => {
    try {
      const companyData = await fetchAllCompanyNamesWithId();
      const employeeData = await fetchAllEmployeeNamesWithId();
      setCompanyData(companyData);
      setEmployeeData(employeeData);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const validationSchema = Yup.object({
    // exitMgmtEmpId: Yup.string().required("*Employee name is required"),
    // exitMgmtCmpId: Yup.string().required("*Company name is required"),
    // exitMgmtDateOfApply: Yup.string().required("*Select the date of apply"),
    exitMgmtNoticePeriod: Yup.string().required("*Notice period is required"),
    // currentDate: Yup.string().required("*Select the current date"),
    // reasonForRelieving: Yup.string().required(
    //   "*Reason for relieving is required"
    // ),
    // dateOfRelieving: Yup.string().required("*Select the date of relieving"),
    relievingApproverName: Yup.string().required(
      "*Relieving approver name is required"
    ),
    relievingApproverStatus: Yup.string().required(
      "*Select the approval status"
    ),
    assetsReturned: Yup.string().required("*Select the assets returned"),
  });

  const formik = useFormik({
    initialValues: {
      exitMgmtCmpId: "",
      exitMgmtEmpId: 34,
      exitMgmtDateOfApply: "",
      exitMgmtNoticePeriod: "",
      reasonForRelieving: "",
      dateOfRelieving: "",
      relievingApproverName: "",
      relievingApproverId: "",
      relievingApproverStatus: "",
      assetsReturned: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      try {
        const response = await api.put(
          `exit-management/${id}`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          toast.success(response.data.message);
          navigate("/exitmanagement");
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
        const response = await api.get(`/exit-management/${id}`);
        const formattedData = {
          ...response.data,
          exitMgmtDateOfApply: response.data.exitMgmtDateOfApply
            ? new Date(response.data.exitMgmtDateOfApply)
                .toISOString()
                .substring(0, 10)
            : null,
          dateOfRelieving: response.data.dateOfRelieving
            ? new Date(response.data.dateOfRelieving)
                .toISOString()
                .substring(0, 10)
            : null,
        };
        formik.setValues(formattedData);
        setLoading(false);
      } catch (error) {
        toast.error("Error Fetching Data ", error);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="ExitAdd p-3">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!loading && (
        <div className="container-fluid">
          <div className="container py-3">
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-12 text-end">
                  <Link to="/exitmanagement">
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
                <div className="col-md-6 col-12 mb-2">
                  <lable className="form-lable">
                    Company Name<span className="text-danger">*</span>
                  </lable>
                  <div className="input-group mb-3">
                    <select
                      {...formik.getFieldProps("exitMgmtCmpId")}
                      className={`form-select  ${
                        formik.touched.exitMgmtCmpId &&
                        formik.errors.exitMgmtCmpId
                          ? "is-invalid"
                          : ""
                      }`}
                      aria-label="Default select example"
                      disabled
                    >
                      {companyData &&
                        companyData.map((cmpId) => (
                          <option key={cmpId.id} value={cmpId.cmpId}>
                            {cmpId.cmpName}
                          </option>
                        ))}
                    </select>
                    {formik.touched.cmpId && formik.errors.cmpId && (
                      <div className="invalid-feedback">
                        {formik.errors.cmpId}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-6 col-12 mb-2">
                  <lable className="form-lable">
                    Employee Name<span className="text-danger">*</span>
                  </lable>
                  <div className="input-group mb-3">
                    <select
                      {...formik.getFieldProps("exitMgmtEmpId")}
                      className={`form-select  ${
                        formik.touched.exitMgmtEmpId &&
                        formik.errors.exitMgmtEmpId
                          ? "is-invalid"
                          : ""
                      }`}
                      aria-label="Default select example"
                      disabled
                    >
                      {employeeData &&
                        employeeData.map((employeeId) => (
                          <option
                            key={employeeId.id}
                            value={employeeId.employeeId}
                          >
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
                {/* <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Current Date<span className="text-danger">*</span>
                </lable>
                <input
                  type="date"
                  className={`form-control  ${
                    formik.touched.currentDate && formik.errors.currentDate
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("currentDate")}
                />
                {formik.touched.currentDate && formik.errors.currentDate && (
                  <div className="invalid-feedback">
                    {formik.errors.currentDate}
                  </div>
                )}
              </div> */}
                <div className="col-md-6 col-12 mb-3">
                  <lable className="form-lable">
                    Reason For Relieving<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.reasonForRelieving &&
                      formik.errors.reasonForRelieving
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("reasonForRelieving")}
                    disabled
                  />
                  {formik.touched.reasonForRelieving &&
                    formik.errors.reasonForRelieving && (
                      <div className="invalid-feedback">
                        {formik.errors.reasonForRelieving}
                      </div>
                    )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <lable className="form-lable">
                    Date of Relieving<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="date"
                    className={`form-control  ${
                      formik.touched.dateOfRelieving &&
                      formik.errors.dateOfRelieving
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("dateOfRelieving")}
                    disabled
                  />
                  {formik.touched.dateOfRelieving &&
                    formik.errors.dateOfRelieving && (
                      <div className="invalid-feedback">
                        {formik.errors.dateOfRelieving}
                      </div>
                    )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <lable className="form-lable">
                    Date Of Apply<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="date"
                    className={`form-control  ${
                      formik.touched.exitMgmtDateOfApply &&
                      formik.errors.exitMgmtDateOfApply
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("exitMgmtDateOfApply")}
                    disabled
                  />
                  {formik.touched.exitMgmtDateOfApply &&
                    formik.errors.exitMgmtDateOfApply && (
                      <div className="invalid-feedback">
                        {formik.errors.exitMgmtDateOfApply}
                      </div>
                    )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <lable className="form-lable">
                    Notice Period<span className="text-danger">*</span>
                  </lable>
                  <select
                    type="text"
                    className={`form-select  ${
                      formik.touched.exitMgmtNoticePeriod &&
                      formik.errors.exitMgmtNoticePeriod
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("exitMgmtNoticePeriod")}
                  >
                    <option selected></option>
                    <option value="30 days">30 days</option>
                    <option value="60 days">60 days</option>
                    <option value="90 days">90 days</option>
                  </select>
                  {formik.touched.exitMgmtNoticePeriod &&
                    formik.errors.exitMgmtNoticePeriod && (
                      <div className="invalid-feedback">
                        {formik.errors.exitMgmtNoticePeriod}
                      </div>
                    )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <lable className="form-lable">
                    Relieving Approver Name
                    <span className="text-danger">*</span>
                  </lable>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.relievingApproverName &&
                      formik.errors.relievingApproverName
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("relievingApproverName")}
                  />
                  {formik.touched.relievingApproverName &&
                    formik.errors.relievingApproverName && (
                      <div className="invalid-feedback">
                        {formik.errors.relievingApproverName}
                      </div>
                    )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <lable className="form-lable">
                    Assets Returned<span className="text-danger">*</span>
                  </lable>
                  <div className="mt-2">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        value="true"
                        name="assetsReturned"
                        id="inlineRadio1"
                        type="radio"
                        onChange={() =>
                          formik.setFieldValue("assetsReturned", true)
                        }
                        checked={formik.values.assetsReturned === true}
                      />
                      <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        value="false"
                        name="assetsReturned"
                        id="inlineRadio2"
                        type="radio"
                        onChange={() =>
                          formik.setFieldValue("assetsReturned", false)
                        }
                        checked={formik.values.assetsReturned === false}
                      />
                      <label className="form-check-label">No</label>
                    </div>
                  </div>
                  {formik.errors.assetsReturned &&
                    formik.touched.assetsReturned && (
                      <div
                        className="text-danger"
                        style={{ fontSize: ".875em" }}
                      >
                        {formik.errors.assetsReturned}
                      </div>
                    )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <lable className="form-lable">
                    Approval Status<span className="text-danger">*</span>
                  </lable>
                  <select
                    {...formik.getFieldProps("relievingApproverStatus")}
                    className={`form-select  ${
                      formik.touched.relievingApproverStatus &&
                      formik.errors.relievingApproverStatus
                        ? "is-invalid"
                        : ""
                    }`}
                    aria-label="Default select example"
                  >
                    <option value="Pending" selected>
                      Pending
                    </option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                  {formik.touched.relievingApproverStatus &&
                    formik.errors.relievingApproverStatus && (
                      <div className="invalid-feedback">
                        {formik.errors.relievingApproverStatus}
                      </div>
                    )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default ExitManagementEdit;
