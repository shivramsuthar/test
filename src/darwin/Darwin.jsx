import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import Login from './components/Login';
import Logout from './components/Logout';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
class Darwin extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        
        <Router>
          <>  <div className="switch">
            <Switch >
              <Route path="/login" component={Login} />
              <AuthenticatedRoute path="/welcome" component={Welcome} />
              <Route path="/Logout" component={Logout} />
              <Route component={ErrorPage} />
            </Switch>
            </div>
            <Footer />
          </>
        </Router>
      </div>
    );
  }
}

function ErrorPage() {
  return (
    <div className="ErrorPage">
      website url error! Please Contact abc-xyz-123
    </div>
  )
}

export default Darwin;
