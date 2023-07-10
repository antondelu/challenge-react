import axios from "axios";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { InitialContext } from "../Context/Context";

export const AddAlert = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [metricFont, setMetricFont] = useState("");
  const [metricType, setMetricType] = useState("");
  const [state, setState] = useState();

  const MySwal = withReactContent(Swal);
  const { alerts, setAlerts } = useContext(InitialContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function inputRequired() {
    MySwal.fire({
      title: "Error!",
      text: "Tiene que completar todos los campos.",
      icon: "error",
      confirmButtonText: "Cancel",
    });
  }

  function alertCreate() {
    MySwal.fire({
      title: <strong>Buen trabajo!</strong>,
      html: <i>Tu alerta fue creada!</i>,
      icon: "success",
    });
  }

  function createAlert() {
    // const URL = "https://apimocha.com/mevueloapi/alerts";
    // axios
    //   .post(`${URL}/alerts`, {
    //     data: {
    //       name: name,
    //       metricFont: metricFont,
    //       metricType: metricType,
    //       state: state,
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error(
    //       "Error en la creacion de alerta: " + " " + error.response.data
    //     );
    //   });

    const addAlert = [
      ...alerts,
      {
        id: Math.floor(Math.random() * 60),
        name: name,
        metricFont: metricFont,
        metricType: metricType,
        state: state == "1" ? true : false,
      },
    ];
    alertCreate();
    setAlerts(addAlert);
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agregar alerta
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea tu alerta !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alerta 16"
                autoFocus
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fuente metrica</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fuente X"
                autoFocus
                onChange={(e) => {
                  setMetricFont(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Condicion</Form.Label>
              <Form.Control
                type="text"
                placeholder="CPU"
                autoFocus
                onChange={(e) => {
                  setMetricType(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Select
              onChange={(e) => {
                setState(e.target.value);
              }}
            >
              <option>Seleccionar..</option>
              <option value={1}>Activo</option>
              <option value={2}>Pausado</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              handleClose();
              if (!name || !metricFont || !metricType || !state) {
                inputRequired();
              } else {
                e.preventDefault();
                createAlert();
              }
            }}
          >
            Crear
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
