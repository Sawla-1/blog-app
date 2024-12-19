import { useEffect, useState } from "react"
import axios from "axios";
import "./sidebar.css"


export default function Sidebar() {

  const [cats,setCats] = useState({});

  useEffect(()=>{
    const getCats = async () => {
      const res = await axios.get("/categories");
      console.log(res.data);
      setCats(res.data);
    };
    getCats();
  },[])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="https://i.pinimg.com/736x/9f/99/e4/9f99e479b49ea43255b72cbc3b4ca30f.jpg" alt="" />
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Ipsam omnis tempora quam, saepe maiores cupiditate excepturi
              velit obcaecati aspernatur.
        </p>
      </div>

      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            {cats.map((c)=>(
              <li className="sidebarListItem">{c.name}</li>
            ))}
        </ul>
      </div>

      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
