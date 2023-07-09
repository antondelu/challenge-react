import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { HomeAdmin } from "./pages/HomeAdmin/HomeAdmin.jsx";
import { ProviderContextComponent } from "./components/Context/Context";
import { NotFound } from "./pages/Error/Error";
import { Home } from "./pages/Home/Home";
import ProtectedRoute from "./components/PrivateRoutes/PrivateRoutes";
import ProtectedRouteGuest from "./components/PrivateRoutes/PrivateRoutesGuest";

function App() {
  return (
    <div className="App">
      <ProviderContextComponent>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomeAdmin />} />
          </Route>
          <Route element={<ProtectedRouteGuest />}>
            <Route path="/homeguest" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ProviderContextComponent>
    </div>
  );
}

export default App;
