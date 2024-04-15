import React from "react";
import jsPDF from "jspdf";
import Logo from "../../../assets/images/ecs_logo.png";

class DownloadPDF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payslipData: {},
    };
  }

  pdfGenerate = () => {
    const { payslipData } = this.state;

    if (!payslipData) {
      console.error("No payslip data available!");
      return;
    }

    const doc = new jsPDF("landscape");

     // Set header
     doc.setFont("helvetica", "bold");
     doc.text("ECS CLOUD INFOTECH PVT LTD", 150, 30, { align: "center"}); // Set header
 
    doc.rect(10, 40, 280, 170); // x, y, width, height
  
    doc.addImage(Logo, "PNG", 10, 18, 90, 20);
    doc.setFont("helvetica", "medium");
    doc.text(20, 60, `EMPLOYEE ID: ${payslipData.payslipOwner || "ECS12"}`);
    doc.text(20,70,`DATE OF JOINING: ${payslipData.payslipOwner || "04-01-2024"}`);
    doc.text(20,80,`DESIGNATIONG: ${payslipData.subject || "JUNIOR DEVELOPER"}`);
    doc.text(20, 90, `PAID DAYS: ${payslipData.subject || "31"}`);

    doc.text(170,60,`EMPLOYEE NAME: ${payslipData.payslipOwner || "Nalina Sri"}`);
    doc.text(170,70,`PAYSLIP MONTH: ${payslipData.payslipOwner || "JANUARY"}`);
    doc.text(170, 80, `DEPARTMENT: ${payslipData.subject || "IT"}`);
    doc.text(170, 90, `LOP: ${payslipData.subject || "0"}`);

    doc.line(10, 100, 290, 100); // x, y, width, height
    doc.line(10, 120, 290, 120); // x, y, width, height

    doc.setFont("helvetica", "bold");
    doc.text(20, 110, `EARNING`);
    doc.text(80, 110, `HOURS`);
    doc.text(120, 110, `AMOUNT`);

    doc.line(0,130,0,0);

    doc.text(160, 110, `DEDUCTION`);
    doc.text(250, 110, `AMOUNT`);

    doc.setFont("helvetica", "light");
    doc.text(20,130,`BASIC SALARY`);
    doc.text(80,130,`224`);
    doc.text(120,130,`$4480.00`);
    doc.text(160,130,`HEALTH`);
    doc.text(250,130,`$100.00`);

    doc.text(20,140,`OVERTIME`);
    doc.text(80,140,`5`);
    doc.text(120,140,`$100.000`);
    doc.text(160,140,`LOSS OF PAY`);
    doc.text(250,140,`$160.00`);

    doc.text(20,150,`BONUS`);
    doc.text(80,150,`-`);
    doc.text(120,150,`$100.000`);

    doc.line(10, 160, 290, 160); // x, y, width, height

    doc.setFont("helvetica", "bold");
    doc.text(20,170,`GROSS PAY`);
    doc.text(80,170,`265`);
    doc.text(120,170,`$4680.00`);
    doc.text(160,170,`DEDUCTION TOTAL`);
    doc.text(250,170,`$260.00`);

    doc.line(10, 180, 290, 180); // x, y, width, height

    doc.setFont("helvetica", "bold");
    doc.text(20,190,`NET PAY`);
    doc.text(20,200,`IN WORDS`);

    doc.setFont("helvetica","light");
    doc.text(80,190,`: $4420.00 `);
    doc.text(80,200,`: Four Thousand Four Hundred Twenty Dollars Only`);

    doc.save("Payslip.pdf");
  };

  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={this.pdfGenerate}>
          Download PDF
        </button>
      </div>
    );
  }
}

export default DownloadPDF;
