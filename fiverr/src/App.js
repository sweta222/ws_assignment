//import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import ContainerDashboardLD from './ContainerDashboard/dashboardLD';
import ContainerDashboardBS from './ContainerDashboard/dashboardBS';
import ContainerDashboardBC from './ContainerDashboard/dashboardBC';
//import ContainerDashboardSEO from './ContainerDashboard/dashboardSEO.JS';
import ContainerDashboardSMM from './ContainerDashboard/dashboardSMM';
import ContainerDashboardTRANS from './ContainerDashboard/dashboardTRANS';
import ContainerDashboardRW from './ContainerDashboard/dashboardRW';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>hwllo</h1> */}
        <NavBar />
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/logo-design" component={ContainerDashboardLD}></Route>
          <Route exact path="/brand-style" component={ContainerDashboardBS}></Route>
          <Route exact path="/buiseness-cards" component={ContainerDashboardBC}></Route>
          {/* <Route exact path="/seo" component={ContainerDashboardSEO}></Route> */}
          <Route exact path="/smm" component={ContainerDashboardSMM}></Route>
          <Route exact path="/translation" component={ContainerDashboardTRANS}></Route>
          <Route exact path="/resumewrite" component={ContainerDashboardRW}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
