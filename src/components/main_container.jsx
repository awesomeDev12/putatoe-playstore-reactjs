import React from "react";
import { Header } from "./header"
import { AboutApp } from "./about_app";
import { Screenshots } from "./screenshots";
import { DataSafety } from "./data_safety";
import { RatingAndReviews } from "./ratings_and_reviews";




const MainContainer = ()=> {


    return (
        <div className="main-container">
            <Header />
            <Screenshots />
            <AboutApp />
            <DataSafety />
            <RatingAndReviews />

        </div>

    )

}

export {MainContainer}