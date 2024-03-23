import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const link_style = {
  color: "dodgerblue",
  textDecoration: "underline",
  cursor: "pointer",
};

export default function CustomizedTables() {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets/")
      .then((res) => {
        const sortedPets = res.data.pets.sort((a, b) => {
          return a.petType.localeCompare(b.petType);
        });
        setPets(sortedPets);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);

  const goToEdit = (petId) => {
    navigate(`/pets/${petId}/edit`);
  };

  const goToDetails = (petId) => {
    navigate(`/pets/${petId}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pets.map((pet, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{pet.petName}</StyledTableCell>
              <StyledTableCell>{pet.petType}</StyledTableCell>
              <StyledTableCell>
                {
                  <div>
                    <a style={link_style} onClick={() => goToDetails(pet._id)}>
                      Details
                    </a>
                    <label> | </label>
                    <a style={link_style} onClick={() => goToEdit(pet._id)}>
                      Edit
                    </a>
                  </div>
                }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
