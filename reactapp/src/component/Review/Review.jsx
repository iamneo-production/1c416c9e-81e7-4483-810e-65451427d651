import React, {useState, useEffect} from 'react'
import UserService from '../../services/user.service'

const Review = () => {

    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        UserService.getAllReview().then((response) => {
            setReviews(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }, []);

    return (
        <div className = "container">
            <h2 className = "text-center"> Review </h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Email </th>
                        <th> Review Date </th>
                        <th> Comments </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(
                            review =>
                            <tr key = {review.Id}> 
                                <td> {review.email} </td>
                                <td> {review.reviewdt}</td>
                                <td> {review.comments}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Review;