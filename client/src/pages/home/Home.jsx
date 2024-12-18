import { useEffect, useState } from "react";
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import axios from "axios";

export default function Home() {
// Fetch data from backend(mongodb) with axios
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    }
    fetchPosts();
  },[]);
  // Normal
  return (
    <>
      <Header/>
    <div className="home">
      <Posts posts={posts} />
      <Sidebar/>
    </div>
    </>
  )
}
