import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function DepartmentEdit() {
  const validationSchema = Yup.object({
    departmentName: Yup.string().required("*Department name is required"),
    departmentDescription: Yup.string().required(
      "*Department description is required"
    ),
  });

  const formik = useFormik({
    initialValues: {
      departmentName: "Health Department",
      departmentDescription: "IT Department",
    },
    validationSchema: validationSchema, // Assign the validation schema
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
              <Link to="/departments">
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
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2">
                <lable className="form-lable">Enter Department Name</lable>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.departmentName &&
                    formik.errors.departmentName
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("departmentName")}
                />
                {formik.touched.departmentName &&
                  formik.errors.departmentName && (
                    <div className="invalid-feedback">
                      {formik.errors.departmentName}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2">
                <lable className="form-lable">
                  Enter Department Description
                </lable>
                <span className="text-danger">*</span>
                <textarea
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  className={`form-control  ${
                    formik.touched.departmentDescription &&
                    formik.errors.departmentDescription
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("departmentDescription")}
                ></textarea>
                {formik.touched.departmentDescription &&
                  formik.errors.departmentDescription && (
                    <div className="invalid-feedback">
                      {formik.errors.departmentDescription}
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

export default DepartmentEdit;
