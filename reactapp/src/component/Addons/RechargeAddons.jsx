import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import AddService from '../../services/AddService'

const RechargeAddons = () => {

    const [addonName, setAddonName] = useState('')
    const [addonPrice, setAddonPrice] = useState('')
    const [addonDetails, setAddonDetails] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const [rechargeType, setRechargeType] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [rechargePlan, setRechargePlan] = useState('')
    const [rechargePrice, setRechargePrice] = useState('')

    

    const saveRechargeAddon = (e) => {
        e.preventDefault();

        const recharge = {addonName, name, mobile, email, rechargePlan, addonPrice}

            AddService.createRecharge(recharge).then((response) =>{

                console.log(response.data)
    
                navigate('/getAllRechargeAddon');
    
            }).catch(error => {
                console.log(error)
            })
        
    }

    useEffect(() => {

        AddService.getAddonById(id).then((response) =>{
            setAddonName(response.data.addonName)
            setAddonPrice(response.data.addonPrice)
            setAddonDetails(response.data.addonDetails)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {
            return <h2 className = "text-center">Recharge Addon</h2>
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
                                        placeholder = "Recharge Type"
                                        name = "addonName"
                                        className = "form-control"
                                        value = {addonName}
                                        onChange = {(e) => setAddonName(e.target.value)}
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
                                        value = {id}
                                        onChange = {(e) => setRechargePlan(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Recharge Price :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Recharge Price"
                                        name = "addonPrice"
                                        className = "form-control"
                                        value = {addonPrice}
                                        onChange = {(e) => setAddonPrice(e.target.value), (e)=>setRechargePrice(e.target.value)}
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
    )
}

export default RechargeAddons