import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";
import { toast } from "react-toastify";
import api from "../../config/URL";

function ComplianceEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [companyData, setCompanyData] = useState(null);
  const [calcDate, setCalcDate] = useState('');


  const validationSchema = Yup.object({
    compComplianceCmpId: Yup.string().required("*Company name is required"),
    compComplianceDesignationName: Yup.string().required(
      "*Designation name is required"
    ),
    compComplianceDesignationCategory: Yup.string().required(
      "*Designation category is required"
    ),
    compComplianceLeaveLimit: Yup.number()
      .required("*Leave limit is required")
      .typeError("*Must be a number"),
    compComplianceSalaryDay: Yup.string().required("*Salary day is required"),
    compComplianceSalaryCalculationDay: Yup.string().required(
      "*Salary calculation day is required"
    ),
  });

  const formik = useFormik({
    initialValues: {
      compComplianceCmpId: "",
      compComplianceDesignationName: "",
      compComplianceDesignationCategory: "",
      compComplianceLeaveLimit: "",
      compComplianceRemarks: "",
      compComplianceSalaryDay: "",
      compComplianceSalaryCalculationDay: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await api.put(
          `company-compliance/${id}`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          toast.success(response.data.message);
          navigate("/compliance");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  const fetchData = async () => {
    try {
      const companyData = await fetchAllCompanyNamesWithId();
      setCompanyData(companyData);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getData = async () => {
    try {
      const response = await api.get(`company-compliance/${id}`);
      const compComplianceSalaryDay =
        response.data.compComplianceSalaryDay.split("T")[0];
      const compComplianceSalaryCalculationDay =
        response.data.compComplianceSalaryCalculationDay.split("T")[0];
      const values = {
        ...response.data,
        compComplianceSalaryDay: compComplianceSalaryDay,
        compComplianceSalaryCalculationDay: compComplianceSalaryCalculationDay,
      };
      // console.log(response, "response");
      formik.setValues(values);
      setLoading(false);
      console.log("try");
    } catch (error) {
      toast.error("Error Fetching Data ", error);
      console.log("catch", error);
    }
  };
  useEffect(() => {
    if (id) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCalcDateChange = (event) => {
    const { value } = event.target;
    setCalcDate(value);
    formik.setFieldValue('compComplianceSalaryCalculationDay', value);
  };

  return (
    <section className="HolidayAdd p-3">
      <div className="container-fluid">
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12 text-end">
                <Link to="/compliance">
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
                  &nbsp;<span>Update</span>
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Company Name<span className="text-danger">*</span>
                </lable>
                <div className="input-group mb-3">
                  <select
                    {...formik.getFieldProps("compComplianceCmpId")}
                    className={`form-select  ${
                      formik.touched.compComplianceCmpId &&
                      formik.errors.compComplianceCmpId
                        ? "is-invalid"
                        : ""
                    }`}
                    aria-label="Default select example"
                  >
                    <option selected></option>
                    {companyData &&
                      companyData.map((compComplianceCmpId) => (
                        <option
                          key={compComplianceCmpId.cmpId}
                          value={compComplianceCmpId.cmpId}
                        >
                          {compComplianceCmpId.cmpName}
                        </option>
                      ))}
                  </select>
                  {formik.touched.compComplianceCmpId &&
                    formik.errors.compComplianceCmpId && (
                      <div className="invalid-feedback">
                        {formik.errors.compComplianceCmpId}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2">
                  <lable className="form-lable">Designation Name</lable>
                  <span className="text-danger">*</span>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.compComplianceDesignationCategory &&
                      formik.errors.compComplianceDesignationCategory
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("compComplianceDesignationCategory")}
                  ></input>
                  {formik.touched.compComplianceDesignationCategory &&
                    formik.errors.compComplianceDesignationCategory && (
                      <div className="invalid-feedback">
                        {formik.errors.compComplianceDesignationCategory}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <lable className="">Designation Category</lable>
                <span className="text-danger">*</span>
                <select
                  className={`form-select ${
                    formik.touched.compComplianceDesignationCategory &&
                    formik.errors.compComplianceDesignationCategory
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("compComplianceDesignationCategory")}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
                  <option value="Developer">Developer</option>
                  <option value="Temporary">Tester</option>
                </select>
                {formik.touched.compComplianceDesignationCategory &&
                  formik.errors.compComplianceDesignationCategory && (
                    <div className="invalid-feedback">
                      {formik.errors.compComplianceDesignationCategory}
                    </div>
                  )}
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Leave Limit<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.compComplianceLeaveLimit &&
                      formik.errors.compComplianceLeaveLimit
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("compComplianceLeaveLimit")}
                  />
                  {formik.touched.compComplianceLeaveLimit &&
                    formik.errors.compComplianceLeaveLimit && (
                      <div className="invalid-feedback">
                        {formik.errors.compComplianceLeaveLimit}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
        <div className="text-start mt-2 mb-3">
          <label className="form-label">
            Salary Calculation Date
            <span className="text-danger">*</span>
          </label>
          <input
            type="date"
            className={`form-control ${
              formik.touched.compComplianceSalaryCalculationDay &&
              formik.errors.compComplianceSalaryCalculationDay
                ? 'is-invalid'
                : ''
            }`}
            {...formik.getFieldProps('compComplianceSalaryCalculationDay')}
            onChange={handleCalcDateChange}
          />
          {formik.touched.compComplianceSalaryCalculationDay &&
            formik.errors.compComplianceSalaryCalculationDay && (
              <div className="invalid-feedback">
                {formik.errors.compComplianceSalaryCalculationDay}
              </div>
            )}
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        <div className="text-start mt-2 mb-3">
          <label className="form-label">
            Salary Date
            <span className="text-danger">*</span>
          </label>
          <input
            type="date"
            className={`form-control ${
              formik.touched.compComplianceSalaryDay &&
              formik.errors.compComplianceSalaryDay
                ? 'is-invalid'
                : ''
            }`}
            {...formik.getFieldProps('compComplianceSalaryDay')}
            min={calcDate} // Ensure Salary Date is not before Calculation Date
          />
          {formik.touched.compComplianceSalaryDay &&
            formik.errors.compComplianceSalaryDay && (
              <div className="invalid-feedback">
                {formik.errors.compComplianceSalaryDay}
              </div>
            )}
        </div>
        </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">Remarks</lable>
                  <textarea
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                    className={`form-control  ${
                      formik.touched.compComplianceRemarks &&
                      formik.errors.compComplianceRemarks
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("compComplianceRemarks")}
                  />
                  {formik.touched.compComplianceRemarks &&
                    formik.errors.compComplianceRemarks && (
                      <div className="invalid-feedback">
                        {formik.errors.compComplianceRemarks}
                      </div>
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

export default ComplianceEdit;
