import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './user/User';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={User} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
