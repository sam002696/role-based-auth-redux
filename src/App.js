import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import HeroSection from "./pages/Hero Sections/HeroSection";
import Home from "./pages/Home/Home";
import HomeTwo from "./pages/Home/HomeTwo";
import Incentives from "./pages/Incentives/Incentives";
import TenantProfile from "./pages/TenantProfile/TenantProfile";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeTwo />
          </Route>

          {/* <Route exact path="/"> */}
          {currentUser &&
            ((currentUser.role === "Contractor" && (
              <Route path="/contractorhome">
                {" "}
                <Home />
              </Route>
            )) ||
              (currentUser.role === "Tenant" && (
                <Route path="/tenanthome">
                  <HeroSection />
                </Route>
              )) ||
              (currentUser.role === "Landlord" && (
                <Route path="/landlordhome">
                  <Incentives />
                </Route>
              )))}
          {/* </Route> */}

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <TenantProfile />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
