import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import LoginService from '../../services/LoginService'

function Signup(){
    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const saveOrUpdateUser = (e) => {
        e.preventDefault();

        const user = input

        LoginService.createAccount(user).then((response) =>{

            console.log(response.data)
            alert("Login Successfully");
            navigate('/login');

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

                case "email":
                    if(!value){
                        stateObj[name] = "Please enter Email";
                    }
                    break;
                
                
                case "password":
                    if(!value){
                        stateObj[name] = "Please enter Password";
                    }
                    break;

                default:
                    break;
            }
            return stateObj;
        })
    }
    
    const title = () => {
        return <h2 className = "text-center">Login</h2>
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
                                    <label className = "form-label"> Email :</label>
                                        <input type='email' className = "form-control" name='email' id='email' placeholder='Enter email' value={input.email} onChange={onInputChange} onBlur={validateInput}></input>
                                        {error.email && <span className='err'>{error.email}</span>}
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Password :</label>
                                        <input type='password' className = "form-control" name='password' id='password' placeholder='Password' value={input.password} onChange={onInputChange} onBlur={validateInput}></input>
                                        {error.password && <span className='err'>{error.password}</span>}
                                </div>
                                <button className = "btn btn-success" id='submitButton' onClick = {(e) => saveOrUpdateUser(e)} >Submit</button>
                                <p>Not a User? <a id='signinLink' href="/signup">Create account</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup