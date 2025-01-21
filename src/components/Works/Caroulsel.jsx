import PropTypes from "prop-types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function Carousel({ workImage, imagesURLS }) {
  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide carousel-position white-background"
      >
        <div className="carousel-inner align-items-center">
          {imagesURLS.map((imageURL, index) => (
            <div
              className={`carousel-item ${index === workImage ? "active" : ""}`}
              key={index}
            >
              <img
                src={imageURL}
                className="caroulsel-img"
                alt={`Slide Image ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-control-prev carousel-control"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <div className="slide-arrow-container">
          <ArrowBackIosNewIcon sx={{ fontSize: 36 }} />
        </div>
      </button>
      <button
        className="carousel-control-next carousel-control"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <div className="slide-arrow-container">
          <ArrowForwardIosIcon sx={{ fontSize: 36 }} />
        </div>
      </button>
    </>
  );
}

Carousel.propTypes = {
  imagesURLS: PropTypes.array.isRequired,
  workImage: PropTypes.number.isRequired,
};
