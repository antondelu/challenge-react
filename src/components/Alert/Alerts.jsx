import './alert.css'
import { useContext } from "react";
import { InitialContext } from "../Context/Context";
import Button from "react-bootstrap/Button";
import alertDelete from "../SweetAlerts/AlertDelete";

export const AlertsFiltered = ({ alert }) => {
  const { alerts, setAlerts, email } = useContext(InitialContext);

  function deleteAlert(id) {
    const alertDelete = alerts.filter((el) => el.id !== id);
    setAlerts(alertDelete);
  }
  function updateState(id) {
    const element = alerts.map((alert) => {
      if (alert.id == id) {
        alert.state = !alert.state;
      }
      return alert;
    });
    setAlerts(element);
  }
  return (
    <tbody key={alert.id}>
      <tr>
        <td>{alert.id}</td>
        <td>{alert.name}</td>
        <td>{alert.metricFont}</td>
        <td>{alert.metricType}</td>
        {alert.state ? (
          <td className="active">Activo</td>
        ) : (
          <td className="paused">Pausado</td>
        )}
        <Button
          variant="outline-primary"
          className={email === "invitado@mevuelo.com" ? "notButton" : "updateButton"}
          onClick={() => updateState(alert.id)}
        >
          {alert.state ? <>Pausar</> : <>Activar</>}
        </Button>
        <Button
          variant="danger"
          className={email === "invitado@mevuelo.com" ? "notButton" : "deleteButton"}
          onClick={() => alertDelete(alert.id, deleteAlert)}
        >
          Borrar
        </Button>
      </tr>
    </tbody>
  );
};
