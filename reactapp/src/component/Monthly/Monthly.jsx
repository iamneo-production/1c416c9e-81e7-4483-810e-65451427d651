import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../services/user.service'

const MonthlyPlan = () => {

    const [plans, setPlans] = useState([]);

    useEffect(() => {

        getAllPlans();
    }, []);

    
    const getAllPlans = () => {
        UserService.getAllMonthlyPlans().then((response) => {
            setPlans(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    };

    const deleteByPlan = (planId) => {
       UserService.deleteMonthlyPlan(planId).then((response) =>{
            console.log(response.data);
            getAllPlans();
       }).catch(error =>{
            console.log(error);
       })
        
    };

    return (
        <div className = "container">
            <h2 className = "text-center"> Monthly Plans </h2>
            <Link to = "/add-monthly" className = "btn btn-primary mb-2" id="addPlan"> Add Monthly Plans </Link>
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
                                    <Link id="editMonthlyPlan" className="btn btn-info" to={`/monthly/${plan.planId}`} >Update</Link>                                
                                    <button id="deleteMonthlyPlan" className = "btn btn-danger" onClick = {() => deleteByPlan(plan.planId)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MonthlyPlan;