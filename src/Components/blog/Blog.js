import React, { Component } from "react";
import "./Blog.css";

export default class Blog extends Component {
  render() {
    function getNumberOfDays(start, end) {
      const date1 = new Date(start);
      const date2 = new Date(end);

      // One day in milliseconds
      const oneDay = 1000 * 60 * 60 * 24;

      // Calculating the time difference between two dates
      const diffInTime = date2.getTime() - date1.getTime();

      // Calculating the no. of days between two dates
      const diffInDays = Math.round(diffInTime / oneDay);

      return diffInDays;
    }
    return (
      <div
        id="posts0"
        style={{
          paddingTop: "20vh",
          backgroundColor: "rgb(176, 234, 205,0.5)",
          minHeight: "100vh",
        }}
      >
        {/* <h1
          id="countposts"
          style={{ textAlign: "left", padding: "0px 30px 0px 30px" }}
        >
          {" "}
          No.of Posts: 1
        </h1> */}

        <div class="blogs-container">
       
        <div class="blog-card">
            <figure>
             
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Your Blog Title"
                />
              
            </figure>
            <div class="blog-content">
              <h3 class="blog-title" style={{ textAlign: "left" }}>
                <a href="/How Eggoz Is Building A Protein Positive India" style={{ fontWeight: "700",fontSize:"18px" }}>
                  How Eggoz Is Building A Protein Positive India
                  <br />
                  <h5 style={{ textAlign: "justify" }}>
                    India is a Protein Hungry Country. More than 80% of Indians
                    are protein deficient according to IMRB. While the world
                    consu...{" "}
                  </h5>
                </a>
              </h3>
          
              <div class="blog-footer"   style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    
                  }}>
                {" "}
               
                  <span class="blog-category" href="/blog1">
                    Nutrition
                    <span class="blog-date" href="/blog1">
                      |&nbsp;{getNumberOfDays("2/24/2022", new Date())} days ago
                    </span>
                  </span>
                  <span class="blog" style={{ textAlign: "right" }}>
                    Company's insight&ensp;&ensp;&ensp;&ensp;&ensp;
                  </span>
              </div> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
