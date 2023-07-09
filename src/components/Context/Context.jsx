import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const InitialContext = createContext();

export const ProviderContextComponent = ({ children }) => {
  const [email, setEmail] = useState("admin@mevuelo.com");
  const [alerts, setAlerts] = useState([]);
  const [activeAlertsCount, setActiveAlertsCount] = useState();
  const URL = "https://apimocha.com/mevueloapi/alerts";

  useEffect(() => {
    axios.get(URL).then((response) => {
      setAlerts(response.data);
    })
    .catch((error)=>{
      console.error("Error en el llamado a las alertas: " + " " + error.response.data)
    })
  }, []);

  useEffect(() => {
    let counter = 0;
    for (let alert of alerts) {
      if (alert.state) {
        counter++;
      }
      setActiveAlertsCount(counter);
    }
  }, [alerts]);

  return (
    <InitialContext.Provider
      value={{ alerts, setAlerts, activeAlertsCount, email, setEmail }}
    >
      {children}
    </InitialContext.Provider>
  );
};
