import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from './404/NoMatch';
import User from './user/User';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/*" component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
