import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import api from "../../config/URL";

function EditNewBublicHoliday() {

  const { id } = useParams();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    pubHolidayCmpId: Yup.string().required("*Company ID is required"),
    companyName: Yup.string().required("*Company name is required"),
    pubHolidayName: Yup.string().required("*Holiday name is required"),
    pubHolidayType: Yup.string().required("*Select the holiday is required"),
    startDate: Yup.string().required("*Select the start date"),
    endDate: Yup.string().required("*Select the end date"),
    pubHolidayCountryCode: Yup.string().required(),
    mobileNo: Yup.number()
      .required("*Country code is required")
      .typeError("*Must be a number"),
  });

  const formik = useFormik({
    initialValues: {
      pubHolidayCmpId: "",
      companyName: "",
      pubHolidayName: "",
      pubHolidayType: "",
      startDate: "",
      endDate: "",
      pubHolidayCountryCode: "",
      mobileNo: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      try {
        const response = await api.put(`updatePublicHolidaysById/${id}`, values, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/Holiday");
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
        const response = await api.get(`/getPublicHolidaysById/${id}`);
        formik.setValues(response.data);
      } catch (error) {
        toast.error("Error Fetching Data ", error);
      }
    };
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="HolidayEdit p-3">
      <div className="container-fluid">
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12 text-end">
                <Link to="/Holiday">
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
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Company ID<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.pubHolidayCmpId && formik.errors.pubHolidayCmpId
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("pubHolidayCmpId")}
                  />
                  {formik.touched.pubHolidayCmpId && formik.errors.pubHolidayCmpId && (
                    <div className="invalid-feedback">
                      {formik.errors.pubHolidayCmpId}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
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
                    {...formik.getFieldProps("companyName")}
                  />
                  {formik.touched.companyName && formik.errors.companyName && (
                    <div className="invalid-feedback">
                      {formik.errors.companyName}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Holiday Name<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.pubHolidayName && formik.errors.pubHolidayName
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("pubHolidayName")}
                  />
                  {formik.touched.pubHolidayName && formik.errors.pubHolidayName && (
                    <div className="invalid-feedback">
                      {formik.errors.pubHolidayName}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6 col-12 mb-4">
                <lable className="">Holiday Type</lable>
                <span className="text-danger">*</span>
                <select
                  {...formik.getFieldProps("pubHolidayType")}
                  className={`form-select    ${
                    formik.touched.pubHolidayType && formik.errors.pubHolidayType
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option></option>
                  <option value="Government Holiday">Government Holiday</option>
                  <option value="Bank Holiday">Bank Holiday</option>
                  <option value="Public Holiday">Public Holiday</option>
                  <option value="Religious Holiday">Religious Holiday</option>
                  <option value="National Holiday">
                    National Holiday
                  </option>
                </select>
                {formik.touched.pubHolidayType && formik.errors.pubHolidayType && (
                  <div className="invalid-feedback">
                    {formik.errors.pubHolidayType}
                  </div>
                )}
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Start Date<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="date"
                    className={`form-control  ${
                      formik.touched.startDate && formik.errors.startDate
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("startDate")}
                  />
                  {formik.touched.startDate && formik.errors.startDate && (
                    <div className="invalid-feedback">
                      {formik.errors.startDate}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    End Date<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="date"
                    className={`form-control  ${
                      formik.touched.endDate && formik.errors.endDate
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("endDate")}
                  />
                  {formik.touched.endDate && formik.errors.endDate && (
                    <div className="invalid-feedback">
                      {formik.errors.endDate}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Country Code<span className="text-danger">*</span>
                  </lable>
                  <div className="input-group" style={{ width: "100%" }}>
                    <select
                      style={{ width: "23%" }}
                      className={`form-select ${
                        formik.touched.pubHolidayCountryCode && formik.errors.pubHolidayCountryCode
                          ? "is-invalid"
                          : ""
                      }`}
                      {...formik.getFieldProps("pubHolidayCountryCode")}
                    >
                      <option></option>
                      <option value="+91">+91</option>
                      <option value="+65">+65</option>
                    </select>
                    <input
                      type="tel"
                      style={{ width: "77%" }}
                      className={`form-control ${
                        formik.touched.mobileNo && formik.errors.mobileNo
                          ? "is-invalid"
                          : ""
                      }`}
                      {...formik.getFieldProps("mobileNo")}
                    />
                    {formik.touched.mobileNo && formik.errors.mobileNo && (
                      <div className="invalid-feedback">
                        {formik.errors.mobileNo}
                      </div>
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
