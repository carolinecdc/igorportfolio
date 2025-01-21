import Icons from "./Icons";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";

export default function Header({
  isCollapsed,
  setIsCollapsed,
  setUserToggled,
  setActvPage,
  currentPage,
  photoExpanded,
}) {
  function toggleNavBar() {
    setIsCollapsed(!isCollapsed);
    setUserToggled(true);
    setActvPage(currentPage);
  }

  return (
    <header className="py-5 mb-3 ">
      <nav className="navbar navbar-expand-md d-flex justify-content-between align-items-center flex-nowrap">
        <div className="navbar-nav  header-nav">
          <div className="d-none d-md-flex">
            <NavLinks currentPage={currentPage} photoExpanded={photoExpanded} />
          </div>
          <div className="d-flex d-md-none">
            <button className="navbar-toggler border-0 ms-auto" disabled hidden>
              <MenuIcon fontSize="large" />
            </button>
          </div>
        </div>
        <Logo />

        <div className="navbar-nav  header-nav">
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleNavBar}
            aria-controls="navbarContent"
            aria-label="Toggle navigation"
            aria-expanded={!isCollapsed}
          >
            <MenuIcon className="menu-icon" fontSize="large" />
          </button>
          <div
            className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
            id="navbarContent"
          >
            <Icons iconsClass="nav col-12 col-md-auto" iconSize="32" />
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  setIsCollapsed: PropTypes.func,
  setUserToggled: PropTypes.func,
  currentPage: PropTypes.string.isRequired,
  setActvPage: PropTypes.func,
  photoExpanded: PropTypes.bool,
};
