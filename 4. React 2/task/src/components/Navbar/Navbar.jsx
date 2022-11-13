import { useNavigate } from "react-router-dom";
import icon from "../../constants/cart.svg";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar clickable">
      <h1
        onClick={() => {
          navigate("/");
        }}>
        Магазин
      </h1>
      <img
        onClick={() => {
          navigate("/cart");
        }}
        src={icon}
        alt="shopping cart"
        className="clickable"
      />
    </div>
  );
}
