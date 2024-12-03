import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/" >HOME</Link>
            </li>
            <li className="topListItem"><Link className="link" to="/about" >ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/contact" >CONTACT</Link></li>
            <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user? (
            <img className="topImg" src="https://scontent.fphs2-1.fna.fbcdn.net/v/t39.30808-1/438255949_1256588621988739_1254776741703787855_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=105&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=nAU7zMQhRXsQ7kNvgFNItpr&_nc_zt=24&_nc_ht=scontent.fphs2-1.fna&_nc_gid=A-pKB-FwG-OZ_ffDroAnVwa&oh=00_AYAs8Yl64tdnira7F_FmsIZ9xDwfb8RT8QnZIXbyjRsw-g&oe=674B0935" alt="" />
          ) : (
            <ul className="topList">
              <li className="topListItem"><Link className="link" to="/login" >LOGIN</Link></li>
              <li className="topListItem"><Link className="link" to="/register" >REGISTER</Link></li>
            </ul>
          )
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
