import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../services/user.service'
import AuthService from "../../services/auth.service";

const RecHistory = () => {

    const currentUser = AuthService.getCurrentUser();

    let email = currentUser.email;

    const [recharges, setRecharges] = useState([]);

    useEffect(() => {
        
        getAllRecharge();  
    }, []);  // eslint-disable-line
    
    const getAllRecharge = () => {
        UserService.getRechargeById(email).then((response) => {
            setRecharges(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    };

    const getAllRechargeAsc = () => {
        UserService.getRechargeByIdAsc(email).then((response) => {
            setRecharges(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    };

    return (
        <div className = "container" id="notificationBody">
            <h2 className = "text-center"> Recharge History </h2>
            <div>Filter: <button className="btn btn-dark" onClick={() => getAllRecharge()}>Newest to Oldest</button> 
                    <button className="btn btn-dark" onClick={() => getAllRechargeAsc()}>Oldest to Newest</button></div>
            
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Recharge Type </th>
                        <th> Name </th>
                        <th> Mobile Number </th>
                        <th> Email </th>
                        <th> Recharge Plan </th>
                        <th> Recharge Price </th>
                        <th> Recharge Date </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recharges.map(
                            recharge =>
                            <tr key = {recharge.rechargeId}> 
                                <td> {recharge.rechargetype} </td>
                                <td> {recharge.name} </td>
                                <td> {recharge.mobile} </td>
                                <td> {recharge.email} </td> 
                                <td> {recharge.rechargePlan} </td>
                                <td>${recharge.rechargePrice}</td>
                                <td>{recharge.rechargedt}</td>
                                <td>
                                    <Link className="btn btn-info" to="/add-review" >Review</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default RecHistory;