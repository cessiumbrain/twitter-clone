import { Component } from "react";
import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//third party dependencies
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useFilePicker } from "use-file-picker";

import profilePic from '../assets/profilePic.png';

//Components
import LeftNav from "./LeftNavComponent";
import MainTweet from "./MainTweetComponent";
import TweetFeed from "../TweetFeedComponent";
import Signup from "./SignupComponent";
import Settings from "./SettingsComponent";
import NewsFeed from "./NewsFeedComponent";
import Home from "./HomeComponent";
import Login from "./LoginComponent";
import ErrorPage from "./ErrorPage";

const supabase = createClient(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_KEY)

class Main extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    login = async (email, password) =>{
        const { user, error } = await supabase.auth.signIn({
            email: email,
            password: password,
          })

        console.log(user, error)

        // this.setState({
        //     currentUser: 'user'
        // }, ()=>{console.log(this.state)})
    }

    test = async () =>{
        const data = await supabase.storage.from('profilepics').getPublicUrl('profilePic.png')

        console.log(data.data.publicUrl)
    }

    getTweets= async () =>{
        const tweets = await supabase.from('Tweets')
            .select(`
            *,
            Users("*")
        `)

        this.setState({
            tweets: tweets.data
        })

    }
    
    signup = async (formValues, navFunc) =>{
        // const {username, email, password, displayName} = formValues
        console.log(formValues)
        // create Auth Account
        supabase.auth.signUp({
            email: formValues.email,
            password: formValues.password
          })
            //then block for signup
            .then(async (userData)=>{
                console.log(userData)
                // create User DB row
                const {data: dbData, error: dbError} = await supabase
                .from('Users')
                .insert([{
                    username: formValues.username,
                    display_name: formValues.displayName,
                    auth_id: userData.user.id,
                }]).select('*')

                this.setState({
                    currentUser: dbData
                }, ()=>console.log(dbData))   

                
            })
            //catch block
            .catch(error=>{
                console.log(error)
            })

        //------------------------------------>
        //create User row in db
 

    }
    
    render(){

        return(
            <div className="main-div">
                <BrowserRouter>
                
                    <Routes>
                    {
                    //conditionally render routes based on currentUser?
                    this.state.currentUser ?                           
                    <>
                        <Route path="/" element={
                            <Home
                                currentUser={this.state.currentUser}
                            />
                            }/> 
                            <Route path="/login" element={
                        <Login
                        login={this.login}
                        currentUser={this.state.currentUser}
                        />}>
                    </Route> 
                    </>
                    
                         
                         : 
                         <>
                         <Route path="/error" element={<ErrorPage></ErrorPage>}></Route>
                         <Route path="/" element={
                            <Signup
                                signup={this.signup}></Signup>
                        }></Route> 
                    <Route path="/login" element={
                        <Login
                        login={this.login}
                        currentUser={this.state.currentUser}
                        />}>
                    </Route> 
                         </>
                       
                    }

                        
                    </Routes>
                </BrowserRouter>
                {/* <Settings></Settings> */}
                {/* <CreateAccount></CreateAccount> */}


            </div>
        )
    }
}

export default Main