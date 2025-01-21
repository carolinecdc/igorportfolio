import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { useState, useEffect } from "react";

import WorkPage from "./components/Works/WorkPage";
import worksList from "./components/Works/worksList";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [userToggled, setUserToggled] = useState(false);
  const [actvPage, setActvPage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        {
          setIsCollapsed(true);
        }
      } else {
        if (userToggled) setIsCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [userToggled]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              setUserToggled={setUserToggled}
              actvPage={actvPage}
              setActvPage={setActvPage}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              setUserToggled={setUserToggled}
              actvPage={actvPage}
              setActvPage={setActvPage}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              setUserToggled={setUserToggled}
              userToggled={userToggled}
              actvPage={actvPage}
              setActvPage={setActvPage}
            />
          }
        />

        {worksList.map((work) => {
          return (
            <Route
              path={`${work.urlName}`}
              element={
                <WorkPage
                  workDetails={work}
                  isCollapsed={isCollapsed}
                  setIsCollapsed={setIsCollapsed}
                  setUserToggled={setUserToggled}
                  actvPage={actvPage}
                  setActvPage={setActvPage}
                />
              }
              key={work.id}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
