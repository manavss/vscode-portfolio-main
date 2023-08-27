import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Github from "./pages/Github";
import Settings from "./pages/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("nightOwl");
  const changeTheme = (theme) => {
    setTheme(theme);
  };
  // console.log(theme);
  return (
    <div className={`min-h-full theme-${theme}`}>
      <BrowserRouter>
        <NavBar theme={theme} />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/github" element={<Github />} />
            <Route
              path="/settings"
              element={<Settings changeTheme={changeTheme} />}
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
