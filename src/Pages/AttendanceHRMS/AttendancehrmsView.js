import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/URL";
import { toast } from "react-toastify";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";

function AttendancehrmsView() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [employeeData, setEmployeeData] = useState(null);
  // const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    try {
      const employeeData = await fetchAllEmployeeNamesWithId();
      setEmployeeData(employeeData);
    } catch (error) {
      toast.error(error);
    }
  };

  const findEmployeeName = (attendanceId) => {
    console.log(employeeData);
    if (employeeData) {
      const employee = employeeData.find(
        (emp) => emp.employeeId === attendanceId
      );
      return employee ? `${employee.firstName} ${employee.lastName}` : "";
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/getAllDailyAttendanceById/${id}`);
        setData(response.data);
      } catch (error) {
        toast.error("Error Fetching Data", error);
      }
    };
    getData();
    fetchData();
  }, [id]);
  // console.log(data);

  return (
    <div className="container ">
      <div className="row  mt-3">
        <div className="col-12 text-end">
          <Link to="/attendancehrms">
            <button className="btn btn-sm btn-border">Back</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row mt-5 pb-3">
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Employee Name </p>
                </div>
                <div className="col-6">
                  {/* {data.attendanceId || "--"} */}:{" "}
                  {findEmployeeName(data.dailyAttendanceEmpId)}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row  mb-2  ">
                <div className="col-6  ">
                  <p className="fw-medium">Date</p>
                </div>
                <div className="col-6">
                  :{" "}
                  {data.attendanceDate
                    ? data.attendanceDate
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")
                    : "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Attendance Status </p>
                </div>
                <div className="col-6">: {data.attendanceStatus || "--"}</div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Mode of Working</p>
                </div>
                <div className="col-6">
                  : {data.attendanceModeOfWorking || "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Check In</p>
                </div>
                <div className="col-6">
                  :{" "}
                  {data.attendanceCheckInTime
                    ? data.attendanceCheckInTime.split("T")[1].split(".")[0]
                    : "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Check Out</p>
                </div>
                <div className="col-6">
                  :{" "}
                  {data.attendanceCheckOutTime
                    ? data.attendanceCheckOutTime.split("T")[1].split(".")[0]
                    : "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Check In Mode</p>
                </div>
                <div className="col-6">
                  : {data.attendanceCheckInMode || "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Check Out Mode</p>
                </div>
                <div className="col-6">
                  : {data.attendanceCheckOutMode || "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">OT Start Time</p>
                </div>
                <div className="col-6">
                  :{" "}
                  {data.attendanceOtStarttime
                    ? data.attendanceOtStarttime.split("T")[1].split(".")[0]
                    : "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">OT End Time</p>
                </div>
                <div className="col-6">
                  :{" "}
                  {data.attendanceOtEndtime
                    ? data.attendanceOtEndtime.split("T")[1].split(".")[0]
                    : "--"}
                </div>
              </div>
            </div>

            {/* <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Hours Worked</p>
                </div>
                <div className="col-6">
                 : {data.attendanceHoursWorked || "--"}
                </div>
              </div>
            </div> */}

            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Attendance Remark</p>
                </div>
                <div className="col-6">: {data.attendanceRemarks || "--"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendancehrmsView;
