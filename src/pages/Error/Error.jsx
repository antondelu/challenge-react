import "./error.css";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <section className="page404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-12 col-sm-offset-1  textCenter">
              <div className="fourZeroFourBg">
                <h1 className="textCenter ">404</h1>
              </div>
              <div className="contantBox404">
                <h3 className="h2">Parece que estás perdido</h3>
                <p>¡La página que buscas no está disponible!</p>
                <Link to={`/home`} className="link404">
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
