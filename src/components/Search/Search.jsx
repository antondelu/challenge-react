import "./search.css";
import { useContext, useState } from "react";
import { InitialContext } from "../Context/Context";
import { Button, Form } from "react-bootstrap";

export const Search = ({ setAlertFilter }) => {
  const { alerts } = useContext(InitialContext);

  function filterSearchUser(userSearch) {
    const search = alerts.filter(
      (search) => search.name.toUpperCase() === userSearch.toUpperCase()
    );
    setAlertFilter(search);
  }
  return (
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
        onChange={(e) => {
          filterSearchUser(e.target.value)
          }}
      />
      {/* <Button
        variant="outline-success"
        className="buttonSearch"
        onClick={(e)=>{
          console.log("ver todas ");
          setUserSearch('')
        }}
      >
        Ver todas
      </Button> */}
    </Form>
  );
};
