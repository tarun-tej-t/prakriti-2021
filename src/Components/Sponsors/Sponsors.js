import React, { Component } from "react";
import Sponsorcard from "./Sponsorcard";
import nabardad from "./NABARD AD.jpg"
import ABIC from "./ABIC.png"
import swots from './swots.png'
import fundamakers from './fundamakers.png'
import meraevents from './meraevents.png'
import mantra from './24mantra.png'
import eggoz from './eggozlogo.png'
import "./Sponsors.css";

export default class Sponsors extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#B3F9F3",
        }}
      >
        <div style={{ paddingTop: "14vh" }}>
        {/* <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <h2 style={{ color: "#11785D" }}>Co-Sponsor</h2>
              </div>
            </div>
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div class="row">
            <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Nabard.png"
                stitle="Nabard"
                slink="https://www.nabard.org/"
              />
               <div style={{padding:'30px'}}>
            <div >
              <img
                class="img-responsive"
                alt="Nabard AD"
                src={nabardad}
                style={{  width:"60vw",minWidth:'320px' }}
              />
              
            </div>
          </div>
             
            </div>
          </div>
          <br/><br/><br/> */}
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <h2 style={{ color: "#11785D" }}>Event Sponsors</h2>
              </div>
            </div>
          </div>
         
          {/* <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div class="row">
              <Sponsorcard
                simage={ABIC}
                stitle="ABIC-IIT KHARAGPUR"
                slink="https://kgpchronicle.iitkgp.ac.in/agri-food-techathon-aft-2021/"
              />
              <Sponsorcard
                simage={fundamakers}
                stitle="FundaMakers"
                slink="https://fundamakers.com/"
              />
              <Sponsorcard
                simage={swots}
                stitle="MY SWOTs"
                slink="https://myswots.com/"
              />
            </div>{" "}
          </div> */}
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div class="row">
            <Sponsorcard
                simage={ABIC}
                stitle="ABIC-IIT KHARAGPUR"
                slink="https://kgpchronicle.iitkgp.ac.in/agri-food-techathon-aft-2021/"
              />
              <Sponsorcard
                simage={meraevents}
                stitle="MeraEvents"
                slink="https://www.meraevents.com/"
              />
             <Sponsorcard
                simage={eggoz}
                stitle="Eggoz"
                slink="https://eggoz.in/"
              />
             
            </div>
          </div>
          <br/><br/>
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <h2 style={{ color: "#11785D" }}>Past Sponsors</h2>
              </div>
            </div>
          </div>

        
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div class="row">
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Hindustan%20Unilever%20Limited.png"
                stitle="Hindustan Unilever Limited"
                slink="https://www.hul.co.in/"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Nabard.png"
                stitle="Nabard"
                slink="https://www.nabard.org/"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/New%20Holland%20Agriculture.png"
                stitle="New Holland Agriculture"
                slink="http://www.newholland.com/"
              />
            </div>{" "}
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div class="row">
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Nestle.png"
                stitle="Nestle"
                slink="http://www.nestle.com"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Oyo.png"
                stitle="Oyo"
                slink="https://www.oyorooms.com/"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/ITC%20Limited.png"
                stitle="ITC Limited"
                slink="https://www.itcportal.com/"
              />
            </div>
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div class="row">
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/John%20Deere.jpeg"
                stitle="John Deere"
                slink="https://www.deere.com/en/index.html"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/KTM.jpeg"
                stitle="KTM"
                slink="https://www.ktm.com/en-in.html"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Siemens.png"
                stitle="Siemens"
                slink="https://www.siemens.com/global/en.html"
              />
            </div>{" "}
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div class="row">
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Tafe.png"
                stitle="Tafe"
                slink="https://www.tafe.com/"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Pepsico.png"
                stitle="Pepsico"
                slink="http://www.pepsicoindia.co.in/"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Coca%20Cola.jpeg"
                stitle="Coca Cola"
                slink="https://www.coca-colaindia.com/"
              />
            </div>{" "}
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div class="row">
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/SBI.png"
                stitle="SBI"
                slink="https://www.onlinesbi.com/"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Tea%20board.jpeg"
                stitle="Tea Board"
                slink="http://www.teaboard.org/"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Swaraj.png"
                stitle="Swaraj"
                slink="https://www.swarajtractors.com/"
              />
            </div>{" "}
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div class="row">
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Jindal.png"
                stitle="Jindal"
                slink="https://www.jindalsteelpower.com/"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Maharani.png"
                stitle="Maharani"
                slink="http://www.maharanirice.in/"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Pelican%20Equipment.png"
                stitle="Pelican Equipments"
                slink="http://www.pelicanequipments.com/"
              />
            </div>{" "}
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div class="row">
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Process%20cooling%20and%20healing.jpeg"
                stitle="Process healing and cooling"
                slink="https://www.process-heating.com/"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Tetra%20pak.png"
                stitle="Tetra Pak"
                slink="https://www.tetrapak.com/en-in"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/JP%20Scientific%20Equipment.png"
                stitle="JP Scientific Equipments"
                slink="https://www.jpscientificequip.com/"
              />
            </div>{" "}
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div class="row">
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Gayatri%20Organic.png"
                stitle="Gayatri Organic"
                slink="https://www.indiamart.com/gayatri-organic-foods/aboutus.html"
              />
              <Sponsorcard
                simage="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/Dominos.jpeg"
                stitle="Dominos"
                slink="https://www.dominos.co.in/"
              />
             <Sponsorcard
                simage={mantra}
                stitle="24 Mantra Organic"
                slink="https://www.24mantra.com/"
              />
            </div>{" "}
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
