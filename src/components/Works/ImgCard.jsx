import PropTypes from "prop-types";

export default function ImgCard({
  srcImg,
  setPhotoExpanded,
  setWorkImage,
  imageNumber,
  typeImg,
  setTypeImg,
}) {
  return (
    <div className="col workpage-row">
      <div className="card workpage-container">
        <img
          src={srcImg}
          alt="Project's image"
          onClick={() => {
            setPhotoExpanded(true);
            setWorkImage(imageNumber);
            setTypeImg(typeImg);
          }}
        ></img>
      </div>
    </div>
  );
}

ImgCard.propTypes = {
  srcImg: PropTypes.string.isRequired,
  setPhotoExpanded: PropTypes.func.isRequired,
  setWorkImage: PropTypes.func.isRequired,
  imageNumber: PropTypes.number.isRequired,
  typeImg: PropTypes.string.isRequired,
  setTypeImg: PropTypes.func.isRequired,
};
