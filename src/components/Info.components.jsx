import React from 'react'
import profile from "../assets/profile.png"
import mail from "../assets/mail.svg"
import linkedin from "../assets/linkedin.svg"


const Info = () => {
  return (
    <div>
        <img src={profile} className="profile--img"/>
     
        <h1 className="profile--name"> Daniel Mbazu </h1>
        <h2 className="profile--role"> Blockchain Developer </h2>
        <h3 className="profile--website"> <a href='https://learnweb3.io/profiles/mr_micdaniel' target="_blank"> danielmbazu.profile </a> </h3>

        <div className="profile--details">
        <button className='profile--mail'>
        <a href='mailto:mbazudaniel97@gmail.com' target="_blank">
            <img src={mail} className="profile--mail_icon"/>
            <h4 className='profile--mail_text'>Email</h4>
            </a>
        </button>
        <button className='profile--linkedin'>
        <a href='https://linkedin.com/in/mbazudaniel' target="_blank">
            <img src={linkedin} className="profile--linkedin_icon"/>
            <h4 className='profile--linkedin_text'>Linkedin</h4>
            </a>
        </button>
        </div>

    </div>
  )
}

export default Info