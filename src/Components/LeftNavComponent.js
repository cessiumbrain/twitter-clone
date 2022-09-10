import logo from '../assets/logo.png'
import profilePic from '../assets/profilePic.png'

const NavProfile = (props)=>{
    return(
        <div className="nav-profile-div">
            <img className="profile-pic" src={profilePic}></img>
            <div className="names-display">
                <p><b>{props.currentUser.displayName}</b></p>
                <p>{'@'+props.currentUser.username}</p>

            </div>
            
            <i class="fa-solid fa-ellipsis"></i>
            </div>
    )
}

const LeftNav = (props) =>{
    return(
        <div className="left-div">
            <img className="logo-img" src={logo}></img>
            <div className="nav-container">
                <div className="nav-container-item">
                    <i className="fa-solid fa-house"></i>
                <span className="left-nav-label">Home</span>
                </div>
                <div className="nav-container-item">
                    <i className="fa-solid fa-hashtag"></i>
                    <span className="left-nav-label">Explore</span>
                </div>
                <div className='nav-container-item'>
                    <i className="fa-regular fa-bell"></i>
                    <span className='left-nav-label'>Notifications</span>
                </div>
                <div className='nav-container-item'>
                    <i className="fa-regular fa-envelope"></i>
                    <span className="left-nav-label">Messages</span>
                </div>
                <div className='nav-container-item'>
                    <i className="fa-regular fa-user"></i>
                    <span className="left-nav-label">Profile</span>
                </div>
                <div className="nav-container-item">
                    <i class="fa-solid fa-ellipsis"></i>
                    <span className="left-nav-label">More</span>
                </div>
                <div className='nav-container-item tweet-button'>
                    Tweet
                </div>
                <div className='nav-container-item mobile-tweet-button' id="mobile-tweet-button">
                    <i className="fa-solid fa-feather-pointed"></i>+
                </div>
            </div>
                
                

            <NavProfile
            currentUser={props.currentUser}
            />
        </div>
    )
}

export default LeftNav