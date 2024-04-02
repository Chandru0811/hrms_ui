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
    const [qD, setQd] = useState([
      {
        formik: useFormik({
          initialValues: {
            qualificationName: "",
            qualificationType: "",
            fieldOfStudy: "",
            modeOfStudy: "",
            startDate: "",
            endDate: "",
            institution: "",
          },
          validationSchema: validationSchema,
        }),
      },
    ]);
    const [skills, setSkills] = useState([
      {
        formik: useFormik({
          initialValues: {
            employeeSkill: "",
            yearOfExperience: "",
            skillDescription: "",
          },
          validationSchema: validationSchema,
        }),
      },
    ]);

    const addQualificationDetail = (e) => {
      e.preventDefault(); // Prevent form submission
      const newQD = {
        formik: useFormik({
          initialValues: {
            qualificationName: "",
            qualificationType: "",
            fieldOfStudy: "",
            modeOfStudy: "",
            startDate: "",
            endDate: "",
            institution: "",
          },
          validationSchema: validationSchema,
        }),
      };
      setQd((prevQD) => [...prevQD, newQD]);
      console.log("Add qualification detail");
    };
    

    const addSkill = (e) => {
      e.preventDefault(); // Prevent form submission
      setSkills((prevSkills) => [
        ...prevSkills,
        {
          formik: useFormik({
            initialValues: {
              employeeSkill: "",
              yearOfExperience: "",
              skillDescription: "",
            },
            validationSchema: validationSchema,
          }),
        },
      ]);
      console.log("Add skill");
    };

    const handleSubmit = async () => {
      try {
        const qualificationDetailsData = qD.map(({ formik }) => formik.values);
        const skillsData = skills.map(({ formik }) => formik.values);
        setFormData((prevFormData) => ({
          ...prevFormData,
          qualificationDetails: qualificationDetailsData,
          skills: skillsData,
        }));
        handleNext();
      } catch (error) {
        toast.error(error);
      }
    };

    useImperativeHandle(ref, () => ({
      qualificationDetailsAdd: handleSubmit,
    }));

    return (
      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <div className="pb-4">
            {qD.map(({ formik }, i) => (
              <div key={i}>
                <p className="headColor ">Qualification Details</p>
                <div className="container">
                  <div className="row mt-3">
                    <div className="col-lg-6 col-md-6 col-12 ">
                      <div className="text-start mt-2">
                        <label className="form-label">
                          Qualification Name
                          <span className="text-danger">*</span>
                        </label>
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          name={`qualificationName${i}`}
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
                        <label className="form-label">
                          Field Of Study<span className="text-danger">*</span>
                        </label>
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          name={`fieldOfStudy${i}`}
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
                        <label className="form-label">
                          Start Date<span className="text-danger">*</span>
                        </label>
                        <br />
                        <input
                          className="form-control"
                          type="date"
                          name={`startDate${i}`}
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
                        <label className="form-label">
                          Institution<span className="text-danger">*</span>
                        </label>
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          name={`institution${i}`}
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
                        <label className="form-label">
                          Qualification Type
                          <span className="text-danger">*</span>
                        </label>
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          name={`qualificationType${i}`}
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
                        <label className="form-label">
                          Mode Of Study<span className="text-danger">*</span>
                        </label>
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          name={`modeOfStudy${i}`}
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
                        <label className="form-label">
                          End Date<span className="text-danger">*</span>
                        </label>
                        <br />
                        <input
                          className="form-control"
                          type="date"
                          name={`endDate${i}`}
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
            {/* Add more button for qualification details */}
            <button
              onClick={(e) => addQualificationDetail(e)}
              className="btn btn-button btn-sm my-4 mx-1"
            >
              Add More
            </button>
            {/* Delete button for qualification details */}
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

            {/* Skills input fields */}
            {skills.map(({ formik }, i) => (
              <div key={i}>
                <p className="headColor mt-3">Skills</p>
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-6 col-12 ">
                    <div className="text-start mt-4">
                      <label className="form-label">
                        Employee Skill<span className="text-danger">*</span>
                      </label>
                      <br />
                      <input
                        className="form-control"
                        type="text"
                        name={`employeeSkill${i}`}
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
                      <label className="form-label">
                        Years Of Experience
                        <span className="text-danger">*</span>
                      </label>
                      <br />
                      <input
                        className="form-control"
                        type="text"
                        name={`yearOfExperience${i}`}
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
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="text-start mt-4">
                      <label className="form-label">
                        Skill Description
                        <span className="text-danger">*</span>
                      </label>
                      <br />
                      <input
                        className="form-control"
                        type="text"
                        name={`skillDescription${i}`}
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
                  </div>
                </div>
              </div>
            ))}
            {/* Add more button for skills */}
            <button
              onClick={(e) => addSkill(e)}
              className="btn btn-button btn-sm my-4 mx-1"
            >
              Add More
            </button>
            {/* Delete button for skills */}
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
