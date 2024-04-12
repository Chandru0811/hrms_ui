import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/URL";
import { toast } from "react-toastify";

function PerformanceAppraisalView() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  // console.log(id)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`getPerformanceAppraisalById/${id}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        // console.log(error.message);
        toast.error("Error Fetching Data ", error.message);
      }
    };
    getData();
  }, [id]);

  return (
    <section className="container">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!loading && (
        <div className="container">
        <div className=" d-flex align-items-end justify-content-end">
          <Link to={`/performance`}>
            <button type="button" className="btn btn-border btn-sm m-xl-3">
             Back
            </button>
          </Link>
        </div>
        <div className="row mt-5 pb-3">
          <div className="col-md-6 col-12">
            <div className="row mt-3  mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Overall Self Comment</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.selfComments}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2 mt-3">
              <div className="col-6  ">
                <p className="fw-medium">Performance Goals</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.perfAppraisalGoals}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Performance Review</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.perfAppraisalReviews}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Performance Feedback</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.perfAppraisalFeedback}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Appraisal Amtount</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.perfAppraisalAmount}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Date</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {""}{data.perfAppraisalDate
                      ? data.perfAppraisalDate.substring(0, 10)
                      : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Status</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.status}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row  mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Salary</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.salary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
  );
}

export default PerformanceAppraisalView;
