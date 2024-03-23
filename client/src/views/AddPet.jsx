import Navbar from "../components/Navbar.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form.jsx";

const style_container = {
  width: "80%",
  margin: "0 auto",
};

const AddPet = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [skillOne, setSkillOne] = useState("");
  const [skillTwo, setSkillTwo] = useState("");
  const [skillThree, setSkillThree] = useState("");

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pets/new", {
        petName,
        petType,
        petDescription,
        skillOne,
        skillTwo,
        skillThree,
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
      <Navbar
        link="/"
        linkText="back to home"
        subtitle="Know a pet needing a home?"
      />
      <Form
        submitFunction={onSubmitHandler}
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
        buttonText={"📤 Add Pet"}
        errors={errors}
      />
    </div>
  );
};

export default AddPet;
