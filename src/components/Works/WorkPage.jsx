import PropTypes from "prop-types";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

import Xnav from "../shared/Xnav";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ScrollToTop from "../shared/ScrollToTop";
import IFrame from "./IFrame";
import ImgCard from "./ImgCard";
import Carousel from "./Caroulsel";

export default function WorkPage({
  workDetails,
  isCollapsed,
  setIsCollapsed,
  setUserToggled,
  actvPage,
  setActvPage,
}) {
  const [photoExpanded, setPhotoExpanded] = useState(false);
  const [workImage, setWorkImage] = useState("");
  const [typeImg, setTypeImg] = useState("");
  const [showX, setShowX] = useState(false);

  useEffect(() => {
    if (photoExpanded) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [photoExpanded]);

  return (
    <div
      className={"black-background"}
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
            currentPage=""
            photoExpanded={photoExpanded}
          />
          <div>
            <div className="container-fluid">
              <div className="mb-2 mt-2 pt-3 container-sm">
                <p className="work-page pb-5">{workDetails.about}</p>
                {workDetails.info && (
                  <p className="work-page pb-5"> {workDetails.info} </p>
                )}
                <p className="work-page pb-3">{workDetails.role}</p>
              </div>
              {workDetails.videoURL && (
                <IFrame videoSrc={workDetails.videoURL} />
              )}
              {workDetails.imagesURLS && (
                <div className="album py-5">
                  <div className="container-xxl">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-3 ">
                      {workDetails.imagesURLS.map((image, index) => (
                        <ImgCard
                          srcImg={image}
                          key={index}
                          setPhotoExpanded={setPhotoExpanded}
                          setWorkImage={setWorkImage}
                          imageNumber={index}
                          typeImg="work"
                          setTypeImg={setTypeImg}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {workDetails.event && (
                <>
                  <p className="work-page pb-3 pt-3">
                    {workDetails.event.name}
                  </p>
                  <div className="album py-5">
                    <div className="container">
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
                        {workDetails.event.images.map((image, index) => (
                          <ImgCard
                            srcImg={image}
                            key={index}
                            setPhotoExpanded={setPhotoExpanded}
                            setWorkImage={setWorkImage}
                            imageNumber={index}
                            typeImg="extra"
                            setTypeImg={setTypeImg}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
              {workDetails.rights && (
                <p className="work-page pb-3 pt-3">{workDetails.rights}</p>
              )}
            </div>

            <div className="home-footer-padding">
              <Footer iconSize="32" />
            </div>

            <ScrollToTop />
          </div>

          {photoExpanded && (
            <div className="d-flex justify-content-center">
              {workImage !== "" && (
                <Carousel
                  workImage={workImage}
                  imagesURLS={
                    typeImg === "work"
                      ? workDetails.imagesURLS
                      : workDetails.event.images
                  }
                />
              )}

              <div
                className={`x-button-about ${showX ? "visible" : ""} `}
                onClick={() => {
                  setPhotoExpanded(false);
                  setShowX(false);
                  setWorkImage("");
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

WorkPage.propTypes = {
  workDetails: PropTypes.object.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  setIsCollapsed: PropTypes.func,
  setUserToggled: PropTypes.func,
  actvPage: PropTypes.string,
  setActvPage: PropTypes.func,
};
