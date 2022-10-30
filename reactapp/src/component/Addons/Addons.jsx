import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../services/user.service'

const Addons = () => {

    const [addons, setAddons] = useState([]);

    useEffect(() => {

        getAllAddons();
    }, []);

    
    const getAllAddons = () => {
        UserService.getAllRechargeAddons().then((response) => {
            setAddons(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    };

    const getAllAddonsDesc = () => {
        UserService.getAllRechargeAddonsDesc().then((response) => {
            setAddons(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    };

    return (
        <div className = "container">
            <h2 className = "text-center"> Addon Plan </h2>
            <div>Price: <button className="btn btn-dark" onClick={() => getAllAddonsDesc()}>High to Low</button> 
                    <button className="btn btn-dark" onClick={() => getAllAddons()}>Low to High</button></div>
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
                                    <Link className="btn btn-success" id="addOnsGrid1" to={`/recharge/addon/${addon.addonId}`} > Select </Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Addons;