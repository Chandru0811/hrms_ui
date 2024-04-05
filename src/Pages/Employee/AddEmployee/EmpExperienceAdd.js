import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  empExperience: Yup.array().of(
    Yup.object().shape({
      previousCompanyName: Yup.string().required(
        "*Previous company name is required"
      ),
      previousCompanyAddress: Yup.string().required(
        "*Previous company address is required"
      ),
      designation: Yup.string().required("*Designation is required"),
      experienceDescription: Yup.string().required(
        "*Experience description is required"
      ),
      startDate1: Yup.string().required("*Start date is required"),
      endDate1: Yup.string().required("*End date is required"),
    })
  ),
});

const EmpExperienceAdd = forwardRef(
  ({ formData, setFormData, handleNext }, ref) => {
    const [rows, setRows] = useState([{}]);

    const formik = useFormik({
      initialValues: {
        empExperience: [
          {
            previousCompanyName: formData.previousCompanyName || "",
            previousCompanyAddress: formData.previousCompanyAddress || "",
            designation: formData.designation || "",
            experienceDescription: formData.experienceDescription || "",
            startDate1: formData.startDate1 || "",
            endDate1: formData.endDate1 || ""
          }
        ]
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
          {rows.map((row, index) => (
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
                      className="form-control"
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
                                .previousCompanyName
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
                    <textarea rows="5"
                      className="form-control "
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name={`empExperience[${index}].previousCompanyAddress`}
                      value={
                        formik.values.empExperience[index]
                          ?.previousCompanyAddress || ""
                      }></textarea>
                    {formik.touched.empExperience?.[index]
                      ?.previousCompanyAddress &&
                      formik.errors.empExperience?.[index]
                        ?.previousCompanyAddress && (
                        <div className="text-danger">
                          <small>
                            {
                              formik.errors.empExperience[index]
                                .previousCompanyAddress
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
                                .experienceDescription
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
                    {formik.touched.empExperience?.[index]?.endDate1 &&
                      formik.errors.empExperience?.[index]?.endDate1 && (
                        <div className="text-danger">
                          <small>
                            {
                              formik.errors.empExperience[index].endDate1

                            }
                          </small>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="row">
            <div className="col-12 mb-4">
              <button
                type="button"
                onClick={() => {
                  setRows((prev) => [...prev, {}]); // Add a new row for each parent
                }}
                className="btn btn-button btn-sm"
              >
                Add More
              </button>{" "}
              &nbsp;&nbsp;
              {rows.length > 1 && (
                <button
                  type="button"
                  onClick={() => setRows((prev) => prev.slice(0, -1))}
                  className="btn btn-outline-danger"
                >
                  <FaRegTrashAlt />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
);

export default EmpExperienceAdd;