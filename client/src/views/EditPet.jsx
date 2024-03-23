import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import Form from "../components/Form.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const style_container = {
  width: "80%",
  margin: "0 auto"
}


const EditPet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [skillOne, setSkillOne] = useState("");
  const [skillTwo, setSkillTwo] = useState("");
  const [skillThree, setSkillThree] = useState("");

  const [errors, setErrors] = useState([]); // Agregar estado para errores

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets/" + id).then((res) => {
      console.log(res.data.pet);
      const pet = res.data.pet;
      setPetName(pet.petName || "");
      setPetType(pet.petType || "");
      setPetDescription(pet.petDescription || "");
      setSkillOne(pet.skillOne || "");
      setSkillTwo(pet.skillTwo || "");
      setSkillThree(pet.skillThree || "");
    });
  }, [id]);

  const updatePet = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/pets/update/" + id, { 
      petName, 
      petType, 
      petDescription, 
      skillOne, 
      skillTwo, 
      skillThree 
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const errorMessages = Object.values(err.response.data.errors).map(
            (error) => error.message
          );
          setErrors(errorMessages);
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div style={style_container}>
      <Navbar link="/" linkText="back to home" subtitle={`Edit ${petName}`} />
      <Form
        submitFunction={updatePet}
        setPetName={setPetName}
        setPetType={setPetType}
        setPetDescription={setPetDescription}
        setSkillOne={setSkillOne}
        setSkillTwo={setSkillTwo}
        setSkillThree={setSkillThree}
        petName={petName}
        petType={petType}
        petDescription={petDescription}
        skillOne={skillOne}
        skillTwo={skillTwo}
        skillThree={skillThree}
        buttonText={"✏️ Edit Pet"}
        errors={errors}
      />
    </div>
  );
};

export default EditPet;
