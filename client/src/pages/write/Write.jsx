import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://i.pinimg.com/736x/e5/2a/7c/e52a7c54f203f3ab593f79c32099dd07.jpg" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>

        <div className="writeFormGroup">
            <textarea type="text" placeholder="Tell your story..." className="writeInput writeText"></textarea>
        </div>

        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
