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

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState(currentUser.mobileNumber);
    const [email, setEmail] = useState(currentUser.email);
    

    const saveRecharge = (e) => {
        e.preventDefault();

        let rechargetype = valueType;
        let rechargePlan = valuePlan;
        let rechargePrice = valuePrice;

        const recharge = {rechargetype, name, mobile, email, rechargePlan, rechargePrice}
        
        UserService.createRecharge(recharge).then((response) =>{

            console.log(response.data)
            alert("Recharge successsful...!");

            navigate('/getAllPopularPlans');

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
    }, []);

    const title = () => {

        return <h2 className = "text-center">Recharge Plan</h2>
    };

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Recharge Type :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Recharge Type"
                                        name = "planType"
                                        className = "form-control"
                                        value = {valueType}
                                        onChange = {(e) => setValueType(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
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
                                        placeholder = "Enter Email"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Recharge Plan :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Recharge Plan"
                                        name = "planPrice"
                                        className = "form-control"
                                        value = {valuePlan}
                                        onChange = {(e) => setValuePlan(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Recharge Price :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Plan Price"
                                        name = "planPrice"
                                        className = "form-control"
                                        value = {valuePrice}
                                        onChange = {(e) => setValuePrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveRecharge(e)} >Submit </button>
                                <Link to="/getAllPopularPlans" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    );
};

export default RechargePopularplans;