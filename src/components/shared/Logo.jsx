import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"} className="text-white text-decoration-none d-inline">
      <img src={logo} alt="logo" className="img-responsive" />
    </Link>
  );
}
