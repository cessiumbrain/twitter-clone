//Components
import LeftNav from "./LeftNavComponent";
import MainTweet from "./MainTweetComponent";
import TweetFeed from "../TweetFeedComponent";

import Settings from "./SettingsComponent";
import NewsFeed from "./NewsFeedComponent";

const Home = (props)=>{
    return(
        <>
        <LeftNav
            currentUser={props.currentUser}
        />
                <div className="center-div">
                    <div className="home-bar">
                        <span>Home</span>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <MainTweet></MainTweet>
                    <div className="more-tweets">
                        <span>
                            More Tweets
                        </span>
                    </div>
                    <TweetFeed
                    tweets={props.tweets}></TweetFeed>
                </div>
                <div className="right-div">
                    <input className="search-bar"></input>
                    <NewsFeed></NewsFeed>
                </div>

        </>
    )
}

export default Home