import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  expenseDate: Yup.string().required("*Expense date is required"),
  expenseType: Yup.string().required("*Select a expense type"),
  expenseAmount: Yup.number()
  .required("*Expense amount is required")
  .typeError("*Must be a number"),
  attachment: Yup.string().required("*Attachment is required"),
  employeeId: Yup.string().required("*Employe id is required"),
  employeeName: Yup.string().required("*Employee name is required"),
  companyId: Yup.string().required("*Company id is required"),
  companyName: Yup.string().required("*Company name is required"),
});

function ExpensesEdit() {
  const formik = useFormik({
    initialValues: {
      expenseDate: "2024-03-14",
      expenseType: "Office Supplies",
      expenseAmount: "250",
      attachment: "",
      employeeId: "ECS23",
      employeeName: "Suriya",
      companyId: "ECS456",
      companyName: "ECS Cloud",
      remarks: "Purchase of Stationery",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <div className="container py-3">
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/expensesreport">
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
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Employee ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.employeeId && formik.errors.employeeId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("employeeId")}
                />
                {formik.touched.employeeId && formik.errors.employeeId && (
                  <div className="invalid-feedback">
                    {formik.errors.employeeId}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Employee Name<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.employeeName && formik.errors.employeeName
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("employeeName")}
                />
                {formik.touched.employeeName && formik.errors.employeeName && (
                  <div className="invalid-feedback">
                    {formik.errors.employeeName}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Company ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.companyId && formik.errors.companyId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("companyId")}
                />
                {formik.touched.companyId && formik.errors.companyId && (
                  <div className="invalid-feedback">
                    {formik.errors.companyId}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Company Name<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.companyName && formik.errors.companyName
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("companyName")}
                />
                {formik.touched.companyName && formik.errors.companyName && (
                  <div className="invalid-feedback">
                    {formik.errors.companyName}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Expense Date<span className="text-danger">*</span>
                </lable>
                <input
                  type="date"
                  className={`form-control  ${
                    formik.touched.expenseDate && formik.errors.expenseDate
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("expenseDate")}
                />
                {formik.touched.expenseDate && formik.errors.expenseDate && (
                  <div className="invalid-feedback">
                    {formik.errors.expenseDate}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Expense Type<span className="text-danger">*</span>
                </lable>
                <select
                  {...formik.getFieldProps("expenseType")}
                  className={`form-select    ${
                    formik.touched.expenseType && formik.errors.expenseType
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option value="Office Supplies">Office Supplies</option>
                  <option value="Equipment">Equipment</option>
                  <option value="Training">Training</option>
                </select>
                {formik.touched.expenseType && formik.errors.expenseType && (
                  <div className="invalid-feedback">
                    {formik.errors.expenseType}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Expense Amount<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.expenseAmount && formik.errors.expenseAmount
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("expenseAmount")}
                />
                {formik.touched.expenseAmount &&
                  formik.errors.expenseAmount && (
                    <div className="invalid-feedback">
                      {formik.errors.expenseAmount}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
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
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("attachment")}
                />
                {formik.touched.attachment && formik.errors.attachment && (
                  <div className="invalid-feedback">
                    {formik.errors.attachment}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Remarks</lable>
                <textarea
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  className="form-control"
                  {...formik.getFieldProps('remarks')}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ExpensesEdit;
