import profilePic from '../assets/profilePic.png'
import { useState } from 'react'


const MainTweet = (props)=>{
    const [tweet, setTweet] = useState(``)
    return(
        <div>
            <div className="main-tweet-div">
                <img src={profilePic}></img>
                <div className="text-and-vis-div">
                    <textarea placeholder={'What\'s happening'} value={tweet} onChange={(e)=>{setTweet(e.target.value)}}></textarea>   
                    <div className="visibility-div">
                        <i className="fa-solid fa-earth-americas"></i><span className="visibility-span">Everyone can reply</span>   
                    </div> 
                    <div className="tweet-options-div">
                        <div className="icon-container">
                            <i className="fa-regular fa-image"></i>
                        <i className="fa-solid fa-gif"></i>
                        <i class="fa-solid fa-chart-bar"></i>
                        <i class="fa-regular fa-face-smile"></i>
                        <i class="fa-regular fa-calendar-clock"></i>
                        <i class="fa-regular fa-calendar"></i>
                        </div>
                        
                        <div className="main-tweet-button">Tweet</div>
                    </div>
                </div>
                
            </div>
            
            
           

        </div>
    )
}

export default MainTweet