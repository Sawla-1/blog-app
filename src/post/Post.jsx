import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img src="https://i.pinimg.com/736x/e5/2a/7c/e52a7c54f203f3ab593f79c32099dd07.jpg" alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati 
        fugit, officiis aperiam id odio hic vel aspernatur corrupti in molestiae
         dolorem nemo, doloribus laboriosam quasi sint reprehenderit pariatur vero corporis!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati 
        fugit, officiis aperiam id odio hic vel aspernatur corrupti in molestiae
         dolorem nemo, doloribus laboriosam quasi sint reprehenderit pariatur vero corporis!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati 
        fugit, officiis aperiam id odio hic vel aspernatur corrupti in molestiae
         dolorem nemo, doloribus laboriosam quasi sint reprehenderit pariatur vero corporis!
      </p>
    </div>
  )
}
