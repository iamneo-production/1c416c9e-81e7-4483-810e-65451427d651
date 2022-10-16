import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import MonthlyService from '../../services/MonthlyService'

const MonthlyPlan = () => {

    const [plans, setPlans] = useState([])

    useEffect(() => {

        getAllPlans();
    }, [])

    
    const getAllPlans = () => {
        MonthlyService.getAllPlans().then((response) => {
            setPlans(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteByPlan = (planId) => {
       MonthlyService.deletePlan(planId).then((response) =>{
          getAllPlans();
       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Monthly Plans </h2>
            <Link to = "/addMonthlyPlan" className = "btn btn-primary mb-2" > Add Plans </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Plan Id </th>
                    <th> Plan Type </th>
                    <th> Plan Name </th>
                    <th> Plan Validity </th>
                    <th> Plan Details </th>
                    <th> Plan Price </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        plans.map(
                            plan =>
                            <tr key = {plan.planId}> 
                                <td> {plan.planId} </td>
                                <td> {plan.planType} </td>
                                <td> {plan.planName} </td>
                                <td>{plan.planValidity}</td>
                                <td>{plan.planDetails}</td>
                                <td>${plan.planPrice}</td>
                                <td>
                                    <Link id="editMonthlyPlan" className="btn btn-info" to={`/editMonthlyPlan/${plan.planId}`} >Update</Link>                                
                                    <button id="deleteMonthlyPlan" className = "btn btn-danger" onClick = {() => deleteByPlan(plan.planId)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MonthlyPlan