import "./post.scss"
import { MoreVert } from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/woman2.jpg" alt="Woman with a hairdryer" />
                    <span className="postUsername">Hairdryer-woman</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! It's my first post ^^</span>
                <img className="postImg" src="/assets/post/post1.jpg" alt="Appartment" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft"></div>
                <div className="postBottomright"></div>

            </div>
        </div>
    </div>
  )
}
