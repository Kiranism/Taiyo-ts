import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Graph from "./pages/Graph";
import Leaflet from "./pages/Leaflet";
import EditContact from "./pages/EditContact";
import AddContact from "./pages/AddContact";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/contact" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/add" element={<AddContact />} />
            <Route path="/contact/edit/:id" element={<EditContact />} />
            <Route path="/map" element={<Leaflet />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/error" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
