import PropTypes from "prop-types";

export default function Image({ imageURL, setPhotoExpanded, expanded }) {
  return (
    <div className="d-flex justify-content-center">
      <img
        src={imageURL}
        className={expanded ? "img-photo-expanded" : "img-photo"}
        alt={"Igor's photo"}
        onClick={() => setPhotoExpanded(true)}
      />
    </div>
  );
}

Image.propTypes = {
  imageURL: PropTypes.string.isRequired,
  setPhotoExpanded: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};
