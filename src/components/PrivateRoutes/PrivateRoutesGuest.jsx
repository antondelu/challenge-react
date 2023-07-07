import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { InitialContext } from "../Context/Context";

function ProtectedRouteGuest({ redirectPath = "/login" }) {
  const { email } = useContext(InitialContext);
    console.log(email)
  if (email !== "invitado@mevuelo.com") {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default ProtectedRouteGuest;