import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import UserService from '../../services/user.service'

const AddMonthlyPlan = () => {

    const [planType, setPlanType] = useState("Monthly");
    const [planName, setPlanName] = useState('');
    const [planValidity, setPlanValidity] = useState("30 Days");
    const [planDetails, setPlanDetails] = useState('');
    const [planPrice, setPlanPrice] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdatePlan = (e) => {
        e.preventDefault();

        const plan = {planType, planName, planValidity, planDetails, planPrice}

        if(id){
            UserService.updateMonthlyPlan(id, plan).then((response) => {
                console.log(response.data)
                navigate('/monthly-plan')
            }).catch(error => {
                console.log(error)
            })

        }else{
            UserService.createMonthlyPlan(plan).then((response) =>{

                console.log(response.data)
    
                navigate('/monthly-plan');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    };

    useEffect(() => {

        UserService.getMonthlyPlanById(id).then((response) =>{
            setPlanType(response.data.planType)
            setPlanName(response.data.planName)
            setPlanValidity(response.data.planValidity)
            setPlanDetails(response.data.planDetails)
            setPlanPrice(response.data.planPrice)
        }).catch(error => {
            console.log(error)
        });
    }, []);  // eslint-disable-line

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Monthly Plans</h2>
        }else{
            return <h2 className = "text-center">Add Monthly Plans</h2>
        }
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
                                    <label className = "form-label"> Plan Type :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Plan Type"
                                        name = "planType"
                                        className = "form-control"
                                        value = {planType}
                                        readOnly
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Plan Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Plan Name"
                                        name = "planName"
                                        className = "form-control"
                                        value = {planName}
                                        onChange = {(e) => setPlanName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Plan Validity :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Plan Validity"
                                        name = "planValidity"
                                        className = "form-control"
                                        value = {planValidity}
                                        readOnly
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Plan Details :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Plan Details"
                                        name = "planDetails"
                                        className = "form-control"
                                        value = {planDetails}
                                        onChange = {(e) => setPlanDetails(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Plan Price :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Plan Price"
                                        name = "planPrice"
                                        className = "form-control"
                                        value = {planPrice}
                                        onChange = {(e) => setPlanPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdatePlan(e)} >Submit </button>
                                <Link to="/monthly-plan" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    );
};

export default AddMonthlyPlan;