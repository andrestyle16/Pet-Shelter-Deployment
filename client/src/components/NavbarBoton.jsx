import { Link } from "react-router-dom";

const styles = {
  nav: {
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "red",
    color: "white",
    border: "1px solid black",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

const NavbarBoton = ({ link, linkText, subtitle, petName, onClick }) => {
  return (
    <>
      <nav style={styles.nav}>
        <h1>Pet Shelter</h1>
        <Link to={link}>{linkText}</Link>
      </nav>
      <div style={styles.container}>
        <h3>{subtitle}</h3>
        <button style={styles.button} onClick={onClick}>🏠 Adopt {petName}</button>
      </div>
    </>
  );
};

export default NavbarBoton;
