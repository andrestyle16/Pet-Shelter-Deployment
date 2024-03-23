import { Link } from "react-router-dom";

const styles = {
  display: "flex",
  gap: "10px",
  justifyContent: "space-between",
  alignItems: "center",
};

const Navbar = ({ link, linkText, subtitle }) => {
  return (
    <>
      <nav style={styles}>
        <h1>Pet Shelter</h1>
        <Link to={link}>{linkText}</Link>
      </nav>
      <h3>{subtitle}</h3>
    </>
  );
};

export default Navbar;
