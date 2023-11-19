import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Header from "../shared/Header/Header.jsx";
import "./App.scss";
import Experts from "../pages/Experts/Experts.jsx";
import Blog from "../pages/Blog/Blog.jsx";

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/experts" element={<Experts />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
