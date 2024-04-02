import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function LeaveAdd() {
  const validationSchema = Yup.object({
    employeeId: Yup.string().required('*Employee id is required'),
    employeeName: Yup.string().required('*Employee name is required'),
    departmentId: Yup.string().required('*Department id is required'),
    departmentName: Yup.string().required('*Department name is required'),
    companyId: Yup.string().required('*Company id is required'),
    companyName: Yup.string().required('*Company name is required'),
    fromDate: Yup.string().required('*From date is required'),
    toDate: Yup.string().required('*To date is required'),
    reasonForrequestedLeave: Yup.string().required('*Reason for requested leave is required'),
  });
  const formik = useFormik({
    initialValues: {
      employeeId: '',
      employeeName: '',
      departmentId: '',
      departmentName: '',
      companyId: '',
      companyName: '',
      fromDate: '',
      toDate: '',
      reasonForrequestedLeave: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
    return (
      <section className="LeaveAdd p-3">
        <div className="container-fluid">
      <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-12 text-end">
            <Link to="/leave">
              <button type="button" className="btn btn-sm btn-border">Back</button>
            </Link>
            &nbsp;&nbsp;
              <button type="submit" className="btn btn-sm btn-button">Save</button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="text-start mt-2 mb-3">
              <lable className="form-lable">Employee ID</lable>
              <span className="text-danger">*</span>
            <input
              type="text"
              className={`form-control  ${formik.touched.employeeId && formik.errors.employeeId ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('employeeId')}
            />
             {formik.touched.employeeId && formik.errors.employeeId && (
                    <div className="invalid-feedback">{formik.errors.employeeId}</div>
                  )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="text-start mt-2 mb-3">
              <lable className="form-lable">Employee Name</lable>
              <span className="text-danger">*</span>
            <input
              type="text"
              className={`form-control  ${formik.touched.employeeName && formik.errors.employeeName ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('employeeName')}
            />
             {formik.touched.employeeName && formik.errors.employeeName && (
                    <div className="invalid-feedback">{formik.errors.employeeName}</div>
                  )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="text-start mt-2 mb-3">
              <lable className="form-lable">Department ID</lable>
              <span className="text-danger">*</span>
            <input
              type="text"
              className={`form-control  ${formik.touched.departmentId && formik.errors.departmentId ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('departmentId')}
            />
             {formik.touched.departmentId && formik.errors.departmentId && (
                    <div className="invalid-feedback">{formik.errors.departmentId}</div>
                  )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="text-start mt-2 mb-3">
              <lable className="form-lable">Department Name</lable>
              <span className="text-danger">*</span>
            <input
              type="text"
              className={`form-control  ${formik.touched.departmentName && formik.errors.departmentName ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('departmentName')}
            />
             {formik.touched.departmentName && formik.errors.departmentName && (
                    <div className="invalid-feedback">{formik.errors.departmentName}</div>
                  )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="text-start mt-2 mb-3">
              <lable className="form-lable">Company ID</lable>
              <span className="text-danger">*</span>
            <input
              type="text"
              className={`form-control ${formik.touched.companyId && formik.errors.companyId ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('companyId')}
            />
             {formik.touched.companyId && formik.errors.companyId && (
                    <div className="invalid-feedback">{formik.errors.companyId}</div>
                  )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="text-start mt-2 mb-3">
              <lable className="form-lable">Company Name</lable>
              <span className="text-danger">*</span>
            <input
              type="text"
              className={`form-control ${formik.touched.companyName && formik.errors.companyName ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('companyName')}
            />
             {formik.touched.companyName && formik.errors.companyName && (
                    <div className="invalid-feedback">{formik.errors.companyName}</div>
                  )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="text-start mt-2 mb-3">
              <lable className="form-lable">From Date</lable>
              <span className="text-danger">*</span>
            <input
              type="date"
              className={`form-control ${formik.touched.fromDate && formik.errors.fromDate ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('fromDate')}
            />
             {formik.touched.fromDate && formik.errors.fromDate && (
                    <div className="invalid-feedback">{formik.errors.fromDate}</div>
                  )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="text-start mt-2 mb-3">
              <lable className="form-lable">To Date</lable>
              <span className="text-danger">*</span>
            <input
              type="date"
              className={`form-control ${formik.touched.toDate && formik.errors.toDate ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('toDate')}
            />
             {formik.touched.toDate && formik.errors.toDate && (
                    <div className="invalid-feedback">{formik.errors.toDate}</div>
                  )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="text-start mt-2 mb-3">
              <lable className="form-lable">Reason For Requested Leave</lable>
              <span className="text-danger">*</span>
            <input
              type="text"
              className={`form-control ${formik.touched.reasonForrequestedLeave && formik.errors.reasonForrequestedLeave ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('reasonForrequestedLeave')}
            />
             {formik.touched.reasonForrequestedLeave && formik.errors.reasonForrequestedLeave && (
                    <div className="invalid-feedback">{formik.errors.reasonForrequestedLeave}</div>
                  )}
            </div>
          </div>
          
        </div>
        </form>
      </div>
    </div>
    </section>
    );
}

export default LeaveAdd;
