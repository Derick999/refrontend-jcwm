import React, { Component } from "react";
import { Route } from "react-router-dom";
import { NavigationBar } from "./component/NavigationBar";


class App extends Component {
	state = {};
	render (){
    return <div>
      <NavigationBar/>
        <Route path="/"exact
        component={Inventory}/>
      
    </div>
  }
}



export default (App);
