import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  emergencyContactName: Yup.string().required(
    "*Emergency contact name is required"
  ),
  emergencyContactNo: Yup.number().required(
    "*Emergency contact no is required"
  ) .typeError("*Must be a number"),
  emergencyContactAddress: Yup.string().required(
    "*Emergency contact address is required"
  ),
  relationshipToEmployee: Yup.string().required(
    "*Relationship to employee is required"
  ),
});

const EmpEmergencyContactAdd = forwardRef(
  ({ formData, setFormData, handleNext }, ref) => {
    const [qD, setQd] = useState([""]);

    const EmergencyContact = (e) => {
      e.preventDefault();
      setQd((prevQD) => [...prevQD, {}]);
      console.log("Add Emergency Contact detail");
    };

    const formik = useFormik({
      initialValues: {
        emergencyContactName: formData.emergencyContactName || "",
        emergencyContactNo: formData.emergencyContactNo || "",
        emergencyContactAddress: formData.emergencyContactAddress || "",
        relationshipToEmployee: formData.relationshipToEmployee || "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          let queryParams = new URLSearchParams({
            emergencyContactNo: values.emergencyContactNo,
            familyReferenceName: values.familyReferenceName,
            familyReferencePhoneNo: values.familyReferencePhoneNo,
            relationshipToEmployee: values.relationshipToEmployee,
            emergencyContactName: values.emergencyContactName,
            emergencyContactAddress: values.emergencyContactAddress,
          });
          setFormData((prv) => ({ ...prv, ...values }));
          handleNext();
        } catch (error) {
          toast.error(error);
        }
      },
    });

    useImperativeHandle(ref, () => ({
      emergencyContactAdd: formik.handleSubmit,
    }));

    return (
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          <div className="pb-4">
            {qD.map((data, i) => {
              return (
                <div key={i}>
                  <p class="headColor mt-3">Emergency Contact</p>
                  <div className="container">
                    <div className="row mt-3">
                      <div className="col-lg-6 col-md-6 col-12 ">
                        <div className="text-start mt-2">
                          <lable className="form-label">
                            Emergency Contact Name
                            <span className="text-danger">*</span>
                          </lable>
                          
                          <input
                            className="form-control "
                            type="text"
                            name="emergencyContactName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.emergencyContactName}
                          />
                          {formik.touched.emergencyContactName &&
                            formik.errors.emergencyContactName && (
                              <div className="text-danger">
                                <small>
                                  {formik.errors.emergencyContactName}
                                </small>
                              </div>
                            )}
                        </div>
                        <div className="text-start mt-4">
                          <lable className="form-label">
                            Emergency Contact Address
                            <span className="text-danger">*</span>
                          </lable>
                          <textarea rows="5"
                          className="form-control "
                          name="emergencyContactAddress"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.emergencyContactAddress}></textarea>
                          {formik.touched.emergencyContactAddress &&
                            formik.errors.emergencyContactAddress && (
                              <div className="text-danger">
                                <small>
                                  {formik.errors.emergencyContactAddress}
                                </small>
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 px-5">
                        <div className="text-start mt-2">
                          <lable className="form-label">
                            Emergency Contact No
                            <span className="text-danger">*</span>
                          </lable>
                          
                          <input
                            className="form-control "
                            type="text"
                            name="emergencyContactNo"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.emergencyContactNo}
                          />
                          {formik.touched.emergencyContactNo &&
                            formik.errors.emergencyContactNo && (
                              <div className="text-danger">
                                <small>
                                  {formik.errors.emergencyContactNo}
                                </small>
                              </div>
                            )}
                        </div>
                        <div className="text-start mt-4">
                          <lable className="form-label">
                            Relationship to Employee
                            <span className="text-danger">*</span>
                          </lable>
                          
                          <input
                            className="form-control "
                            type="text"
                            name="relationshipToEmployee"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.relationshipToEmployee}
                          />
                          {formik.touched.relationshipToEmployee &&
                            formik.errors.relationshipToEmployee && (
                              <div className="text-danger">
                                <small>
                                  {formik.errors.relationshipToEmployee}
                                </small>
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
              onClick={(e) => EmergencyContact(e)} // Pass the event object
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
export default EmpEmergencyContactAdd;
