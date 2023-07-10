import "./banner.css";
export const Banner = () => {
  return (
    <div className="container-fluid px-4">
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-chart-area me-1"></i>
          <h4>
            Challenge <strong>Me vuelo</strong> 2023
          </h4>
        </div>
        <div className="card-body d-flex justify-content-center align-items-center">
          <div className="contentBannerHome">
            <img src="../../banner-mevuelo.jpg" className="bannerHome"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
