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
            <Link to = "/addAddon" className = "btn btn-primary mb-2" > Add Addons </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Addon Id </th>
                    <th> Addon Name </th>
                    <th> Addon Price </th>
                    <th> Addon Details </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        addons.map(
                            addon =>
                            <tr key = {addon.addonId}> 
                                <td> {addon.addonId} </td>
                                <td> {addon.addonName} </td>
                                <td>${addon.addonPrice}</td>
                                <td>{addon.addonDetails}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/editAddon/${addon.addonId}`} >Update</Link>                                
                                    <button className = "btn btn-danger" onClick = {() => deleteByAddon(addon.addonId)}
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