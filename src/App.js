import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Upload from "./components/Upload";
import Project from "./components/Project";
import EditTranscripit from "./components/EditTranscript";
import Configuration from "./components/Configuration";
import {Home} from "./components/Home"
import Profile from "./components/Profile"
import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      let userObj = JSON.parse(user);
      setUser(userObj);
    }
  }, []);

  return (
    <BrowserRouter>
     <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/project" element={<Project />}>
          <Route path=":id/Upload" element={<Upload />} />
          <Route path="EditTranscript" element={<EditTranscripit />} />
          <Route path="Configuration" element={<Configuration />} />

        </Route>
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
