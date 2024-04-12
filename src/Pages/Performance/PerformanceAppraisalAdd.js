import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import api from "../../config/URL";

function PerformanceAppraisalAdd() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({});

  const formik = useFormik({
    initialValues: {
      perfAppraisalId: "",
      perfAppraisalDate: "",
      perfAppraisalFeedback: "",
      perfAppraisalReviews: "",
      perfAppraisalAmount: "",
      // selfComments: "",
      perfAppraisalGoals: "",
      // status: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      values.perfAppraisalId = 106;

      try {
        const response = await api.post("addPerformanceAppraisal", values);
        // console.log(response)
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/performance");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Error Submiting Data, ", error);
      }
    },
  });

  return (
    <section className="ExitAdd">
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="my-3 d-flex justify-content-end align-items-end my-3">
            <Link to="/performance">
              <button type="button " className="btn btn-border btn-sm">
                Cancel
              </button>
            </Link>
            &nbsp;&nbsp;
            <button type="submit" className="btn btn-button btn-sm">
              Save
            </button>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">Date</lable>
              <div className="input-group mb-3">
                <input
                  type="date"
                  className={`form-control iconInput `}
                  placeholder=""
                  {...formik.getFieldProps("perfAppraisalDate")}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">Overall Self Comment</lable>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className={`form-control iconInput `}
                  placeholder=""
                  {...formik.getFieldProps("selfComments")}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">Performance Goals</lable>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className={`form-control iconInput `}
                  {...formik.getFieldProps("perfAppraisalGoals")}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">Appraisal Amount</lable>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className={`form-control iconInput`}
                  placeholder=""
                  {...formik.getFieldProps("perfAppraisalAmount")}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">Performance Review</lable>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className={`form-control iconInput`}
                  placeholder=""
                  {...formik.getFieldProps("perfAppraisalReviews")}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">Status </lable>
              <div className="input-group mb-3">
                <select
                  className="form-select iconInput "
                  {...formik.getFieldProps("status")}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">Performance Feedback</lable>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className={`form-control iconInput `}
                  placeholder=""
                  {...formik.getFieldProps("perfAppraisalFeedback")}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default PerformanceAppraisalAdd;
