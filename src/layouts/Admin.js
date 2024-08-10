import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/sidebar.css";
import "boxicons/css/boxicons.min.css"; // Boxicons CDN
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "../Pages/Dashboard";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ExitManagement from "../Pages/Organizations/ExitManagement/ExitManagement";
import ExitManagementAdd from "../Pages/Organizations/ExitManagement/ExitManagementAdd";
import ExitManagementEdit from "../Pages/Organizations/ExitManagement/ExitManagementEdit";
import ExitManagementView from "../Pages/Organizations/ExitManagement/ExitManagementView";
import PerformanceAppraisalAdd from "../Pages/Performance/PerformanceAppraisalAdd";
import PerformanceAppraisal from "../Pages/Performance/PerformanceAppraisal";
import PerformanceAppraisalEdit from "../Pages/Performance/PerformanceAppraisalEdit";
import PerformanceAppraisalView from "../Pages/Performance/PerformanceAppraisalView";
import Employee from "../Pages/Employee/Employee";
import EmployeeAdd from "../Pages/Employee/EmployeeAdd";
import EmployeeEdit from "../Pages/Employee/EmployeeEdit";
import EmployeeView from "../Pages/Employee/EmployeeView";
import EmployeeAdmin from "../Pages/EmployeeAdmin/EmployeeAdmin";
import EmployeeAdminAdd from "../Pages/EmployeeAdmin/EmpoyeeAdminAdd";
import EmployeeAdminEdit from "../Pages/EmployeeAdmin/EmployeeAdminEdit";
import EmployeeAdminView from "../Pages/EmployeeAdmin/EmployeeAdminView";

import Policy from "../Pages/Hrpolicy/Policy";
import PolicyAdd from "../Pages/Hrpolicy/PolicyAdd";
import PolicyEdit from "../Pages/Hrpolicy/PolicyEdit";
import PolicyView from "../Pages/Hrpolicy/PolicyView";
import Deduction from "../Pages/Deduction/Deduction";
import DeductionAdd from "../Pages/Deduction/DeductionAdd";
import DeductionEdit from "../Pages/Deduction/DeductionEdit";
import DeductionView from "../Pages/Deduction/DeductionView";
import Leave from "../Pages/Leave/Leave";
import LeaveAdd from "../Pages/Leave/LeaveAdd";
import LeaveEdit from "../Pages/Leave/LeaveEdit";
import LeaveView from "../Pages/Leave/LeaveView";
import Holiday from "../Pages/Holiday/Holiday";
import HolidayAdd from "../Pages/Holiday/HolidayAdd";
import HolidayEdit from "../Pages/Holiday/HolidayEdit";
import HolidayView from "../Pages/Holiday/HolidayView";
import Attendancehrms from "../Pages/AttendanceHRMS/Attendancehrms";
import AttendancehrmsAdd from "../Pages/AttendanceHRMS/AttendancehrmsAdd";
import AttendancehrmsEdit from "../Pages/AttendanceHRMS/AttendancehrmsEdit";
import AttendancehrmsView from "../Pages/AttendanceHRMS/AttendancehrmsView";
import Department from "../Pages/Department/Department";
import DepartmentView from "../Pages/Department/DepartmentView";
import DepartmentEdit from "../Pages/Department/DepartmentEdit";
import DepartmentAdd from "../Pages/Department/DepartmentAdd";
import AddPayroll from "../Pages/Payroll/PayrollAdmin/AddPayroll";
import EditPayroll from "../Pages/Payroll/PayrollAdmin/EditPayroll";
import Viewpayroll from "../Pages/Payroll/PayrollAdmin/ViewPayroll";
import Payroll from "../Pages/Payroll/PayrollAdmin/Payroll";
import Payslip from "../Pages/Payroll/EmployeePayslip/Payslip";
import ViewPayslip from "../Pages/Payroll/EmployeePayslip/ViewPayslip";
import Claim from "../Pages/Claims Report/Claim";
import ClaimAdd from "../Pages/Claims Report/ClaimAdd";
import ClaimEdit from "../Pages/Claims Report/ClaimEdit";
import ClaimView from "../Pages/Claims Report/ClaimView";
import ExpensesReport from "../Pages/Expenses_Report/ExpensesReport";
import ExpensesAdd from "../Pages/Expenses_Report/ExpensesAdd";
import ExpensesEdit from "../Pages/Expenses_Report/ExpensesEdit";
import ExpensesView from "../Pages/Expenses_Report/ExpensesView";
import ExitManagementAdmin from "../Pages/Organizations/ExitManagementAdmin";
import LeaveAdmin from "../Pages/LeaveAdmin/LeaveAdmin";
import LeaveAdminEdit from "../Pages/LeaveAdmin/LeaveAdminEdit";
import LeaveAdminView from "../Pages/LeaveAdmin/LeaveAdminView";
import ExpenseReport from "../Pages/ExpenseAdmin/ExpenseReport";
import ExpenseAdd from "../Pages/ExpenseAdmin/ExpenseAdd";
import ExpenseEdit from "../Pages/ExpenseAdmin/ExpenseEdit";
import ExpenseView from "../Pages/ExpenseAdmin/ExpenseView";
import ClaimAdmin from "../Pages/ClaimAdmin/ClaimAdmin";
import ClaimAdminAdd from "../Pages/ClaimAdmin/ClaimAdminAdd";
import ClaimAdminEdit from "../Pages/ClaimAdmin/ClaimAdminEdit";
import ClaimAdminView from "../Pages/ClaimAdmin/ClaimAdminView";
import CompanyRegistration from "../Pages/Company_Registration/CompanyRegistration";
import AddCompanyRegistration from "../Pages/Company_Registration/AddCompanyRegistration";
import EditCompanyRegistration from "../Pages/Company_Registration/EditCompanyRegistration";
import ViewCompanyRegistration from "../Pages/Company_Registration/ViewCompanyRegistration";
import { ToastContainer } from "react-toastify";
import DownloadPDF from "../Pages/Payroll/EmployeePayslip/DownloadPDF";
import Compliance from "../Pages/CompanyCompliance/Compliance";
import ComplianceAdd from "../Pages/CompanyCompliance/ComplianceAdd";
import ComplianceEdit from "../Pages/CompanyCompliance/ComplianceEdit";
import ComplianceView from "../Pages/CompanyCompliance/ComplianceView";
import Roles from "../Pages/Roles/Roles";
import RolesAdd from "../Pages/Roles/RolesAdd";
import RolesEdit from "../Pages/Roles/RolesEdit";
import RolesView from "../Pages/Roles/RoleView";
import RolesAndMatrix from "../Pages/RolesAndMatrix";

