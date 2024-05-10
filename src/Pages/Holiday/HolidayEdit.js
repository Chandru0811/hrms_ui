import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import api from "../../config/URL";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";

function EditNewBublicHoliday() {
  const [companyData, setCompanyData] = useState(null);

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

  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const validationSchema = Yup.object({
    pubHolidayCmpId: Yup.string().required("*Company ID is required"),
    // cmpId: Yup.string().required("*Company name is required"),
    pubHolidayName: Yup.string().required("*Holiday name is required"),
    pubHolidayType: Yup.string().required("*Select the holiday is required"),
    startDate: Yup.string().required("*Select the start date"),
    endDate: Yup.string().required("*Select the end date"),
    pubHolidayCountryCode: Yup.string().required("*Select the Country"),
  });

  const formik = useFormik({
    initialValues: {
      pubHolidayCmpId: "",
      // cmpId: "",
      pubHolidayName: "",
      pubHolidayType: "",
      startDate: "",
      endDate: "",
      pubHolidayCountryCode: "",
      mobileNo: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("values", values);
      try {
        const response = await api.put(
          `updatePublicHolidaysById/${id}`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
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
        const startDate = response.data.startDate.split("T")[0];
        const endDate = response.data.endDate.split("T")[0];
        const values = {
          ...response.data,
          startDate: startDate,
          endDate:endDate
        };
        formik.setValues(values);
        setLoading(false);
      } catch (error) {
        toast.error("Error Fetching Data ", error);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="HolidayEdit p-3">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!loading && (
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
                {/* <div className="col-lg-6 col-md-6 col-12">
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
              </div> */}
                <div className="col-md-6 col-12 mb-2">
                  <lable className="form-lable">
                    Company Name<span className="text-danger">*</span>
                  </lable>
                  <div className="input-group mb-3">
                    <select
                      {...formik.getFieldProps("pubHolidayCmpId")}
                      className={`form-select  ${
                        formik.touched.pubHolidayCmpId &&
                        formik.errors.pubHolidayCmpId
                          ? "is-invalid"
                          : ""
                      }`}
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      {companyData &&
                        companyData.map((cmpId) => (
                          <option key={cmpId.id} value={cmpId.cmpId}>
                            {cmpId.cmpName}
                          </option>
                        ))}
                    </select>
                    {formik.touched.cmpId && formik.errors.cmpId && (
                      <div className="invalid-feedback">
                        {formik.errors.cmpId}
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
                        formik.touched.pubHolidayName &&
                        formik.errors.pubHolidayName
                          ? "is-invalid"
                          : ""
                      }`}
                      {...formik.getFieldProps("pubHolidayName")}
                    />
                    {formik.touched.pubHolidayName &&
                      formik.errors.pubHolidayName && (
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
                      formik.touched.pubHolidayType &&
                      formik.errors.pubHolidayType
                        ? "is-invalid"
                        : ""
                    }`}
                    aria-label="Default select example"
                  >
                    <option></option>
                    <option value="Government Holiday">
                      Government Holiday
                    </option>
                    <option value="Bank Holiday">Bank Holiday</option>
                    <option value="Public Holiday">Public Holiday</option>
                    <option value="Religious Holiday">Religious Holiday</option>
                    <option value="National Holiday">National Holiday</option>
                  </select>
                  {formik.touched.pubHolidayType &&
                    formik.errors.pubHolidayType && (
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
                      Country<span className="text-danger">*</span>
                    </lable>
                    <select
                      className={`form-select ${
                        formik.touched.pubHolidayCountryCode &&
                        formik.errors.pubHolidayCountryCode
                          ? "is-invalid"
                          : ""
                      }`}
                      {...formik.getFieldProps("pubHolidayCountryCode")}
                    >
                      <option></option>
                      <option value="91">India</option>
                      <option value="65">Singapore</option>
                    </select>
                    {formik.touched.pubHolidayCountryCode &&
                      formik.errors.pubHolidayCountryCode && (
                        <div className="invalid-feedback">
                          {formik.errors.pubHolidayCountryCode}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default EditNewBublicHoliday;
