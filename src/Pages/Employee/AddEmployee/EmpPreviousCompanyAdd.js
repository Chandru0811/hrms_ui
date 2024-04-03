import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  empExperience: Yup.array().of(
    Yup.object().shape({
      companyName: Yup.string().required("*Company name is required!"),
      jobTitle: Yup.string().required("*Job title is required!"),
      referralContactNo: Yup.string().required(
        "*Referral contact number is required!"
      ),
      companyAddress: Yup.string().required("*Company address is required!"),
      referralName: Yup.string().required("*Referral name is required!"),
    })
  ),
});

const EmpPersonalInfoAdd = forwardRef(
  ({ formData, setFormData, handleNext }, ref) => {
    const [rows, setRows] = useState([{}]);

    const addPreviousCompany = (e) => {
      e.preventDefault();
      setRows((prevRows) => [...prevRows, {}]);
    };

    const formik = useFormik({
      initialValues: {
        empExperience: rows,
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          setFormData((prevFormData) => ({ ...prevFormData, ...values }));
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
            {rows.map((row, index) => {
              return (
                <div key={index}>
                  <p class="headColor mt-3">Previous Company Reference</p>
                  <div className="container">
                    <div className="row mt-3">
                      <div className="col-md-6 col-12 text-start my-3">
                        <lable htmlFor="" className="form-label">
                          Company Name
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name={`empExperience[${index}].companyName`}
                          value={
                            formik.values.empExperience[index]?.companyName ||
                            ""
                          }
                        />
                        {formik.touched.companyName?.[index]
                          ?.experienceDescription &&
                          formik.errors.companyName?.[index]
                            ?.experienceDescription && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.companyName[index]
                                    .experienceDescription.message
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className="col-md-6 col-12 text-start my-3">
                        <lable className="form-label">
                          Company Address
                          <span className="text-danger">*</span>
                          &nbsp;
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name={`empExperience[${index}].companyAddress`}
                          value={
                            formik.values.empExperience[index]
                              ?.companyAddress || ""
                          }
                        />
                        {formik.touched.companyAddress?.[index]
                          ?.experienceDescription &&
                          formik.errors.companyAddress?.[index]
                            ?.experienceDescription && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.companyAddress[index]
                                    .experienceDescription.message
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className="col-md-6 col-12 text-start my-3">
                        <lable htmlFor="" className="form-label">
                          Referral Contact No
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control  form-contorl-sm"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name={`empExperience[${index}].referralContactNo`}
                          value={
                            formik.values.empExperience[index]
                              ?.referralContactNo || ""
                          }
                        />
                        {formik.touched.referralContactNo?.[index]
                          ?.experienceDescription &&
                          formik.errors.referralContactNo?.[index]
                            ?.experienceDescription && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.referralContactNo[index]
                                    .experienceDescription.message
                                }
                              </small>
                            </div>
                          )}
                      </div>

                      <div className="col-md-6 col-12 text-start my-3">
                        <lable htmlFor="" className="form-label">
                          Job Title
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="form-control "
                          type="text"
                          name={`empExperience[${index}].jobTitle`}
                          value={
                            formik.values.empExperience[index]?.jobTitle || ""
                          }
                        />
                        {formik.touched.jobTitle?.[index]
                          ?.experienceDescription &&
                          formik.errors.jobTitle?.[index]
                            ?.experienceDescription && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.jobTitle[index]
                                    .experienceDescription.message
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className="col-md-6 col-12 text-start my-3">
                        <lable htmlFor="" className="form-label">
                          Referral Name
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          type="text"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name={`empExperience[${index}].referralName`}
                          value={
                            formik.values.empExperience[index]?.referralName ||
                            ""
                          }
                        />
                        {formik.touched.referralName?.[index]
                          ?.experienceDescription &&
                          formik.errors.referralName?.[index]
                            ?.experienceDescription && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.referralName[index]
                                    .experienceDescription.message
                                }
                              </small>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
             <button
              onClick={addPreviousCompany}
              className="btn btn-button btn-sm my-4 mx-1"
            >
              Add More
            </button>
            {rows.length > 1 && (
               <button
               className="btn btn-danger my-4 mx-1"
               onClick={(e) => {
                 e.preventDefault();
                 setRows((prevRows) => prevRows.slice(0, -1));
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