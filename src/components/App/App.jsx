import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import ErrorPage from '../../pages/ErrorPage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import UserPage from '../../pages/UserPage';

import CardList from '../CardList';
import Header from '../Header';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={CardList}/>
          <Route path="/user" component={UserPage}/>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/error" component={ErrorPage} />
          <Redirect to="/error" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
