import React from "react";
import Form from '../components/Form.js';

function validateString(toValidate){

    if(/^.*[0-9]+.*$/.test(toValidate))
        return {isValid: false, errorMessage:"Please do not enter numbers"};

    if(toValidate === "")
        return {isValid: false, errorMessage:"Please fill in the input field. Do not leave it blank"};

    return {isValid:true, errorMessage:""};
}

let firstNameInput = {
    id:"firstName",
    labelText:"First Name",
    type:"text",
    validation:validateString
};
let lastNameInput = {
    id:"lastName",
    labelText:"Last Name",
    type:"text",
    validation:validateString
};
let inputs = [firstNameInput, lastNameInput];


function PersonalInformation1(){
    return(
        <React.Fragment >
            <Form Inputs={inputs} GoNext='/personal-info2'/>
        </React.Fragment >
    );
}
export default PersonalInformation1;