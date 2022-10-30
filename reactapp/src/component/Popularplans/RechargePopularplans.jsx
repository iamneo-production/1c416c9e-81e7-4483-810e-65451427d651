import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import UserService from '../../services/user.service'
import AuthService from "../../services/auth.service";

const RechargePopularplans = () => {

    const currentUser = AuthService.getCurrentUser();

    const navigate = useNavigate();
    const {id} = useParams();

    const [valueType, setValueType] = useState('');
    const [valuePlan, setValuePlan] = useState('');
    const [valuePrice, setValuePrice] = useState('');

    const [name, setName] = useState(currentUser.username);
    const [mobile, setMobile] = useState(currentUser.mobileNumber);
    const [email] = useState(currentUser.email);

    let curDT= new Date().toLocaleString();

    const saveRecharge = (e) => {
        e.preventDefault();

        let rechargetype = valueType;
        let rechargePlan = valuePlan;
        let rechargePrice = valuePrice;
        let rechargedt = curDT;

        const recharge = {rechargetype, name, mobile, email, rechargePlan, rechargePrice, rechargedt}
        
        UserService.createRecharge(recharge).then((response) =>{

            console.log(response.data)
            alert("Recharge successsful...!");

            navigate('/history');

        }).catch(error => {
            console.log(error)
        })
        
    };

    useEffect(() => {

        UserService.getPopularPlanById(id).then((response) =>{
            setValueType(response.data.planType)
            setValuePlan(response.data.planName)
            setValuePrice(response.data.planPrice)
        }).catch(error => {
            console.log(error)
        })
    }, []);  // eslint-disable-line

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h2 className = "text-center">Recharge Plan</h2>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Recharge Type :</label>
                                    <input
                                        type = "text"
                                        id = "enterRechargeType"
                                        placeholder = "Enter Recharge Type"
                                        name = "planType"
                                        className = "form-control"
                                        value = {valueType}
                                        readOnly
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        id = "enterName"
                                        placeholder = "Enter Name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Mobile :</label>
                                    <input
                                        type = "text"
                                        id = "enterToRecharge"
                                        placeholder = "Enter Mobile Number"
                                        name = "mobile"
                                        className = "form-control"
                                        value = {mobile}
                                        onChange = {(e) => setMobile(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "email"
                                        id = "enterEmailId"
                                        placeholder = "Enter Email id"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        readOnly
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Recharge Plan :</label>
                                    <input
                                        type = "text"
                                        id = "EnterRechargePlan"
                                        placeholder = "Enter Recharge Plan"
                                        name = "planPrice"
                                        className = "form-control"
                                        value = {valuePlan}
                                        readOnly
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Recharge Price :</label>
                                    <input
                                        type = "text"
                                        id = "enterRechargePrice"
                                        placeholder = "Enter Plan Price"
                                        name = "planPrice"
                                        className = "form-control"
                                        value = {valuePrice}
                                        readOnly
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" id="rechargeButton" onClick = {(e) => saveRecharge(e)} >Recharge </button>
                                <Link to="/plan/popular" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    );
};

export default RechargePopularplans;