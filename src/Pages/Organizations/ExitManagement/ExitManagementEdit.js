import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import api from "../../../config/URL";

function ExitManagementEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    exitMgmtEmpId: Yup.string().required("*Employee ID is required"),
    exitMgmtEmpName: Yup.string().required("*Employee name is required"),
    exitMgmtCmpId: Yup.string().required("*Company ID is required"),
    exitMgmtDateOfApply: Yup.string().required("*Select the date of apply"),
    exitMgmtNoticePeriod: Yup.string().required("*Notice period is required"),
    // currentDate: Yup.string().required("*Select the current date"),
    reasonForRelieving: Yup.string().required(
      "*Reason for relieving is required"
    ),
    dateOfRelieving: Yup.string().required("*Select the date of relieving"),
    relievingApproverName: Yup.string().required(
      "*Relieving approver name is required"
    ),
    relievingApproverId: Yup.string().required(
      "*Relieving approver id is required"
    ),
    relievingApprovalStatus: Yup.string().required(
      "*Select the approval status"
    ),
    assetsReturned: Yup.string().required("*Select the assets returned"),
  });

  const formik = useFormik({
    initialValues: {
      exitMgmtEmpId: "",
      exitMgmtCmpId: "",
      exitMgmtEmpName: "",
      exitMgmtDateOfApply: "",
      exitMgmtNoticePeriod: "",
      reasonForRelieving: "",
      dateOfRelieving: "",
      relievingApproverName: "",

      relievingApproverId: "",
      relievingApprovalStatus: "",
      assetsReturned: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      try {
        const response = await api.put(
          `updateExitManagementById/${id}`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 201) {
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
        const response = await api.get(`/getExitManagementById/${id}`);
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
      } catch (error) {
        toast.error("Error Fetching Data ", error);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="ExitAdd p-3">
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
                  Save
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Employee ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.exitMgmtEmpId && formik.errors.exitMgmtEmpId
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("exitMgmtEmpId")}
                />
                {formik.touched.exitMgmtEmpId &&
                  formik.errors.exitMgmtEmpId && (
                    <div className="invalid-feedback">
                      {formik.errors.exitMgmtEmpId}
                    </div>
                  )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Employee Name<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.exitMgmtEmpName &&
                    formik.errors.exitMgmtEmpName
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("exitMgmtEmpName")}
                />
                {formik.touched.exitMgmtEmpName &&
                  formik.errors.exitMgmtEmpName && (
                    <div className="invalid-feedback">
                      {formik.errors.exitMgmtEmpName}
                    </div>
                  )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Company ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.exitMgmtCmpId && formik.errors.exitMgmtCmpId
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("exitMgmtCmpId")}
                />
                {formik.touched.exitMgmtCmpId &&
                  formik.errors.exitMgmtCmpId && (
                    <div className="invalid-feedback">
                      {formik.errors.exitMgmtCmpId}
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
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.exitMgmtNoticePeriod &&
                    formik.errors.exitMgmtNoticePeriod
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("exitMgmtNoticePeriod")}
                />
                {formik.touched.exitMgmtNoticePeriod &&
                  formik.errors.exitMgmtNoticePeriod && (
                    <div className="invalid-feedback">
                      {formik.errors.exitMgmtNoticePeriod}
                    </div>
                  )}
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
                  Relieving Approver ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.relievingApproverId &&
                    formik.errors.relievingApproverId
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("relievingApproverId")}
                />
                {formik.touched.relievingApproverId &&
                  formik.errors.relievingApproverId && (
                    <div className="invalid-feedback">
                      {formik.errors.relievingApproverId}
                    </div>
                  )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Relieving Approver Name<span className="text-danger">*</span>
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
                      type="radio"
                      onChange={formik.handleChange}
                      checked={formik.values.assetsReturned === "true"}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      value="false"
                      name="assetsReturned"
                      type="radio"
                      onChange={formik.handleChange}
                      checked={formik.values.assetsReturned === "false"}
                      
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
                {formik.errors.assetsReturned &&
                  formik.touched.assetsReturned && (
                    <div className="text-danger" style={{ fontSize: ".875em" }}>
                      {formik.errors.assetsReturned}
                    </div>
                  )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Approval Status<span className="text-danger">*</span>
                </lable>
                <select
                  {...formik.getFieldProps("relievingApprovalStatus")}
                  className={`form-select  ${
                    formik.touched.relievingApprovalStatus &&
                    formik.errors.relievingApprovalStatus
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
                {formik.touched.relievingApprovalStatus &&
                  formik.errors.relievingApprovalStatus && (
                    <div className="invalid-feedback">
                      {formik.errors.relievingApprovalStatus}
                    </div>
                  )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ExitManagementEdit;
