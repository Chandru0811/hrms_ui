import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  qualificationName: Yup.string().required("*Qualification name is required!"),
  qualificationType: Yup.string().required("*Qualification type is required!"),
  fieldOfStudy: Yup.string().required("*Field of study is required!"),
  modeOfStudy: Yup.string().required("*Mode of study is required!"),
  startDate: Yup.string().required("*Start date is required!"),
  endDate: Yup.string().required("*End date is required!"),
  institution: Yup.string().required("*Institution is required!"),
  employeeSkill: Yup.string().required("*Employee skill is required!"),
  skillDescription: Yup.string().required("*Skill description is required!"),
  yearOfExperience: Yup.string().required("*Year of experience is required!"),
});

const EmpQualificationDetailsAdd = forwardRef(
  ({ formData, setFormData, handleNext }, ref) => {
    const [qD, setQd] = useState([""]);
    const [skills, setSkills] = useState([""]);

    const addQualificationDetail = (e) => {
      e.preventDefault(); // Prevent form submission
      setQd((prevQD) => [...prevQD, {}]);
      console.log("Add qualification detail");
    };

    const addSkill = (e) => {
      e.preventDefault(); // Prevent form submission
      setSkills((prevSkills) => [...prevSkills, {}]);
      console.log("Add skill");
    };

    const formik = useFormik({
      initialValues: {
        qualificationName: formData.qualificationName || "",
        qualificationType: formData.qualificationType || "",
        fieldOfStudy: formData.fieldOfStudy || "",
        modeOfStudy: formData.modeOfStudy || "",
        startDate: formData.startDate || "",
        endDate: formData.endDate || "",
        institution: formData.institution || "",
        employeeSkill: formData.employeeSkill || "",
        yearOfExperience: formData.yearOfExperience || "",
        skillDescription: formData.skillDescription || "",
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
        <form onSubmit={formik.handleSubmit}>
          <div className="pb-4">
            {qD.map((data, i) => (
              <div key={i}>
                <p className="headColor mt-3">Qualification Details</p>
                <div className="container">
                  <div className="row mt-3">
                    <div className="col-lg-6 col-md-6 col-12 ">
                      <div className="text-start mt-2">
                        <lable className="form-lable">
                          Qualification Name
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          name="qualificationName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.qualificationName}
                        />
                        {formik.touched.qualificationName &&
                          formik.errors.qualificationName && (
                            <div className="text-danger">
                              <small>{formik.errors.qualificationName}</small>
                            </div>
                          )}
                      </div>
                      <div className="text-start mt-4">
                        <lable className="form-lable">
                          Field of Study<span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          name="fieldOfStudy"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.fieldOfStudy}
                        />
                        {formik.touched.fieldOfStudy &&
                          formik.errors.fieldOfStudy && (
                            <div className="text-danger">
                              <small>{formik.errors.fieldOfStudy}</small>
                            </div>
                          )}
                      </div>
                      <div className="text-start mt-4">
                        <lable className="form-lable">
                          Start Date<span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="date"
                          name="startDate"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.startDate}
                        />
                        {formik.touched.startDate &&
                          formik.errors.startDate && (
                            <div className="text-danger">
                              <small>{formik.errors.startDate}</small>
                            </div>
                          )}
                      </div>
                      <div className="text-start mt-4">
                        <lable className="form-lable">
                          Institution<span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          name="institution"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.institution}
                        />
                        {formik.touched.institution &&
                          formik.errors.institution && (
                            <div className="text-danger">
                              <small>{formik.errors.institution}</small>
                            </div>
                          )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 px-5">
                      <div className="text-start mt-2">
                        <lable className="form-lable">
                          Qualification Type
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          name="qualificationType"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.qualificationType}
                        />
                        {formik.touched.qualificationType &&
                          formik.errors.qualificationType && (
                            <div className="text-danger">
                              <small>{formik.errors.qualificationType}</small>
                            </div>
                          )}
                      </div>
                      <div className="text-start mt-4">
                        <lable className="form-lable">
                          Mode of Study<span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          name="modeOfStudy"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.modeOfStudy}
                        />
                        {formik.touched.modeOfStudy &&
                          formik.errors.modeOfStudy && (
                            <div className="text-danger">
                              <small>{formik.errors.modeOfStudy}</small>
                            </div>
                          )}
                      </div>
                      <div className="text-start mt-4">
                        <lable className="form-lable">
                          End Date<span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="date"
                          name="endDate"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.endDate}
                        />
                        {formik.touched.endDate && formik.errors.endDate && (
                          <div className="text-danger">
                            <small>{formik.errors.endDate}</small>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={(e) => addQualificationDetail(e)} // Pass the event object
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

            {skills.map((item, i) => (
              <div key={i}>
                <p className="headColor mt-3">Skills</p>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 ">
                      <div className="text-start mt-4">
                        <lable className="form-lable">
                          Employee Skill<span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          name="employeeSkill"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.employeeSkill}
                        />
                        {formik.touched.employeeSkill &&
                          formik.errors.employeeSkill && (
                            <div className="text-danger">
                              <small>{formik.errors.employeeSkill}</small>
                            </div>
                          )}
                      </div>
                      <div className="text-start mt-4">
                        <lable className="form-lable">
                          Years of Experience
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          name="yearOfExperience"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.yearOfExperience}
                        />
                        {formik.touched.yearOfExperience &&
                          formik.errors.yearOfExperience && (
                            <div className="text-danger">
                              <small>{formik.errors.yearOfExperience}</small>
                            </div>
                          )}
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div className="text-start mt-4">
                        <lable className="form-lable">
                          Skill Description
                          <span className="text-danger">*</span>
                        </lable>
                        <br />
                        <input
                          className="form-control "
                          type="text"
                          name="skillDescription"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.skillDescription}
                        />
                        {formik.touched.skillDescription &&
                          formik.errors.skillDescription && (
                            <div className="text-danger">
                              <small>{formik.errors.skillDescription}</small>
                            </div>
                          )}
                      </div>
                      <div class="form-group col-sm "></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={(e) => addSkill(e)} // Pass the event object
              className="btn btn-button btn-sm my-4 mx-1"
            >
              Add More
            </button>
            {skills.length > 1 && (
              <button
                className="btn btn-danger my-4 mx-1"
                onClick={(e) => {
                  e.preventDefault(); // Prevent form submission
                  setSkills((prevSkills) => prevSkills.slice(0, -1));
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

export default EmpQualificationDetailsAdd;
