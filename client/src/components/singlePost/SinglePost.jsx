import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://i.pinimg.com/736x/e5/2a/7c/e52a7c54f203f3ab593f79c32099dd07.jpg" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur
          <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlepostAuthor">Author: <b>Safak</b></span>
          <span className="singlepostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ex dolor ad.
           Maxime cum veniam unde totam laudantium recusandae, voluptatum porro et sapiente
            alias, magnam impedit dolores maiores debitis sed.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ex dolor ad.
           Maxime cum veniam unde totam laudantium recusandae, voluptatum porro et sapiente
            alias, magnam impedit dolores maiores debitis sed.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ex dolor ad.
           Maxime cum veniam unde totam laudantium recusandae, voluptatum porro et sapiente
            alias, magnam impedit dolores maiores debitis sed.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ex dolor ad.
           Maxime cum veniam unde totam laudantium recusandae, voluptatum porro et sapiente
            alias, magnam impedit dolores maiores debitis sed.
        </p>
      </div>
    </div>
  )
}
