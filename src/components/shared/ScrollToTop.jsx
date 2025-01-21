import { useEffect, useState } from "react";
import NorthIcon from "@mui/icons-material/North";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`arrow-container ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <a>
        <NorthIcon sx={{ fontSize: 28 }} />
      </a>
    </div>
  );
}
