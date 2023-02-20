import React from 'react'
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import github from "../assets/github.svg"
const Footer = () => {
  return (
    <div className='footer--box'>
      
     <a href='https://twitter.com/mr_micdaniel' target='_blank'> <img src={twitter} className="footer--icons"/></a>
      <a href='https://facebook.com/danphilips1997' target='_blank'> <img src={facebook} className="footer--icons"/></a>
      <a href='https://instagram.com/mr_micdaniel' target='_blank'> <img src={instagram} className="footer--icons"/></a>
      <a href='https://github.com/Mbazu-Daniel' target='_blank'> <img src={github} className="footer--icons"/></a>

    </div>
  )
}

export default Footer