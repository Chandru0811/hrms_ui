import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const EmpPersonalInfoAdd = forwardRef(
  ({ formData, setFormData, handleNext }, ref) => {
    const [selectedIdType, setSelectedIdType] = useState("nric");
    const [centerData, setCenterData] = useState(null);
    const fetchData = async () => {
      try {
        setCenterData(centerData);
      } catch (error) {
        toast.error(error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required("*First name is required"),
      lastName: Yup.string().required("*Last name is required "),
      primaryEmailID: Yup.string()
        .email("Enter valid email")
        .required("*Email is required "),
      primaryEmailPassword: Yup.string().required(
        "*Primary email password is required "
      ),
      primaryPhoneNumber: Yup.number().required(
        "*Primary phone number is required "
      )
        .typeError("*Must be a number"),
      file: Yup.string().required("*Photo is required "),
      ...(selectedIdType === 'nric' && {
        nricFin: Yup.string().required("*NRIC fin is required"),
        nricType: Yup.string().required("*Select a NRIC type"),
      }),
      ...(selectedIdType === 'aadhar' && {
        aadharNumber: Yup.string().required("*Aadhar number is required"),
      }),
    });

    const formik = useFormik({
      initialValues: {
        firstName: formData.firstName || "",
        lastName: formData.lastName || "",
        primaryPhoneNumber: formData.primaryPhoneNumber || "",
        nricFin: formData.nricFin || "",
        nricType: formData.nricType || "",
        aadharNumber: formData.aadharNumber || "",
        primaryEmailID: formData.primaryEmailID || "",
        primaryEmailPassword: formData.primaryEmailPassword || "",
        file: formData.file || "",
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
      personalInfoAdd: formik.handleSubmit,
    }));

    return (
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          <div className=" border-0 mb-5">
            <div className="mb-3">
              <p class="headColor">Personal Information</p>
              <div className="container">
                <div className="row mt-3">
                  <div className="col-md-6 col-12 mb-3">
                    <lable className="form-lable">
                      First Name<span className="text-danger">*</span>
                    </lable>
                    <input
                      className="form-control "
                      type="text"
                      name="firstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className="text-danger">
                        <small>{formik.errors.firstName}</small>
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <lable className="form-lable">
                      Last Name<span className="text-danger">*</span>
                    </lable>
                    <input
                      name="lastName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      className="form-control "
                      type="text"
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className="text-danger">
                        <small>{formik.errors.lastName}</small>
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <lable className="form-lable">
                      Primary Email ID<span className="text-danger">*</span>
                    </lable>
                    <input
                      className="form-control  form-contorl-sm"
                      name="primaryEmailID"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.primaryEmailID}
                    />
                    {formik.touched.primaryEmailID &&
                      formik.errors.primaryEmailID && (
                        <div className="error text-danger ">
                          <small>{formik.errors.primaryEmailID}</small>
                        </div>
                      )}
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <lable className="form-lable">
                      Primary Email Password
                      <span className="text-danger">*</span>
                    </lable>
                    <input
                      className="form-control "
                      type="password"
                      name="primaryEmailPassword"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.primaryEmailPassword}
                    />
                    {formik.touched.primaryEmailPassword &&
                      formik.errors.primaryEmailPassword && (
                        <div className="text-danger">
                          <small>{formik.errors.primaryEmailPassword}</small>
                        </div>
                      )}
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <lable className="form-lable">
                      Primary Phone Number
                      <span className="text-danger">*</span>
                    </lable>
                    <input
                      className="form-control "
                      type="text"
                      name="primaryPhoneNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.primaryPhoneNumber}
                    />
                    {formik.touched.primaryPhoneNumber &&
                      formik.errors.primaryPhoneNumber && (
                        <div className="text-danger">
                          <small>{formik.errors.primaryPhoneNumber}</small>
                        </div>
                      )}
                  </div>
                  <div className="col-md-6 col-12 mb-3"></div>
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="idType"
                        id="nricRadio"
                        value="nric"
                        checked={selectedIdType === "nric"}
                        onChange={() => setSelectedIdType("nric")}
                      />
                      <lable className="form-check-lable" htmlFor="nricRadio">
                        NRIC
                      </lable>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="idType"
                        id="aadharRadio"
                        value="aadhar"
                        checked={selectedIdType === "aadhar"}
                        onChange={() => setSelectedIdType("aadhar")}
                      />
                      <lable className="form-check-lable" htmlFor="aadharRadio">
                        Aadhar
                      </lable>
                    </div>
                  </div>
                  {selectedIdType === "nric" && (
                    <>
                      <div className="col-md-6 col-12 mb-3">
                        <lable className="form-lable">
                          NRIC Fin<span className="text-danger">*</span>
                        </lable>
                        <input
                          className="form-control"
                          name="nricFin"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.nricFin}
                        />
                        {formik.touched.nricFin && formik.errors.nricFin && (
                          <div className="error text-danger">
                            <small>{formik.errors.nricFin}</small>
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 col-12 mb-3">
                        <lable className="form-lable">
                          NRIC Type<span className="text-danger">*</span>
                        </lable>
                        <select
                          className="form-select"
                          name="nricType"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.nricType}
                        >
                          <option selected></option>
                          <option value="Singapore Citizen">
                            Singapore Citizen
                          </option>
                          <option value="Singapore PR">Singapore PR</option>
                          <option value="Employment Pass">Employment Pass</option>
                          <option value="Dependant Pass">Dependant Pass</option>
                          <option value="S-Pass">S-Pass</option>
                          <option value="Work Permit">Work Permit</option>
                        </select>
                        {formik.touched.nricType && formik.errors.nricType && (
                          <div className="error text-danger">
                            <small>{formik.errors.nricType}</small>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                  {selectedIdType === "aadhar" && (
                    <div className="col-md-6 col-12 mb-3">
                      <lable className="form-lable">
                        Aadhar Number<span className="text-danger">*</span>
                      </lable>
                      <input
                        className="form-control"
                        name="aadharNumber"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.aadharNumber}
                      />
                      {formik.touched.aadharNumber &&
                        formik.errors.aadharNumber && (
                          <div className="error text-danger">
                            <small>{formik.errors.aadharNumber}</small>
                          </div>
                        )}
                    </div>
                  )}
                  <div className="col-md-6 col-12 mb-3">
                    <lable>Photo</lable><span className="text-danger">*</span>
                    <input
                      type="file"
                      name="file"
                      className="form-control"
                      onChange={(event) => {
                        formik.setFieldValue("file", event.target.files[0]);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.file && formik.errors.file && (
                      <div className="error text-danger ">
                        <small>{formik.errors.file}</small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
);

export default EmpPersonalInfoAdd;