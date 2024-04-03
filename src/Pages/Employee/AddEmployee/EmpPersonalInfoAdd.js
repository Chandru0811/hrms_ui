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
  firstName: Yup.string().required("*First name is required!"),
  lastName: Yup.string().required("*Last name is required!"),
  primaryEmailID: Yup.string()
    .email("Enter valid email!")
    .required("*Email is required!"),
  nricFin: Yup.string().required("*NRIC fin is required!"),
  primaryEmailPassword: Yup.string().required(
    "*Primary email password is required!"
  ),
  primaryPhoneNumber: Yup.string().required(
    "*Primary phone number is required!"
  ),
  address: Yup.string().required("*Address is required!"),
  nricType: Yup.string().required("*NRIC type is required!"),
  file: Yup.string().required("*Photo is required!"),
});

const EmpPersonalInfoAdd = forwardRef(
  ({ formData, setFormData, handleNext }, ref) => {
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formik = useFormik({
      initialValues: {
        firstName: formData.firstName || "",
        lastName: formData.lastName || "",
        primaryPhoneNumber: formData.primaryPhoneNumber || "",
        address: formData.address || "",
        nricFin: formData.nricFin || "",
        nricType: formData.nricType || "",
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
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="text-start mt-2">
                      <lable className="form-label">
                        First Name<span className="text-danger">*</span>
                      </lable>
                      <br />
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
                    <div className="text-start mt-4">
                      <lable className="form-label">
                        Primary Phone Number
                        <span className="text-danger">*</span>
                      </lable>
                      <br />
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
                    <div className="text-start mt-4">
                      <lable className="form-label">
                        Primary Email ID<span className="text-danger">*</span>
                      </lable>
                      <br />
                      <input
                        className="form-control  form-contorl-sm"
                        name="primaryEmailID"
                        type="text"
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
                    <div className="text-start mt-4">
                      <lable className="form-label">
                        NRIC Fin<span className="text-danger">*</span>
                      </lable>
                      <br />
                      <input
                        className="form-control  form-contorl-sm"
                        name="nricFin"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nricFin}
                      />
                      {formik.touched.nricFin && formik.errors.nricFin && (
                        <div className="error text-danger ">
                          <small>{formik.errors.nricFin}</small>
                        </div>
                      )}
                    </div>
                    <div className="text-start mt-4">
                      <lable>Photo</lable>
                      <span className="text-danger">*</span>
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
                  <div className="col-lg-6 col-md-6 col-12 px-5">
                    <div className="text-start mt-2">
                      <lable className="form-label">
                        Last Name<span className="text-danger">*</span>
                      </lable>
                      <br />
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
                    <div className="text-start mt-4">
                      <lable className="form-label">
                        Address<span className="text-danger">*</span>
                      </lable>
                      <br />
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.address && formik.errors.address && (
                        <div className="error text-danger ">
                          <small>{formik.errors.address}</small>
                        </div>
                      )}
                    </div>
                    <div className="text-start mt-4">
                      <lable className="form-label">
                        Primary Email Password
                        <span className="text-danger">*</span>
                      </lable>
                      <br />
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
                    <div className="text-start mt-4">
                      <lable className="form-label">
                        NRIC Type<span className="text-danger">*</span>
                      </lable>
                      <br />
                      <input
                        className="form-control  form-contorl-sm"
                        name="nricType"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nricType}
                      />
                      {formik.touched.nricType && formik.errors.nricType && (
                        <div className="error text-danger ">
                          <small>{formik.errors.nricType}</small>
                        </div>
                      )}
                    </div>
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
