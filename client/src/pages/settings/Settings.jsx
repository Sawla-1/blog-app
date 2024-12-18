import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src="https://i.pinimg.com/736x/1c/e4/1a/1ce41ab5b929ec3c30ea02059bf72602.jpg" alt="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Asak" />
            <label>Email</label>
            <input type="email" placeholder="asak@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
