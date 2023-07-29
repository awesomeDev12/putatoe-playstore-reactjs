import React from "react"
import gps from "../assets/googleplaystore.png"
const TopBar = ()=> {

  return (
    <>
        <div className="topbar">
            <img src={gps} className="googleplaystore-topbar-icon"/>

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
              Hello
            </div>
            <div>h</div>
        
        </div>

    </>
  )

}


export {TopBar}
