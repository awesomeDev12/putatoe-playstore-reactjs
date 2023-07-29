import React, { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";



const Screenshots = ()=> {

    const [urls,setUrls] = useState([

           "https://play-lh.googleusercontent.com/2xJ7i0pEjX70yyINPDPKnL5b2U2VrP1XlvvwBbojcjjkmc7PKrII02fXcHcL50kXkw=w1052-h592",
      
            "https://play-lh.googleusercontent.com/h8AsP6-D9dldrjz9kv7gicmlqUuRlf7Ig9OI7NShfVIr0FkY16NM8Mx01x5YrzJcCX8=w1052-h592",

            "https://play-lh.googleusercontent.com/Tvq26Qkwt2EXs6cEBZZLr44ILBIuOXFPGTPk2PETR-s7g9_N-HiwzK8hJj7y51qAcZQ=w1052-h592",
 
            "https://play-lh.googleusercontent.com/ThFVJhYou5EeYpM4Zfn4A-yKIUiyftT4gYhClEow4MgLxH9nogx8tEZo13pcQaLaG84=w1052-h592",
    
            "https://play-lh.googleusercontent.com/hLnXg63bqq1mkLtKmqbQCNXapr4xsvZmmwDuusXYLdnXvaZCCn0YxQ4M0OBVI30r10Mw=w1052-h592",
    ])

    
    const rightBtnClick = ()=> {
        const firstItem = urls[0]
        let newUrls = []
        for(let i =1;i<urls.length;i++){
            newUrls.push(urls[i])
        }
        newUrls.push(firstItem)
        setUrls(newUrls)
    }

    const leftBtnClick = ()=> {
        const lastItem = urls[urls.length-1]
        let newUrls = [lastItem]
        for(let i=0;i<urls.length-1;i++){
            newUrls.push(urls[i])
        }

        setUrls(newUrls)
    }


    return (
        <>
        <div className="screenshots" >
            <div className="image-slider-container">
            {
                urls.map((url)=>{
                    return (
                        <img key={nanoid()} src={url} />
                    )
                })
            }
            </div>

            <div onClick={leftBtnClick} className="arrow left-arrow"> &lt; </div>
            <div onClick={rightBtnClick} className="arrow right-arrow"> &gt; </div>
        </div>

            
        </>
     
    )
}

export {Screenshots}