import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";
import { toast } from "react-toastify";
import api from "../../config/URL";

function AttendancehrmsEdit() {
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState(null);
  const [datas, setDatas] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const employeeData = await fetchAllEmployeeNamesWithId();
      setEmployeeData(employeeData);
      // console.log("name",employeeData)
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const validationSchema = Yup.object({
    dailyAttendanceEmpId: Yup.string().required("*Employee name is required"),
    attendanceDate: Yup.string().required("*Date is required"),
    attendanceStatus: Yup.string().required("*Attendance status is required"),
    attendanceShiftMode: Yup.string().required("*Mode of working is required"),
    attendanceCheckInTime: Yup.string().required("*Check in is required"),
    attendanceCheckOutTime: Yup.string().required("*Check out is required"),
    attendanceCheckInMode: Yup.string().required("*Check in mode is required"),
    attendanceCheckOutMode: Yup.string().required("*Check out mode is required"),
    attendanceOtStarttime: Yup.string().required("*OT start time is required"),
    attendanceOtEndtime: Yup.string().required("*OT end time is required"),
  });
  const formik = useFormik({
    initialValues: {
      dailyAttendanceEmpId: 34,
      attendanceDate: "",
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
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      const payload={
        ...values,
      attendanceCheckInTime: `2024-05-05T${values.attendanceCheckInTime}`,
      attendanceCheckOutTime: `2024-05-05T${values.attendanceCheckOutTime}`,
      attendanceOtStarttime: `2024-05-05T${values.attendanceOtStarttime}`,
      attendanceOtEndtime: `2024-05-05T${values.attendanceOtEndtime}`,
      
      }
      console.log("object",payload.attendanceCheckInTime)
      try {
        setLoading(true);
        const response = await api.put(
          `updateDailyAttendanceById/${id}`,payload,
          {
            headers: {
              "Content-Type": "application/json",
              //Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("values", values);
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/attendancehrms");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error);
      }finally {
        setLoading(false);
      }
    },
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/getAllDailyAttendanceById/${id}`);
        if (response.status === 200) {
        // console.log("data",response.data)
        formik.setValues({
          ...response.data,
          attendanceCheckInTime: response.data.attendanceCheckInTime.split('T')[1].split('.')[0],
          attendanceCheckOutTime: response.data.attendanceCheckOutTime.split('T')[1].split('.')[0],
          attendanceOtStarttime: response.data.attendanceOtStarttime.split('T')[1].split('.')[0],
          attendanceOtEndtime: response.data.attendanceOtEndtime.split('T')[1].split('.')[0],
          attendanceDate:response.data.attendanceDate.split("T")[0]
        });}
      } catch (error) {
        toast.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);
  return (
    <section className="AttendanceEdit p-3">
    <div className="container-fluid">
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/attendancehrms">
                <button  className="btn btn-sm btn-border">Back</button>
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
                  Employee Name<span className="text-danger">*</span>
                </lable>
                <div className="input-group mb-3">
                  <select
                    {...formik.getFieldProps("dailyAttendanceEmpId")}
                    className={`form-select  ${
                      formik.touched.dailyAttendanceEmpId && formik.errors.dailyAttendanceEmpId
                        ? "is-invalid"
                        : ""
                    }`}
                    aria-label="Default select example"
                  >
                    <option selected></option>
                    {employeeData &&
                      employeeData.map((employeeId) => (
                        <option key={employeeId.id} value={employeeId.employeeId}>
                          {employeeId.firstName} {employeeId.lastName}
                        </option>
                      ))}
                  </select>
                  {formik.touched.dailyAttendanceEmpId && formik.errors.dailyAttendanceEmpId && (
                    <div className="invalid-feedback">
                      {formik.errors.dailyAttendanceEmpId}
                    </div>
                  )}
                </div>
              </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Attendance Date</lable>
              <span className="text-danger">*</span>
              <input
                type="date"
                className={`form-control iconInput${
                  formik.touched.attendanceDate && formik.errors.attendanceDate ? "is-invalid" : ""
                }`}
                {...formik.getFieldProps("attendanceDate")}
              />
              {formik.touched.attendanceDate && formik.errors.attendanceDate && (
                <div className="invalid-feedback">{formik.errors.attendanceDate}</div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Attendance Status</lable>
              <span className="text-danger">*</span>
              <select
                className={`form-select ${
                  formik.touched.attendanceStatus &&
                  formik.errors.attendanceStatus
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("attendanceStatus")}
                aria-label="Default select example"
              >
                <option value="Present" selected>
                  Present
                </option>
                <option value="Absent">Absent</option>
              </select>
              {formik.touched.attendanceStatus &&
                formik.errors.attendanceStatus && (
                  <div className="invalid-feedback">
                    {formik.errors.attendanceStatus}
                  </div>
                )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Mode Of Working</lable>
              <span className="text-danger">*</span>
              <select
                className={`form-select ${
                  formik.touched.attendanceShiftMode && formik.errors.attendanceShiftMode
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("attendanceShiftMode")}
                aria-label="Default select example"
              >
                <option value="Work From Home">Work From Home</option>
                <option value="Work From Office" selected>
                  Work From Office
                </option>
                <option value="Onsite">Onsite</option>
              </select>
              {formik.touched.attendanceShiftMode && formik.errors.attendanceShiftMode && (
                <div className="invalid-feedback">
                  {formik.errors.attendanceShiftMode}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Check In</lable>
              <span className="text-danger">*</span>
              <input
                type="time"
                className={`form-control iconInput ${
                  formik.touched.attendanceCheckInTime && formik.errors.attendanceCheckInTime
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("attendanceCheckInTime")}
              />
              {formik.touched.attendanceCheckInTime && formik.errors.attendanceCheckInTime && (
                <div className="invalid-feedback">{formik.errors.attendanceCheckInTime}</div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Check Out</lable>
              <span className="text-danger">*</span>
              <input
                type="time"
                className={`form-control iconInput ${
                  formik.touched.attendanceCheckOutTime && formik.errors.attendanceCheckOutTime
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("attendanceCheckOutTime")}
              />
              {formik.touched.attendanceCheckOutTime && formik.errors.attendanceCheckOutTime && (
                <div className="invalid-feedback">{formik.errors.attendanceCheckOutTime}</div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Check In Mode</lable>
              <span className="text-danger">*</span>
              <select
                className={`form-select ${
                  formik.touched.attendanceCheckInMode && formik.errors.attendanceCheckInMode
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("attendanceCheckInMode")}
                aria-label="Default select example"
              >
                <option value="Tap In" selected>
                  Tap In
                </option>
                <option value="Face Recognition">Face Recognition</option>
              </select>
              {formik.touched.attendanceCheckInMode && formik.errors.attendanceCheckInMode && (
                <div className="invalid-feedback">
                  {formik.errors.attendanceCheckInMode}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Check Out Mode</lable>
              <span className="text-danger">*</span>
              <select
                className={`form-select ${
                  formik.touched.attendanceCheckOutMode && formik.errors.attendanceCheckOutMode
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("attendanceCheckOutMode")}
                aria-label="Default select example"
              >
                
                <option value="Tap Out"selected>Tap Out</option>
                <option value="Face Recognition">Face Recognition</option>
              </select>
              {formik.touched.attendanceCheckOutMode && formik.errors.attendanceCheckOutMode && (
                <div className="invalid-feedback">
                  {formik.errors.attendanceCheckOutMode}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">OT Start Time</lable>
              <span className="text-danger">*</span>
              <input
                type="time"
                
                className={`form-control iconInput  ${
                  formik.touched.attendanceOtStarttime && formik.errors.attendanceOtStarttime
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("attendanceOtStarttime")}
              />
              {formik.touched.attendanceOtStarttime && formik.errors.attendanceOtStarttime && (
                <div className="invalid-feedback">
                  {formik.errors.attendanceOtStarttime}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">OT End Time</lable>
              <span className="text-danger">*</span>
              <input
                type="time"
                
                className={`form-control iconInput ${
                  formik.touched.attendanceOtEndtime && formik.errors.attendanceOtEndtime
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("attendanceOtEndtime")}
              />
              {formik.touched.attendanceOtEndtime && formik.errors.attendanceOtEndtime && (
                <div className="invalid-feedback">
                  {formik.errors.attendanceOtEndtime}
                </div>
              )}
            </div>
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

export default AttendancehrmsEdit;
