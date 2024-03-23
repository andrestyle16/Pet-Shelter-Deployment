import Navbar from "../components/Navbar.jsx";
import CustomizedTables from "../components/Table.jsx";

const style_container = {
  width: "80%",
  margin: "0 auto"
}

const Home = () => {
  return (
    <div style={style_container}>
      <Navbar
        link="/pets/new"
        linkText="add a pet to the shelter"
        subtitle="These pets are looking for a good home"
      />
      <CustomizedTables />
    </div>
  );
};

export default Home;
