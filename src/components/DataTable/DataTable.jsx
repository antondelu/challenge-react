import "./dataTable.css";
import "../Search/search.css";
import axios from "axios";
import { useContext, useState } from "react";
import { InitialContext } from "../Context/Context";
import { Search } from "../Search/Search";
import { AlertsFiltered } from "../Alert/Alerts";
import Table from "react-bootstrap/Table";
import { Banner } from "../Banner/Banner";

export const DataTable = () => {
  const [alertFilter, setAlertFilter] = useState([]);
  const { alerts, email } = useContext(InitialContext);
  console.log(email);

  /*Esta función implementa el método DELETE y, aunque no hay una interacción visual
    debido a la falta de una base de datos, se puede descomentar y verificar que funciona correctamente.
    en la consola, se mostrará un status 200 para confirmar su funcionamiento.
    (No olvidar comentar la funcion de arriba que lleva el mismo nombre)
  */
  // function deleteAlert(id) {
  //  const URL = "https://apimocha.com/mevueloapi/alerts";
  //   axios
  //     .delete(`${URL}/${id}`)
  //     .then((response) => console.log("status:" + " " + response.status))
  //     .catch((error) =>
  //       console.error("Error en methodo delete:" + " " + error.response.data)
  //     );
  // }

  return (
    <>
      {email === "admin@mevuelo.com" ? (
        <Search alertFilter={alertFilter} setAlertFilter={setAlertFilter} />
      ) : (
        <Banner />
      )}
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
              return <AlertsFiltered alert={alert} />;
            })
          : alerts.length !== 0 &&
            alerts.map((alert) => {
              return <AlertsFiltered alert={alert} />;
            })}
      </Table>
    </>
  );
};
