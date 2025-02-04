import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/URL";
import { toast } from "react-toastify";

function DepartmentView() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  // console.log(id)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`department/${id}`);
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
              <Link to="/departments">
                <button className="btn btn-sm btn-border">Back</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="row mt-5">
                <div className="row mb-2">
                  <div className="col-3">
                    <p className="fw-medium">Department Name</p>
                  </div>
                  <div className="col-9">
                    <p className="text-muted text-sm">: {data.deptName}</p>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3">
                    <p className="fw-medium">Department Description</p>
                  </div>
                  <div className="col-9">
                    <p className="text-muted text-sm">: {data.deptDesc}</p>
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

export default DepartmentView;
