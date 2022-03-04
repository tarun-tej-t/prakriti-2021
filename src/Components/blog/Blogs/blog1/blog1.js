import React, { Component } from "react";
import "./blog1.css";
import cover from "./Eggoz Pics/eggoz cover.webp";
import img1 from "./Eggoz Pics/EggozPic1.png";
import img2 from "./Eggoz Pics/img2.png";
import img3 from "./Eggoz Pics/img3.png";
import img4 from "./Eggoz Pics/img4.png";
import img5 from "./Eggoz Pics/img5.png";
import img6 from "./Eggoz Pics/img6.png";
import img7 from "./Eggoz Pics/img7.png";
import img8 from "./Eggoz Pics/img8.png";
import img9 from "./Eggoz Pics/img9.png";
import img10 from "./Eggoz Pics/img10.png";
import img11 from "./Eggoz Pics/img11.png";
import img12 from "./Eggoz Pics/img12.png";

export default class blog1 extends Component {
  render() {
    return (
      <div>
        <div  style={{ margin: "0 auto" }}>
          <div id="mainb1" class="bacon-blog-post bacon-shadow" style={{backgroundColor:"white"}}>
            <div class="containerb1">
              <img
                src={cover}
                class="wp-post-image"
                style={{ width: "100vw", height: "70vh" }}
              />
              <div class="centeredb1">
                <a
                  href="https://eggoz.in/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  How Eggoz Is Building A Protein Positive India
                </a>
              </div>
            </div>
            <div
              class="bacon-blog-post-inner"
              style={{
                padding: "14px",
                textAlign: "justify",
                fontSize: "large",
              }}
            >
              <h2></h2>
              <p>
                India is a Protein Hungry Country. More than 80% of Indians are
                protein deficient according to IMRB. While the world consumes 68
                grams of protein per day, an average Indian gets only 10-30
                grams of protein on his plate. In addition, our per-capita
                protein consumption is declining for both urban and rural areas.
              </p>
              <p>
                Good-quality meat and other fancy protein sources still remain a
                luxury for the masses and many Indians still rely on eggs to
                fulfill their daily protein requirements.
              </p>
              <p>
                {" "}
                Eggs are indeed a high-quality source of protein. They are
                widely available and affordable. They also contain ample amounts
                of vitamins and minerals that are essential for our body. But…
                <br />
              </p>{" "}
              <h2 style={{  fontWeight: "700" }}>
                How Good Are Indian Eggs?
              </h2>
              <br />
              <div style={{ display: "flex", flexDirection: "row" ,justifyContent: "center"}}>
                <img src={img1} class=" imageb1" />
              </div>
              <br />
              <p>
                India is the 2nd largest egg producer in the world. It has
                produced about 114 Billion eggs in the year 2019-20 and this
                market is expected to double every five years.
              </p>
              <br />
              <div style={{ display: "flex", flexDirection: "row",justifyContent: "center", }}>
                <img src={img2} class="imageb1" />
              </div><br/>
              <p>
                However, 98% of the Indian eggs are sold loose and unbranded.
                They are often low in quality and unhygienic. Sometimes they
                take more than 10 days to reach our plates after they are laid.
                As a result, almost 50 percent of the nutrients are lost from
                the eggs when we eat them.
              </p>
              <br />
              <div style={{ display: "flex", flexDirection: "row",justifyContent: "center" }}>
                <img src={img3} class="wp-post-image imageb1" />
              </div>
              <br />
              <p>
                In addition, the hens are fed with chemically loaded feed and
                are injected with steroids, hormones, and antibiotics. Traces of
                heavy metal contaminants are also found in some of the eggs
                available in the market which makes them unsafe for consumption.
              </p>
              <p>
                While this dearth in the quality of eggs can impact millions of
                Indians, there was no recallable brand that was solving this
                problem on a national level.
              </p>
              <h2 style={{  fontWeight: "700" }}>
                How Eggoz Comes at Rescue?
              </h2><br/>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img src={img4} class="wp-post-image imageb1" />
              </div><br/>
              <p>
                Eggoz is a brand of packaged eggs with a promise of freshness
                and quality. They are on a mission to revolutionize India’s
                protein consumption by bringing UV sanitized eggs fresh from the
                farm to plates of millions of consumers.
              </p>
              <p>
                Their eggs are free from any chemicals, steroids, and hormones
                and reach consumers within 36 hours of laying. This ensures that
                their eggs are healthier for consumption and have a high
                bio-availability of protein.
              </p>
              <p>
                But maintaining such a rapid supply chain at such a large scale
                is no child's play. It must demand a lot of effort in the
                backend. So, let's see how those tasty Eggoz-eggs travel all the
                way from the poultry to your plates.
              </p>
              <h2 style={{  fontWeight: "700" }}>
                How Does An Eggoz Egg Reach You?
              </h2>
              <p>
                At the first glance, Eggoz may just seem to be a middleman who
                collects eggs from poultries, rebrands them, and sells them at a
                higher price. But, they are much more than that.
              </p>
              <p>
                They are an integral part of the whole egg production process.
                They work closely with the farmers to ensure that only the best
                quality eggs reach the consumers.
              </p>
              <p>
                Here are the 6 key steps followed by eggoz in their "Poultry To
                Plate" business model:
              </p><br/>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img src={img5} class="imageb1" />
              </div><br/>
              <h3 style={{  fontWeight: "700" }}>
                1. Onboarding of Farmers
              </h3><br/>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img src={img6} class="wp-post-image imageb2" />
              </div><br/>
              <p>
                Farmers are the heart of Eggoz's business. So, Eggoz chooses
                them carefully. If a farmer is willing to work with Eggoz, they
                have to pass through a series of tests. The Eggoz experts visit
                their farm and check for different quality parameters like
                bio-security, bird health, past diseases, feed quality, shed
                strength, etc.
              </p>
              <p>
                Based on these parameters, they generate the "Bird Health Score"
                for the farm. If this score is above a certain limit, then only
                the farmer is onboarded.
              </p>
              <p>
                But, what about those who don't meet these requirements? Are
                they left helpless by Eggoz?
              </p>
              <p>
                Not at all. "If a farmer does not meet our quality standards,
                but is willing to work hard to improve his farm then, we provide
                them handholding, until they become capable enough to meet our
                quality standards"- mentions Mr. Uttam Kumar, Co-Founder of
                Eggoz.
              </p>
              <h3 style={{ fontWeight: "700" }}>
                2. Tech-Enabled Farm Monitoring
              </h3><br/>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img src={img7} class="wp-post-image imageb2" />
              </div><br/>
              <p>
                Once a farmer is onboarded, a lot of smart devices are installed
                on their farm. These devices provide real-time data to eggoz
                about the farm conditions. In addition, farmers use their
                PRAGATI mobile app to log in daily inputs related to bird
                health, feed, and farm conditions.
              </p>
              <p>
                All this data is fed into their machine learning algorithm,
                which gives the Current Health Score of the farm. If this health
                score falls below a certain minimum value, the farmer is
                immediately approached by the Eggoz team. They are given advice
                and medical support from veterinary doctors to improve the farm
                conditions.
              </p>
              <p>
                In addition, frequent farm audits are done by eggoz to eliminate
                any scope of malpractices from the farmers.
              </p>
              <h3 style={{  fontWeight: "700" }}>
                3. Herbal Feeding Of Hens
              </h3><br/>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img src={img8} class="wp-post-image imageb2" />
              </div><br/>
              <p>
                The quality of eggs depends on the health of the hens. So, Eggoz
                farmers have to take the utmost care of their hens. The hens are
                fed with herbal feed that is mainly comprised of corn, soy,
                marigold, turmeric, and other flower extracts.
              </p>
              <p>
                The presence of turmeric imparts natural antibiotic properties
                to the hens. Thus, they need not be injected with antibiotics
                and hormones from time to time. The use of marigold and other
                flower extracts ensures that the egg yolk is thick and bright
                yellow in colour.
              </p>
              <p>
                "Ordinary eggs have a thin yolk, and they are smelly. If you
                cook a normal egg, your whole neighborhood will know that you
                are having an egg. This is due to the chemical feed, hormones,
                and antibiotics given to the hens. But, due to our herbal feed,
                eggoz eggs don't smell at all and they are much tastier than
                ordinary eggs"- Says Mr. Abhishek Negi, Co-Founder of Eggoz in
                an interview.
              </p>
              <h3 style={{ fontWeight: "700" }}>
                4. Collection Of Eggs From Farms
              </h3><br/>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img src={img9} class="wp-post-image imageb2" />
              </div><br/>
              <p>
                Once the eggs are laid, they are cleaned and pre-sorted by local
                Eggoz officials. Within 4 hours of laying, a vehicle reaches
                every farm to collect the eggs.
              </p>
              <p>
                Thorough quality checking of the eggs is done using their
                proprietary technology to ensure that the eggs are recently
                laid, and sort out broken eggs. Once the eggs are procured,
                farmers are paid a premium price for their eggs, and the vehicle
                starts its journey towards the packaging centers.
              </p>
              <p>
                The vehicles have IoT-based weather control to regulate the
                temperature and humidity so that the eggs remain intact.
              </p>
              <h3 style={{  fontWeight: "700" }}>
                5. Quality Control And Packaging
              </h3><br/>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img src={img10} class="wp-post-image imageb2" />
              </div><br/>
              <p>
                The eggs are brought straight to the packaging centers from the
                farm. There, the eggs go through 11 safety checks including pH
                tests, proper grading, cleaning, and UV sanitization. Only then
                are they branded with the Eggoz logo, followed by packaging, and
                distribution.
              </p>
              <h3 style={{  fontWeight: "700" }}>
                6. Reaching Out To The Market
              </h3><br/>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img src={img11} class="wp-post-image imageb2" />
              </div><br/>
              <p>
                Eggoz is an omnichannel distribution company. This means that
                their eggs are sold via different channels including local
                Kirana shops, local supermarts, and online grocery suppliers.
                They also have their own subscription services on their website.
              </p>
              <p>
                Eggoz eggs are sold in packs of 6, 10, 25, and 30 depending on
                the market. They come in several varieties like white eggs,
                brown eggs, and fortified eggs. Currently, they operate in more
                than 10 cities including Delhi, Gurgaon, Noida, Ghaziabad,
                Patiala, Bhopal, Bengaluru, and Jaipur.
              </p>
              <h2 style={{  fontWeight: "700" }}>
                Success Story Over The Years
              </h2><br/>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img src={img12} class="wp-post-image imageb1" />
              </div><br/>
              <p>
                From opening a small poultry farm in Bihar with 2000 birds in
                2017 to currently working with more than 2 Lack birds across
                India, Eggoz has traveled a long journey.
              </p>
              <p>
                {" "}
                A lot has changed for the good, but one thing that never changes
                is the constant support they extend for the poor farmers. This
                deep connection with the farming community has helped them grow
                big and helped them raise $3.5 Million Series-A funding in 2021.
              </p>
              <p>
                Currently, they have a 20-25 % market share for packaged eggs in
                Delhi and have a significant presence across other regions of
                North India. Their target is to reach daily egg sales of 1 Crore
                by 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
