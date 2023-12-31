import User from "../components/User";
import { Link } from "react-router-dom";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe123",
      numberOfBlogs: 7,
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith456",
      numberOfBlogs: 12,
    },
    {
      id: 3,
      name: "Alice Johnson",
      username: "alicej",
      numberOfBlogs: 5,
    },
    {
      id: 4,
      name: "Bob Brown",
      username: "bobbrown",
      numberOfBlogs: 9,
    },
    {
      id: 5,
      name: "Ella Davis",
      username: "ellad",
      numberOfBlogs: 15,
    },
  ];

  return (
    <div>
      <h3>Users</h3>
      {users.map((user) => (
        <Link to={`/user/${user.id}`} key={user.id}>
          <User user={user} />
        </Link>
      ))}
    </div>
  );
};

export default UserList;
