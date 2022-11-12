import { useNavigate } from "react-router-dom";
import icon from "../../constants/cart.svg";

const styles = {
  display: "flex",
  width: "100vw",
  backgroundColor: "black",
  color: "white",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 10px",
  boxSizing: "border-box",
  position: "sticky",
  top: "0",
};

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div id="navbar" style={styles}>
      <h1
        onClick={() => {
          navigate("/");
        }}
        style={{ textDecoration: "none", color: "inherit" }}>
        Магазин
      </h1>
      <img src={icon} alt="shopping cart" />
    </div>
  );
}
