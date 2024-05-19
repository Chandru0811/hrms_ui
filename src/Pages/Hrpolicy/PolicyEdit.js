import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import api from "../../config/URL";

export default function PolicyEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const validationSchema = Yup.object({
    hrPolicyList: Yup.string().required("*Policy name is required"),
    hrPolicyDescr: Yup.string().required("*Policy description is required"),
  });

  const formik = useFormik({
    initialValues: {
      hrPolicyList: "",
      hrPolicyDescr: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      try {
        const response = await api.put(`updateHRPolicyById/${id}`, values, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/policy");
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
        const response = await api.get(`/getHRPolicyById/${id}`);
        formik.setValues(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("Error Fetching Data ", error);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!loading && (
        <div className="container-fluid">
          <div className="container py-3">
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-12 text-end">
                  <Link to="/policy">
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
                    <lable className="form-lable">Policy Name</lable>
                    <span className="text-danger">*</span>
                    <input
                      type="text"
                      className={`form-control  ${
                        formik.touched.hrPolicyList &&
                        formik.errors.hrPolicyList
                          ? "is-invalid"
                          : ""
                      }`}
                      {...formik.getFieldProps("hrPolicyList")}
                    />
                    {formik.touched.hrPolicyList &&
                      formik.errors.hrPolicyList && (
                        <div className="invalid-feedback">
                          {formik.errors.hrPolicyList}
                        </div>
                      )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="text-start mt-2">
                    <lable className="form-lable">Policy Description</lable>
                    <span className="text-danger">*</span>
                    <textarea
                      className={`form-control  ${
                        formik.touched.hrPolicyDescr &&
                        formik.errors.hrPolicyDescr
                          ? "is-invalid"
                          : ""
                      }`}
                      rows="3"
                      {...formik.getFieldProps("hrPolicyDescr")}
                    ></textarea>
                    {formik.touched.hrPolicyDescr &&
                      formik.errors.hrPolicyDescr && (
                        <div className="invalid-feedback">
                          {formik.errors.hrPolicyDescr}
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
