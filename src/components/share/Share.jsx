import "./share.scss";
import { PermMedia } from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/homme2.jpg" alt="Man looking at a window" className="shareProfileImg" />
                <input 
                    placeholder="I'd love to play tennis like Roger!" 
                    className="shareInput" 
                />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}