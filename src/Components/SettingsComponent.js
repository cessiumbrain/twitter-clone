import { useEffect, useState } from "react";
import profileblank from '../assets/profile-blank.png'


const Settings = (props)=>{
    const [image, setImage] = useState(profileblank)
    useEffect(()=>{
        console.log(image)
    })
    return(
        <div className="settings-div">
            <div className="settings-secondary-div">
                <input className="add-photo-button" type="file" 
                onChange={async (e)=>{
                    var reader = new FileReader()
                    reader.readAsDataURL(e.target.files[0])
                    reader.addEventListener('load', ()=>{
                        setImage(reader.result)
                    })
                }}/>
            </div>

         <img src={image}></img>
        </div>
    )
}

export default Settings