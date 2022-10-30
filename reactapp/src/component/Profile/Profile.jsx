import React from "react";
import AuthService from "../../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header>
        <h3>
          <strong>Profile</strong> 
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Username:</strong> {currentUser.username}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Mobile Number:</strong> {currentUser.mobileNumber}
      </p>
    </div>
  );
  
};

export default Profile;