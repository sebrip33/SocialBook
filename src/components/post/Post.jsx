import "./post.scss"
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../dummyData"
import {useState} from "react"

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like -1 : like +1)
        setIsLiked(!isLiked)
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img 
                        className="postProfileImg" 
                        src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
 
                        alt="Woman with a hairdryer" />
                    <span className="postUsername">
                        {Users.filter((u) => u.id === post.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="Appartment" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" onClick = {likeHandler} alt="Like" />
                    <img className="likeIcon" src="assets/heart.png" onClick = {likeHandler} alt="Heart" />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomright">
                    <span className="postCommentText">
                        {post.comment} {post.comment === 1 ? "comment" : "comments"}
                    </span>
                </div>

            </div>
        </div>
    </div>
  )
}
