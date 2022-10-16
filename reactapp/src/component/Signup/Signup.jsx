import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import SignupService from '../../services/SignupService'

function Signup(){
    const [input, setInput] = useState({
        userRole: '',
        email: '',
        username: '',
        mobileNumber: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({
        userRole: '',
        email: '',
        username: '',
        mobileNumber: '',
        password: '',
        confirmPassword: ''
    })

    const navigate = useNavigate();

    const saveOrUpdateUser = (e) => {
        e.preventDefault();

        const user = input

        SignupService.createAccount(user).then((response) =>{

            console.log(response.data)
            alert("Registered Successfully");
            navigate('/signup');

        })
        
    }

    const onInputChange= e =>{
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const validateInput = e =>{
        let {name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: ""};
            switch(name){
                case "userRole":
                    if(!value){
                        stateObj[name] = "Please enter Admin/User";
                    }
                    break;

                case "email":
                    if(!value){
                        stateObj[name] = "Please enter Email";
                    }
                    break;
                
                case "username":
                    if(!value){
                        stateObj[name] = "Please enter Username";
                    }
                    break;
                
                case "mobileNumber":
                    if(!value){
                        stateObj[name] = "Please enter Mobile number";
                    }
                    break;
                
                case "password":
                    if(!value){
                        stateObj[name] = "Please enter Password";
                    }else if (input.confirmPassword && value !== input.confirmPassword){
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match";
                    }else{
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if(!value){
                        stateObj[name] = "Please enter Confirm Password";
                    }else if (input.password && value !== input.password){
                        stateObj[name] = "Password and Confirm Password does not match";
                    }
                    break;

                default:
                    break;
            }
            return stateObj;
        })
    }
    
    const title = () => {
        return <h2 className = "text-center">Register</h2>
    }
    return(
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
                                    <label className = "form-label"> User Role :</label>
                                        <input type='text' className = "form-control" name='userRole' id='userRole' placeholder='Enter Admin/User' value={input.userRole} onChange={onInputChange} onBlur={validateInput}></input>
                                        {error.userRole && <span className='err'>{error.userRole}</span>}
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                        <input type='email' className = "form-control" name='email' id='email' placeholder='Enter email' value={input.email} onChange={onInputChange} onBlur={validateInput}></input>
                                        {error.email && <span className='err'>{error.email}</span>}
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Username :</label>
                                        <input type='text' className = "form-control" name='username' id='username' placeholder='Enter Username' value={input.username} onChange={onInputChange} onBlur={validateInput}></input>
                                        {error.username && <span className='err'>{error.username}</span>}
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Mobile Number :</label>
                                        <input type='text' className = "form-control" name='mobileNumber' id='mobileNumber' placeholder='Enter MobileNumber ' value={input.mobileNumber} onChange={onInputChange} onBlur={validateInput}></input>
                                        {error.mobileNumber && <span className='err'>{error.mobileNumber}</span>}
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Password :</label>
                                        <input type='password' className = "form-control" name='password' id='password' placeholder='Password' value={input.password} onChange={onInputChange} onBlur={validateInput}></input>
                                        {error.password && <span className='err'>{error.password}</span>}
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                        <input type='password' className = "form-control"  name='confirmPassword' id='confirmPassword' placeholder='Confirm Password' value={input.confirmPassword} onChange={onInputChange} onBlur={validateInput}></input>
                                        {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                                </div>
                                <button className = "btn btn-success" id='submitButton' onClick = {(e) => saveOrUpdateUser(e)} >Register</button>
                                <p>Already a User? <a id='signinLink' href="/login">Login</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup