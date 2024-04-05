import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  empPrevious: Yup.array().of(
    Yup.object().shape({
      companyName: Yup.string().required("*Company name is required"),
      jobTitle: Yup.string().required("*Referral job title is required"),
      referralContactNo: Yup.number().required(
        "*Referral contact number is required"
      ) .typeError("*Must be a number"),
      companyAddress: Yup.string().required("*Company address is required"),
      referralName: Yup.string().required("*Referral name is required"),
    })
  )
});

const EmpPreviousCompanyAdd = forwardRef(
  ({ formData, setFormData, handleNext }, ref) => {
    const [rows, setRows] = useState([{}]);

    const formik = useFormik({
      initialValues: {
        empPrevious: [
          {
            companyName: formData.companyName || "",
            jobTitle: formData.jobTitle || "",
            companyAddress: formData.companyAddress || "",
            referralName: formData.referralName || "",
            referralContactNo: formData.referralContactNo || "",
          }
        ]
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
          {rows.map((row, index) => (
            <div key={index}>
              <p class="headColor mt-3">Previous Company Reference</p>
              <div className="container">
                <div className="row mt-3">
                    <div className="col-md-6 col-12 mb-3">
                      <lable htmlFor="" className="form-label">
                        Company Name
                        <span className="text-danger">*</span>
                      </lable>
                      <input
                        className="form-control "
                        type="text"
                        name={`empPrevious[${index}].companyName`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.empPrevious[index]
                            ?.companyName || ""
                        }
                      />
                      {formik.touched.empPrevious?.[index]
                      ?.companyName &&
                      formik.errors.empPrevious?.[index]
                        ?.companyName && (
                        <div className="text-danger">
                          <small>
                            {
                              formik.errors.empPrevious[index]
                                .companyName
                            }
                          </small>
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 col-12 mb-3">
                      <lable className="form-label">
                        Company Address
                        <span className="text-danger">*</span>
                        &nbsp;
                      </lable>
                      <textarea rows="5"
                        className="form-control "
                        name={`empPrevious[${index}].companyAddress`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.empPrevious[index]
                            ?.companyAddress || ""
                        }
                      />
                      {formik.touched.empPrevious?.[index]
                      ?.companyAddress &&
                      formik.errors.empPrevious?.[index]
                        ?.companyAddress && (
                        <div className="text-danger">
                          <small>
                            {
                              formik.errors.empPrevious[index]
                                .companyAddress
                            }
                          </small>
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 col-12 mb-3">
                      <lable htmlFor="" className="form-label">
                        Referral Contact No
                        <span className="text-danger">*</span>
                      </lable>

                      <input
                        className="form-control  form-contorl-sm"
                        name={`empPrevious[${index}].referralContactNo`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.empPrevious[index]
                            ?.referralContactNo || ""
                        }
                      />
                      {formik.touched.empPrevious?.[index]
                      ?.referralContactNo &&
                      formik.errors.empPrevious?.[index]
                        ?.referralContactNo && (
                        <div className="text-danger">
                          <small>
                            {
                              formik.errors.empPrevious[index]
                                .referralContactNo
                            }
                          </small>
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 col-12 mb-3">
                      <lable htmlFor="" className="form-label">
                        Referral Job Title
                        <span className="text-danger">*</span>
                      </lable>

                      <input
                      type="text"
                      className="form-control"
                        name={`empPrevious[${index}].jobTitle`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.empPrevious[index]
                            ?.jobTitle || ""
                        }
                      />
                      {formik.touched.empPrevious?.[index]
                      ?.jobTitle &&
                      formik.errors.empPrevious?.[index]
                        ?.jobTitle && (
                        <div className="text-danger">
                          <small>
                            {
                              formik.errors.empPrevious[index]
                                .jobTitle
                            }
                          </small>
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 col-12 mb-3">
                      <lable htmlFor="" className="form-label">
                        Referral Name
                        <span className="text-danger">*</span>
                      </lable>

                      <input
                        type="text"
                        className="form-control"
                        name={`empPrevious[${index}].referralName`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.empPrevious[index]
                            ?.referralName || ""
                        }
                      />
                      {formik.touched.empPrevious?.[index]
                      ?.referralName &&
                      formik.errors.empPrevious?.[index]
                        ?.referralName && (
                        <div className="text-danger">
                          <small>
                            {
                              formik.errors.empPrevious[index]
                                .referralName
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

export default EmpPreviousCompanyAdd;