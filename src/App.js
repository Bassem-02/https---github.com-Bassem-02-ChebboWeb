import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import Footer from "./components/Footer";

const posts = [
  {
    id: 1,
    user: "John Doe",
    userImage: "/users/user_1.jpg",
    time: "2h",
    petImage: "/pets/pet_1.webp",
    likes: 10,
    comments: 5,
    phrase: "Just adopted this little cutie! 🐾 #NewPetParent",
  },
  {
    id: 2,
    user: "Jane Smith",
    userImage: "/users/user_2.jpg",
    time: "3h",
    petImage: "/pets/pet_2.jpeg",
    likes: 25,
    comments: 8,
    phrase: "Sunny days are better with my furry friend. ☀️🐶",
  },
  {
    id: 3,
    user: "Alice Johnson",
    userImage: "/users/user_2.jpg",
    time: "3h",
    petImage: "/pets/pet_3.jpg",
    likes: 15,
    comments: 3,
    phrase: "Who else loves lazy Sundays with their pet? 🛋️🐱",
  },
  {
    id: 4,
    user: "Bob Brown",
    userImage: "/users/user_3.avif",
    time: "5h",
    petImage: "/pets/pet_4.jpg",
    likes: 30,
    comments: 12,
    phrase: "Adventure buddy for life! 🏞️🐕",
  },
  {
    id: 5,
    user: "Charlie Davis",
    userImage: "/users/user_3.avif",
    time: "6h",
    petImage: "/pets/pet_5.jpg",
    likes: 20,
    comments: 7,
    phrase: "This little one brightens up my day. 🌟🐾",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="vh-100 d-flex flex-column">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
         <div className="container my-4 flex-grow-1">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;


