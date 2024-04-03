import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
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
});

const EmpExperienceAdd = forwardRef(
  ({ formData, setFormData, handleNext }, ref) => {
    const [qD, setQd] = useState([""]);

    const ExperienceAdd = (e) => {
      e.preventDefault();
      setQd((prevQD) => [...prevQD, {}]);
      console.log("Add Experience detail");
    };

    const formik = useFormik({
      initialValues: {
        previousCompanyName: formData.previousCompanyName || "",
        previousCompanyAddress: formData.previousCompanyAddress || "",
        designation: formData.designation || "",
        experienceDescription: formData.experienceDescription || "",
        startDate1: formData.startDate1 || "",
        endDate1: formData.endDate1 || "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          // let queryParams = new URLSearchParams({
          //   previousCompanyAddress: values.previousCompanyAddress,
          //   designation: values.designation,
          //   startDate1: values.startDate1,
          //   endDate1: values.endDate1,
          //   previousCompanyName: values.previousCompanyName,
          //   experienceDescription: values.experienceDescription,
          // });
          setFormData((prv) => ({ ...prv, ...values }));
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
            {qD.map((data, i) => {
              return (
                <div key={i}>
                  <p class="headColor mt-3">Experience</p>
                  <div className="container">
                    <div className="row mt-3">
                      <div className="col-lg-6 col-md-6 col-12 ">
                        <div className="text-start mt-2">
                          <lable className="form-label">
                            Previous Company Name
                            <span className="text-danger">*</span>
                          </lable>
                          <br />
                          <input
                            className="form-control "
                            type="text"
                            name="previousCompanyName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.previousCompanyName}
                          />
                          {formik.touched.previousCompanyName &&
                            formik.errors.previousCompanyName && (
                              <div className="text-danger">
                                <small>
                                  {formik.errors.previousCompanyName}
                                </small>
                              </div>
                            )}
                        </div>
                        <div className="text-start mt-4">
                          <lable className="form-label">
                            Designation
                            <span className="text-danger">*</span>
                          </lable>
                          <br />
                          <input
                            className="form-control "
                            type="text"
                            name="designation"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.designation}
                          />
                          {formik.touched.designation &&
                            formik.errors.designation && (
                              <div className="text-danger">
                                <small>{formik.errors.designation}</small>
                              </div>
                            )}
                        </div>
                        <div className="text-start mt-4">
                          <lable className="form-label">
                            Start Date
                            <span className="text-danger">*</span>
                          </lable>
                          <br />
                          <input
                            className="form-control "
                            type="date"
                            name="startDate1"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.startDate1}
                          />
                          {formik.touched.startDate1 &&
                            formik.errors.startDate1 && (
                              <div className="text-danger">
                                <small>{formik.errors.startDate1}</small>
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 px-5">
                        <div className="text-start mt-2">
                          <lable className="form-label">
                            Previous Company Address
                            <span className="text-danger">*</span>
                          </lable>
                          <br />
                          <input
                            className="form-control "
                            type="text"
                            name="previousCompanyAddress"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.previousCompanyAddress}
                          />
                          {formik.touched.previousCompanyAddress &&
                            formik.errors.previousCompanyAddress && (
                              <div className="text-danger">
                                <small>
                                  {formik.errors.previousCompanyAddress}
                                </small>
                              </div>
                            )}
                        </div>
                        <div className="text-start mt-4">
                          <lable className="form-label">
                            Experience Description
                            <span className="text-danger">*</span>
                          </lable>
                          <br />
                          <input
                            className="form-control "
                            type="text"
                            name="experienceDescription"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.experienceDescription}
                          />
                          {formik.touched.experienceDescription &&
                            formik.errors.experienceDescription && (
                              <div className="text-danger">
                                <small>
                                  {formik.errors.experienceDescription}
                                </small>
                              </div>
                            )}
                        </div>
                        <div className="text-start mt-4">
                          <lable className="form-label">
                            End Date
                            <span className="text-danger">*</span>
                          </lable>
                          <br />
                          <input
                            className="form-control "
                            type="date"
                            name="endDate1"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.endDate1}
                          />
                          {formik.touched.endDate1 &&
                            formik.errors.endDate1 && (
                              <div className="text-danger">
                                <small>{formik.errors.endDate1}</small>
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
              onClick={(e) => ExperienceAdd(e)} // Pass the event object
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
export default EmpExperienceAdd;
