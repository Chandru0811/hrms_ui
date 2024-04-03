import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  empExperience: Yup.array().of(
    Yup.object().shape({
      previousCompanyName: Yup.string().required(
        "*Previous company Name is required!"
      ),
      previousCompanyAddress: Yup.string().required(
        "*Previous company Address is required!"
      ),
      designation: Yup.string().required("*Designation is required!"),
      experienceDescription: Yup.string().required(
        "*Experience description is required!"
      ),
      startDate1: Yup.date().required("*Start date is required!"),
      endDate1: Yup.date().required("*End date is required!"),
    })
  ),
});

const EmpExperienceAdd = forwardRef(
  ({ formData, setFormData, handleNext }, ref) => {
    const [rows, setRows] = useState([{}]);

    const ExperienceAdd = (e) => {
      e.preventDefault();
      setRows((prevRows) => [...prevRows, {}]);
      console.log("Add Experience detail");
    };

    // const removeExperience = (index) => {
    //   setRows((prevRows) => prevRows.filter((_, i) => i !== index));
    // };

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
      experienceAdd: formik.handleSubmit,
    }));

    return (
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          <div className="pb-4">
            {rows.map((row, index) => {
              return (
                <div key={index}>
                  <p class="headColor mt-3">Experience</p>
                  <div className="container">
                    <div className="row mt-3">
                      <div className=" col-md-6 col-12 text-start my-3">
                        <lable className="form-label">
                          Previous Company Name
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          name={`empExperience[${index}].previousCompanyName`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={
                            formik.values.empExperience[index]
                              ?.previousCompanyName || ""
                          }
                        />
                        {formik.touched.empExperience?.[index]
                          ?.previousCompanyName &&
                          formik.errors.empExperience?.[index]
                            ?.previousCompanyName && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empExperience[index]
                                    .previousCompanyName.message
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className=" col-md-6 col-12 text-start my-3">
                        <lable className="form-label">
                          Previous Company Address
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name={`empExperience[${index}].previousCompanyAddress`}
                          value={
                            formik.values.empExperience[index]
                              ?.previousCompanyAddress || ""
                          }
                        />
                        {formik.touched.empExperience?.[index]
                          ?.previousCompanyAddress &&
                          formik.errors.empExperience?.[index]
                            ?.previousCompanyAddress && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empExperience[index]
                                    .previousCompanyAddress.message
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className=" col-md-6 col-12 text-start my-3">
                        <lable className="form-label">
                          Designation
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          name={`empExperience[${index}].designation`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={
                            formik.values.empExperience[index]?.designation ||
                            ""
                          }
                        />
                        {formik.touched.empExperience?.[index]?.designation &&
                          formik.errors.empExperience?.[index]?.designation && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empExperience[index].designation
                                    .message
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className="col-md-6 col-12 text-start my-3">
                        <lable className="form-label">
                          Experience Description
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name={`empExperience[${index}].experienceDescription`}
                          value={
                            formik.values.empExperience[index]
                              ?.experienceDescription || ""
                          }
                        />
                        {formik.touched.empExperience?.[index]
                          ?.experienceDescription &&
                          formik.errors.empExperience?.[index]
                            ?.experienceDescription && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empExperience[index]
                                    .experienceDescription.message
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className="col-md-6 col-12 text-start my-3">
                        <lable className="form-label">
                          Start Date
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="date"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name={`empExperience[${index}].startDate1`}
                          value={
                            formik.values.empExperience[index]?.startDate1 || ""
                          }
                        />
                        {formik.touched.empExperience?.[index]?.startDate1 &&
                          formik.errors.empExperience?.[index]?.startDate1 && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empExperience[index].startDate1
                                    .message
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className="col-md-6 col-12 text-start my-3">
                        <lable className="form-label">
                          End Date
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="date"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name={`empExperience[${index}].endDate1`}
                          value={
                            formik.values.empExperience[index]?.endDate1 || ""
                          }
                        />
                        {formik.touched.endDate1?.[index]
                          ?.experienceDescription &&
                          formik.errors.endDate1?.[index]
                            ?.experienceDescription && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.endDate1[index]
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
              onClick={(e) => ExperienceAdd(e)}
              className="btn btn-button btn-sm my-4 mx-1"
            >
              Add More
            </button>
            {rows.length > 1 && (
              <button
                className="btn btn-danger my-4 mx-1"
                onClick={(e) => {
                  e.preventDefault();
                  setRows((prevQD) => prevQD.slice(0, -1));
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
export default EmpExperienceAdd;
