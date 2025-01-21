import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavLinks({ currentPage, photoExpanded }) {
  return (
    <>
      <ul className="nav col-12 col-md-auto mb-2 mb-md-0 nav-links">
        <li>
          <Link
            to={"/"}
            className="nav-link px-2"
            id={
              photoExpanded
                ? "white-background-text"
                : currentPage === "work"
                ? "nav-links-actv"
                : ""
            }
          >
            Work
          </Link>
        </li>

        <li>
          <Link
            to={"/about"}
            className="nav-link px-2"
            id={
              photoExpanded
                ? "white-background-text"
                : currentPage === "about"
                ? "nav-links-actv"
                : ""
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            className="nav-link px-2"
            id={
              photoExpanded
                ? "white-background-text"
                : currentPage === "contact"
                ? "nav-links-actv"
                : ""
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

NavLinks.propTypes = {
  currentPage: PropTypes.string.isRequired,
  photoExpanded: PropTypes.bool,
};
