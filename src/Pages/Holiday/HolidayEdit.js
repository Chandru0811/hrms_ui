import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function EditNewBublicHoliday() {

  const validationSchema = Yup.object({
    companyID: Yup.string().required('*Company ID is required'),
    companyName: Yup.string().required('*Company name is required'),
    holidayName: Yup.string().required('*Holiday name is required'),
    startDate: Yup.string().required('*Select the start date'),
    endDate: Yup.string().required('*Select the end date'),
    countryCode: Yup.string().required(),
    mobileNo: Yup.number()
      .required('*Country code is required')
      .typeError('*Must be a number'),
  });

  const formik = useFormik({
    initialValues: {
      companyID: "01",
      companyName: "Cloud ECS Infotech",
      holidayName: "New Year",
      startDate: "2024-01-01",
      endDate: "2024-01-01",
      countryCode: "+91",
      mobileNo: "9876543210"
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    }
  })

  return (
    <section className="HolidayEdit p-3">
    <div className="container-fluid">
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/Holiday">
                <button type="button" className="btn btn-sm btn-border">Back</button>
              </Link>
              &nbsp;&nbsp;
              <button type="submit" className="btn btn-sm btn-button">Update</button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Company ID<span className="text-danger">*</span></lable>
                <input
                  type="text"
                  className={`form-control  ${formik.touched.companyID && formik.errors.companyID ? 'is-invalid' : ''}`}
                  {...formik.getFieldProps('companyID')} />
                {formik.touched.companyID && formik.errors.companyID && (
                  <div className="invalid-feedback">{formik.errors.companyID}</div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Company Name<span className="text-danger">*</span></lable>
                <input
                  type="text"
                  className={`form-control  ${formik.touched.companyName && formik.errors.companyName ? 'is-invalid' : ''}`}
                  {...formik.getFieldProps('companyName')} />
                {formik.touched.companyName && formik.errors.companyName && (
                  <div className="invalid-feedback">{formik.errors.companyName}</div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Holiday Name<span className="text-danger">*</span></lable>
                <input
                  type="text"
                  className={`form-control  ${formik.touched.holidayName && formik.errors.holidayName ? 'is-invalid' : ''}`}
                  {...formik.getFieldProps('holidayName')} />
                {formik.touched.holidayName && formik.errors.holidayName && (
                  <div className="invalid-feedback">{formik.errors.holidayName}</div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Start Date<span className="text-danger">*</span></lable>
                <input
                  type="date"
                  className={`form-control  ${formik.touched.startDate && formik.errors.startDate ? 'is-invalid' : ''}`}
                  {...formik.getFieldProps('startDate')} />
                {formik.touched.startDate && formik.errors.startDate && (
                  <div className="invalid-feedback">{formik.errors.startDate}</div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">End Date<span className="text-danger">*</span></lable>
                <input
                  type="date"
                  className={`form-control  ${formik.touched.endDate && formik.errors.endDate ? 'is-invalid' : ''}`}
                  {...formik.getFieldProps('endDate')} />
                {formik.touched.endDate && formik.errors.endDate && (
                  <div className="invalid-feedback">{formik.errors.endDate}</div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Country Code<span className="text-danger">*</span></lable>
                <div className="input-group" style={{ width: "100%" }}>
                  <select style={{ width: "23%" }} className={`form-select ${formik.touched.countryCode && formik.errors.countryCode ? 'is-invalid' : ''}`}
                   {...formik.getFieldProps('countryCode')}>
                    <option value="+91">+91</option>
                    <option value="+65">+65</option>
                  </select>
                  <input 
                     type="tel"
                     style={{ width: "77%" }}
                     className={`form-control ${formik.touched.mobileNo && formik.errors.mobileNo ? 'is-invalid' : ''}`}
                     { ...formik.getFieldProps('mobileNo')} />
                     {formik.touched.mobileNo && formik.errors.mobileNo && (
                      <div className="invalid-feedback">{formik.errors.mobileNo}</div>
                     )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
}

export default EditNewBublicHoliday;