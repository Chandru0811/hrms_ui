import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function PolicyAdd() {

  const validationSchema = Yup.object({
    policyName: Yup.string().required('*Policy name is required'),
    policyDescription: Yup.string().required('*Policy description is required')
  });

  const formik = useFormik({
    initialValues: {
      policyName: "",
      policyDescription: ""
    },
    validationSchema: validationSchema, // Assign the validation schema
    onSubmit: async (values) => {
      console.log(values);
    }
  })

  return (
    <div className="container-fluid">
      <div className="container py-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/policy">
                <button type="button" className="btn btn-sm btn-border">Back</button>
              </Link>
              &nbsp;&nbsp;
                <button type="submit" className="btn btn-sm btn-button">Save</button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2">
                <lable className="form-lable">Enter Policy Name</lable><span className="text-danger">*</span>
                <input 
                type="text"
                className={`form-control  ${formik.touched.policyName && formik.errors.policyName ? 'is-invalid' : ''}`}
                {...formik.getFieldProps('policyName')} />
                {formik.touched.policyName && formik.errors.policyName && (
                  <div className="invalid-feedback">{formik.errors.policyName}</div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2">
                <lable className="form-lable">Enter Policy Description</lable><span className="text-danger">*</span>
                <textarea
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  className={`form-control  ${formik.touched.policyDescription && formik.errors.policyDescription ? 'is-invalid' : ''}`}
                  {...formik.getFieldProps('policyDescription')}
                ></textarea>
                {formik.touched.policyDescription && formik.errors.policyDescription && (
                  <div className="invalid-feedback">{formik.errors.policyDescription}</div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
