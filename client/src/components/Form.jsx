const styles = {
  button: {
    color: "white",
    backgroundColor: "#2B78E4",
    fontWeight: "bold",
    borderRadius: "5px",
    border: "#66BBFF",
    margin: "10px 5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    margin: "10px 0",
  },
  // Resto de tus estilos...
};

// Estilos para el contenedor flex
const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
};

// Estilos para las columnas
const columnStyle = {
  flex: "1",
  margin: "0 20px",
};

const Form = ({
  submitFunction,
  onChangeFunction,
  petName,
  petType,
  petDescription,
  skillOne,
  skillTwo,
  skillThree,
  setPetName,
  setPetType,
  setPetDescription,
  setSkillOne,
  setSkillTwo,
  setSkillThree,
  buttonText,
  errors,
}) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <form
          onSubmit={submitFunction}
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "solid",
            width: "500px",
            padding: "10px",
          }}
        >
          <div style={{ flex: 1, paddingRight: "20px" }}>
            {" "}
            {/* Columna Izquierda */}
            {errors &&
              errors.map((error, index) => (
                <p key={index} style={styles.error}>
                  {error}
                </p>
              ))}
            <p>Pet Name:</p>
            <input
              type="text"
              onChange={(e) => setPetName(e.target.value)}
              value={petName}
            />
            <p>Pet Type:</p>
            <input
              type="text"
              onChange={(e) => setPetType(e.target.value)}
              value={petType}
            />
            <p>Pet Description:</p>
            <input
              type="text"
              onChange={(e) => setPetDescription(e.target.value)}
              value={petDescription}
            />
            <br />
            <br />
            <input type="submit" value={buttonText} style={styles.button} />
          </div>

          <div style={{ flex: 1 }}>
            {" "}
            {/* Columna Derecha */}
            <p>Skills (optional):</p>
            <p>Skill 1:</p>
            <input
              type="text"
              onChange={(e) => setSkillOne(e.target.value)}
              value={skillOne}
            />
            <p>Skill 2:</p>
            <input
              type="text"
              onChange={(e) => setSkillTwo(e.target.value)}
              value={skillTwo}
            />
            <p>Skill 3:</p>
            <input
              type="text"
              onChange={(e) => setSkillThree(e.target.value)}
              value={skillThree}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
