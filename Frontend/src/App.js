import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Initialpage from './common/initial';
import Driverini from './driver/driver_log_sig';
import Riderini from './rider/rider_log_sig';
import Driver from './driver/drivercommand';
import Rider from './rider/ridercommand';
import Rider_login from './rider/riderlogin';
import Rider_Signup from './driver/newdriver';
import Driver_login from './driver/driverlogin';
import Driver_Signup from './driver/newdriver';
import Success from './common/sucess';
import Location from './driver/update_location';
import History_Driver from './driver/history_did';
import Avail from './driver/avaiibility';
import End from './rider/end';
import History_Rider from './rider/history_uid';
import Avail_cabs from './rider/history_uid Copy';
import Booking from './rider/booking';

const App= ()=> {
  return(
  <Router>
    <Switch>
    <Route path="/initial" exact>
      <Initialpage />
     </Route>
     <Route path="/driverini" exact>
      <Driverini />
     </Route>
     <Route path="/riderini" exact>
      <Riderini />
     </Route>
      
    <Route path="/rider/login" exact>
      <Rider_login />
    </Route>
    <Route path="/rider/signup" exact>
      <Rider_Signup />
    </Route>
    <Route path="/rider/:uid" exact>
      <Rider />
    </Route>

    <Route path="/driver/signup" exact>
      <Driver_Signup />
    </Route>
    <Route path="/driver/login" exact>
      <Driver_login />
    </Route>

    <Route path="/driver/:did" exact>
      <Driver />
    </Route>
    
    <Route path="/driver/:did/availability" exact>
      <Avail />
    </Route>
    <Route path="/driver/:did/update_location" exact>
      <Location />
    </Route>
    <Route path="/driver/:did/historydid" exact>
      <History_Driver />
    </Route>
    <Route path="/rider/:uid/end" exact>
      <End />
    </Route>
    <Route path="/rider/:uid/availcabs" exact>
      <Avail_cabs />
    </Route>
    <Route path="/rider/:uid/update_location" exact>
      <Location />
    </Route>
    <Route path="/rider/:uid/historyuid" exact>
      <History_Rider />
    </Route>
    <Route path="/success" exact>
      <Success />
    </Route>
    <Route path="/rider/booking/:uid/:did" exact>
      <Booking />
    </Route>
   

    <Redirect to="/initial"/>
    </Switch>
  </Router>
  );
}

export default App;
