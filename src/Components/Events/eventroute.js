import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Events1 from './Eventpage/Events1';
import events2 from './Eventpage/Events2'

class Eventroute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/Events" component={Events1}/>
                    <Route path="/Events2" component={events2}/> 
                </Switch>
            </div>
        ) 
    }
} 
export default Eventroute;