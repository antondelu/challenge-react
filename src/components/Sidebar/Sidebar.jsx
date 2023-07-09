import './sidebar.css'
import React from "react";
import handlerMsgErr from "../SweetAlerts/handlerMsgErr";

export const SideNavbar = () => {
  return (
    <div className="sidebar sidebar-show">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#containerTable">
            <i className="nav-icon cil-speedometer"></i> Alertas
          </a>
        </li>
        <li className="nav-item" onClick={() => handlerMsgErr()}>
          <a className="nav-link" href="/#">
            <i className="nav-icon cil-speedometer"></i> Dashboard
            <span className="badge bg-primary">NEW</span>
          </a>
        </li>
        <li className="nav-item nav-group" onClick={() => handlerMsgErr()}>
          <a className="nav-link nav-group-toggle" href="/#">
            <i className="nav-icon cil-puzzle"></i> Nav dropdown
          </a>
          <ul className="nav-group-items">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                <i className="nav-icon cil-puzzle"></i> Nav dropdown item
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="nav-icon cil-puzzle"></i> Nav dropdown item
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item mt-auto">
          <a
            className="nav-link nav-link-success"
            href="https://www.linkedin.com/in/marcodeluca-dw/"
          >
            <i className="nav-icon cil-cloud-download"></i> LinkedIn
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link nav-link-danger"
            href="https://github.com/antondelu"
          >
            <i className="nav-icon cil-layers"></i> GitHub
          </a>
        </li>
      </ul>
      <button className="sidebar-toggler" type="button"></button>
    </div>
  );
};
