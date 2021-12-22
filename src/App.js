import { Switch, Route, withRouter } from "react-router-dom";
import React, { Component, useEffect } from "react";
import Homepage from "./Homepage";
import Sponsors from "./Components/Sponsors/Sponsors";
import Team from "./Components/Team/Team1";
import Registration from "./Components/Registration/Registration";
import Navbar from "./Components/Navbar/Navbar4";

//Events
import KrishiManthan from "./Components/Events/Eventpage/KrishiManthan//KrishiManthan";
import DataAnalytics from "./Components/Events/Eventpage/DataAnalytics/DataAnalytics";
import GuestLecture from "./Components/Events/Eventpage/GuestLecture/GuestLecture";
import Agrivation from "./Components/Events/Eventpage/Agrivation/Agrivation";
import Findthedevil from "./Components/Events/Eventpage/Findthedevil/Findthedevil";
import TreasureHunt from "./Components/Events/Eventpage/TreasureHunt/TreasureHunt";
import MadAd from "./Components/Events/Eventpage/MadAd/MadAd";
import SelfiewithNature from "./Components/Events/Eventpage/SelfiewithNature/SelfiewithNature";
import Quizella from "./Components/Events/Eventpage/Quizella/Quizella";
// import PosterPresentation from "./Components/Events/Eventpage/PosterPresentation/PosterPresentation";

//css files

import "./Components/public_html/css/style.css";
import "./Components/public_html/css/styleold.css";
import "./Components/public_html/css/responsive.css";
import "./Components/public_html/lib/bootstrap/css/bootstrap.min.css";

import "./Components/public_html/lib/font-awesome/css/font-awesome.min.css";

import { Link } from "react-router-dom";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import Footer from "./Components/Footer/Footer";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReactGa from "react-ga";

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-187856504-1");
    //to report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Loader
        type="MutatingDots"
        color="#EE7026"
        height={100}
        width={100}
        timeout={3000} //3 secs
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
      <Navbar />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/contact" component={Homepage} />

        <Route exact path="/Team" component={Team} />
        <Route exact path="/Sponsors" component={Sponsors} />
        <Route exact path="/Registration" component={Registration} />

        {/* Events */}
        <Route path="/Events" component={KrishiManthan} />
        <Route exact path="/KrishiManthan" component={KrishiManthan} />
        <Route exact path="/DataAnalytics" component={DataAnalytics} />
        <Route exact path="/GuestLecture" component={GuestLecture} />
        <Route exact path="/Agrivation" component={Agrivation} />
        <Route exact path="/Findthedevil" component={Findthedevil} />
        <Route exact path="/TreasureHunt" component={TreasureHunt} />
        <Route exact path="/MadAd" component={MadAd} />
        <Route exact path="/SelfiewithNature" component={SelfiewithNature} />
        <Route exact path="/Quizella" component={Quizella} />
        {/* <Route
          exact
          path="/PosterPresentation"
          component={PosterPresentation}
        /> */}
      </Switch>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{ zIndex: "100", backgroundColor: "#F17612" }}
        ToggledStyle={{ right: 20 }}
      />
      <Footer />
    </div>
  );
}

export default App;
