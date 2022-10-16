import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AddService from '../../services/AddService'

const Addons = () => {

    const [addons, setAddons] = useState([])

    useEffect(() => {

        getAllAddons();
    }, [])

    
    const getAllAddons = () => {
        AddService.getAllAddons().then((response) => {
            setAddons(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Addons </h2>
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
                                    <Link className="btn btn-info" to={`/rechargeAddon/${addon.addonId}`} > Select </Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Addons