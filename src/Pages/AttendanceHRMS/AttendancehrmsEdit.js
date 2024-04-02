import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function AttendancehrmsEdit() {
  const validationSchema = Yup.object({
    employeeId: Yup.string().required("*Employee ID is required"),
    employeeName: Yup.string().required("*Employee name is required"),
    date: Yup.string().required("*Date is required"),
    attendanceStatus: Yup.string().required("*Attendance status is required"),
    modeOfworking: Yup.string().required("*Mode of working is required"),
    checkIn: Yup.string().required("*Check in is required"),
    checkOut: Yup.string().required("*Check out is required"),
    checkInmode: Yup.string().required("*Check in mode is required"),
    checkOutmode: Yup.string().required("*Check out mode is required"),
    otStarttime: Yup.string().required("*OT start time is required"),
    otEndtime: Yup.string().required("*OT end time is required"),
    attendanceRemark: Yup.string().required("*Attendance remark is required"),
  });
  const formik = useFormik({
    initialValues: {
      employeeId: "ECS01",
      employeeName: "Suriya",
      date: "2024-03-15",
      attendanceStatus: "Present",
      modeOfworking: "Work From Home",
      checkIn: "08:00",
      checkOut: "18:00",
      checkInmode: "Tap In",
      checkOutmode: "Tap Out",
      otStarttime: "18:01",
      otEndtime: "20:00",
      attendanceRemark: "Good",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <section className="AttendanceEdit p-3">
    <div className="container-fluid">
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/attendancehrms">
                <button className="btn btn-sm btn-border">Back</button>
              </Link>
              &nbsp;&nbsp;
              <button className="btn btn-sm btn-button">Save</button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Employee ID</lable>
              <span className="text-danger">*</span>
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.employeeId && formik.errors.employeeId
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("employeeId")}
              />
              {formik.touched.employeeId && formik.errors.employeeId && (
                <div className="invalid-feedback">
                  {formik.errors.employeeId}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Employee Name</lable>
              <span className="text-danger">*</span>
              <input
                type="text"
                className={`form-control ${
                  formik.touched.employeeName && formik.errors.employeeName
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("employeeName")}
              />
              {formik.touched.employeeName && formik.errors.employeeName && (
                <div className="invalid-feedback">
                  {formik.errors.employeeName}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Date</lable>
              <span className="text-danger">*</span>
              <input
                type="date"
                className={`form-control iconInput${
                  formik.touched.date && formik.errors.date ? "is-invalid" : ""
                }`}
                {...formik.getFieldProps("date")}
              />
              {formik.touched.date && formik.errors.date && (
                <div className="invalid-feedback">{formik.errors.date}</div>
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
                  formik.touched.modeOfworking && formik.errors.modeOfworking
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("modeOfworking")}
                aria-label="Default select example"
              >
                <option value="Work From Home">Work From Home</option>
                <option value="Work From Office" selected>
                  Work From Office
                </option>
                <option value="Onsite">Onsite</option>
              </select>
              {formik.touched.modeOfworking && formik.errors.modeOfworking && (
                <div className="invalid-feedback">
                  {formik.errors.modeOfworking}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Check In</lable>
              <span className="text-danger">*</span>
              <input
                type="time"
                className={`form-control iconInput ${
                  formik.touched.checkIn && formik.errors.checkIn
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("checkIn")}
              />
              {formik.touched.checkIn && formik.errors.checkIn && (
                <div className="invalid-feedback">{formik.errors.checkIn}</div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Check Out</lable>
              <span className="text-danger">*</span>
              <input
                type="time"
                className={`form-control iconInput ${
                  formik.touched.checkOut && formik.errors.checkOut
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("checkOut")}
              />
              {formik.touched.checkOut && formik.errors.checkOut && (
                <div className="invalid-feedback">{formik.errors.checkOut}</div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Check In Mode</lable>
              <span className="text-danger">*</span>
              <select
                className={`form-select ${
                  formik.touched.checkInmode && formik.errors.checkInmode
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("checkInmode")}
                aria-label="Default select example"
              >
                <option value="Tap In" selected>
                  Tap In
                </option>
                <option value="Face Recognition">Face Recognition</option>
              </select>
              {formik.touched.checkInmode && formik.errors.checkInmode && (
                <div className="invalid-feedback">
                  {formik.errors.checkInmode}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Check Out Mode</lable>
              <span className="text-danger">*</span>
              <select
                className={`form-select ${
                  formik.touched.checkOutmode && formik.errors.checkOutmode
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("checkOutmode")}
                aria-label="Default select example"
              >
                
                <option value="Tap Out"selected>Tap Out</option>
                <option value="Face Recognition">Face Recognition</option>
              </select>
              {formik.touched.checkOutmode && formik.errors.checkOutmode && (
                <div className="invalid-feedback">
                  {formik.errors.checkOutmode}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">OT Start Time</lable>
              <span className="text-danger">*</span>
              <input
                type="time"
                
                className={`form-control iconInput  ${
                  formik.touched.otStarttime && formik.errors.otStarttime
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("otStarttime")}
              />
              {formik.touched.otStarttime && formik.errors.otStarttime && (
                <div className="invalid-feedback">
                  {formik.errors.otStarttime}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">OT End Time</lable>
              <span className="text-danger">*</span>
              <input
                type="time"
                
                className={`form-control iconInput ${
                  formik.touched.otEndtime && formik.errors.otEndtime
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("otEndtime")}
              />
              {formik.touched.otEndtime && formik.errors.otEndtime && (
                <div className="invalid-feedback">
                  {formik.errors.otEndtime}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12">
              <div className="text-start mt-2">
                <lable className="form-lable">Attendance Remark</lable>
                <span className="text-danger">*</span>
                <textarea
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  className={`form-control   ${
                    formik.touched.attendanceRemark &&
                    formik.errors.attendanceRemark
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("attendanceRemark")}
                />
                {formik.touched.attendanceRemark &&
                  formik.errors.attendanceRemark && (
                    <div className="invalid-feedback">
                      {formik.errors.attendanceRemark}
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
