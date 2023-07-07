import "./chart.css";
import React from "react";

export const Chart = () => {
  return (
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Estadisticas de alertas</h1>
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-chart-area me-1"></i>
            Alertas activas anuales
          </div>
          <div className="card-body d-flex justify-content-center align-items-center">
            <div>
              <img src="/chart.JPG" alt="" />
            </div>
          </div>
          <div className="card-footer small text-muted">
            Actualizado ayer at 11:59 PM
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-bar me-1"></i>
                Alertas pausadas
              </div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <div>
                  <img src="/bar-chart.JPG" alt="" />
                </div>
              </div>
              <div className="card-footer small text-muted">
                Actualizado hoy at 09:34 PM
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-pie me-1"></i>
                Category
              </div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <div>
                  <img src="/pie-chart.JPG" alt="" />
                </div>
              </div>
              <div className="card-footer small text-muted">
                Actualizado ayer at 09:19 AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
