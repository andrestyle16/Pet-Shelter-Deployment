import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import AddPet from "./views/AddPet.jsx";
import PetDetails from "./views/PetDetails.jsx";
import EditPet from "./views/EditPet.jsx";
//import Form from "./components/Form.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets/new" element={<AddPet />} />
          <Route path="/pets/:id/edit" element={<EditPet />} />
          <Route path="/details" element={<PetDetails />} />
          <Route path="/pets/:id" element={<PetDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
