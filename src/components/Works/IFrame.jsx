import PropTypes from "prop-types";

export default function IFrame({ videoSrc }) {
  return (
    <div className="pt-5 justify-content-center  pb-5">
      <iframe
        width="560"
        height="315"
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        allowFullScreen
        className="video-container"
      ></iframe>
    </div>
  );
}

IFrame.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};