function Admin({ handleLogout }) {
  useEffect(() => {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn.onclick = function () {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    };
  }, []);

  return (
    <div>
      <BrowserRouter basename="/hrms">
        <ToastContainer position="top-center" />
        <Sidebar />
        <section className="home-section">
          <Header onLogout={handleLogout} />
          <div className="home-content" style={{ minHeight: "95vh" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/downloadpdf" element={<DownloadPDF />} />

              {/* Compliance  */}
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/compliance/add" element={<ComplianceAdd />} />
              <Route path="/compliance/edit/:id" element={<ComplianceEdit />} />
              <Route path="/compliance/view/:id" element={<ComplianceView />} />

              {/* Exit Management */}
              <Route path="/exitmanagement" element={<ExitManagement />} />
              <Route
                path="/exitmanagement/add"
                element={<ExitManagementAdd />}
              />
              <Route
                path="/exitmanagement/edit/:id"
                element={<ExitManagementEdit />}
              />
              <Route
                path="/exitmanagement/view/:id"
                element={<ExitManagementView />}
              />
              <Route
                path="/exitmanagementadmin"
                element={<ExitManagementAdmin />}
              />

              {/* Employee  */}
              <Route path="/employee" element={<Employee />} />
              <Route path="/employee/add" element={<EmployeeAdd />} />
              <Route path="/employee/edit" element={<EmployeeEdit />} />
              <Route path="/employee/view" element={<EmployeeView />} />

              {/* Roles */}
              <Route path="/roles" element={<Roles />} />
              <Route path="/roles/add" element={<RolesAdd />} />
              <Route path="/roles/edit/:id" element={<RolesEdit />} />
              <Route path="/roles/view/:id" element={<RolesView />} />
              <Route path="/rolesandmatrix" element={<RolesAndMatrix />} />

              {/* EmployeeAdmin */}
              <Route path="/employeeadmin" element={<EmployeeAdmin />} />
              <Route path="/employeeadmin/add" element={<EmployeeAdminAdd />} />
              <Route
                path="/employeeadmin/edit/:id"
                element={<EmployeeAdminEdit />}
              />
              <Route
                path="/employeeadmin/view/:id"
                element={<EmployeeAdminView />}
              />

              {/* Company Registration */}
              <Route
                path="/companyregisteration"
                element={<CompanyRegistration />}
              />
              <Route
                path="/companyregisteration/add"
                element={<AddCompanyRegistration />}
              />
              <Route
                path="/companyregisteration/edit/:id"
                element={<EditCompanyRegistration />}
              />
              <Route
                path="/companyregisteration/view/:id"
                element={<ViewCompanyRegistration />}
              />

              {/* Hrms Policy */}
              <Route path="/policy" element={<Policy />} />
              <Route path="/policy/add" element={<PolicyAdd />} />
              <Route path="/policy/edit/:id" element={<PolicyEdit />} />
              <Route path="/policy/view/:id" element={<PolicyView />} />

              {/* Leave */}
              <Route path="/leave" element={<Leave />}></Route>
              <Route path="/leave/add" element={<LeaveAdd />} />
              <Route path="/leave/edit/:id" element={<LeaveEdit />} />
              <Route path="/leave/view/:id" element={<LeaveView />} />

              {/* Leave Admin */}
              <Route path="/leaveadmin" element={<LeaveAdmin />} />
              <Route path="/leaveadmin/edit/:id" element={<LeaveAdminEdit />} />
              <Route path="/leaveadmin/view/:id" element={<LeaveAdminView />} />

              {/*Hrms Deduction */}
              <Route path="/deductions" element={<Deduction />} />
              <Route path="/deductions/add" element={<DeductionAdd />} />
              <Route path="/deductions/edit/:id" element={<DeductionEdit />} />
              <Route path="/deductions/view/:id" element={<DeductionView />} />

              {/* Performance */}
              <Route path="/performance" element={<PerformanceAppraisal />} />
              <Route
                path="/performance/add"
                element={<PerformanceAppraisalAdd />}
              />
              <Route
                path="/performance/edit/:id"
                element={<PerformanceAppraisalEdit />}
              />
              <Route
                path="/performance/view/:id"
                element={<PerformanceAppraisalView />}
              />
              <Route path="*" element={<Dashboard />} />

              {/* Holiday  */}
              <Route path="/holiday" element={<Holiday />} />
              <Route path="/holiday/add" element={<HolidayAdd />} />
              <Route path="/holiday/edit/:id" element={<HolidayEdit />} />
              <Route path="/holiday/view/:id" element={<HolidayView />} />

              {/* AttendanceHRMS */}
              <Route path="/attendancehrms" element={<Attendancehrms />} />
              <Route
                path="/attendancehrms/add"
                element={<AttendancehrmsAdd />}
              />
              <Route
                path="/attendancehrms/view/:id"
                element={<AttendancehrmsView />}
              />
              <Route
                path="/attendancehrms/edit/:id"
                element={<AttendancehrmsEdit />}
              />

              {/* {Department} */}
              <Route path="/departments" element={<Department />} />
              <Route
                path="/departments/view/:id"
                element={<DepartmentView />}
              />
              <Route
                path="/departments/edit/:id"
                element={<DepartmentEdit />}
              />
              <Route path="/departments/add" element={<DepartmentAdd />} />

              {/* Payroll */}
              <Route path="/payrolladmin" element={<Payroll />} />
              <Route path="/payrolladmin/add" element={<AddPayroll />} />
              <Route path="/payrolladmin/edit/:id" element={<EditPayroll />} />
              <Route path="/payrolladmin/view/:id" element={<Viewpayroll />} />

              <Route path="/employeepayslip" element={<Payslip />} />
              <Route path="/employeepayslip/view" element={<ViewPayslip />} />

              {/* Claims Report */}
              <Route path="/claim" element={<Claim />} />
              <Route path="/claim/add" element={<ClaimAdd />} />
              <Route path="/claim/edit/:id" element={<ClaimEdit />} />
              <Route path="/claim/view/:id" element={<ClaimView />} />

              {/* Claims Report Admin */}
              <Route path="/claimadmin" element={<ClaimAdmin />} />
              <Route path="/claimadmin/add" element={<ClaimAdminAdd />} />
              <Route path="/claimadmin/edit/:id" element={<ClaimAdminEdit />} />
              <Route path="/claimadmin/view/:id" element={<ClaimAdminView />} />

              {/* Expensers Report */}
              <Route path="/expensesreport" element={<ExpensesReport />} />
              <Route path="/expensesreport/add" element={<ExpensesAdd />} />
              <Route path="/expensesreport/edit/:id" element={<ExpensesEdit />} />
              <Route path="/expensesreport/view/:id" element={<ExpensesView />} />

              {/* Expense Report Admin */}
              <Route path="/expenseadmin" element={<ExpenseReport />} />
              <Route path="/expenseadmin/add" element={<ExpenseAdd />} />
              <Route path="/expenseadmin/edit/:id" element={<ExpenseEdit />} />
              <Route path="/expenseadmin/view/:id" element={<ExpenseView />} />
            </Routes>
          </div>
          <Footer />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default Admin;
