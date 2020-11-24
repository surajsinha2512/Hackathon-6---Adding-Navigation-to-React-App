import React, {Component, useState} from "react";
import { useLocation ,BrowserRouter, Switch, Router,Route, Link} from "react-router-dom";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */} 
               <BrowserRouter>
               <LocationDisplay/>
               
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Switch>
               <Route exact path="/">
        
               <Home/>
               </Route>
               <Route exact path="/about">
               <About/>
               </Route>
               <Route path="*">
               <Match/>
               </Route>
               </Switch>
               </BrowserRouter> 
            </div>
        )
    }
   
}
function Home(){
    return <div>You are home</div>
}
function About(){
    return <div>You are on the about page</div>
}
function LocationDisplay(){
   
  //  const {pathname}=useLocation();
return <div data-testid="location-display">{useLocation().pathname}</div>
}
function Match(){
    return <div>No match</div>
}


export default App;
