import Nav from './components/Nav'
import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PartnerReg from './components/PartnerReg';
import Home from './components/Home';
import CustomerReg from './components/CustomerReg';
import CustomerLogin from './components/CustomerLogin';
import PartnerLogin from './components/PartnerLogin';


const App = ()=>{

  const [token,setToken] = useState('')


  return(
    <>
    <Router>
    <Nav/>
    
    <div className="container my-4">
    <h2>Welcome to Bagjour</h2>

    <Switch>
            <Route  path="/partner-reg">
                 <PartnerReg token={token} setToken={setToken}/>
             </Route>
            <Route path="/customer-reg">
              <CustomerReg/>
            </Route>
            <Route path="/customer-login">
              <CustomerLogin/>
            </Route>
            <Route path="/partner-login">
              <PartnerLogin/>
            </Route>
    </Switch>
    </div>

    
    </Router>
    </>
  )
}


export default App;