import React from "react"

const Header = ()=> {
    return (
        <div className="header">
            <div className="title"> Putatoe : One Solution </div>
            <div className="title-description"> PUTATOE TECHNOLOGIES PRIVATE LIMITED </div>

            <div className="header-icons">
                <div className="header-icon">
                    <div className="header-icon-top">4.3 <i className="fa fa-star"/></div>
                    <div className="header-icon-bottom">95 reviews</div>
                </div>
                <div className="header-icon">
                    <div className="header-icon-top">5K+</div>
                    <div className="header-icon-bottom">Downloads</div>
                </div>
                <div className="header-icon">
                    <div className="header-icon-top">3+</div>
                    <div className="header-icon-bottom">Rated for 3+</div>
                </div>
              
            </div>

            <div className="install-wishlist">
                <div className="btn-install">Install</div>
                <div className="btn-wishlist">
                <svg className="wishlist-icon" width="24" height="24" viewBox="0 0 24 24" fill="green"><path fillRule="evenodd" clipRule="evenodd" d="M7 3H17C18.1045 3 19 3.8955 19 5V21L12 18L5 21L5.01075 5C5.01075 3.8955 5.8965 3 7 3ZM12 15.824L17 18V5H7V18L12 15.824ZM13 7V9H15V11H13V13H11V11H9V9H11V7H13Z"></path></svg>
               
                    Add to wishlist</div>
            </div>
        </div>
    )
}


export {Header}