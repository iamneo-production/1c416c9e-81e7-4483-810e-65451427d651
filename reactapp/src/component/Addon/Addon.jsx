import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../services/user.service'

const Addon = () => {

    const [addons, setAddons] = useState([]);

    useEffect(() => {

        getAllAddons();
    }, []);

    
    const getAllAddons = () => {
        UserService.getAllAddons().then((response) => {
            setAddons(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    };

    const deleteByAddon = (addonId) => {
       UserService.deleteAddon(addonId).then((response) =>{
          getAllAddons();
       }).catch(error =>{
           console.log(error);
       })
        
    };

    return (
        <div className = "container">
            <h2 className = "text-center"> List Addons </h2>
            <Link to = "/add-addon" className = "btn btn-primary mb-2" id="addAddOn"> Add Addons </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Addon Name </th>
                        <th> Addon Price </th>
                        <th> Addon Details </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addons.map(
                            addon =>
                            <tr key = {addon.addonId}> 
                                <td> {addon.addonName} </td>
                                <td>${addon.addonPrice}</td>
                                <td>{addon.addonDetails}</td>
                                <td>
                                    <Link className="btn btn-info" id="editAddOnPlan" to={`/addon/${addon.addonId}`} >Update</Link>                                
                                    <button className = "btn btn-danger" id="deleteAddOnPlan" onClick = {() => deleteByAddon(addon.addonId)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Addon;