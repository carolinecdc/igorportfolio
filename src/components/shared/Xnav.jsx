import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Xnav({
  isCollapsed,
  setIsCollapsed,
  setUserToggled,
  actvPage,
}) {
  return (
    <>
      <div className="x-nav">
        <div
          className="x-button"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
            setUserToggled(false);
          }}
        >
          <CloseIcon className="menu-icon" sx={{ fontSize: 30 }} />
        </div>
        <div className="mx-auto">
          <div>
            <Link
              to={"/"}
              className={`nav-link  x-nav-text px-2  pb-3 ${
                actvPage === "work" && "actv-menu"
              }`}
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                setUserToggled(false);
              }}
            >
              Work
            </Link>
          </div>
          <div>
            <Link
              to={"/about"}
              className={`nav-link  x-nav-text px-2  pb-3 ${
                actvPage === "about" && "actv-menu"
              }`}
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                setUserToggled(false);
              }}
            >
              about
            </Link>
          </div>
          <div>
            <Link
              to={"/contact"}
              className={`nav-link  x-nav-text px-2  pb-3 ${
                actvPage === "contact" && "actv-menu"
              }`}
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                setUserToggled(false);
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="x-footer ">
        <Footer iconSize="42" />
      </div>
    </>
  );
}

Xnav.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  setIsCollapsed: PropTypes.func,
  setUserToggled: PropTypes.func,
  actvPage: PropTypes.string,
};
