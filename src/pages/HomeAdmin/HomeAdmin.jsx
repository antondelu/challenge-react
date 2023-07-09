import "./home.css";
import { Chart } from "../../components/Charts/Chart";
import { DataTable } from "../../components/DataTable/DataTable";
import { NavbarTop } from "../../components/Navbar/Navbar";
import { SideNavbar } from "../../components/Sidebar/Sidebar";

export const HomeAdmin = () => (
    <>
      <NavbarTop />
      <div className="home">
        <SideNavbar />
        <div className="charts">
          <Chart />
          <DataTable />
        </div>
      </div>
    </>
  );

