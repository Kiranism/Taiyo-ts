import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Graph from "./pages/Graph";
import Leaflet from "./pages/Leaflet";
import EditContact from "./pages/EditContact";
import ViewContact from "./pages/ViewContact";
import AddContact from "./pages/AddContact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Contact />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
            <Route path="/map" element={<Leaflet />} />
            <Route path="/graph" element={<Graph />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;