import React from "react";

const Profile = (props) => {
  return (
    <div>
      <h1>Tarun learning functional components</h1>
      <h3>name : {props.name}</h3>
      <h4>created a random prop : {props.xyzProp}</h4>
    </div>
  );
};

export default Profile;
