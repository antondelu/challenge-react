import "./button.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InitialContext } from "../Context/Context";

export const Button = () => {
  const { email } = useContext(InitialContext);
  const navigate = useNavigate();

  const login = () => {
    const emailRoutes = {
      "admin@mevuelo.com": "/home",
      "invitado@mevuelo.com": "/homeguest",
    };
    const route = emailRoutes[email];
    if (route) {
      navigate(route);
    } else {
      return;
    }
  };
  return (
    <div className="contentBtn">
      <button className="btnLogin" onClick={login}>
        <span className="iconLogin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            fill="currentColor"
            className="bi bi-airplane-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"></path>
          </svg>
        </span>
        <span className="text">Ingresar</span>
      </button>
    </div>
  );
};
