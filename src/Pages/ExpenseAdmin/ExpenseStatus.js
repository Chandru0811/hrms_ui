import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function ExpenseStatus() {
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState('Pending');
    const [reason, setReason] = useState('');
    const [showReasonSelect, setShowReasonSelect] = useState(false);
    const [showSubjectDescription, setShowSubjectDescription] = useState(false);

    const handleClose = () => {
        setShow(false);
        setShowReasonSelect(false);
        setShowSubjectDescription(false);
    };
    const handleShow = () => setShow(true);

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        if (e.target.value === 'Rejected') {
            setShowReasonSelect(true);
        } else {
            setShowReasonSelect(false);
        }
    };

    const handleReasonChange = (e) => {
        setReason(e.target.value);
        if (e.target.value === 'Others') {
            setShowSubjectDescription(true);
        } else {
            setShowSubjectDescription(false);
        }
    };

    const handleSubmit = () => {
        
        console.log("Status:", status);
        console.log("Reason:", reason);
        handleClose();
    };

    return (
        <>
            <button className="btn btn-sm" onClick={handleShow}>
            <FaRegArrowAltCircleUp />
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                 <Modal.Header closeButton>
                    <Modal.Title className="headColor">Update Status</Modal.Title>
                </Modal.Header>
                <Modal.Body className='py-5'>
                    <div className='container'>
                        <div className='row'>
                        <div className='col-md-6 col-12 mb-4'>
                        <lable className="form-lable fw-medium">Status</lable>
                        <select className='form-select' value={status} onChange={handleStatusChange}>
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    {showReasonSelect && (
                        <div className='col-md-6 col-12 mb-4'>
                            <lable className="form-lable fw-medium">Reason</lable>
                            <select className='form-select' value={reason} onChange={handleReasonChange}>
                                <option selected></option>
                                <option value="Not Convincing">Not Convincing</option>
                                <option value="Need to Enquiry">Need to Enquiry</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    )}
                    {showSubjectDescription && (
                        <>
                            <div className='col-md-6 col-12 mb-4'>
                                <lable className='form-lable fw-medium'>Subject</lable>
                                <input type="text" className='form-control' />
                            </div>
                            <div className='col-md-6 col-12 mb-4'>
                                <lable className='form-lable fw-medium'>Description</lable>
                                <textarea
                                    className="form-control"
                                    id="floatingTextarea2"
                                    style={{ height: "100px" }}
                                ></textarea>
                            </div>
                        </>
                    )}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-border" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="btn btn-button" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ExpenseStatus;