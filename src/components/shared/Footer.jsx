import Icons from "./Icons";
import PropTypes from "prop-types";

export default function Footer({ iconSize }) {
  return (
    <footer className="footer">
      <Icons
        iconsClass="nav justify-content-center  pb-3 mb-3"
        iconSize={iconSize}
      />
    </footer>
  );
}

Footer.propTypes = {
  iconSize: PropTypes.string.isRequired,
};
