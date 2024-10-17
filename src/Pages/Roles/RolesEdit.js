import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";
import { toast } from "react-toastify";
import api from "../../config/URL";

function RolesEdit() {
  const navigate = useNavigate();
 
  
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  

  const validationSchema = Yup.object({
    roleName: Yup.string().required("*Role name is required"),
    roleDesc: Yup.string().required("*Description is required"),
    roleStatus: Yup.string().required("*Status is required"),
   
  });
  const formik = useFormik({
    initialValues: {
     
        roleName: "",
      roleStatus: "",
      roleDesc: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
     
    //   console.log("object", payload.attendanceCheckInTime);
      try {
        setLoading(true);
        const response = await api.put(
          `roles/${id}`,values,
          
          {
            headers: {
              "Content-Type": "application/json",
              //Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("values", values);
        if (response.status === 200) {
          toast.success(response.data.message);
          navigate("/roles");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    },
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/roles/${id}`);
       
        formik.setValues(response.data);
      } catch (error) {
        toast.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);
  return (
    <section className="RoleEdit p-3">
      <div className="container-fluid">
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12 text-end">
                <Link to="/roles">
                  <button className="btn btn-sm btn-border">Back</button>
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
                    &nbsp;<span>Save</span>
                  </button>
              </div>
            </div>
            <div className="row mt-3">
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Role Name<span className="text-danger">*</span>
              </lable>
              <div className="input-group mb-3">
              <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.roleName && formik.errors.roleName
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("roleName")}
                  />
                {formik.touched.roleName && formik.errors.roleName && (
                  <div className="invalid-feedback">{formik.errors.roleName}</div>
                )}
              </div>
            </div>
           
             
              
              <div className="col-md-6 col-12 mb-3 ">
                <lable className="">Role Status</lable>
                <span className="text-danger">*</span>
                <select
                  className={`form-select ${
                    formik.touched.roleStatus &&
                    formik.errors.roleStatus
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("roleStatus")}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  <option value="Active">Active</option>
                  <option value="InActive">InActive</option>
                </select>
                {formik.touched.roleStatus &&
                  formik.errors.roleStatus && (
                    <div className="invalid-feedback">
                      {formik.errors.roleStatus}
                    </div>
                  )}
              </div>
              
              <div className="col-md-6 col-12">
              <div className="text-start mt-2">
                <lable className="form-lable">Role Description</lable>
                <textarea
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  className={`form-control   ${
                    formik.touched.roleDesc &&
                    formik.errors.roleDesc
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("roleDesc")}
                />
                {formik.touched.roleDesc &&
                  formik.errors.roleDesc && (
                    <div className="invalid-feedback">
                      {formik.errors.roleDesc}
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

export default RolesEdit;
