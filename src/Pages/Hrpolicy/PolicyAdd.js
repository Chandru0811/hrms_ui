import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import api from "../../config/URL";

function PolicyAdd() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const validationSchema = Yup.object({
    // hrPolicyCmpId: Yup.string().required("*Company id is required"),
    hrPolicyList: Yup.string().required("*Policy name is required"),
    hrPolicyDescr: Yup.string().required("*Policy description is required"),
  });

  const formik = useFormik({
    initialValues: {
      // hrPolicyCmpId: "",
      hrPolicyList: "",
      hrPolicyDescr: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      // values.hrPolicyCmpId = 106;
      setLoading(true);
      try {
        const response = await api.post("hR-policy", values);
        // console.log(response)
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/policy");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Error Submiting Data, ", error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="container-fluid">
      <div className="container py-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/policy">
                <button type="button" className="btn btn-sm btn-border">
                  Back
                </button>
              </Link>
              &nbsp;&nbsp;
              <button
                type="submit"
                className="btn btn-sm btn-button"
                disabled={loading}
              >
                {loading ? (
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
            {/* <div className="col-md-6 col-12 mt-2">
              <lable className="">Company ID</lable>
              <span className="text-danger">*</span>
              <select
                {...formik.getFieldProps("hrPolicyCmpId")}
                className={`form-select    ${
                  formik.touched.hrPolicyCmpId && formik.errors.hrPolicyCmpId
                    ? "is-invalid"
                    : ""
                }`}
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="106">106</option>
                <option value="107">107</option>
                <option value="108">108</option>
              </select>
              {formik.touched.hrPolicyCmpId && formik.errors.hrPolicyCmpId && (
                <div className="invalid-feedback">
                  {formik.errors.hrPolicyCmpId}
                </div>
              )}
            </div> */}

            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2">
                <lable className="form-lable">Policy Name</lable>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.hrPolicyList && formik.errors.hrPolicyList
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("hrPolicyList")}
                />
                {formik.touched.hrPolicyList && formik.errors.hrPolicyList && (
                  <div className="invalid-feedback">
                    {formik.errors.hrPolicyList}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2">
                <lable className="form-lable">Policy Description</lable>
                <span className="text-danger">*</span>
                <textarea
                  id="floatingTextarea2"
                  // style={{ height: "100px" }}
                  className={`form-control  ${
                    formik.touched.hrPolicyDescr && formik.errors.hrPolicyDescr
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("hrPolicyDescr")}
                  rows="4"
                ></textarea>
                {formik.touched.hrPolicyDescr &&
                  formik.errors.hrPolicyDescr && (
                    <div className="invalid-feedback">
                      {formik.errors.hrPolicyDescr}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default PolicyAdd;
