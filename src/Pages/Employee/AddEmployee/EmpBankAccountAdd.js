import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  bankName: Yup.string().required("*Bank name is required!"),
  branchName: Yup.string().required("*Branch name is required!"),
  ifscCode: Yup.string().required("*IFSC code is required!"),
  accountNumber: Yup.string().required("*Account number is required!"),
});

const EmpBankAccountAdd = forwardRef(
  ({ formData, setFormData, handleNext }, ref) => {
    const navigate = useNavigate();
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

    const formik = useFormik({
      initialValues: {
        bankName: formData.bankName || "",
        branchName: formData.branchName || "",
        ifscCode: formData.ifscCode || "",
        accountNumber: formData.accountNumber || "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          let queryParams = new URLSearchParams({
            branchName: values.branchName,
            ifscCode: values.ifscCode,
            bankName: values.bankName,
            accountNumber: values.accountNumber,
          });
          setFormData((prv) => ({ ...prv, ...values }));
          handleNext();
          navigate("/employee/view");
        } catch (error) {
          toast.error(error);
        }
      },
    });

    useImperativeHandle(ref, () => ({
      bankAccountAdd: formik.handleSubmit,
    }));

    return (
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          <div className=" border-0 mb-5">
            <div className="mb-3">
              <p class="headColor">Bank Account Information</p>
              <div className="container">
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="text-start mt-2">
                      <lable className="form-label">
                        Bank Name
                        <span className="text-danger">*</span>
                      </lable>
                      <br />
                      <input
                        className="form-control "
                        type="text"
                        name="bankName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.bankName}
                      />
                      {formik.touched.bankName && formik.errors.bankName && (
                        <div className="text-danger">
                          <small>{formik.errors.bankName}</small>
                        </div>
                      )}
                    </div>
                    <div className="text-start mt-4">
                      <lable className="form-label">
                        IFSC Code
                        <span className="text-danger">*</span>
                        &nbsp;
                      </lable>
                      <br />
                      <input
                        className="form-control "
                        type="text"
                        name="ifscCode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ifscCode}
                      />
                      {formik.touched.ifscCode && formik.errors.ifscCode && (
                        <div className="text-danger">
                          <small>{formik.errors.ifscCode}</small>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 px-5">
                    <div className="text-start mt-2">
                      <lable className="form-label">
                        Branch Name
                        <span className="text-danger">*</span>
                      </lable>
                      <br />
                      <input
                        name="branchName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.branchName}
                        className="form-control "
                        type="text"
                      />
                      {formik.touched.branchName &&
                        formik.errors.branchName && (
                          <div className="text-danger">
                            <small>{formik.errors.branchName}</small>
                          </div>
                        )}
                    </div>
                    <div className="text-start mt-4">
                      <lable className="form-label">
                        Account Number
                        <span className="text-danger">*</span>
                      </lable>
                      <br />
                      <input
                        type="number"
                        name="accountNumber"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.accountNumber &&
                        formik.errors.accountNumber && (
                          <div className="error text-danger ">
                            <small>{formik.errors.accountNumber}</small>
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
export default EmpBankAccountAdd;
