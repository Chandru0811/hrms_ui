import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  empQualification: Yup.array().of(
    Yup.object().shape({
      qualificationName: Yup.string().required("*Qualification name is required"),
      qualificationType: Yup.string().required("*Qualification type is required"),
      fieldOfStudy: Yup.string().required("*Field of study is required"),
      modeOfStudy: Yup.string().required("*Mode of study is required"),
      startDate: Yup.string().required("*Start date is required"),
      endDate: Yup.string().required("*End date is required"),
      institution: Yup.string().required("*Institution is required"),
      employeeSkill: Yup.string().required("*Employee skill is required"),
      skillDescription: Yup.string().required("*Skill description is required"),
    })
  ),
});

const EmpQualificationDetailsAdd = forwardRef(
  ({ formData, setFormData, handleNext }, ref) => {
    const [rows, setRows] = useState([{}]);
    const [rows1, setRows1] = useState([{}]);

    const formik = useFormik({
      initialValues: {
        empQualification: [
          {
            qualificationName: formData.qualificationName || "",
            qualificationType: formData.qualificationType || "",
            fieldOfStudy: formData.fieldOfStudy || "",
            modeOfStudy: formData.modeOfStudy || "",
            startDate: formData.startDate || "",
            endDate: formData.endDate || "",
            institution: formData.institution || "",
            employeeSkill: formData.employeeSkill || "",
            skillDescription: formData.skillDescription || "",
          },
        ],
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
      qualificationDetailsAdd: formik.handleSubmit,
    }));

    return (
      <div className="container-fluid">
        {/* {/ Qualification Details /} */}
        <form onSubmit={formik.handleSubmit}>
          {rows.map((row, index) => (
            <div className="border-0 mb-5" key={index}>
              <div>
                <div className="border-0 my-2">
                  <p className="headColor">Qualification Details</p>
                  <div className="container pt-3">
                    <div className="row mt-3">
                      <div className="col-md-6 col-12 mb-3">
                        <lable className="form-label">
                          Qualification Name
                          <span className="text-danger">*</span>
                        </lable>
                        <input
                          className="form-control "
                          type="text"
                          name={`empQualification[${index}].qualificationName`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={
                            formik.values.empQualification[index]
                              ?.qualificationName || ""
                          }
                        />
                        {formik.touched.empQualification?.[index]
                          ?.qualificationName &&
                          formik.errors.empQualification?.[index]
                            ?.qualificationName && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empQualification[index]
                                    .qualificationName
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className="col-md-6 col-12 mb-3">
                        <lable className="form-label">
                          Qualification Type
                          <span className="text-danger">*</span>
                        </lable>
                        <select
                        className="form-select"
                        name={`empQualification[${index}].qualificationType`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.empQualification[index]
                            ?.qualificationType || ""
                        }>
                        <option selected></option>
                          <option value="Masters" >Masters</option>
                          <option value="Bachelor" >Bachelor</option>
                          <option value="Diploma" >Diploma</option>
                          <option value="PG Diploma" >PG Diploma</option>
                        </select>
                        {formik.touched.empQualification?.[index]
                          ?.qualificationType &&
                          formik.errors.empQualification?.[index]
                            ?.qualificationType && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empQualification[index]
                                    .qualificationType
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className="col-md-6 col-12 mb-3">
                        <lable className="form-label">
                          Field of Study
                          <span className="text-danger">*</span>
                        </lable>
                        <select
                        className="form-select"
                        name={`empQualification[${index}].fieldOfStudy`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.empQualification[index]
                            ?.fieldOfStudy || ""
                        }>
                        <option selected></option>
                          <option value="Information Technology" >Information Technology</option>
                          <option value="Business" >Business</option>
                          <option value="Engineering" >Engineering</option>
                          <option value="Accounting" >Accounting</option>
                          <option value="Banking" >Banking</option>
                          <option value="Finance" >Finance</option>

                        </select>
                        {formik.touched.empQualification?.[index]
                          ?.fieldOfStudy &&
                          formik.errors.empQualification?.[index]
                            ?.fieldOfStudy && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empQualification[index]
                                    .fieldOfStudy
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className="col-md-6 col-12 mb-3">
                        <lable className="form-label">
                          Mode of Study
                          <span className="text-danger">*</span>
                        </lable>
                        <select
                        className="form-select"
                        name={`empQualification[${index}].modeOfStudy`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.empQualification[index]
                            ?.modeOfStudy || ""
                        }>
                        <option selected></option>
                          <option value="Full time" >Full time</option>
                          <option value="Part time" >Part time</option>
                          <option value="Distance Education" >Distance Education</option>
                        </select>
                        {formik.touched.empQualification?.[index]
                          ?.modeOfStudy &&
                          formik.errors.empQualification?.[index]
                            ?.modeOfStudy && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empQualification[index]
                                    .modeOfStudy
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className="col-md-6 col-12 mb-3">
                        <lable className="form-label">
                          Start Date
                          <span className="text-danger">*</span>
                        </lable>
                        <input
                          className="form-control  form-contorl-sm"
                          type="date"
                          name={`empQualification[${index}].startDate`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={
                            formik.values.empQualification[index]
                              ?.startDate || ""
                          }
                        />

                        {formik.touched.empQualification?.[index]
                          ?.startDate &&
                          formik.errors.empQualification?.[index]
                            ?.startDate && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empQualification[index]
                                    .startDate
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className="col-md-6 col-12 mb-3">
                        <lable className="form-label">
                          End Date
                          <span className="text-danger">*</span>
                        </lable>
                        <input
                          className="form-control  form-contorl-sm"
                          type="date"
                          name={`empQualification[${index}].endDate`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={
                            formik.values.empQualification[index]?.endDate ||
                            ""
                          }
                        />

                        {formik.touched.empQualification?.[index]?.endDate &&
                          formik.errors.empQualification?.[index]
                            ?.endDate && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empQualification[index]
                                    .endDate
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className="col-md-6 col-12">
                        <lable className="form-label">
                          Institution
                          <span className="text-danger">*</span>
                        </lable>
                        <input
                          className="form-control  form-contorl-sm"
                          type="text"
                          name={`empQualification[${index}].institution`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={
                            formik.values.empQualification[index]
                              ?.institution || ""
                          }
                        />

                        {formik.touched.empQualification?.[index]
                          ?.institution &&
                          formik.errors.empQualification?.[index]
                            ?.institution && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empQualification[index]
                                    .institution
                                }
                              </small>
                            </div>
                          )}
                      </div>
                    </div>
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

          {/* {/ Skils /} */}
          {rows1.map((row, index) => (
            <div className="border-0 mb-5" key={index}>
              <div>
                <div className=" border-0 my-2">

                  <p className="headColor">Skills</p>
                  <div className="container pt-3">
                    <div className="row mt-2">
                      <div className="col-md-6 col-12">
                        <lable className="form-label">
                          Employee Skill
                          <span className="text-danger">*</span>
                        </lable>
                        <input
                          className="form-control"
                          type="text"
                          name={`empQualification[${index}].employeeSkill`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={
                            formik.values.empQualification[index]
                              ?.employeeSkill || ""
                          }
                        />
                        {formik.touched.empQualification?.[index]
                          ?.employeeSkill &&
                          formik.errors.empQualification?.[index]
                            ?.employeeSkill && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empQualification[index]
                                    .employeeSkill
                                }
                              </small>
                            </div>
                          )}
                      </div>
                      <div className="col-md-6 col-12 mb-3">
                        <lable className="form-label">
                          Skill Description
                          <span className="text-danger">*</span>
                        </lable>
                        <textarea
                          className="form-control  form-contorl-sm"
                          type="text"
                          rows={5}
                          name={`empQualification[${index}].skillDescription`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={
                            formik.values.empQualification[index]
                              ?.skillDescription || ""
                          }
                        />

                        {formik.touched.empQualification?.[index]
                          ?.skillDescription &&
                          formik.errors.empQualification?.[index]
                            ?.skillDescription && (
                            <div className="text-danger">
                              <small>
                                {
                                  formik.errors.empQualification[index]
                                    .skillDescription
                                }
                              </small>
                            </div>
                          )}
                      </div>
                    </div>
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
                  setRows1((prev) => [...prev, {}]); // Add a new row for each parent
                }}
                className="btn btn-button btn-sm"
              >
                Add More
              </button>{" "}
              &nbsp;&nbsp;
              {rows1.length > 1 && (
                <button
                  type="button"
                  onClick={() => setRows1((prev) => prev.slice(0, -1))}
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

export default EmpQualificationDetailsAdd;