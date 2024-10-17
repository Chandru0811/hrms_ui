import React, { useEffect, useState } from "react";
// import QR from "../../assets/images/";
// import Logo from "../../assets/images/Logo.png";
import { Link, useParams } from "react-router-dom";
import api from "../../config/URL";
import { toast } from "react-toastify";

function PolicyView() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  // console.log(id)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`hR-policy/${id}`);
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
              <Link to="/policy">
                <button className="btn btn-sm btn-border">Back</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="row mt-5">
                <div className="col-md-6 col-12">
                  <div className="row mb-2">
                    <div className="col-6">
                      <p className="fw-medium">Policy Name</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.hrPolicyList}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row mb-2">
                    <div className="col-md-3 col-6">
                      <p className="fw-medium">Policy Description</p>
                    </div>
                    <div className="col-md-9 col-6">
                      <p className="text-muted text-sm">
                        : {data.hrPolicyDescr}
                      </p>
                    </div>
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

export default PolicyView;
