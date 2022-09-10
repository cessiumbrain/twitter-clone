import profilePic from './assets/profilePic.png'

const TweetFeed = (props)=>{
   return(
    <div className="tweet-feed-div">
        {
            props.tweets ? props.tweets.map(tweet=>{
                return (
                    <Tweet tweet={tweet}></Tweet>
                )
            }) : ''
        }
    </div>
   )
}

const Tweet = (props) =>{
    console.log(props.tweet.Users.profile_pic)
    return(
        <div className="tweet-div">
            <div className="profile-pic-div">
                <img src={`data:image/png;base64, ${props.tweet.Users.profile_pic}`}></img>
            </div>
            <div className="tweet-content-div">
                <div className="tweet-header">
                    <span>{props.tweet.Users.display_name}</span>
                    <span>@{props.tweet.Users.username}</span>
                    <div className="tweet-text">
                    {props.tweet.text}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TweetFeed