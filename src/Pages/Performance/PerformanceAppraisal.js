import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import Delete from "../../components/common/Delete";

const PerformanceAppraisal = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      date:"25-02-24",
      performancegoals:"Gaming",
      performancereview:"Good",
      performancefeedback:"No Feedback",
      overallselfcomment:"No Comment",
      appraisalamount:"0.00",
      status:<span className='badge  badges-Green'>Approved</span>,
    },
    {
      id: 2,
      date:"25-02-24",
      performancegoals:"Gaming",
      performancereview:"Good",
      performancefeedback:"No Feedback",
      overallselfcomment:"No Comment",
      appraisalamount:"0.00",
      status:<span className='badge  badges-Red'>Rejected</span>,
     
    },
    {
      id: 3,
      date:"25-02-24",
      performancegoals:"Gaming",
      performancereview:"Good",
      performancefeedback:"No Feedback",
      overallselfcomment:"No Comment",
      appraisalamount:"0.00",
      status:<span className='badge badges-Blue'>Pending</span>,
     
    },
    
  ];

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      responsive: true,
    });

    return () => {
      table.destroy();
    };
  }, []);

  return (
    <div className="container my-4">

      <div className="my-5 d-flex justify-content-between align-items-center">
        <h5>Performance Appraisal</h5>
        <Link to="/performance/add">
          <button type="button" className="btn btn-button btn-sm">
            <i class="bx bx-plus"></i>Add
          </button>
        </Link>
      </div>

      <div className="row mb-3">
       <div class="col-md-4 col-12 mb-2">
       <div class="input-group mb-3">
              <input
                type="text"
                className={`form-control iconInput `}
                placeholder="Appraisalid"
              />
              </div>
        </div>
        <div class="col-md-4 col-12 mb-2">
       <div class="input-group mb-3">
              <input
                type="text"
                className={`form-control iconInput `}
                placeholder="Empid"
              />
              </div>
        </div>
        <div class="col-md-4 col-12 mb-2">
       <div class="input-group mb-3">
              <input
                type="text"
                className={`form-control iconInput `}
                placeholder="Appraisal date"
              />
              </div>
        </div>
     </div>
      <table ref={tableRef} className="display ">
        <thead>
          <tr>
            <th scope="col" style={{ whiteSpace: "nowrap" }}>
              S No
            </th>
            <th scope="col">Date</th>
            <th scope="col">Goals</th>
            <th scope="col">Review</th>
            <th scope="col">Feedback</th>
            <th scope="col">Overall Self Comment</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.date}</td>
              <td>{data.performancegoals}</td>
              <td>{data.performancereview}</td>
              <td>{data.performancefeedback}</td>
              <td>{data.overallselfcomment}</td>
              <td>{data.appraisalamount}</td>
              <td>{data.status}</td>
              <td>
                <div className="d-flex">
                <Link to="/performance/view">
                  <button className="btn btn-sm">
                    <FaEye />
                  </button>
                </Link>
                <Link to="/performance/edit">
                  <button className="btn btn-sm">
                    <FaEdit />
                  </button>
                </Link>
                <Delete />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceAppraisal;
