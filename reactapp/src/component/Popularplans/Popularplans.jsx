import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PopularplansService from '../../services/PopularplansService'

const Popularplans = () => {

    const [plans, setPlans] = useState([])

    useEffect(() => {

        getAllPlans();
    }, [])

    
    const getAllPlans = () => {
        PopularplansService.getAllPlans().then((response) => {
            setPlans(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Popular Plans </h2>
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
                                    <Link id="popularPlansGrid1" className="btn btn-info" to={`/rechargePlan/${plan.planId}`} >Select</Link>                                
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Popularplans