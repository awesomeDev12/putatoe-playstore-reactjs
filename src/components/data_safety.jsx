import React from "react";

const DataSafety = ()=> {
    return (
        <div className="data-safety">
            <div className="title">Data Safety</div>
            <div className="description">
        <p>Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age. The developer provided this information and may update it over time.</p>
            </div>

            <div className="widget-container">
                <div className="widget">
                    <div className="icon"><i className="fa fa-share-alt" /></div>
                    <div className="text">No data shared with third parties <br/>
                    <span className="second-line">
                        <a href="https://support.google.com/googleplay?p=data-safety&hl=en" >
                        Learn more</a> about how developers declare sharing 
                    
                    </span>
                </div>
                </div>
                <div className="widget">
                    <div className="icon"><i className="fa fa-cloud-upload" /></div>
                    <div className="text">This app may collect these data types <br/>
<span className="second-line"> Location, Personal info and 2 others  </span> </div>
                </div>
                <div className="widget">
                    <div className="icon"><i className="fa fa-minus-circle" /></div>
                    <div className="text">Data isn’t encrypted</div>
                </div>
                <div className="widget">
                    <div className="icon"><i className="fa fa-trash" /></div>
                    <div className="text">You can request that data be deleted</div>
                </div>
                
            </div>
        </div>
    )
}

export {DataSafety}