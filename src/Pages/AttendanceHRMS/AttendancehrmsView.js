import React, { useEffect, useRef, useState } from "react";
import { Link, useParams, } from "react-router-dom";
import api from "../../config/URL";
import { toast } from "react-toastify";


function AttendancehrmsView() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState(null);
  const [datas, setDatas] = useState([]);

  const findEmployeeName = (attendanceId) => {
    if (!employeeData) return 'Employee data not available';
    const employee = employeeData.find(emp => emp.attendanceId === datas.attendanceId);
    return employee ? `${employee.firstName} ${employee.lastName}` : '';
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
  }, [id]);

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
                  {/* {data.attendanceId || "--"} */}
                  {findEmployeeName(datas.attendanceId)}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row  mb-2  ">
                <div className="col-6  ">
                  <p className="fw-medium">Date</p>
                </div>
                <div className="col-6">
                  {data.attendanceDate || "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Attendance Status </p>
                </div>
                <div className="col-6">
                  {data.attendanceStatus || "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Check In</p>
                </div>
                <div className="col-6">
                  {data.attendanceCheckInTime || "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Check Out</p>
                </div>
                <div className="col-6">
                  {data.attendanceCheckOutTime || "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Check In Mode</p>
                </div>
                <div className="col-6">
                  {data.attendanceCheckInMode || "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Check Out Mode</p>
                </div>
                <div className="col-6">
                  {data.attendanceCheckOutMode || "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">OT Start Time</p>
                </div>
                <div className="col-6">
                  {data.attendanceOtStarttime || "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">OT End Time</p>
                </div>
                <div className="col-6">
                  {data.attendanceOtEndtime || "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Hours Worked</p>
                </div>
                <div className="col-6">
                  {data.attendanceOtEndtime || "--"}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Attendance Remark</p>
                </div>
                <div className="col-6">
                  {data.attendanceRemarks || "--"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendancehrmsView;
