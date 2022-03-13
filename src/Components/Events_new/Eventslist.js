import React, { Component } from "react";
import Eventcard from "./Eventcard";

export default class Eventslist extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
      

         <Eventcard
          cname="blog-card"
          name="Food Quest"
          tagline="Think out of the box and design an innovative food product"
          description="The ever-changing work culture has affected the
lifestyle of Indians. Sometimes, the breakfast and
lunch meals get missed due to workload and lead
to eating outside where major consumption is of
fast food. To promote healthy eating,
team-PRAKRITI has come up with the Food Quest
event in which participants are given a particular
nutrition requirement, and they have to come up
with a packaged food idea to meet those
requirements. The final food should be tasty,
healthy, and appealing to the consumers."
        /> <Eventcard
        cname="blog-card alt"
        name="Agrivation"
        tagline="Come up with Viable Startup Ideas"
        description="Agrivation is an Agri-Innovation competition that
        encourages business minded people to build
        viable food and agriculture-based enterprises
        which may have the potential to upgrade the
        existing agriculture scenarios, create employment
        and improve the incomes of people engaged
        directly and indirectly in agro-based activities.
        Agrivation lets participants enter in the shoes of
        the customer and think of products, services and
        ideas that can build new enterprises or develop
        existing enterprises in a unique way."
      />
        <Eventcard
          cname="blog-card"
          name="SELFIE WITH NATURE:"
          tagline="A photography contest"
          description="There are no such special moments where selfies
          aren’t clicked. “Selfie with Nature” - another fun
          event of Prakriti lets participants showcase such
          moments through their selfie with nature where
          they become one with nature ."
        />
      </div>
    );
  }
}
