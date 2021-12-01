import Nav from './components/Nav'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PartnerReg from './components/PartnerReg';
import Home from './components/Home';
import CustomerReg from './components/CustomerReg';


const App = ()=>{
  return(
    <>
    <Router>
    <Nav/>
    
    <div className="container my-4">


    <Switch>
            <Route  path="/partner-reg">
                 <PartnerReg/>
             </Route>
            <Route path="/customer-reg">
              <CustomerReg/>
            </Route>
    </Switch>
    </div>

    
    </Router>
    </>
  )
}


export default App;