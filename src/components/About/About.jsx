import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Image from "../shared/Image";
import PropTypes from "prop-types";
import Xnav from "../shared/Xnav";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

function About({
  isCollapsed,
  setIsCollapsed,
  setUserToggled,
  actvPage,
  setActvPage,
}) {
  const [photoExpanded, setPhotoExpanded] = useState(false);
  const [showX, setShowX] = useState(false);

  useEffect(() => {
    const appRoot = document.getElementById("root");
    if (photoExpanded) {
      document.body.classList.add("no-scroll");
      appRoot.classList.add("disable-background");
    } else {
      document.body.classList.remove("no-scroll");
      appRoot.classList.remove("disable-background");
    }
    return () => {
      document.body.classList.remove("no-scroll");
      appRoot.classList.remove("disable-background");
    };
  }, [photoExpanded]);

  return (
    <div
      className="black-background"
      onMouseOver={() => {
        if (photoExpanded) setShowX(true);
      }}
      onMouseOut={() => {
        setShowX(false);
      }}
    >
      {isCollapsed ? (
        <>
          <Header
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            setUserToggled={setUserToggled}
            setActvPage={setActvPage}
            currentPage="about"
            photoExpanded={photoExpanded}
          />
          <div className="about">
            <div className="container-fluid "></div>
            <main>
              <div>
                <div>
                  <Image
                    imageURL="https://cdn.myportfolio.com/38eb18c9-39cb-4c22-bf44-d1dfc5122e89/e924bbae-e8ee-40ac-bca6-117110f3670c.jpg?h=0150fb695bae8fdcb6654664c8203253"
                    setPhotoExpanded={setPhotoExpanded}
                    expanded={false}
                  />
                </div>
                <div className="mb-2 mt-2 pt-3">
                  <h1>IGOR STAUB ZAGO</h1>
                </div>
                <div>
                  <p>GAME DESIGNER</p>
                  <p>GAME DEVELOPMENT SPECIALIST</p>
                </div>
              </div>
            </main>
          </div>
          <Footer iconSize="32" />

          {photoExpanded && (
            <div className="d-flex justify-content-center expanded-overlay white-background carousel-position">
              <Image
                imageURL="https://cdn.myportfolio.com/38eb18c9-39cb-4c22-bf44-d1dfc5122e89/e924bbae-e8ee-40ac-bca6-117110f3670c.jpg?h=0150fb695bae8fdcb6654664c8203253"
                setPhotoExpanded={setPhotoExpanded}
                imgType="photo"
                expanded={true}
              />

              <div
                className={`x-button-about expanded-overlay ${
                  showX ? "visible" : ""
                }`}
                onClick={() => {
                  setPhotoExpanded(false);
                  setShowX(false);
                }}
              >
                <CloseIcon />
              </div>
            </div>
          )}
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

export default About;

About.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  setIsCollapsed: PropTypes.func,
  setUserToggled: PropTypes.func,
  actvPage: PropTypes.string,
  setActvPage: PropTypes.func,
};
