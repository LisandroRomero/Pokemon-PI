import './App.css';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import Form from './Components/LandingPage/LandingPage';
import Detail from './Components/Form/Form';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={LandingPage} />
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/detail"} component={Detail} />
      <Route exact path={"/create"} component={Form} />
      
    </div>
  );
}

export default App;
