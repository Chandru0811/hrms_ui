import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import api from "../../config/URL";

function PerformanceAppraisalEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const validationSchema = Yup.object({});

  const formik = useFormik({
    initialValues: {
      perfAppraisalDate: "",
      perfAppraisalFeedback: "",
      perfAppraisalReviews: "",
      perfAppraisalAmount: "",
      selfComments: "",
      perfAppraisalGoals: "",
      status: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      try {
        const response = await api.put(
          `updatePerformanceAppraisalByI/${id}`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/performance");
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
        const response = await api.get(`/getPerformanceAppraisalById/${id}`);
        const formattedData = {
          ...response.data,
          perfAppraisalDate: response.data.perfAppraisalDate
            ? new Date(response.data.perfAppraisalDate)
                .toISOString()
                .substring(0, 10)
            : null,
        };
        formik.setValues(formattedData);
        setLoading(false);
      } catch (error) {
        toast.error("Error Fetching Data ", error);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="ExitAdd">
     {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!loading && (
       <form onSubmit={formik.handleSubmit}>
       <div className="container">
         <div className="my-3 d-flex justify-content-end align-items-end my-3">
           <Link to="/performance">
             <button type="button" className="btn btn-border btn-sm">
               Back
             </button>
           </Link>
           &nbsp;&nbsp;
             <button type="submit" className="btn btn-button btn-sm ">
               Update
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
     )}
    </section>
  );
}

export default PerformanceAppraisalEdit;
