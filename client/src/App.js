import './App.css';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import Form from './Components/Form/Form.jsx';
import Detail from './Components/Detail/Detail';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={LandingPage} />

      <Route exact path={"/home"} component={Home} />

      <Route exact path={"/detail/:id"} component={Detail} />

      <Route exact path={"/create"} component={Form} />
      
    </div>
  );
}

export default App;
