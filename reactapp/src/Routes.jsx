import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './component/Signup/Signup'
import Login from './component/Login/Login'
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

const Routess = ()=>{
    return(
    
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
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
        </Router>
        
    )
}

export default Routess