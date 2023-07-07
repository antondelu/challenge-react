import "./error.css";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>
              <div class="contant_box_404">
                <h3 class="h2">Parece que estás perdido</h3>
                <p>¡La página que buscas no está disponible!</p>
                <Link to={`/home`} class="link_404">
                  Ir al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
