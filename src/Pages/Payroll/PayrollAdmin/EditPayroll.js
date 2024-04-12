import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import api from "../../../config/URL";

const validationSchema = Yup.object().shape({
  payrollEmpId: Yup.string().required("*Employee id is required"),
  employeeName: Yup.string().required("*Employee name is required"),
  companyId: Yup.string().required("*Company id is required"),
  departmentId: Yup.string().required("*Department id is required"),
  grossPay: Yup.string().required("*Gross pay is required"),
  bonus: Yup.string().required("*Bonus is required"),
  deduction: Yup.string().required("*Deduction is required"),
  netPay: Yup.string().required("*Net pay is required"),
  payrollWorkingStatus: Yup.string().required("*Status is required"),
});

function EditPayroll() {

  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      payrollEmpId: "",
      employeeName: "",
      companyId: "",
      departmentId: "",
      grossPay: "",
      bonus: "",
      deduction: "",
      netPay: "",
      payrollWorkingStatus: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      try {
        const response = await api.put(`updatePayrollById/${id}`, values, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/payrolladmin");
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
        const response = await api.get(`/getPayrollById/${id}`);
        formik.setValues(response.data);
      } catch (error) {
        toast.error("Error Fetching Data ", error);
      }
    };
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <div className="container py-3">
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/payrolladmin">
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
            <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Employee ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.payrollEmpId && formik.errors.payrollEmpId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("payrollEmpId")}
                />
                {formik.touched.payrollEmpId && formik.errors.payrollEmpId && (
                  <div className="invalid-feedback">
                    {formik.errors.payrollEmpId}
                  </div>
                )}
              </div>
            </div>
            <div className="  col-md-6 col-12">
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
            <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Company ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control ${
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
            <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Department ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.departmentId && formik.errors.departmentId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("departmentId")}
                />
                {formik.touched.departmentId && formik.errors.departmentId && (
                  <div className="invalid-feedback">
                    {formik.errors.departmentId}
                  </div>
                )}
              </div>
            </div>
            <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Gross Pay<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.grossPay && formik.errors.grossPay
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("grossPay")}
                />
                {formik.touched.grossPay && formik.errors.grossPay && (
                  <div className="invalid-feedback">
                    {formik.errors.grossPay}
                  </div>
                )}
              </div>
            </div>
            <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Bonus<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.bonus && formik.errors.bonus
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("bonus")}
                />
                {formik.touched.bonus && formik.errors.bonus && (
                  <div className="invalid-feedback">{formik.errors.bonus}</div>
                )}
              </div>
            </div>
            <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Deduction<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.deduction && formik.errors.deduction
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("deduction")}
                />
                {formik.touched.deduction && formik.errors.deduction && (
                  <div className="invalid-feedback">
                    {formik.errors.deduction}
                  </div>
                )}
              </div>
            </div>
            <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Net Pay<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.netPay && formik.errors.netPay
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("netPay")}
                />
                {formik.touched.netPay && formik.errors.netPay && (
                  <div className="invalid-feedback">{formik.errors.netPay}</div>
                )}
              </div>
            </div>
            <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Status<span className="text-danger">*</span>
                </lable>
                <select
                  {...formik.getFieldProps("payrollWorkingStatus")}
                  className={`form-select    ${
                    formik.touched.payrollWorkingStatus && formik.errors.payrollWorkingStatus
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option></option>
                  <option value="Apporved">Apporved</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Pending">Pending</option>
                </select>

                {formik.touched.payrollWorkingStatus && formik.errors.payrollWorkingStatus && (
                  <div className="invalid-feedback">{formik.errors.payrollWorkingStatus}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditPayroll;
