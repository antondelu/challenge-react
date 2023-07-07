import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
async function alertDelete(id, deleteAlert) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-danger rounded-pill",
      cancelButton: "btn btn-success rounded-pill ms-3",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "¿Está seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        deleteAlert(id);
        swalWithBootstrapButtons.fire(
          "Borrado!",
          `Se borro correctamente la Alerta ${id}.`,
          "De acuerdo"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          `No se borro la Alerta ${id}.`,
          "error"
        );
      }
    });
}

export default alertDelete;
