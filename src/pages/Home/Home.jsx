import "../HomeAdmin/home.css";
import { DataTable } from "../../components/DataTable/DataTable";
import { SideNavbar } from "../../components/Sidebar/Sidebar";
import { NavbarTop } from "../../components/Navbar/Navbar";

export const Home = () => {
  return (
    <div className="home">
      <NavbarTop />    
        <SideNavbar />
        <DataTable />
      
    </div>
  );
};
