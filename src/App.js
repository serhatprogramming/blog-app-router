import BlogList from "./views/BlogList";
import UserList from "./views/UserList";
import Login from "./views/Login";
import About from "./views/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogDetails from "./views/BlogDetails";
import UserDetails from "./views/UserDetails";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
  };

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
          {loggedIn && <button onClick={toggleLogin}>Logout</button>}
        </div>
        <h2>Welcome to Blog Application</h2>
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? <BlogList /> : <Login toggleLogin={toggleLogin} />
            }
          />
          <Route path="/users" element={<UserList />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
