import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/URL";
import { toast } from "react-toastify";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";

function RoleView() {
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
        const response = await api.get(`/roles/${id}`);
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
          <Link to="/roles">
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
                  <p className="fw-medium">Role Name </p>
                </div>
                <div className="col-6">
                  {/* {data.attendanceId || "--"} */}:{" "}
                  {data.roleName}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Role Status</p>
                </div>
                <div className="col-6">
                  {/* {data.attendanceId || "--"} */}:{" "}
                  {data.roleStatus}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row    mb-2">
                <div className="col-6 ">
                  <p className="fw-medium">Role Description </p>
                </div>
                <div className="col-6">
                  {/* {data.attendanceId || "--"} */}:{" "}
                  {data.roleDesc}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleView;
