import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import "../src/App.css";
import HomePage from "./frontend/pages/homePage/homePage";
import AboutPage from "./frontend/pages/aboutPage/aboutPage";
import UsersPage from "./frontend/pages/usersPage/usersPage";
import AddUser from "./frontend/pages/usersPage/adduserPage.jsx";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/users">
              Users Page
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/add">
              Add User
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </>
  )
}

export default App
