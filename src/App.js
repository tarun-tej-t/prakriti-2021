import { Switch, Route, withRouter } from "react-router-dom";
import React, { Component } from "react";
import Homepage from "./Homepage";
import Sponsors from './Components/Sponsors/Sponsors'
import Team from './Components/Team/Team'
import Registration from './Components/Registration/Registration'

//css files
import './Components/public_html/css/nivo-slider-theme.css'
import './Components/public_html/css/style.css'
import './Components/public_html/css/styleold.css'
import './Components/public_html/css/responsive.css'
import './Components/public_html/lib/bootstrap/css/bootstrap.min.css'
import './Components/public_html/lib/nivo-slider/css/nivo-slider.css'
import './Components/public_html/lib/owlcarousel/owl.carousel.css'
import './Components/public_html/lib/owlcarousel/owl.transitions.css'
import './Components/public_html/lib/font-awesome/css/font-awesome.min.css'
import './Components/public_html/lib/animate/animate.min.css' 
import './Components/public_html/lib/venobox/venobox.css'


import { Link } from "react-router-dom";





function App() {



  return (
    <div className="App">
      
     <Switch>
         <Route exact path="/" component={Homepage} />
         <Route exact path="/home/" component={Homepage} />
         <Route path="/home/:frame" component={Homepage} />
         <Route exact path='/Team' component={Team} />
         <Route exact path='/Sponsors' component={Sponsors} />
         <Route exact path='/Registration' component={Registration} />
     </Switch>
    </div>
  );
}

export default App; 
