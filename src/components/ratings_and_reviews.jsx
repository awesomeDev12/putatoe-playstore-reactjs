import { nanoid } from "nanoid";
import React from "react";

const Review = (props)=> {

    return (
        <>
            <div className="review">
                <div className="profile">
                    <div className="profile-pic">
                        <img 
                            className="profile-pic-icon"
                            width="32px" height="32px" 
                            src={props.profilePicUrl} 
                            alt="" 
                        />
                    </div>
                    <div className="profile-name">{props.profileName}</div>
                </div>

                <div className="rating-stars-and-review-date">
                    <div className="rating-stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </div>
                    <div className="review-date">{props.reviewDate}</div>
                </div>

                <div className="review-text">{props.reviewText}</div>

                <div className="found-helpful">{props.foundHelpful} people found this helpful</div>
                <div className="find-helpful">
                    <div className="find-helpful-text">Did you find this helpful</div>
                    <div className="find-helpful-btns">
                        <div className="find-helpful-btn">Yes</div>
                        <div className="find-helpful-btn">No</div>
                    </div>
                </div>

            </div>
        </>
    )
}

const RatingAndReviews = ()=> {

    const reviews = [
        {
            profilePicUrl:"https://play-lh.googleusercontent.com/a-/ACB-R5QFwbBphm0KKHWbJ0q-92LuRh9MuPXjeJpdrgIjnw=s64",
            profileName:"Sona Paswan",
            ratingStars:0,
            reviewDate:"February 21, 2023",
            reviewText:"Best app for always. I get extra rewards in the form of cash on all my recharges, every type of facility can be done very easily in this app, thank you PUTATOE",
            foundHelpful:"0"
        },
        {
            profilePicUrl:"https://play-lh.googleusercontent.com/a-/ACB-R5RoBEuWiIs5VGu-EGKYfWzo8F5XVFF6NuM1_0SJWA=s64",
            profileName:"Alok Srivastav",
            ratingStars:0,
            reviewDate:"October 2, 2022",
            reviewText:"Putato app is a one-stop solution for all my needs. It is the first time I have seen one app with so many features in one app. This app has services like Laundry, Groceries, and Housing Repair and Maintenance. Putato has Electronics, furniture, etc. I have personally found this app very interesting. It is a very convenient app. It is my friendly advice to everyone who wants to make their life easier and needs one app for all purposes should give putato a try.",
            foundHelpful:"2"
        },
        {
            profilePicUrl:"https://play-lh.googleusercontent.com/a/AGNmyxaoPS1OA48ghVOWK2s9QZKGFOG0q_Q1eYppgIQX=s64-mo",
            profileName:"Akshat Kamboj",
            ratingStars:0,
            reviewDate:"November 12, 2022",
            reviewText:"This is litreally fake,don't think that this is an Opportunity to anyone they will just call to you and take your interview. I was selected in this they took my interview on a call and selected me without providing any certification of selection and offer letter when I asked to do so they replied that it's a waste of time and revoked the internship, all was going good when they asked to download the app the moment we asked questions they claimed to be as silly.",
            foundHelpful:"15"
        },
        
    ]


    return (
        <div className="ratings-and-reviews">
            <div className="title">Ratings and reviews</div>
            <div className="ratings"> 
            </div>
            <div className="reviews">
                {
                    reviews.map((review)=>{

                        return (
                            <>
                                <Review 
                                    profilePicUrl={review.profilePicUrl}
                                    profileName={review.profileName}
                                    ratingStars={review.ratingStars}
                                    reviewDate={review.reviewDate}
                                    reviewText={review.reviewText}
                                    foundHelpful={review.foundHelpful}
                                 />
                            </>
                        )

                    })
                }

            </div>
        </div>
    )
}

export {RatingAndReviews}