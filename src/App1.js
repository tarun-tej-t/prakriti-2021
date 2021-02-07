import { Switch, Route, withRouter } from "react-router-dom";
import React, { Component} from "react";
import Homepage from "./Homepage";
import Sponsors from "./Components/Sponsors/Sponsors";
import Team from "./Components/Team/Team";
import Registration from "./Components/Registration/Registration";
import Navbar from "./Components/Navbar/Navbar4";
import Events from "./Components/Events/eventroute";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader";
import Loadable from "react-loadable";

import API from "./api";

import ReactGa from "react-ga";


const useEffect = () => { 
  const getCsrfToken = async () => {
    ReactGa.initialize("UA-187856504-1");
    const { data } = await API.get("/csrf-token");
    API.defaults.headers.post["X-CSRF-Token"] = data.csrfToken; 
  };
  getCsrfToken();
};

const Loading = () => (
  <div style={{ width: "100%", height: "100vh", backgroundColor: "#251F5A" }}>
    <Loader />
  </div>
);


const AsyncEvents = Loadable({
  loader: () => import("./Components/Events/eventroute"),
  loading: Loading,
});

class App1 extends Component {

  componentDidUpdate() {
    ReactGa.pageview(this.props.location.pathname);
  
  }

  componentDidMount() {
   
    ReactGa.pageview(this.props.location.pathname);
 
  }


  render() {
    return (
      <React.Fragment>
        <div className="App" id="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/home" component={Homepage} />
            <Route exact path="/Events" component={AsyncEvents} />

            <Route exact path="/Team" component={Team} />
            <Route exact path="/Sponsors" component={Sponsors} />
            <Route exact path="/Registration" component={Registration} />

            {/* Events */}

           
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
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App1);
