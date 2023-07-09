import "./dataTable.css";
import "../Search/search.css";
import axios from "axios";
import { useContext, useState } from "react";
import { InitialContext } from "../Context/Context";
import { Search } from "../Search/Search";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import alertDelete from "../SweetAlerts/AlertDelete";

export const DataTable = () => {
  const [alertFilter, setAlertFilter] = useState([]);
  const { alerts, setAlerts } = useContext(InitialContext);
  const URL = "https://apimocha.com/mevueloapi/alerts";
  function updateState(id) {
    const element = alerts.map((alert) => {
      if (alert.id == id) {
        alert.state = !alert.state;
      }
      return alert;
    });
    setAlerts(element);
  }

  function deleteAlert(id) {
    const alertDelete = alerts.filter((el) => el.id !== id);
    setAlerts(alertDelete);
  }

  /*Esta función implementa el método DELETE y, aunque no hay una interacción visual
    debido a la falta de una base de datos, se puede descomentar y verificar que funciona correctamente.
    en la consola, se mostrará un status 200 para confirmar su funcionamiento.
    (No olvidar comentar la funcion de arriba que lleva el mismo nombre)
  */
  // function deleteAlert(id) {
  //   axios
  //     .delete(`${URL}/${id}`)
  //     .then((response) => console.log("status:" + " " + response.status))
  //     .catch((error) =>
  //       console.error("Error en methodo delete:" + " " + error.response.data)
  //     );
  // }

  return (
    <>
      <Search alertFilter={alertFilter} setAlertFilter={setAlertFilter} />
      <Table striped="columns" id="containerTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Fuente metrica</th>
            <th>Condicion</th>
            <th>Estado</th>
          </tr>
        </thead>
        {alertFilter.length !== 0
          ? alertFilter.map((alert) => {
              return (
                <tbody key={alert.id}>
                  <tr>
                    <td>{alert.id}</td>
                    <td>{alert.name}</td>
                    <td>{alert.metricFont}</td>
                    <td>{alert.metricType}</td>
                    {alert.estado ? (
                      <td className="active">Activo</td>
                    ) : (
                      <td className="paused">Pausado</td>
                    )}
                    <Button
                      variant="outline-primary"
                      className="updateButton"
                      onClick={() => updateState(alert.id)}
                    >
                      Pausar
                    </Button>
                    <Button
                      variant="danger"
                      className="deleteButton"
                      onClick={() => alertDelete(alert.id, deleteAlert)}
                    >
                      Borrar
                    </Button>
                  </tr>
                </tbody>
              );
            })
          : alerts.length !== 0 &&
            alerts.map((alert) => {
              return (
                <tbody key={alert.id}>
                  <tr>
                    <td>{alert.id}</td>
                    <td>{alert.name}</td>
                    <td>{alert.metricFont}</td>
                    <td>{alert.metricType}</td>
                    {alert.estado ? (
                      <td className="active">Activo</td>
                    ) : (
                      <td className="paused">Pausado</td>
                    )}
                    <Button
                      variant="outline-primary"
                      className="updateButton"
                      onClick={() => updateState(alert.id)}
                    >
                      Pausar
                    </Button>
                    <Button
                      variant="danger"
                      className="deleteButton"
                      onClick={() => alertDelete(alert.id, deleteAlert)}
                    >
                      Borrar
                    </Button>
                  </tr>
                </tbody>
              );
            })}
      </Table>
    </>
  );
};
