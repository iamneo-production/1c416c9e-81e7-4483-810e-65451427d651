import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../services/user.service'

const Monthlyplans = () => {

    const [plans, setPlans] = useState([])

    useEffect(() => {

        getAllPlans();
    }, []);

    
    const getAllPlans = () => {
        UserService.getAllPopularMonthlyPlans().then((response) => {
            setPlans(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    };

    const getAllPlansDesc = () => {
        UserService.getAllPopularMonthlyPlansDesc().then((response) => {
            setPlans(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    };

    return (
        <div className = "container">
            <h2 className = "text-center"> Popular Monthly Plans </h2>
            <div>Plan Type: <Link to="/plan/popular" className="btn btn-info"> All Plans </Link>
                            <Link to="/plan/premium" className="btn btn-info"> Premium Plans </Link>
                Price: <button className="btn btn-dark" onClick={() => getAllPlansDesc()}>High to Low</button> 
                        <button className="btn btn-dark" onClick={() => getAllPlans()}>Low to High</button>                    
            </div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Plan Type </th>
                        <th> Plan Name </th>
                        <th> Plan Validity </th>
                        <th> Plan Details </th>
                        <th> Plan Price </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        plans.map(
                            plan =>
                            <tr key = {plan.planId}> 
                                <td> {plan.planType} </td>
                                <td> {plan.planName} </td>
                                <td>{plan.planValidity}</td>
                                <td>{plan.planDetails}</td>
                                <td>${plan.planPrice}</td>
                                <td>
                                    <Link id="MonthlyplansGrid1" className="btn btn-success" to={`/recharge/plan/${plan.planId}`} >Select</Link>                                
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Monthlyplans;