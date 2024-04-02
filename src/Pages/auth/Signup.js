import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png"

function Signup() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ minHeight: "150vh", backgroundColor: "#f7f7f7" }}>
            <div className='d-flex'>
                <img src={logo} alt="LOGO" className='img-fluid mb-4' width="50" height="50" />
                <h2 className='mx-3' style={{ color: "#08a6ff", marginTop: "5px" }}>HRMS</h2>
            </div>
            <div className="card" style={{ width: "50rem", borderRadius: "0px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                <div className="card-body">
                    <h4 className="card-title text-center mb-5">Sign Up</h4>
                    <div className='row mb-4'>
                        <div className='col-md-6 col-12'>
                            <lable className="form-lable fw-medium">Company ID</lable>
                            <input type="text" className='form-control form-control-sm' />
                        </div>
                        <div className='col-md-6 col-12'>
                            <lable className="form-lable fw-medium">Company Name</lable>
                            <input type="text" className='form-control form-control-sm' />
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-md-6 col-12'>
                            <lable className="form-lable fw-medium">Designation</lable>
                            <input type="text" className='form-control form-control-sm' />
                        </div>
                        <div className='col-md-6 col-12'>
                            <lable className="form-lable fw-medium">Address</lable>
                            <input type="text" className='form-control form-control-sm' />
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-md-6 col-12'>
                            <lable className="form-lable fw-medium">City</lable>
                            <input type="text" className='form-control form-control-sm' />
                        </div>
                        <div className='col-md-6 col-12'>
                            <lable className="form-lable fw-medium">Pincode</lable>
                            <input type="text" className='form-control form-control-sm' />
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-md-6 col-12'>
                            <lable className="form-lable fw-medium">Email</lable>
                            <input type="text" className='form-control form-control-sm' />
                        </div>
                        <div className='col-md-6 col-12'>
                            <lable className="form-lable fw-medium">Phone</lable>
                            <input type="text" className='form-control form-control-sm' />
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-md-6 col-12'>
                            <lable className="form-lable fw-medium">Registration Number</lable>
                            <input type="text" className='form-control form-control-sm' />
                        </div>
                        <div className='col-md-6 col-12'>
                            <lable className="form-lable fw-medium">Tax Code</lable>
                            <input type="text" className='form-control form-control-sm' />
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-md-6 col-12'>
                            <lable className="form-lable fw-medium">Password</lable>
                            <input type="text" className='form-control form-control-sm' />
                        </div>
                        <div className='col-md-6 col-12'>
                            <lable className="form-lable fw-medium">Confirm Password</lable>
                            <input type="text" className='form-control form-control-sm' />
                        </div>
                    </div>
                    <div className='form-check form-check-inline d-flex justify-content-center mb-4'>
                        <input type="checkbox" className='form-check-input' />
                        <lable className="form-check-lable mx-2">I agree to the <Link to="/privacypolicy">Privacy Policy</Link> and <Link to="/terms&conditions">Terms and Conditions</Link></lable>
                    </div>
                    <div className='d-flex justify-content-center mb-4'>
                        <Link to="/">
                        <button type="submit" className='btn btn-sm btn-button' style={{ width: "90px", borderRadius: "10px" }}>Sign Up</button>
                        </Link>
                    </div>
                    <div className='d-flex justify-content-center mb-4'>
                        <p className='fw-medium' style={{ fontSize: "15px" }}>Already have an Account? <Link to="/">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;