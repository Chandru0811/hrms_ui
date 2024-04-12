import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../config/URL";
import { toast } from "react-toastify";

function ExitManagementAdmin() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    exitMgmtEmpId: Yup.string().required("*Employee ID is required"),
    exitMgmtEmpName: Yup.string().required("*Employee name is required"),
    exitMgmtCmpId: Yup.string().required("*Company ID is required"),
    reasonForRelieving: Yup.string().required(
      "*Reason for relieving is required"
    ),
    dateOfRelieving: Yup.string().required("*Select the date of relieving"),
    exitMgmtDateOfApply: Yup.string().required("*Select the date of apply"),
    exitMgmtNoticePeriod: Yup.string().required("*Notice period is required"),
  });

  const formik = useFormik({
    initialValues: {
      exitMgmtEmpId: "",
      exitMgmtEmpName: "",
      exitMgmtCmpId: "",
      reasonForRelieving: "",
      dateOfRelieving: "",
      exitMgmtDateOfApply: "",
      exitMgmtNoticePeriod: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      values.exitMgmtCmpId = 106;
      values.exitMgmtEmpId = "106-01";
      values.relievingApprovalStatus = "Pending";
      try {
        const response = await api.post("addExitManagement", values);
        // console.log(response)
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/exitmanagement");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Error Submiting Data, ", error);
      }
    },
  });

  return (
    <section className="ExitAdd p-3">
      <div className="container-fluid">
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12 text-end">
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
                <select
                  {...formik.getFieldProps("exitMgmtEmpId")}
                  className={`form-select  ${
                    formik.touched.exitMgmtEmpId &&
                    formik.errors.exitMgmtEmpId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option></option>
                  <option value="106-01">106-01</option>
                  <option value="106-02">106-02</option>
                </select>
                {formik.touched.exitMgmtEmpId &&
                  formik.errors.exitMgmtEmpId && (
                    <div className="invalid-feedback">
                      {formik.errors.exitMgmtEmpId}
                    </div>
                  )}
              </div>
              <div class="col-md-6 col-12 mb-3">
                <lable class="form-lable">
                  Employee Name<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.exitMgmtEmpName && formik.errors.exitMgmtEmpName
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("exitMgmtEmpName")}
                />
                {formik.touched.exitMgmtEmpName && formik.errors.exitMgmtEmpName && (
                  <div className="invalid-feedback">
                    {formik.errors.exitMgmtEmpName}
                  </div>
                )}
              </div>
              <div class="col-md-6 col-12 mb-3">
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
                {formik.touched.exitMgmtCmpId && formik.errors.exitMgmtCmpId && (
                  <div className="invalid-feedback">
                    {formik.errors.exitMgmtCmpId}
                  </div>
                )}
              </div>
              <div class="col-md-6 col-12 mb-3">
                <lable class="form-lable">
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
              <div class="col-md-6 col-12 mb-3">
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
              <div class="col-md-6 col-12 mb-3">
                <lable class="form-lable">
                  Date Of Apply<span className="text-danger">*</span>
                </lable>
                <input
                  type="date"
                  className={`form-control  ${
                    formik.touched.exitMgmtDateOfApply && formik.errors.exitMgmtDateOfApply
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("exitMgmtDateOfApply")}
                />
                {formik.touched.exitMgmtDateOfApply && formik.errors.exitMgmtDateOfApply && (
                  <div className="invalid-feedback">
                    {formik.errors.exitMgmtDateOfApply}
                  </div>
                )}
              </div>
              <div class="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Notice Period<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.exitMgmtNoticePeriod && formik.errors.exitMgmtNoticePeriod
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("exitMgmtNoticePeriod")}
                />
                {formik.touched.exitMgmtNoticePeriod && formik.errors.exitMgmtNoticePeriod && (
                  <div className="invalid-feedback">
                    {formik.errors.exitMgmtNoticePeriod}
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

export default ExitManagementAdmin;