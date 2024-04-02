import React from 'react'
import { Link } from "react-router-dom";


function LeaveEdit() {
    return (
        <section>
            <div className="container">
                <h5 className="my-5">Edit Leave Request Form</h5>
                <div class="row">
                    <div class="col-md-6 col-12 mb-2">
                        <label>Employee Name</label>
                        <input type="text" class="form-control  form-control-sm  mt-3 "
                        value="Sathish" />
                    </div>
                    <div class="col-md-6 col-12 mb-2">
                        <label>Department</label>
                        <input type="text" class="form-control  form-control-sm  mt-3" 
                        value="Health Department"/>
                    </div>
                    <div class="col-md-6 col-12 mb-2">
                        <label>From Date</label>
                        <input type="date" class="form-control  form-control-sm  mt-3" 
                        value="2024-02-03"/>
                    </div>
                    <div class="col-md-6 col-12 mb-2">
                        <label>To Date</label>
                        <input type="date" class="form-control  form-control-sm  mt-3" 
                        value="2023-02-01"/>
                    </div>
                    <div class="col-md-6 col-12 mb-2">
                        <label>Approval Name</label>
                        <input type="text" class="form-control  form-control-sm  mt-3" 
                        value="Meena"/>
                    </div>
                    <div class="col-md-6 col-12 mb-2">
                        <label>Approval ID</label>
                        <input type="text" class="form-control  form-control-sm  mt-3" 
                        value="12"/>
                    </div>
                    <div class="col-md-6 col-12 mb-2">
                        <label>Reason For Requested Leave</label>
                        <select type="text" class="form-select form-control-sm  mt-3"
                        >
                            <option selected>Annual Leave</option>
                            <option value="1">Annual Leave</option>
                            <option value="2">Sick Leave</option>
                            <option value="3">Parent Leave</option>
                            <option value="3">Hospitalization</option>
                        </select>
                    </div>
                    <div class="col-md-6 col-12 mb-2">
                        <label>Status</label>
                        <select type="text" class="form-select form-control-sm  mt-3"
                        >
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                            <option selected value="Pending">Pending</option>
                        </select>
                    </div>
                </div>
                <div className="my-3 d-flex justify-content-end mt-5 pt-5">
                    <div>
                        <Link to="/leave">
                            <button type="button" className="btn btn-border">
                                Cancel
                            </button>
                        </Link>
                        &nbsp;&nbsp;
                        <Link to="/leave">
                            <button type="button" className="btn btn-button">
                                Save
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeaveEdit