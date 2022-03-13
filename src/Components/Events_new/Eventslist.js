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
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <h2 style={{ color: "#11785D" }}>Events</h2>
              </div>
            </div>
          </div>
        <Eventcard
          cname="blog-card-e"
          sponsor="https://raw.githubusercontent.com/tarun-tej-t/prakriti-2021/master/src/Components/Events_new/eggozlogo.png"
          poster="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/274989339_5109161295808541_8735279019526877022_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=nAwAKgRlwvgAX9XAu3k&_nc_oc=AQl72y5NW6x-k2fZrsYHbvM40kLwSR5iMR5-87LTFxjlY8WWIzpEv9mabAQtK23TtIY&_nc_ht=scontent.fdel29-1.fna&oh=00_AT_2M3-7x1oa_3quNl6gd7Ta2ZpfpyTsshTWXC3rwMiT7Q&oe=6232EE11"
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
          ps="https://www.prkrt.co.in/foodquest-ps"
          submit="https://bit.ly/Food-Quest-Prakriti-2022"
        />{" "}
        <Eventcard
          cname="blog-card-e alt"
          name="Agrivation"
          poster="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/275727536_5127915347266469_5017424701914732224_n.jpg?stp=dst-jpg_p843x403&_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Qms_uHI_u6sAX9KJfao&tn=ai0L9QOmlH5pf6wW&_nc_ht=scontent.fdel29-1.fna&oh=00_AT-aDFIues5KlH7RG6Lys8fB8koDDOQp1sEgONBa5nqQvQ&oe=6232761D"
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
        ps="https://www.prkrt.co.in/agrivation-ps"
          submit="https://bit.ly/Agrivation-Submissions"
        />
        <Eventcard
          cname="blog-card-e"
          name="SELFIE WITH NATURE:"
          poster="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/274225289_5073730309351640_1857912354320503474_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=o1TG7MK76NgAX-EOYe-&_nc_ht=scontent.fdel29-1.fna&oh=00_AT86RI2XM-Ieuhrd-HpmT6864yVeFULu4YaQ-15pLaBGXQ&oe=62332812"
          tagline="A photography contest"
          description="There are no such special moments where selfies
          aren’t clicked. “Selfie with Nature” - another fun
          event of Prakriti lets participants showcase such
          moments through their selfie with nature where
          they become one with nature ."
          submit="https://bit.ly/Selfie-With-Nature"
        />
      </div>
    );
  }
}
