///FOLDER NAMES MUST BE SMALL///////////
///EXTENTION MUST BE WRITTEN////////////
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarBootstrap from "./Component/sidebar/SidebarBootstrap";
import HomePage from "./pages/homePage/HomePage.js";
import Header from "./Component/header/Header.js";
import Footer from "./Component/footer/Footer.js";
import Programs from "./pages/programs/Programs";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Statistics from "./pages/statisticsPage/Statistics.jsx";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Header />
          <SidebarBootstrap />
        </nav>
        <Routes>
          <Route path="/registration">{/* <RegistrationPage /> */}</Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
