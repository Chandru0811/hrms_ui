import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/URL";
import { toast } from "react-toastify";

function ViewCompanyRegistration() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`getCompanyRegById/${id}`);
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
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 text-end">
          <Link to="/companyregisteration">
            <button type="button" className="btn btn-sm btn-border">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 pb-3">
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Name</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.cmpName}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Address</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.cmpAddr}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company City</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.cmpCity}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6  ">
                <p className="fw-medium">Company Pincode</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.cmpPincode}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Email</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.cmpEmail}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Phone Number</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.cmpPhNumber}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Tax Code</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.cmpTaxCode}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-2">
              <div className="col-6 ">
                <p className="fw-medium">Company Registration Number</p>
              </div>
              <div className="col-6">
                <p className="text-muted text-sm">: {data.cmpRegNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCompanyRegistration;
