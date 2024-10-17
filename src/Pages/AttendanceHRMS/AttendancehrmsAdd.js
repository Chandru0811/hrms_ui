import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";
import { toast } from "react-toastify";
import api from "../../config/URL";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";
import fetchAllDepartmentNamesWithId from "../List/DepartmentNameList";

function AttendancehrmsAdd() {
  const [employeeData, setEmployeeData] = useState(null);  
  const [departmentData, setDepartmentData] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState('');
  const currentDate = new Date().toISOString().split("T")[0];

  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const fetchData = async () => {
    try {
      const companyData = await fetchAllCompanyNamesWithId();
      const employeeData = await fetchAllEmployeeNamesWithId();
      const departmentData = await fetchAllDepartmentNamesWithId();
      setCompanyData(companyData);
      setEmployeeData(employeeData);
      setDepartmentData(departmentData);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getValidationSchema = (status) => {
    return Yup.object({
      dailyAttendanceEmpId: Yup.string().required("*Employee name is required"),
      attendanceDate: Yup.string().required("*Date is required"),
      attendanceStatus: Yup.string().required("*Attendance status is required"),
      attendanceRemarks: Yup.string(), // Optional field for remarks
      ...(status === "Present" && {
        attendanceModeOfWorking: Yup.string().required("*Mode of working is required"),
        attendanceCheckInTime: Yup.string().required("*Check-in is required"),
        attendanceCheckOutTime: Yup.string().required("*Check-out is required"),
        attendanceCheckInMode: Yup.string().required("*Check-in mode is required"),
        attendanceCheckOutMode: Yup.string().required("*Check-out mode is required"),
        attendanceOtStarttime: Yup.string().required("*OT start time is required"),
        attendanceOtEndtime: Yup.string().required("*OT end time is required"),
      }),
    });
  };

  const formik = useFormik({
    initialValues: {
      attendanceId: 1,
      dailyAttendanceEmpId: "",
      dailyAttendanceCmpId: "",
      dailyAttendanceDptId: "",
      attendanceDate: currentDate,
      attendanceStatus: "",
      attendanceShiftMode: "",
      attendanceCheckInTime: "",
      attendanceCheckOutTime: "",
      attendanceCheckInMode: "",
      attendanceCheckOutMode: "",
      attendanceOtStarttime: "",
      attendanceOtEndtime: "",
      attendanceRemarks: "",
    },
    validationSchema: getValidationSchema(attendanceStatus),
    enableReinitialize: true, // Reinitialize the form whenever the validation schema changes
    onSubmit: async (values) => {
      let payload = { ...values };

      if (values.attendanceStatus === "Absent") {
        // Clear attendance details if the status is 'Absent'
        payload = {
          ...values,
          attendanceCheckInTime: null,
          attendanceCheckOutTime: null,
          attendanceCheckInMode: null,
          attendanceCheckOutMode: null,
          attendanceOtStarttime: null,
          attendanceOtEndtime: null,
        };
      } else {
        payload = {
          ...values,
          attendanceCheckInTime: `2024-05-05T${values.attendanceCheckInTime}`,
          attendanceCheckOutTime: `2024-05-05T${values.attendanceCheckOutTime}`,
          attendanceOtStarttime: `2024-05-05T${values.attendanceOtStarttime}`,
          attendanceOtEndtime: `2024-05-05T${values.attendanceOtEndtime}`,
        };
      }

      try {
        setLoading(true);
        const response = await api.post(`/daily-attendance`, payload, {
          headers: { "Content-Type": "application/json" },
        });
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/attendancehrms");
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section className="AttendanceAdd p-3">
      <div className="container-fluid">
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12 text-end">
                <Link to="/attendancehrms">
                  <button className="btn btn-sm btn-border">Back</button>
                </Link>
                &nbsp;&nbsp;
                <button
                    type="submit"
                    className="btn btn-sm btn-button"
                    disabled={loading}
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <span></span>
                    )}
                    &nbsp;<span>Save</span>
                  </button>
              </div>
            </div>
            <div className="row mt-3">
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Company Name<span className="text-danger">*</span>
              </lable>
              <div className="input-group mb-3">
                <select
                  {...formik.getFieldProps("cmpId")}
                  className={`form-select  ${
                    formik.touched.cmpId && formik.errors.cmpId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  {companyData &&
                    companyData.map((cmpId) => (
                      <option key={cmpId.id} value={cmpId.cmpId}>
                        {cmpId.cmpName}
                      </option>
                    ))}
                </select>
                {formik.touched.cmpId && formik.errors.cmpId && (
                  <div className="invalid-feedback">{formik.errors.cmpId}</div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Department Name<span className="text-danger">*</span>
              </lable>
              <div className="input-group mb-3">
                <select
                  {...formik.getFieldProps("deptId")}
                  className={`form-select  ${
                    formik.touched.deptId && formik.errors.deptId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  {departmentData &&
                    departmentData.map((deptId) => (
                      <option key={deptId.id} value={deptId.deptId}>
                        {deptId.deptName}
                      </option>
                    ))}
                </select>
                {formik.touched.deptId && formik.errors.deptId && (
                  <div className="invalid-feedback">{formik.errors.deptId}</div>
                )}
              </div>
            </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Employee Name<span className="text-danger">*</span>
                </lable>
                <div className="input-group mb-3">
                  <select
                    {...formik.getFieldProps("dailyAttendanceEmpId")}
                    className={`form-select  ${
                      formik.touched.dailyAttendanceEmpId &&
                      formik.errors.dailyAttendanceEmpId
                        ? "is-invalid"
                        : ""
                    }`}
                    aria-label="Default select example"
                  >
                    <option selected></option>
                    {employeeData &&
                      employeeData.map((employeeId) => (
                        <option
                          key={employeeId.id}
                          value={employeeId.id}
                        >
                          {employeeId.firstName} {employeeId.lastName}
                        </option>
                      ))}
                  </select>
                  {formik.touched.dailyAttendanceEmpId &&
                    formik.errors.dailyAttendanceEmpId && (
                      <div className="invalid-feedback">
                        {formik.errors.dailyAttendanceEmpId}
                      </div>
                    )}
                </div>
              </div>
             <div className="col-md-6 col-12 mb-3 ">
        <label className="">Attendance Date</label>
        <span className="text-danger">*</span>
        <input
          type="date"
          className={`form-control iconInput ${
            formik.touched.attendanceDate && formik.errors.attendanceDate
              ? "is-invalid"
              : ""
          }`}
          {...formik.getFieldProps("attendanceDate")}
        />
        {formik.touched.attendanceDate && formik.errors.attendanceDate && (
          <div className="invalid-feedback">
            {formik.errors.attendanceDate}
          </div>
        )}
      </div>
              <div className="col-md-6 col-12 mb-3 ">
        <label className="">Attendance Status</label>
        <span className="text-danger">*</span>
        <select
          className={`form-select ${
            formik.touched.attendanceStatus && formik.errors.attendanceStatus ? 'is-invalid' : ''
          }`}
          {...formik.getFieldProps('attendanceStatus')}
          aria-label="Default select example"
          onChange={e => {
            formik.handleChange(e);
            setAttendanceStatus(e.target.value);
          }}
          value={attendanceStatus}
        >
          <option value="">Select</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        {formik.touched.attendanceStatus && formik.errors.attendanceStatus && (
          <div className="invalid-feedback">{formik.errors.attendanceStatus}</div>
        )}
      </div>

      {attendanceStatus === 'Present' && (
        <>
          <div className="col-md-6 col-12 mb-3 ">
            <label className="">Mode of Working</label>
            <span className="text-danger">*</span>
            <select
              className={`form-select ${
                formik.touched.attendanceModeOfWorking && formik.errors.attendanceModeOfWorking ? 'is-invalid' : ''
              }`}
              {...formik.getFieldProps('attendanceModeOfWorking')}
              aria-label="Default select example"
            >
              <option value="">Select</option>
              <option value="Work From Home">Work From Home</option>
              <option value="Work From Office">Work From Office</option>
              <option value="Onsite">Onsite</option>
            </select>
            {formik.touched.attendanceModeOfWorking && formik.errors.attendanceModeOfWorking && (
              <div className="invalid-feedback">{formik.errors.attendanceModeOfWorking}</div>
            )}
          </div>

          <div className="col-md-6 col-12 mb-3 ">
            <label className="">Check In</label>
            <span className="text-danger">*</span>
            <input
              type="time"
              className={`form-control iconInput ${
                formik.touched.attendanceCheckInTime && formik.errors.attendanceCheckInTime ? 'is-invalid' : ''
              }`}
              {...formik.getFieldProps('attendanceCheckInTime')}
            />
            {formik.touched.attendanceCheckInTime && formik.errors.attendanceCheckInTime && (
              <div className="invalid-feedback">{formik.errors.attendanceCheckInTime}</div>
            )}
          </div>

          <div className="col-md-6 col-12 mb-3 ">
            <label className="">Check Out</label>
            <span className="text-danger">*</span>
            <input
              type="time"
              className={`form-control iconInput ${
                formik.touched.attendanceCheckOutTime && formik.errors.attendanceCheckOutTime ? 'is-invalid' : ''
              }`}
              {...formik.getFieldProps('attendanceCheckOutTime')}
            />
            {formik.touched.attendanceCheckOutTime && formik.errors.attendanceCheckOutTime && (
              <div className="invalid-feedback">{formik.errors.attendanceCheckOutTime}</div>
            )}
          </div>

          <div className="col-md-6 col-12 mb-3 ">
            <label className="">Check In Mode</label>
            <span className="text-danger">*</span>
            <select
              className={`form-select ${
                formik.touched.attendanceCheckInMode && formik.errors.attendanceCheckInMode ? 'is-invalid' : ''
              }`}
              {...formik.getFieldProps('attendanceCheckInMode')}
              aria-label="Default select example"
            >
              <option value="">Select</option>
              <option value="Tap In">Tap In</option>
              <option value="Face Recognition">Face Recognition</option>
            </select>
            {formik.touched.attendanceCheckInMode && formik.errors.attendanceCheckInMode && (
              <div className="invalid-feedback">{formik.errors.attendanceCheckInMode}</div>
            )}
          </div>

          <div className="col-md-6 col-12 mb-3 ">
            <label className="">Check Out Mode</label>
            <span className="text-danger">*</span>
            <select
              className={`form-select ${
                formik.touched.attendanceCheckOutMode && formik.errors.attendanceCheckOutMode ? 'is-invalid' : ''
              }`}
              {...formik.getFieldProps('attendanceCheckOutMode')}
              aria-label="Default select example"
            >
              <option value="">Select</option>
              <option value="Tap Out">Tap Out</option>
              <option value="Face Recognition">Face Recognition</option>
            </select>
            {formik.touched.attendanceCheckOutMode && formik.errors.attendanceCheckOutMode && (
              <div className="invalid-feedback">{formik.errors.attendanceCheckOutMode}</div>
            )}
          </div>

          <div className="col-md-6 col-12 mb-3 ">
            <label className="">OT Start Time</label>
            <span className="text-danger">*</span>
            <input
              type="time"
              className={`form-control iconInput ${
                formik.touched.attendanceOtStarttime && formik.errors.attendanceOtStarttime ? 'is-invalid' : ''
              }`}
              {...formik.getFieldProps('attendanceOtStarttime')}
            />
            {formik.touched.attendanceOtStarttime && formik.errors.attendanceOtStarttime && (
              <div className="invalid-feedback">{formik.errors.attendanceOtStarttime}</div>
            )}
          </div>

          <div className="col-md-6 col-12 mb-3 ">
            <label className="">OT End Time</label>
            <span className="text-danger">*</span>
            <input
              type="time"
              className={`form-control iconInput ${
                formik.touched.attendanceOtEndtime && formik.errors.attendanceOtEndtime ? 'is-invalid' : ''
              }`}
              {...formik.getFieldProps('attendanceOtEndtime')}
            />
            {formik.touched.attendanceOtEndtime && formik.errors.attendanceOtEndtime && (
              <div className="invalid-feedback">{formik.errors.attendanceOtEndtime}</div>
            )}
          </div>
        </>
      )}
              <div className="col-md-6 col-12">
              <div className="text-start mt-2">
                <lable className="form-lable">Attendance Remark</lable>
                <textarea
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  className={`form-control   ${
                    formik.touched.attendanceRemarks &&
                    formik.errors.attendanceRemarks
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("attendanceRemarks")}
                />
                {formik.touched.attendanceRemarks &&
                  formik.errors.attendanceRemarks && (
                    <div className="invalid-feedback">
                      {formik.errors.attendanceRemarks}
                    </div>
                  )}
              </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AttendancehrmsAdd;
