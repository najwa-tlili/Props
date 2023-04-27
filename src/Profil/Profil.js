import React from "react";

const Profil = (props) => {

return (
  <div>
      
    <h1> Profil </h1>
    <h2> I'm : {props.fullName} </h2>
    <h2> I'm : {props.profession} </h2>
    <h3> My State : {props.Bio} </h3>
    {props.children}
    <button onClick={()=>props.sayhello(props.fullName)}> show </button>
    </div>  
);
};

export default Profil;
