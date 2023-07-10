import "./navbar.css";
import { CContainer, CNavbarBrand } from "@coreui/react";
import { useContext, useState } from "react";
import { InitialContext } from "../Context/Context";
import Navbar from "react-bootstrap/Navbar";

export const NavbarTop = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const { activeAlertsCount } = useContext(InitialContext);

  //Esta funcion cambia el fondo del navbar transparente a oscuro al hacer scroll
  const changeBackground = () => {
    if (window.scrollY >= 180) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <Navbar
      colorScheme="light"
      className={navbarBackground ? "active navbar fixed-top" : "fixed-top"}
    >
      <CContainer fluid fixed="top">
        <CNavbarBrand href="#">
          <img src="../logo-mevuelo.jpg" alt="" width="45" height="48" />
        </CNavbarBrand>
      </CContainer>
      <strong>{activeAlertsCount}</strong>
      <p className="iconAlertsActives">🔔</p>
    </Navbar>
  );
};
