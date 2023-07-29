import React, { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";


const Image = (props)=>{
    return (
        <img src={props.url} height="300px" />
    )

}

const Screenshots = ()=> {

    const urls = [

           "https://play-lh.googleusercontent.com/2xJ7i0pEjX70yyINPDPKnL5b2U2VrP1XlvvwBbojcjjkmc7PKrII02fXcHcL50kXkw=w1052-h592",
      
            "https://play-lh.googleusercontent.com/h8AsP6-D9dldrjz9kv7gicmlqUuRlf7Ig9OI7NShfVIr0FkY16NM8Mx01x5YrzJcCX8=w1052-h592",

            "https://play-lh.googleusercontent.com/Tvq26Qkwt2EXs6cEBZZLr44ILBIuOXFPGTPk2PETR-s7g9_N-HiwzK8hJj7y51qAcZQ=w1052-h592",
 
            "https://play-lh.googleusercontent.com/ThFVJhYou5EeYpM4Zfn4A-yKIUiyftT4gYhClEow4MgLxH9nogx8tEZo13pcQaLaG84=w1052-h592",
    
            "https://play-lh.googleusercontent.com/hLnXg63bqq1mkLtKmqbQCNXapr4xsvZmmwDuusXYLdnXvaZCCn0YxQ4M0OBVI30r10Mw=w1052-h592",
    ]

    
    const rightBtnClick = ()=> {
       
    }

    const leftBtnClick = ()=> {
        console.log()
    }


    return (
        <>
        <div className="screenshots" >
            

            <div onClick={leftBtnClick} className="left-arrow"> &lt; </div>
            <div onClick={rightBtnClick} className="right-arrow"> &gt; </div>
        </div>

            
        </>
     
    )
}

export {Screenshots}