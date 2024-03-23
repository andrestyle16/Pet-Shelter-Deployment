import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavbarBoton from "../components/NavbarBoton.jsx";

const style_container = {
  width: "80%",
  margin: "0 auto",
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    maxWidth: "500px",
    padding: "20px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  section: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    padding: "10px",
    borderBottom: "1px solid #eee",
  },
  title: {
    marginRight: "10px",
  },
  buttonLikeContainer: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
};

const PetDetails = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const [pet, setPet] = useState({
    petName: "",
    petType: "",
    petDescription: "",
    skillOne: "",
    skillTwo: "",
    skillThree: "",
    likes: 0,
  });

  const getPetById = async () => {
    try {
      let result = await axios.get(`http://localhost:8000/api/pets/${id}`);
      setPet({ ...result.data.pet, likes: 0 });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPetById();
  }, [id]);

  const handleLike = () => {
    setPet({ ...pet, likes: pet.likes + 1 });
  };

  const adoptPet = async () => {
    try {
      let result = await axios.delete(
        "http://localhost:8000/api/pets/delete/" + id
      );
      if (result.status === 200) navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div style={style_container}>
      <NavbarBoton
        link="/"
        linkText="back to home"
        subtitle={`Details about: ${pet.petName}`}
        petName={pet.petName}
        onClick={adoptPet}
      />
      <div style={styles.container}>
        {/* Pet Type */}
        <section style={styles.section}>
          <h3 style={styles.title}>Pet type:</h3>
          <label>{pet.petType}</label>
        </section>

        {/* Description */}
        <section style={styles.section}>
          <h3 style={styles.title}>Description:</h3>
          <label>{pet.petDescription}</label>
        </section>

        {/* Skills */}
        <section style={styles.section}>
          <h3 style={styles.title}>Skills:</h3>
          <label>
            {pet.skillOne} <br />
            {pet.skillTwo} <br />
            {pet.skillThree}
          </label>
        </section>

        {/* Like Button and Counter */}
        <div style={styles.buttonLikeContainer}>
          <button style={styles.button} onClick={handleLike}>
            👍 Like {pet.petName}
          </button>
          <p style={{ marginLeft: "10px" }}>{pet.likes} like(s)</p>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
