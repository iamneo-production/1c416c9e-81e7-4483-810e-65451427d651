import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import PopularplansService from '../../services/PopularplansService'

const RechargePopularplans = () => {

    const [planType, setPlanType] = useState('')
    const [planName, setPlanName] = useState('')
    const [planValidity, setPlanValidity] = useState('')
    const [planDetails, setPlanDetails] = useState('')
    const [planPrice, setPlanPrice] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const [rechargeType, setRechargeType] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [rechargePlan, setRechargePlan] = useState('')
    const [rechargePrice, setRechargePrice] = useState('')

    const saveRecharge = (e) => {
        e.preventDefault();
        
        const recharge = {planType, name, mobile, email, planName, planPrice}
        
        PopularplansService.createRecharge(recharge).then((response) =>{

            console.log(response.data)

            navigate('/getAllPopularPlans');

        }).catch(error => {
            console.log(error)
        })
        
    }

    useEffect(() => {

        PopularplansService.getPlanById(id).then((response) =>{
            setPlanType(response.data.planType)
            setPlanName(response.data.planName)
            setPlanValidity(response.data.planValidity)
            setPlanDetails(response.data.planDetails)
            setPlanPrice(response.data.planPrice)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        return <h2 className = "text-center">Recharge Plan</h2>
    }

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
                                        value = {planType}
                                        onChange = {(e) => setPlanType(e.target.value)}
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
                                        value = {id}
                                        onChange = {(e) => setRechargePlan(e.target.value)}
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
                                        value = {planPrice}
                                        onChange = {(e) => setPlanPrice(e.target.value)}
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
    )
}

export default RechargePopularplans