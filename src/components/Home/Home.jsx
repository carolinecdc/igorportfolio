import Footer from "../shared/Footer";
import Header from "../shared/Header";
import PropTypes from "prop-types";
import Xnav from "../shared/Xnav";
import Cards from "./Cards";
import worksList from "../Works/worksList";
import ScrollToTop from "../shared/ScrollToTop";

function Home({
  isCollapsed,
  setIsCollapsed,
  setUserToggled,
  actvPage,
  setActvPage,
}) {
  return (
    <div className="black-background" id="home-padding">
      {isCollapsed ? (
        <>
          <Header
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            setUserToggled={setUserToggled}
            setActvPage={setActvPage}
            currentPage="work"
            photoExpanded={false}
          />
          <div className="container-fluid" id="home-padding">
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2 "
              id="home-padding"
            >
              {worksList.map((work) => (
                <Cards
                  key={work.id}
                  imgURL={work.imgURL}
                  name={work.name}
                  date={work.date}
                  urlName={work.urlName}
                />
              ))}
            </div>
          </div>
          <div className="home-footer-padding">
            <Footer iconSize="32" />
          </div>
          <ScrollToTop />
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

export default Home;
Home.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  setIsCollapsed: PropTypes.func,
  setUserToggled: PropTypes.func,
  actvPage: PropTypes.string,
  setActvPage: PropTypes.func,
};
