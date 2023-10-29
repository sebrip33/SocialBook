import "./profile.scss"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">  
                        <img className="profileCoverImg" src="assets/post/post3.jpg" alt="" />
                        <img className="profileUserImg" src="assets/person/homme4.jpg" alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Safak Kocaoglu</h4>
                        <span className="profileInfoDesc">Hello my friends !</span>

                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rightbar />
                </div>
            </div>
        </div>
    </>
  )
}
