import { Switch, Route, withRouter } from "react-router-dom";
import React, { Component, useEffect } from "react";
import Homepage from "./Homepage";
import Sponsors from "./Components/Sponsors/Sponsors";
import Team from "./Components/Team/Team";
import Registration from "./Components/Registration/Registration";
import Navbar from "./Components/Navbar/Navbar2";
//css files
import "./Components/public_html/css/nivo-slider-theme.css";
import "./Components/public_html/css/style.css";
import "./Components/public_html/css/styleold.css";
import "./Components/public_html/css/responsive.css";
import "./Components/public_html/lib/bootstrap/css/bootstrap.min.css";
import "./Components/public_html/lib/nivo-slider/css/nivo-slider.css";
import "./Components/public_html/lib/owlcarousel/owl.carousel.css";
import "./Components/public_html/lib/owlcarousel/owl.transitions.css";
import "./Components/public_html/lib/font-awesome/css/font-awesome.min.css";
import "./Components/public_html/lib/animate/animate.min.css";
import "./Components/public_html/lib/venobox/venobox.css";
import quizella from "./Components/Events/Eventpage/Quizella";

import { Link } from "react-router-dom";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import Footer from "./Components/Footer/Footer";

import ReactGa from "react-ga";

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-187856504-1");

    //to report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <marquee
        style={{
          zIndex: "10",
          position: "absolute",
          left: "5px",
          top: "70px",
          fontFamily: "sans-serif",
          backgroundColor: "black",
          marginRight: "20px",
          fontSize: "12pt",
          fontWeight: "bold",
          color: "yellow",
          height: "34px",
          width: "99vw",
          border: "black 3px SOLID",
          scrollamount: "9",
        }}
      >
        {" "}
        <strong></strong>&nbsp;&nbsp;&nbsp; The events are conducted in Online
        mode due to outbreak of the pandemic caused by (COVID-19) !!
        &nbsp;&nbsp;&nbsp; For any query, you can contact us on our
        contact@prkrt.co.in or Facebook page!
      </marquee>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/Team" component={Team} />
        <Route exact path="/Sponsors" component={Sponsors} />
        <Route exact path="/Registration" component={Registration} />

        {/*Events*/}

        <Route exact path="/quizella" component={quizella} />
      </Switch>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{ zIndex: "100" }}
        ToggledStyle={{}}
      />
      <Footer  />
    </div>
  );
}

export default App;
