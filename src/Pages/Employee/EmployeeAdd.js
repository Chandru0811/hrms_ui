import * as React from "react";
import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import EmpPersonalInfoAdd from "./AddEmployee/EmpPersonalInfoAdd";
import EmpQualificationDetailsAdd from "./AddEmployee/EmpQualificationDetailsAdd";
import EmpExperienceAdd from "./AddEmployee/EmpExperienceAdd";
import EmpPreviousCompanyAdd from "./AddEmployee/EmpPreviousCompanyAdd";
import EmpEmergencyContactAdd from "./AddEmployee/EmpEmergencyContactAdd";
import EmpBankAccountAdd from "./AddEmployee/EmpBankAccountAdd";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import EmpContactDetailsAdd from "./AddEmployee/EmpContactDetailsAdd";

const steps = [
  { tooltip: "Personal Information" },
  { tooltip: "Contact Details" },
  { tooltip: "Qualification Details" },
  { tooltip: "Experience" },
  { tooltip: "Previous Company" },
  { tooltip: "Emergency Contact" },
  { tooltip: "Bank Account" },
];

function EmployeeAdd() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [formData, setFormData] = useState({});

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const childRef = React.useRef();
  console.log("Form Data:", formData);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleButtonClick = () => {
    // console.log("1",childRef);
    // Call the child function using the ref
    switch (activeStep.toString()) {
      case "0":
        if (childRef.current) {
          childRef.current.personalInfoAdd();
        }
        break;
        case "1":
          if (childRef.current) {
            childRef.current.contactDetailsAdd();
          }
          break;
      case "2":
        if (childRef.current) {
          childRef.current.qualificationDetailsAdd();
        }
        break;
      case "3":
        if (childRef.current) {
          childRef.current.experienceAdd();
        }
        break;
      case "4":
        if (childRef.current) {
          childRef.current.previousCompanyAdd();
        }
        break;
      case "5":
        if (childRef.current) {
          childRef.current.emergencyContactAdd();
        }
        break;
      case "6":
        if (childRef.current) {
          childRef.current.bankAccountAdd();
        }
        break;

      default:
        break;
    }
  };

  return (
    <div class="container-fluid minHeight my-5">
      <Stepper className="my-5" activeStep={activeStep}>
        {steps.map((step, i) => {
          const stepProps = {};
          return (
            <Step key={i} {...stepProps}>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id={`tooltip-${i}`}>{step.tooltip}</Tooltip>}
              >
                <StepLabel>{step.label}</StepLabel>
              </OverlayTrigger>
            </Step>
          );
        })}
      </Stepper>
      <div class="container-fluid py-3 card shadow border-0 mb-7 mt-5">
        <React.Fragment>
          {activeStep === 0 && (
            <EmpPersonalInfoAdd
              formData={formData}
              ref={childRef}
              setFormData={setFormData}
              handleNext={handleNext}
            />
          )}
           {activeStep === 1 && (
            <EmpContactDetailsAdd
              formData={formData}
              ref={childRef}
              setFormData={setFormData}
              handleNext={handleNext}
            />
          )}
          {activeStep === 2 && (
            <EmpQualificationDetailsAdd
              formData={formData}
              ref={childRef}
              setFormData={setFormData}
              handleNext={handleNext}
            />
          )}
          {activeStep === 3 && (
            <EmpExperienceAdd
              formData={formData}
              ref={childRef}
              setFormData={setFormData}
              handleNext={handleNext}
            />
          )}
          {activeStep === 4 && (
            <EmpPreviousCompanyAdd
              formData={formData}
              ref={childRef}
              setFormData={setFormData}
              handleNext={handleNext}
            />
          )}
          {activeStep === 5 && (
            <EmpEmergencyContactAdd
              formData={formData}
              ref={childRef}
              setFormData={setFormData}
              handleNext={handleNext}
            />
          )}
          {activeStep === 6 && (
            <EmpBankAccountAdd
              formData={formData}
              ref={childRef}
              setFormData={setFormData}
              handleNext={handleNext}
            />
          )}

          <div className="container-fluid p-1 d-flex align-items-center justify-content-center">
            <button
              className="btn btn-border btn-sm"
              style={{ padding: "7px" }}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </button>

            <div style={{ flex: "1 1 auto" }}></div>

            <button
              type="submit"
              className="btn btn-button btn-sm"
              onClick={handleButtonClick}
              style={{ padding: "7px" }}
            >
              {activeStep === steps.length - 1 ? "Submit" : "Save and Next"}
            </button>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
}

export default EmployeeAdd;