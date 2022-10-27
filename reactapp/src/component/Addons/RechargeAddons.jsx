import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import UserService from '../../services/user.service'
import AuthService from "../../services/auth.service";

const RechargeAddons = () => {

    const currentUser = AuthService.getCurrentUser();

    const navigate = useNavigate();
    const {id} = useParams();

    const [valuePlan, setValuePlan] = useState('');
    const [valuePrice, setValuePrice] = useState('');

    const [rechargetype, setRechargetype] = useState("Addon");
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState(currentUser.mobileNumber);
    const [email, setEmail] = useState(currentUser.email);

    const saveRechargeAddon = (e) => {
        e.preventDefault();

        let rechargePlan = valuePlan;
        let rechargePrice = valuePrice;

        const recharge = {rechargetype, name, mobile, email, rechargePlan, rechargePrice}

            UserService.createAddonRecharge(recharge).then((response) =>{

                console.log(response.data)
                alert("Recharge successsful...!");
    
                navigate('/getAllRechargeAddon');
    
            }).catch(error => {
                console.log(error.response.data);
            })
        
    };

    useEffect(() => {

        UserService.getRechargeAddonById(id).then((response) =>{
            setValuePlan(response.data.addonName)
            setValuePrice(response.data.addonPrice)
        }).catch(error => {
            console.log(error.response.data);
        });
    }, []);

    const title = () => {
            return <h2 className = "text-center">Recharge Addon</h2>
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
                                        placeholder = "Recharge Type"
                                        name = "rechargeType"
                                        className = "form-control"
                                        value = {rechargetype}
                                        onChange = {(e) => setRechargetype(e.target.value)}
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
                                        name = "rechargePlan"
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
                                        placeholder = "Enter Recharge Price"
                                        name = "rechargePrice"
                                        className = "form-control"
                                        value = {valuePrice}
                                        onChange = {(e) => setValuePrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveRechargeAddon(e)} >Submit </button>
                                <Link to="/getAllRechargeAddon" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    );
};

export default RechargeAddons;