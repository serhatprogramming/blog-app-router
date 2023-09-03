import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const blogs = [
    {
      id: 1,
      title: "The Art of Coding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      likes: 25,
    },
    {
      id: 2,
      title: "Exploring React Hooks",
      content: "React Hooks provide a new way to manage state and effects...",
      author: "Jane Smith",
      likes: 18,
    },
    {
      id: 3,
      title: "Tips for Web Development Beginners",
      content:
        "Starting a career in web development? Here are some useful tips...",
      author: "Alice Johnson",
      likes: 32,
    },
    {
      id: 4,
      title: "The Beauty of JavaScript",
      content: "JavaScript is a versatile language used for web development...",
      author: "Bob Brown",
      likes: 12,
    },
  ];

  const id = useParams().id;
  const blog = blogs.find((blog) => blog.id === Number(id));

  return (
    <div>
      <h3>{blog.title}</h3>
      <div>{blog.content}</div>
      <div>By {blog.author}</div>
      <div>Likes: {blog.likes}</div>
    </div>
  );
};

export default BlogDetails;
