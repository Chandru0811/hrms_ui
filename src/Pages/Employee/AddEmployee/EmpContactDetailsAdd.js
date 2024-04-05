import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const validationSchema = Yup.object().shape({
    dob: Yup.string().required("*Date of birth is required"),
    gender: Yup.string().required("*Select a gender"),
    martialStatus: Yup.string().required("*Martial status is required "),
    religion: Yup.string().required("*Religion is required "),
    address: Yup.string().required("*Address is required "),
    city: Yup.string().required("*City is required "),
    pincode: Yup.number()
        .required("*Pincode is required")
        .typeError("*Must be a number"),
    secondaryEmail: Yup.string().required("*Secondary email id is required "),
    secondaryEmailPassword: Yup.string().required(
        "*Secondary email password is required "
    ),
    secondaryPhoneNumber: Yup.number()
        .required("*Secondary phone number is required ")
        .typeError("*Must be a number"),
});

const EmpContactDetailsAdd = forwardRef(
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
                dob: formData.dob || "",
                gender: formData.gender || "",
                martialStatus: formData.martialStatus || "",
                religion: formData.religion || "",
                address: formData.address || "",
                city: formData.city || "",
                pincode: formData.pincode || "",
                secondaryEmail: formData.secondaryEmail || "",
                secondaryEmailPassword: formData.secondaryEmailPassword || "",
                secondaryPhoneNumber: formData.secondaryPhoneNumber || "",
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
            contactDetailsAdd: formik.handleSubmit,
        }));

        const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

        return (
            <div className="container-fluid">
                <form onSubmit={formik.handleSubmit}>
                    <div className=" border-0 mb-5">
                        <div className="mb-3">
                            <p className="headColor">Contact Details</p>
                            <div className="container">
                                <div className="row mt-3">
                                    <div className="col-md-6 col-12 mb-3">
                                        <lable className="form-lable">
                                            Date Of Birth<span className="text-danger">*</span>
                                        </lable>
                                        <input
                                            className="form-control "
                                            type="date"
                                            name="dob"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.dob}
                                        />
                                        {formik.touched.dob && formik.errors.dob && (
                                            <div className="text-danger">
                                                <small>{formik.errors.dob}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="mb-3">
                                            <div className="mb-2">
                                                <lable
                                                    for="exampleFormControlInput1"
                                                    className="form-label"
                                                >
                                                    Gender<span className="text-danger">*</span>
                                                </lable>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    id="inlineRadio1"
                                                    value="yes"
                                                    onChange={formik.handleChange}
                                                    checked={formik.values.gender === "yes"}
                                                />
                                                <lable className="form-check-label" for="inlineRadio1">
                                                    Male
                                                </lable>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    id="inlineRadio2"
                                                    value="no"
                                                    onChange={formik.handleChange}
                                                    checked={formik.values.gender === "no"}
                                                />
                                                <lable className="form-check-label" for="inlineRadio2">
                                                    Female
                                                </lable>
                                            </div>
                                            {formik.errors.gender && formik.touched.gender && (
                                                <div
                                                    className="text-danger  "
                                                    style={{ fontSize: ".875em" }}
                                                >
                                                    {formik.errors.gender}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <lable className="form-lable">
                                            Marital Status<span className="text-danger">*</span>
                                        </lable>
                                        <input
                                            className="form-control  form-contorl-sm"
                                            name="martialStatus"
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.martialStatus}
                                        />
                                        {formik.touched.martialStatus &&
                                            formik.errors.martialStatus && (
                                                <div className="error text-danger ">
                                                    <small>{formik.errors.martialStatus}</small>
                                                </div>
                                            )}
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <lable className="form-lable">
                                            Religion
                                            <span className="text-danger">*</span>
                                        </lable>
                                        <input
                                            className="form-control "
                                            type="text"
                                            name="religion"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.religion}
                                        />
                                        {formik.touched.religion && formik.errors.religion && (
                                            <div className="text-danger">
                                                <small>{formik.errors.religion}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <lable className="form-lable">
                                            Address
                                            <span className="text-danger">*</span>
                                        </lable>
                                        <textarea rows="5"
                                            className="form-control "
                                            name="address"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.address}></textarea>
                                        {formik.touched.address && formik.errors.address && (
                                            <div className="text-danger">
                                                <small>{formik.errors.address}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <lable className="form-lable">
                                            City
                                            <span className="text-danger">*</span>
                                        </lable>
                                        <input
                                            className="form-control "
                                            type="text"
                                            name="city"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.city}
                                        />
                                        {formik.touched.city && formik.errors.city && (
                                            <div className="text-danger">
                                                <small>{formik.errors.city}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <lable className="form-lable">
                                            Pincode
                                            <span className="text-danger">*</span>
                                        </lable>
                                        <input
                                            className="form-control "
                                            type="text"
                                            name="pincode"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.pincode}
                                        />
                                        {formik.touched.pincode && formik.errors.pincode && (
                                            <div className="text-danger">
                                                <small>{formik.errors.pincode}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <lable className="form-lable">
                                            Secondary Email ID
                                            <span className="text-danger">*</span>
                                        </lable>
                                        <input
                                            className="form-control "
                                            type="email"
                                            name="secondaryEmail"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.secondaryEmail}
                                        />
                                        {formik.touched.secondaryEmail &&
                                            formik.errors.secondaryEmail && (
                                                <div className="text-danger">
                                                    <small>{formik.errors.secondaryEmail}</small>
                                                </div>
                                            )}
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <lable className="form-lable">
                                            Secondary Email Password
                                            <span className="text-danger">*</span>
                                        </lable>
                                        <div className={`input-group mb-3`}>
              <input
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                className={`form-control  ${formik.touched.secondaryEmailPassword && formik.errors.secondaryEmailPassword
                  ? "is-invalid"
                  : ""
                  }`}
                  {...formik.getFieldProps("secondaryEmailPassword")}
                style={{
                  borderRight: "none",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
                name="secondaryEmailPassword"
              />
              <span
                className={`input-group-text bg-white`}
                id="basic-addon1"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer", borderRadius: "5px", borderLeft: "none" , borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px"  }}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
              {formik.touched.secondaryEmailPassword &&
                  formik.errors.secondaryEmailPassword && (
                    <div className="invalid-feedback">
                      {formik.errors.secondaryEmailPassword}
                    </div>
                  )}
            </div>
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <lable className="form-lable">
                                            Secondary Phone Number
                                            <span className="text-danger">*</span>
                                        </lable>
                                        <input
                                            className="form-control "
                                            type="text"
                                            name="secondaryPhoneNumber"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.secondaryPhoneNumber}
                                        />
                                        {formik.touched.secondaryPhoneNumber &&
                                            formik.errors.secondaryPhoneNumber && (
                                                <div className="text-danger">
                                                    <small>{formik.errors.secondaryPhoneNumber}</small>
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

export default EmpContactDetailsAdd;  