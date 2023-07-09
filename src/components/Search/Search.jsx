import "./search.css";
import { useContext } from "react";
import { InitialContext } from "../Context/Context";
import { Button, Form } from "react-bootstrap";
import { AddAlert } from "../AddAlert/AddAlert";

export const Search = ({ alertFilter, setAlertFilter }) => {
  const { alerts } = useContext(InitialContext);

  function filterSearchUser(userSearch) {
    const search = alerts.filter(
      (search) =>
        search.name.toUpperCase() === userSearch.toUpperCase() ||
        search.id == userSearch
    );
    setAlertFilter(search);
  }
  return (
    <>
      <AddAlert/>
      <Form
        className="d-flex contentSearch"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Form.Control
          type="search"
          placeholder="Ingresar nombre de alerta"
          className="me-2 inputSearch"
          aria-label="Search"
          onChange={(e) => filterSearchUser(e.target.value)}
        />
        <Button variant="secondary" onClick={() => filterSearchUser("")}>
          Resetear
        </Button>
      </Form>
      {alertFilter.length === 0 && (
        <strong className="errorMessage">
          No hay resultados para tu busqueda
        </strong>
      )}
    </>
  );
};
