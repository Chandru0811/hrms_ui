import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required("*Company name is required!"),
  jobTitle: Yup.string().required("*Job title is required!"),
  referralContactNo: Yup.string().required(
    "*Referral contact number is required!"
  ),
  companyAddress: Yup.string().required("*Company address is required!"),
  referralName: Yup.string().required("*Referral name is required!"),
});

const EmpPersonalInfoAdd = forwardRef(
  ({ formData, setFormData, handleNext }, ref) => {
    const [qD, setQd] = useState([""]);

    const PreviousCompanyAdd = (e) => {
      e.preventDefault();
      setQd((prevQD) => [...prevQD, {}]);
      console.log("Add Experience detail");
    };

    const formik = useFormik({
      initialValues: {
        companyName: formData.companyName || "",
        jobTitle: formData.jobTitle || "",
        companyAddress: formData.companyAddress || "",
        referralName: formData.referralName || "",
        referralContactNo: formData.referralContactNo || "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          setFormData((prv) => ({ ...prv, ...values }));
          handleNext();
        } catch (error) {
          toast.error(error);
        }
      },
    });

    useImperativeHandle(ref, () => ({
      previousCompanyAdd: formik.handleSubmit,
    }));

    return (
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          <div className="pb-4">
            {qD.map((data, i) => {
              return (
                <div key={i}>
                  <p class="headColor mt-3">Previous Company Reference</p>
                  <div className="container">
                    <div className="row mt-3">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="text-start mt-2">
                          <lable htmlFor="" className="form-label">
                            Company Name
                            <span className="text-danger">*</span>
                          </lable>
                          <br />
                          <input
                            className="form-control "
                            type="text"
                            name="companyName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.companyName}
                          />
                          {formik.touched.companyName &&
                            formik.errors.companyName && (
                              <div className="text-danger">
                                <small>{formik.errors.companyName}</small>
                              </div>
                            )}
                        </div>
                        <div className="text-start mt-4">
                          <lable className="form-label">
                            Company Address
                            <span className="text-danger">*</span>
                            &nbsp;
                          </lable>
                          <br />
                          <input
                            className="form-control "
                            type="text"
                            name="companyAddress"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.companyAddress}
                          />
                          {formik.touched.companyAddress &&
                            formik.errors.companyAddress && (
                              <div className="text-danger">
                                <small>{formik.errors.companyAddress}</small>
                              </div>
                            )}
                        </div>
                        <div className="text-start mt-4">
                          <lable htmlFor="" className="form-label">
                            Referral Contact No
                            <span className="text-danger">*</span>
                          </lable>
                          <br />
                          <input
                            className="form-control  form-contorl-sm"
                            name="referralContactNo"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.referralContactNo}
                          />
                          {formik.touched.referralContactNo &&
                            formik.errors.referralContactNo && (
                              <div className="error text-danger ">
                                <small>{formik.errors.referralContactNo}</small>
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 px-5">
                        <div className="text-start mt-2">
                          <lable htmlFor="" className="form-label">
                            Job Title
                            <span className="text-danger">*</span>
                          </lable>
                          <br />
                          <input
                            name="jobTitle"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.jobTitle}
                            className="form-control "
                            type="text"
                          />
                          {formik.touched.jobTitle &&
                            formik.errors.jobTitle && (
                              <div className="text-danger">
                                <small>{formik.errors.jobTitle}</small>
                              </div>
                            )}
                        </div>
                        <div className="text-start mt-4">
                          <lable htmlFor="" className="form-label">
                            Referral Name
                            <span className="text-danger">*</span>
                          </lable>
                          <br />
                          <input
                            type="text"
                            name="referralName"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.referralName &&
                            formik.errors.referralName && (
                              <div className="error text-danger ">
                                <small>{formik.errors.referralName}</small>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <button
              onClick={(e) => PreviousCompanyAdd(e)} // Pass the event object
              className="btn btn-button btn-sm my-4 mx-1"
            >
              Add More
            </button>
            {qD.length > 1 && (
              <button
                className="btn btn-danger my-4 mx-1"
                onClick={(e) => {
                  e.preventDefault(); // Prevent form submission
                  setQd((prevQD) => prevQD.slice(0, -1));
                }}
              >
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
);
export default EmpPersonalInfoAdd;
