import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Profile from "./component/Profile/Profile";
import Addon from './component/Addon/Addon';
import AddAddon from './component/Addon/AddAddon';
import Premiumplans from './component/Premiumplans/Premiumplans'
import AddPremiumplan from './component/Premiumplans/AddPremiumplan'
import Monthly from './component/Monthly/Monthly';
import AddMonthly from './component/Monthly/AddMonthly';
import Popularplans from './component/Popularplans/Popularplans';
import Monthlyplans from "./component/Popularplans/Monthlyplans";
import Premium from "./component/Popularplans/Premium";
import RechargePopularplans from './component/Popularplans/RechargePopularplans';
import Addons from './component/Addons/Addons';
import RechargeAddons from './component/Addons/RechargeAddons';
import RecHistory from "./component/Recharge/RecHistory";
import AddReview from "./component/Review/AddReview";
import Review from "./component/Review/Review";

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
        <Link to={"/home"} className="navbar-brand">
          D2H-Portal
        </Link>
        <div className="navbar-nav mr-auto">

          {showUserBoard && (
            <><li className="nav-item">
              <Link to={"/plan/popular"} className="nav-link" id="userPopularPlans">
                Popular Plans
              </Link>
            </li>
            <li className="nav-item">
                <Link to={"/plan/addon"} className="nav-link" id="userAddOns">
                  Addon Plans
                </Link>
            </li>
            <li className="nav-item">
                <Link to={"/history"} className="nav-link" id="notification">
                  Recharge History
                </Link>
            </li></>
          )}

          {showAdminBoard && (
            <><li className="nav-item">
              <Link to={"/addon"} className="nav-link" id="adminAddOns">
                Addons
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/premium-plan"} className="nav-link" id="adminPremium">
                Premium plans
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/monthly-plan"} className="nav-link" id="adminMonthlyPlans">
                Monthly plans
              </Link>
            </li></>
          )}

        </div>
        <div className="navbar-nav ms-auto">
        {currentUser ? (
          <>
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" id="logout" onClick={logOut}>
                LogOut
              </a>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
        </div>
      </nav>

      <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/addon" element={<Addon />} />
            <Route path="/add-addon" element={<AddAddon />} />
            <Route path="/addon/:id" element={<AddAddon />}/>
            <Route path="/premium-plan" element={<Premiumplans />} />
            <Route path="/add-premium" element={<AddPremiumplan />} />
            <Route path="/premium/:id" element={<AddPremiumplan />}/>
            <Route path="/monthly-plan" element={<Monthly />} />
            <Route path="/add-monthly" element={<AddMonthly />} />
            <Route path="/monthly/:id" element={<AddMonthly />}/>
            <Route path="/plan/popular" element={<Popularplans />}/> 
            <Route path="/plan/monthly" element={<Monthlyplans />}/>
            <Route path="/plan/premium" element={<Premium />}/>
            <Route path="/recharge/plan/:id" element={<RechargePopularplans />}/>
            <Route path="/plan/addon" element={<Addons />}/>
            <Route path="/recharge/addon/:id" element={<RechargeAddons />}/>
            <Route path="/history" element={<RecHistory />}/>
            <Route path="/add-review" element={<AddReview />}/>
            <Route path="/review" element={<Review />}/>
          </Routes>
      </div>

    </div>
  );
};

export default App;