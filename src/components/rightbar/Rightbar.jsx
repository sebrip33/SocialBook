import './rightbar.scss'
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
  const HomeRightBar = () => {
    return (
    <>
    <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="Gift" />
          <span className="birthdayText">
            <b>Rudy Gary</b> and <b>3 other friends</b> have a birthday today!
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.jpg" alt="Ad" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u}/>
          ))}
        </ul>
    </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
        </div>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
        </div>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/woman1.jpg" alt="friend" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Alex Durden</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/homme3.jpg" alt="friend" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Alex Durden</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/woman3.jpg" alt="friend" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Alex Durden</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/homme5.jpeg" alt="friend" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Alex Durden</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/woman2.jpg" alt="friend" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Alex Durden</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/woman5.jpeg" alt="friend" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Alex Durden</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        { profile ? <ProfileRightbar /> : <HomeRightBar/> }
      </div>
    </div>
  )
}
