import './sidebar.css'
import React from "react";
import handlerMsgErr from "../SweetAlerts/handlerMsgErr";

export const SideNavbar = () => {
  return (
    <div class="sidebar sidebar-show">
      <ul class="sidebar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#containerTable">
            <i class="nav-icon cil-speedometer"></i> Alertas
          </a>
        </li>
        <li class="nav-item" onClick={() => handlerMsgErr()}>
          <a class="nav-link" href="#">
            <i class="nav-icon cil-speedometer"></i> Dashboard
            <span class="badge bg-primary">NEW</span>
          </a>
        </li>
        <li class="nav-item nav-group" onClick={() => handlerMsgErr()}>
          <a class="nav-link nav-group-toggle" href="#">
            <i class="nav-icon cil-puzzle"></i> Nav dropdown
          </a>
          <ul class="nav-group-items">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="nav-icon cil-puzzle"></i> Nav dropdown item
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="nav-icon cil-puzzle"></i> Nav dropdown item
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item mt-auto">
          <a
            class="nav-link nav-link-success"
            href="https://www.linkedin.com/in/marcodeluca-dw/"
          >
            <i class="nav-icon cil-cloud-download"></i> LinkedIn
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-danger"
            href="https://github.com/antondelu"
          >
            <i class="nav-icon cil-layers"></i> GitHub
          </a>
        </li>
      </ul>
      <button class="sidebar-toggler" type="button"></button>
    </div>
  );
};
