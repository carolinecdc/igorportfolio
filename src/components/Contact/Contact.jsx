import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Xnav from "../shared/Xnav";
import ContactForm from "./ContactForm";
import PropTypes from "prop-types";

function Contact({
  isCollapsed,
  setIsCollapsed,
  setUserToggled,
  actvPage,
  setActvPage,
}) {
  return (
    <div className="black-background">
      {isCollapsed ? (
        <>
          <Header
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            setUserToggled={setUserToggled}
            setActvPage={setActvPage}
            currentPage="contact"
            photoExpanded={false}
          />
          <ContactForm />
          <div className="footer-menu">
            <Footer iconSize="32" />
          </div>
        </>
      ) : (
        <Xnav
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          setUserToggled={setUserToggled}
          actvPage={actvPage}
        />
      )}
    </div>
  );
}

export default Contact;

Contact.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  setIsCollapsed: PropTypes.func,
  setUserToggled: PropTypes.func,
  actvPage: PropTypes.string,
  setActvPage: PropTypes.func,
};
