import React from "react"
import gps from "../assets/googleplaystore.png"
const TopBar = ()=> {

  return (
    <>
        <div className="topbar">
            <a href="https://play.google.com/store/games">
            <img src={gps} className="googleplaystore-topbar-icon"/>
            </a>

            <div className="options">
              <div className="option-item">
                Games
              </div>
         
              <div className="option-item">
                Apps
              </div>

              <div className="option-item">
                Movies
              </div>

              <div className="option-item">
                Books
              </div>
              <div className="option-item">
                Kids
              </div>
            </div>

            <div className="topbar-right">
              
            </div>
            <div>h</div>
        
        </div>

    </>
  )

}


export {TopBar}
