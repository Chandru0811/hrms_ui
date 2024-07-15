import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import api from "../../config/URL";

function DepartmentAdd() {

  const navigate = useNavigate();
  const validationSchema = Yup.object({
    deptName: Yup.string().required('*Department name is required'),
    deptDesc: Yup.string().required('*Department description is required')
  });

  const formik = useFormik({
    initialValues: {
      deptName: "",
      deptDesc: ""
    },
    validationSchema: validationSchema, 
    onSubmit: async (values) => {
     
      // values.deptCmpId = 106;
       console.log(values);
      try {
        const response = await api.post("addDepartment", values);
        // console.log(response)
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/departments");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Error Submiting Data, ", error);
      }
    },
  });

  return (
    <div className="container-fluid">
      <div className="container py-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/departments">
                <button type="button" className="btn btn-sm btn-border">Back</button>
              </Link>
              &nbsp;&nbsp;
              <button type="submit" className="btn btn-sm btn-button">Save</button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2">
                <lable className="form-lable">Department Name</lable><span className="text-danger">*</span>
                <input 
                type="text" 
                className={`form-control  ${formik.touched.deptName && formik.errors.deptName ? 'is-invalid' : ''}`}
                {...formik.getFieldProps('deptName')} />
                {formik.touched.deptName && formik.errors.deptName && (
                  <div className="invalid-feedback">{formik.errors.deptName}</div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2">
                <lable className="form-lable">Department Description</lable><span className="text-danger">*</span>
                <textarea
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  className={`form-control  ${formik.touched.deptDesc && formik.errors.deptDesc ? 'is-invalid' : ''}`}
                  {...formik.getFieldProps('deptDesc')}
                ></textarea>
                {formik.touched.deptDesc && formik.errors.deptDesc && (
                  <div className="invalid-feedback">{formik.errors.deptDesc}</div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DepartmentAdd;