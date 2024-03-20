import React, { useState } from 'react'
import './Header.css'

const Header = ({mode,setMode}) => {

  return (
    <div className='Header'>

        <div className={`logo ${mode === true ? 'activeLogo' : ''}`}>Fadi <span>.</span></div>

        <div className="toggle-switch">
            <label className="switch-label">
                <input onChange={(e)=>{setMode(!mode)}} type="checkbox" className="checkbox"/>
                <span className="slider"></span>
            </label>
        </div>  

    </div>
  )
}

export default Header
