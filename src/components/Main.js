import React from 'react';

//components
import Footer from './Footer.js';
import Header from './Header.js';

//views
import PersonalInformation1 from '../views/PersonalInformation1.js';
import PersonalInformation2 from '../views/PersonalInformation2.js';
import Summary from '../views/Summary.js';

// router
// import {Switch, Route ,withRouter, Redirect} from 'react-router-dom';


function Main(){
  return(
    <React.Fragment>
    <Header />
    {/* <Switch>
    <Route path='/personal-information1' component={PersonalInformation1}/>
    <Route path='/personal-information2'component={PersonalInformation2}/>
    <Route path='/summary'component={Summary}/>
    <Redirect to='/personal-information1' />
    </Switch> */}
    <PersonalInformation1 />
    <Footer />
    </React.Fragment>
  );
}
// export default withRouter(Main);
export default Main;