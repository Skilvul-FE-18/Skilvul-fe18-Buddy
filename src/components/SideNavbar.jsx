import React from "react";

function SideNavbar() {
  return (
    <>
      <aside className="col-12 col-md-3 col-xl-2 p-0 sideNav ">
        <nav
          className="navbar navbar-expand-md navbar-light  flex-md-column flex-row align-items-center py-2 text-center sticky-top "
          id="sidebar"
        >
          <div className="text-center p-3">
            <a
              href="#"
              className="navbar-brand mx-0 font-weight-bold  text-nowrap text-light"
            >
              BUDDY
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav flex-column mb-sm-auto mb-0 align-items-start px-2 align-items-sm-start mt-5">
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0 py-4">
                  <i className="fa-solid fa-house"></i>{" "}
                  <span className="ms-1  d-sm-inline text-light">Home</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default SideNavbar;
