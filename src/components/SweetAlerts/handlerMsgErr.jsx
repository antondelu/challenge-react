import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
function handlerMsgErr() {
  MySwal.fire({
    title: "Lo siento!",
    text: "Esta funcionalidad esta fuera del challenge.",
    icon: "warning",
    confirmButtonText: "Cancel",
    confirmButtonColor: "#00000",
  });
}

export default handlerMsgErr;
