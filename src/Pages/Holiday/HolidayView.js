import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/URL";
import { toast } from "react-toastify";

function HolidayView() {

  const [data, setData] = useState([]);
  const { id } = useParams();
  // console.log(id)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`getPublicHolidaysById/${id}`);
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
    <section>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!loading && (
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 text-end">
              <Link to="/Holiday">
                <button type="button" className="btn btn-sm btn-border">Back</button>
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="row mt-5 pb-3">
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Company ID</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.pubHolidayCmpId}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6  ">
                    <p className="fw-medium">Company Name</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.companyName}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Holiday Name</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.pubHolidayName}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Holiday Type</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.pubHolidayType}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Start Date</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.startDate}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6  ">
                    <p className="fw-medium">End Date</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.endDate}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row mb-2">
                  <div className="col-6 ">
                    <p className="fw-medium">Country Code</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-sm">: {data.pubHolidayCountryCode}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HolidayView;