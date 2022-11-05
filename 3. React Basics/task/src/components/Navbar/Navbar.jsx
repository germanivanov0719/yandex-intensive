import icon from "../../cart.svg";

const styles = {
  display: "flex",
  width: "100vw",
  backgroundColor: "black",
  color: "white",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 10px",
  boxSizing: 'border-box',
};

export default function Navbar() {
  return (
    <div id="navbar" style={styles}>
      <h1><a href='/' style={{textDecoration: "none", color: "inherit"}}>Магазин</a></h1>
      <img src={icon} alt="shopping cart" />
    </div>
  );
}
