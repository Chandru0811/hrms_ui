import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/URL";
import { toast } from "react-toastify";

function DepartmentView() {

  const [data, setData] = useState([]);
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`getDepartmentById/${id}`);
        setData(response.data);
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
          <Link to="/departments">
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
                  <p className="fw-medium">Enter Department Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.deptName}</p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-6">
                  <p className="fw-medium">Enter Department Description</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.deptDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentView;
