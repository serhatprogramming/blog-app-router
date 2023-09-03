import BlogList from "./views/BlogList";
import UserList from "./views/UserList";
import Login from "./views/Login";
import About from "./views/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogDetails from "./views/BlogDetails";

const App = () => {
  const menuStyle = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "200px",
  };
  return (
    <Router>
      <div>
        <div style={menuStyle}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
          <Link to="/login">Login</Link>
        </div>
        <h2>Welcome to Blog Application</h2>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
