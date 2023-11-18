import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Upload from "./components/Upload";
import Project from "./components/Project";
import EditTranscripit from "./components/EditTranscript";
import Configuration from "./components/Configuration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="project" element={<Project />}>
          <Route path="Upload" element={<Upload />} />
          <Route path="EditTranscript" element={<EditTranscripit />} />
          <Route path="Configuration" element={<Configuration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
