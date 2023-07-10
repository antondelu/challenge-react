import "./home.css";
import { DataTable } from "../../components/DataTable/DataTable";
import { SideNavbar } from "../../components/Sidebar/Sidebar";
import { NavbarTop } from "../../components/Navbar/Navbar";

export const Home = () => (
  <div className="home">
    <NavbarTop />
    <SideNavbar />
    <div className="dataTable">
      <DataTable />
    </div>
  </div>
);
