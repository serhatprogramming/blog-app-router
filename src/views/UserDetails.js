import { useParams } from "react-router-dom";

const UserDetails = () => {
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

  const id = useParams().id;
  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>User details</h2>
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Number of Blogs: {user.numberOfBlogs}</div>
    </div>
  );
};

export default UserDetails;
