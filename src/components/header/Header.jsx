import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://i.pinimg.com/736x/dd/57/7b/dd577b08c0d5949c4ad202a797ed7940.jpg" alt="" className="headerImg" />
    </div>
  )
}
