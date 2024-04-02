import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ClaimEdit() {

  const validationSchema = Yup.object({
    employeeID: Yup.string().required('*Employee id is required'),
    employeeName: Yup.string().required('*Employee name is required'),
    companyID: Yup.string().required('*Company id is required'),
    companyName: Yup.string().required('*Company name is required'),
    departmentID: Yup.string().required('*Department id is required'),
    departmentName: Yup.string().required('*Department name is required'),
    date: Yup.string().required('*Date is required'),
    type: Yup.string().required('*Select the type'),
    amount: Yup.number()
    .required('*Amount is required')
    .typeError('*Must be a number'),
    attachment: Yup.string().required('*Attachment is required')
  });

  const formik = useFormik({
    initialValues: {
      employeeID: "12",
      employeeName: "Vijayashree",
      companyID: "ECS031",
      companyName: "Cloud ECS Infotech",
      departmentID: "ECSD002",
      departmentName: "IT",
      date: "2024-01-22",
      type: "Telephone",
      amount: "120",
      attachment: "",
      remarks: ""
    },
    validationSchema: validationSchema,
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
              <Link to="/claim">
                <button type="button" className="btn btn-sm btn-border">Back</button>
              </Link>
              &nbsp;&nbsp;
              <button type="submit" className="btn btn-sm btn-button">Update</button>
            </div>
          </div>
          <div className="row mt-3">
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">Employee ID<span className="text-danger">*</span></lable>
              <input
                type="text"
                className={`form-control  ${formik.touched.employeeID && formik.errors.employeeID ? 'is-invalid' : ''}`}
                {...formik.getFieldProps('employeeID')} />
                {formik.touched.employeeID && formik.errors.employeeID && (
                  <div className="invalid-feedback">{formik.errors.employeeID}</div>
                )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">Employee Name<span className="text-danger">*</span></lable>
              <input
                type="text"
                className={`form-control  ${formik.touched.employeeName && formik.errors.employeeName ? 'is-invalid' : ''}`}
                {...formik.getFieldProps('employeeName')} />
                {formik.touched.employeeName && formik.errors.employeeName && (
                  <div className="invalid-feedback">{formik.errors.employeeName}</div>
                )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">Company ID<span className="text-danger">*</span></lable>
              <input
                type="text"
                className={`form-control  ${formik.touched.companyID && formik.errors.companyID ? 'is-invalid' : ''}`}
                {...formik.getFieldProps('companyID')} />
                {formik.touched.companyID && formik.errors.companyID && (
                  <div className="invalid-feedback">{formik.errors.companyID}</div>
                )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">Company Name<span className="text-danger">*</span></lable>
              <input
                type="text"
                className={`form-control  ${formik.touched.companyName && formik.errors.companyName ? 'is-invalid' : ''}`}
                {...formik.getFieldProps('companyName')} />
                {formik.touched.companyName && formik.errors.companyName && (
                  <div className="invalid-feedback">{formik.errors.companyName}</div>
                )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">Department ID<span className="text-danger">*</span></lable>
              <input
                type="text"
                className={`form-control  ${formik.touched.departmentID && formik.errors.departmentID ? 'is-invalid' : ''}`}
                {...formik.getFieldProps('departmentID')} />
                {formik.touched.departmentID && formik.errors.departmentID && (
                  <div className="invalid-feedback">{formik.errors.departmentID}</div>
                )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">Department Name<span className="text-danger">*</span></lable>
              <input
                type="text"
                className={`form-control  ${formik.touched.departmentName && formik.errors.departmentName ? 'is-invalid' : ''}`}
                {...formik.getFieldProps('departmentName')} />
                {formik.touched.departmentName && formik.errors.departmentName && (
                  <div className="invalid-feedback">{formik.errors.departmentName}</div>
                )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">Date<span className="text-danger">*</span></lable>
              <input
                type="date"
                className={`form-control  ${formik.touched.date && formik.errors.date ? 'is-invalid' : ''}`}
                {...formik.getFieldProps('date')} />
                {formik.touched.date && formik.errors.date && (
                  <div className="invalid-feedback">{formik.errors.date}</div>
                )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable class="form-lable">Type<span class="text-danger">*</span></lable>
              <select aria-label="Default select example"
              className={`form-select  ${formik.touched.type && formik.errors.type ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('type')} >
                <option value="Telephone">Telephone</option>
                <option value="Taxi">Taxi</option>
                <option value="Hotel and Acc">Hotel and Acc</option>
                <option value="Leave Enhance">Leave Enhance</option>
              </select>
              {formik.touched.type && formik.errors.type && (
                <div className="invalid-feedback">{formik.errors.type}</div>
              )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">Amount<span className="text-danger">*</span></lable>
              <input
                type="text"
                className={`form-control  ${formik.touched.amount && formik.errors.amount ? 'is-invalid' : ''}`}
                {...formik.getFieldProps('amount')} />
                {formik.touched.amount && formik.errors.amount && (
                  <div className="invalid-feedback">{formik.errors.amount}</div>
                )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">Attachment<span className="text-danger">*</span></lable>
              <input
                type="file"
                className={`form-control  ${formik.touched.attachment && formik.errors.attachment ? 'is-invalid' : ''}`}
                {...formik.getFieldProps('attachment')} />
                {formik.touched.attachment && formik.errors.attachment && (
                  <div className="invalid-feedback">{formik.errors.attachment}</div>
                )}
            </div>
            <div class="col-md-6 col-12 mb-3">
              <lable className="form-lable">Remarks</lable>
              <textarea id="floatingTextarea2"
                style={{ height: "100px" }}
                className={`form-control`}
                {...formik.getFieldProps('remarks')}></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClaimEdit;