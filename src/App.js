import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import HeroSection from "./pages/Hero Sections/HeroSection";
import Home from "./pages/Home/Home";
import Incentives from "./pages/Incentives/Incentives";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {currentUser ? (
              (currentUser.role === "Contractor" && <Home />) ||
              (currentUser.role === "Tenant" && <HeroSection />) ||
              (currentUser.role === "Landlord" && <Incentives />)
            ) : (
              <Login />
            )}
          </Route>

          <Route path="/login">
            <Login />
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
