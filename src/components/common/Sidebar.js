import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Nav } from "react-bootstrap";
import "../../styles/sidebar.css";
import Logo from "../../assets/images/Logo.png";

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuItems, setMenuItems] = useState([
    {
      title: "Organizations",
      icon: "bx bx-buildings",
      isOpen: false,
      subMenus: [
        { title: "HR Policy", path: "/policy" },
        { title: "Departments", path: "/departments" },
        { title: "Exit Management Employee", path: "/exitmanagementadmin" },
        { title: "Exit Management", path: "/exitmanagement" },
      ],
    },
  ]);

  const handleMenuClick = (index) => {
    if (index === null) {
      // If Home is clicked, deactivate all menus
      setMenuItems(menuItems.map((item) => ({ ...item, isOpen: false })));
      setActiveMenu(null);
    } else {
      const updatedMenuItems = menuItems.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            isOpen: !item.isOpen,
          };
        } else {
          return {
            ...item,
            isOpen: false,
          };
        }
      });
      setMenuItems(updatedMenuItems);
      setActiveMenu(
        updatedMenuItems[index].isOpen ? updatedMenuItems[index].title : null
      );
    }
  };

  return (
    <div className="sidebar">
      <div className="logo-details" style={{ backgroundColor: "#6675de", position:'sticky',top:'0' ,zIndex:'100'}}>     
           <ul className="nav-links p-0" id="logo-ul">
            <li className="p-1">
              <NavLink to="/" onClick={() => handleMenuClick(null)}>
                <img src={Logo} alt="Logo" width={50} height={50} />
                <span class="logo_name text-center ms-3">
                  <p class="HomeInsteadHeading">HRMS</p>
                </span>
              </NavLink>
            </li>
          </ul>          
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" onClick={() => handleMenuClick(null)}>
            <i class="bx bx-home-alt"></i>
            <span className="links_name">Home</span>
          </NavLink>
        </li>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Nav.Link
              to="#"
              onClick={() => handleMenuClick(index)}
              className={activeMenu === item.title ? "active" : ""}
            >
              <div
                className="w-100 d-flex justify-content-between"
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              >
                <span>
                  <i className={item.icon}></i>
                  <span className="links_name">{item.title}</span>
                </span>
                <span>
                  <i
                    className={`bx bx-chevron-down arrow ${
                      item.isOpen ? "open" : ""
                    }`}
                    style={{
                      paddingRight: "5px",
                      minWidth: "0px",
                      fontWeight: "700",
                    }}
                  ></i>
                </span>
              </div>
            </Nav.Link>

            <Collapse in={item.isOpen}>
              <ul className="submenu">
                {item.subMenus.map((subMenu, subIndex) => (
                  <li key={subIndex}>
                    <NavLink
                      to={subMenu.path}
                      className="links_name"
                      activeClassName="active-submenu"
                    >
                      <i className="bx bx-radio-circle-marked ps-3"></i>
                      <span className="links_name links_names">
                        {subMenu.title}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Collapse>
          </li>
        ))}
        <li>
          <NavLink to="/employeeadmin" onClick={() => handleMenuClick(null)}>
          <i class='bx bx-male-female'></i>
            <span className="links_name">Employee Info</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/employee" onClick={() => handleMenuClick(null)}>
            <i class="bx bx-male-female"></i>
            <span className="links_name">Employee Info</span>
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/attendancehrms" onClick={() => handleMenuClick(null)}>
            <i class="bx bx-spreadsheet"></i>
            <span className="links_name">Attendance</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaveadmin" onClick={() => handleMenuClick(null)}>
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Leave Admin</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/leave" onClick={() => handleMenuClick(null)}>
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Leave</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/payroll" onClick={() => handleMenuClick(null)}>
            <i className="bx bx-coin-stack"></i>
            <span className="links_name">Payroll</span>
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/performance" onClick={() => handleMenuClick(null)}>
            {/*  */}
            <i class='bx bx-signal-4'></i>
            <span className="links_name">Performance</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/holiday" onClick={() => handleMenuClick(null)}>
            <i className="bx bx-receipt"></i>
            <span className="links_name">Holiday</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/expensesreport" onClick={() => handleMenuClick(null)}>
            <i className="bx bx-food-menu"></i>
            <span className="links_name">Expense</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/expenseadmin" onClick={() => handleMenuClick(null)}>
            <i className="bx bx-food-menu"></i>
            <span className="links_name">Expense Admin</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/claim" onClick={() => handleMenuClick(null)}>
            {/* <i className="bx bx-grid-alt"></i> */}
            <i className="bx bx-book-open"></i>
            <span className="links_name">Claims</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/claimadmin" onClick={() => handleMenuClick(null)}>
            {/* <i className="bx bx-grid-alt"></i> */}
            <i className="bx bx-book-open"></i>
            <span className="links_name">Claims Admin</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/deductions" onClick={() => handleMenuClick(null)}>
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Deductions</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/payrolladmin" onClick={() => handleMenuClick(null)}>
            <i class="bx bx-book-alt"></i>
            <span className="links_name">Payroll</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/employeepayslip" onClick={() => handleMenuClick(null)}>
            <i class="bx bx-book-alt"></i>
            <span className="links_name">Payslip</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
