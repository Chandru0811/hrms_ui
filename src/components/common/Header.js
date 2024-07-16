import React from "react";
import { Link } from "react-router-dom";

function Header({ onLogout }) {
  const userName = sessionStorage.getItem("userName");

  // console.log(userName);
  const handelLogOutClick = () => {
    onLogout();
  };

  return (
    <nav>
      <div className="d-flex align-items-center justify-content-between pt-2 pb-2 px-2">
        <div className="sidebar-button">
          <i className="bx bx-menu sidebarBtn"></i>
        </div>
        <div className="">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle admin_btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {userName}
            </button>
            <ul class="dropdown-menu px-2">
              {(userName === "Admin" || userName === "Employee") && (
                <div>
                  <li style={{ cursor: "pointer" }} className="text-center">
                    <Link
                      to="/employee/view"
                      style={{ textDecoration: "none", color: "#424242" }}
                    >
                      Account
                    </Link>
                  </li>
                  <hr className="my-1" />
                </div>
              )}
              <li
                style={{ cursor: "pointer" }}
                className="text-center"
                onClick={handelLogOutClick}
              >
                Log out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
