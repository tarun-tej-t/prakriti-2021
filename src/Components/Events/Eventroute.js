import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import quizella from "./Eventpage/Quizella";


export default class Eventroute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/quizella" component={quizella} />
        </Switch>
      </div>
    );
  }
}
