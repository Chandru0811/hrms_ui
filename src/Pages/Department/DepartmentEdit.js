import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import api from "../../config/URL";

function DepartmentEdit() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    deptName: Yup.string().required("*Department name is required"),
    deptDesc: Yup.string().required("*Department description is required"),
  });

  const formik = useFormik({
    initialValues: {
      deptName: "",
      deptDesc: "",
    },
    validationSchema: validationSchema, // Assign the validation schema
    onSubmit: async (values) => {
      // console.log(values);
      setLoading(true);
      try {
        const response = await api.put(`department/${id}`, values, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          toast.success(response.data.message);
          navigate("/departments");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error);
      }finally{
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/department/${id}`);
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
      
     
        <div className="container-fluid">
        <div className="container py-3">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12 text-end">
                <Link to="/departments">
                  <button type="button" className="btn btn-sm btn-border">
                    Back
                  </button>
                </Link>
                &nbsp;&nbsp;
                <button
                    type="submit"
                    className="btn btn-sm btn-button"
                    disabled={loading}
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <span></span>
                    )}
                    &nbsp;<span>Update</span>
                  </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2">
                  <lable className="form-lable">Department Name</lable>
                  <span className="text-danger">*</span>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.deptName &&
                      formik.errors.deptName
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("deptName")}
                  />
                  {formik.touched.deptName &&
                    formik.errors.deptName && (
                      <div className="invalid-feedback">
                        {formik.errors.deptName}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2">
                  <lable className="form-lable">
                    Department Description
                  </lable>
                  <span className="text-danger">*</span>
                  <textarea
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                    className={`form-control  ${
                      formik.touched.deptDesc &&
                      formik.errors.deptDesc
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("deptDesc")}
                  ></textarea>
                  {formik.touched.deptDesc &&
                    formik.errors.deptDesc && (
                      <div className="invalid-feedback">
                        {formik.errors.deptDesc}
                      </div>
                    )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      
    </section>
  );
}

export default DepartmentEdit;
