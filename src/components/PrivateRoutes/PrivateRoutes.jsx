import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { InitialContext } from "../Context/Context";

function ProtectedRoute({ redirectPath = "/" }) {
  const { email } = useContext(InitialContext);
  
  if (email !== "admin@mevuelo.com") {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
