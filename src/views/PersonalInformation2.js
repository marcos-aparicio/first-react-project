import React from "react";
import Form from '../components/Form.js';

const birthDateInputValidation = (date) => {
    if (date === "")
        return { isValid: false, errorMessage: "Please fill the date of birth input field" };
    let userBirthDate = new Date(date);
    let today = new Date();
    if (userBirthDate >= today) {
        return { isValid: false, errorMessage: "Select a valid date of birth. It can't be today or in the future" };
    }
    //validating user's age
    let diff = (today.getTime() - userBirthDate.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    diff /= 365.25;
    if (diff < 16)
        return { isValid: false, errorMessage: "You must be 16 years or older" };
    //validating user's age

    return { isValid: true, errorMessage: "" };
}
let birthDateInput = {
    id: "birthDate",
    labelText: "Date of Birth",
    type: "date",
    validation: birthDateInputValidation
};

let genderInput = {
    id: "gender",
    labelText: "Gender (Type F for Female, M for Male or O for Other)",
    type: "text",
    validation: (genderLetter) => {
        if (genderLetter === "")
            return { isValid: false, errorMessage: "Do not leave the gender input field blank" };
        if (!/^[FMOfmo]$/.test(genderLetter))
            return { isValid: false, errorMessage: "Please enter a value as established in the pattern on the gender input field" };
        return { isValid: true, errorMessage: "" };
    }
};

const healthCardValidation = (number) => {

    let numchar = number.toString();
    let sum = 0;
    for (let i = 0; i < numchar.length - 1; i++) {
        let num = parseInt(numchar.charAt(i));

        if (i % 2 === 0) num = sumOfDigits(num * 2);

        sum += num;
    }

    return 10 - (sum%10) === parseInt(numchar.charAt(9));

    function sumOfDigits(num){
        if (num < 10) return num;
        return num % 10 + sumOfDigits(Math.floor(num / 10));
    }
};
let healthCardInput = {
    id: "healthCardNumber",
    labelText: "Health Card Number (Format XXXXXXXXXX)",
    type: "text",
    validation: (number) => {
        if (! /^[0-9]{10}$/.test(number))
            return { isValid: false, errorMessage: "Input field in Health Card Number must be a number and must only have 10 digits" };
        number = parseInt(number);
        if (!healthCardValidation(number))
            return { isValid: false, errorMessage: "Invalid Health Card Number" };

        return { isValid: true, errorMessage: "" };
    }
};

let inputs = [birthDateInput, genderInput, healthCardInput];

export default function PersonalInformation2() {
    return (
        <Form Inputs={inputs} GoNext='/summary'/>
    );
}

