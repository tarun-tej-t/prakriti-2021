import React, { Component } from "react";
import Eventcard from "./Eventcard";
import "./Eventcard.css";

export default class Eventslist extends Component {
  render() {
    return (
      <div >
        <img src="https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{position:"fixed",height:'100vh',weight:"100vw",zIndex:"-1"}}/>
        <br />
        <br />
        <br />
        <br />
      
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
        <div class="row" style={{width:"100vw"}}>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <h2 style={{ color: "#11785D",textAlign:"center", }}>Events</h2>
              </div>
            </div>
          </div>
          <div >
            <Eventcard
              cname="blog-card-e"
              sponsor="https://raw.githubusercontent.com/tarun-tej-t/prakriti-2021/master/src/Components/Events_new/eggozlogo.png"
              poster="https://static.meraevents.com/content/gallery/248437/Food-Quest-png1647367279.png"
              name="Food Quest"
              tagline="Think out of the box and design an innovative food product"
              prizemoney="90,000"
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
              deadline="31st March 2022"
              ps="https://www.prkrt.co.in/foodquest-ps"
              submit="https://bit.ly/Food-Quest-Prakriti-2022"
            />{" "}
            <Eventcard
              cname="blog-card-e alt"
              sponsor="http://www.abiciitkgp.com/homeImage/ABIC-%20LOGO.png"
              name="Agrivation"
              poster="https://static.meraevents.com/content/gallery/248437/agrivation1647163978.jpg"
              tagline="Come up with Viable Startup Ideas"
              prizemoney="20,000"
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
            deadline="28th March 2022"
            ps="https://www.prkrt.co.in/agrivation-ps"
              submit="https://bit.ly/Agrivation-Submissions"
            />
                <Eventcard
              cname="blog-card-e"
              name="Krishi Manthan"
              poster="https://static.meraevents.com/content/gallery/248437/k-m-p1647573341.jpg"
              tagline="A Case study competition"
              prizemoney="20,000"
              description="Manthan is a case study competition aimed to
              challenge the strategic and analytical thinking skills
              of participants. The participants are presented with
              a specific problem in the agricultural or food sector
              along with some specific resource constraints.
              They are required to come up with the most
              feasible solution to the problem considering the
              constraints provided by us."
              deadline="30th March 2022"
            ps="https://www.prkrt.co.in/krishi-manthan-ps"
            submit="https://forms.gle/sq1HTiZsPCie1VoRA"
            />
            <Eventcard
            cname="blog-card-e alt"
            name="POSTER PRESENTATION "
            poster="https://static.meraevents.com/content/gallery/248437/p-p-p1647616384.jpg"
            tagline="Communicate your research and understanding"
            prizemoney="5000"
            description="A picture is worth a thousand words, but a well
            designed poster is worth a million. Posters are an
            expression of thoughts and technical expertise. In
            this event, participants are challenged to pictorially
            portray a trending topic in modern agriculture. The
            poster must be visually pleasing and should clearly
            explain the significance of the given topic."
            deadline="31st March 2022"
                   ps="https://www.prkrt.co.in/Poster-Presentation-PS"
                   submit="https://docs.google.com/forms/d/e/1FAIpQLSeTKvQ5lZdBBJh58P8BDbVYF4ISUZHEcR-0cjDpf-IZmGcJcg/viewform"
                  />
            <Eventcard
              cname="blog-card-e"
              name="SELFIE WITH NATURE"
              poster="https://static.meraevents.com/content/gallery/248437/swn1646826096.jpg"
              tagline="A photography contest"
              prizemoney="5000"
              description="There are no such special moments where selfies
              aren’t clicked. “Selfie with Nature” - another fun
              event of Prakriti lets participants showcase such
              moments through their selfie with nature where
              they become one with nature ."
              rules="https://drive.google.com/file/d/1rQZG_VJ-ioCdrmTfYdKLimFUqDoHgd_J/view?usp=sharing"
              submit="https://bit.ly/Selfie-With-Nature"
            />
               
          
          
                <Eventcard
              cname="blog-card-e alt"
              name="MACHINERY FREAKS"
              prizemoney="25,000"
            poster="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/ma.png"
              tagline="Analyse the past and predict the future"
              description="In this competition, you would be challenged to use Discrete Element Modelling (DEM) to effectively simulate the soil-tool interaction for tillage applications in ALTAIR EDEM with an appropriate physics model and study the drat forces with respect to tillage speed while taking soil cohesion and adhesion into account."
             ps="https://www.prkrt.co.in/Machine-Freaks-PS"
             deadline="31st March, 2022"
            />
                  <Eventcard
            cname="blog-card-e"
            poster="https://static.meraevents.com/content/gallery/248437/q-p1647771307.png"
            name="QUIZELLA"
            tagline="Let's play a mind sport"
            description="It is said “Knowledge is Power” which proves itself
            time and again. To test the knowledge of the
            students in general awareness of the world around
            us and technical questions from the field of
            agriculture, we bring to you the Agro-Tech quiz
            named, named “Quizella”. It would provide a
            platform to the best minds of India in the field of
            Agricultural and Food Engineering to test their
            excellence amongst others and find out their
            stand. Having a vast range of questions from direct
            ones to video, this event will surely keep all your
            participants in full charge of your senses."
          prizemoney="10,000"
                  />
                  
                <Eventcard
            cname="blog-card-e alt"
            poster="https://static.meraevents.com/content/gallery/248437/TH_Poster1647771683.png"
            name="TREASURE HUNT"
            tagline="Be the first in finding something"
            description="The “New-Normal” has made us prone to
            frustration and boredom. Being locked in a room in
            front of computers for several hours squeezes the
            life out of most of us. To remove the boredom and
            provide some fun, PRAKRITI-2022 is coming up
            with an online-treasure hunt event. In this event,
            participants are taken through a digital
            treasure-hunt journey through lush-green forests
            with a lot of hidden dangers. The individuals who
            gather the highest amount of treasure at the end of
            an hour becomes the winner."
          prizemoney="9,999"
                  />
                  <Eventcard
              cname="blog-card-e"
              name="GUEST LECTURES"
          
              tagline="Interaction session with industry experts"
              description="Promotion of agricultural - entrepreneurship has always
              been a leitmotif of Prakriti right from its inception.
              While the main emphasis of the summit has always
              been on how agripreneurs who have the potential of
              combining entrepreneurial skill and modernization in
              field of agriculture can play the role of catalysts in
              transforming the traditional farmer into a modern
              agripreneur, time has been devoted for developing
              agripreneurs with distinct traits and skills to exploit
              opportunities prolific in the field of agriculture . The
              guests talk about the finer intricacies of their work and
              inspire the students to take the unconventional path and
              do something out of the box. Panel discussions like
              agripreneurship summit in Prakriti have made a brand
              for themselves and remain the topic of incessant
              discussion and a discussion and anticipation all-round
              the year."
          
            />
          </div>
        </div>
      </div>
    );
  }
}
