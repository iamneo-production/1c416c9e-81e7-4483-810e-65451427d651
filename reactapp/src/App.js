import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Profile from "./component/Auth/Auth";
import Addon from './component/Addon/Addon';
import AddAddon from './component/Addon/AddAddon';
import Premiumplans from './component/Premiumplans/Premiumplans'
import AddPremiumplan from './component/Premiumplans/AddPremiumplan'
import Monthly from './component/Monthly/Monthly';
import AddMonthly from './component/Monthly/AddMonthly';
import Popularplans from './component/Popularplans/Popularplans'
import RechargePopularplans from './component/Popularplans/RechargePopularplans';
import Addons from './component/Addons/Addons'
import RechargeAddons from './component/Addons/RechargeAddons'

const App = () => {
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowUserBoard(user.userRole.includes("ROLE_USER"))
      setShowAdminBoard(user.userRole.includes("ROLE_ADMIN"))
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowUserBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          D2H-Portal
        </Link>
        <div className="navbar-nav mr-auto">

          {showUserBoard && (
            <><li className="nav-item">
              <Link to={"/getAllPopularPlans"} className="nav-link">
                Popular Plans
              </Link>
            </li>
            <li className="nav-item">
                <Link to={"/getAllRechargeAddon"} className="nav-link">
                  Addon Plans
                </Link>
            </li></>
          )}

          {showAdminBoard && (
            <><li className="nav-item">
              <Link to={"/getAddon"} className="nav-link">
                Addons
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/getAllPremiumPlan"} className="nav-link">
                Premium plans
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/getAllMonthlyPlan"} className="nav-link">
                Monthly plans
              </Link>
            </li></>
          )}

        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/getAddon" element={<Addon />} />
            <Route path="/addAddon" element={<AddAddon />} />
            <Route path="/editAddon/:id" element={<AddAddon />}/>
            <Route path="/getAllPremiumPlan" element={<Premiumplans />} />
            <Route path="/addPremiumPlan" element={<AddPremiumplan />} />
            <Route path="/editPremiumPlan/:id" element={<AddPremiumplan />}/>
            <Route path="/getAllMonthlyPlan" element={<Monthly />} />
            <Route path="/addMonthlyPlan" element={<AddMonthly />} />
            <Route path="/editMonthlyPlan/:id" element={<AddMonthly />}/>
            <Route path="/getAllPopularPlans" element={<Popularplans />}/>
            <Route path="/rechargePlan/:id" element={<RechargePopularplans />}/>
            <Route path="/getAllRechargeAddon" element={<Addons />}/>
            <Route path="/rechargeAddon/:id" element={<RechargeAddons />}/>
          </Routes>
      </div>

    </div>
  );
};

export default App;