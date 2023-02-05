import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"; 

class BasicForm extends React.Component {
    constructor(props) {
        super(props);
        this.formValidated = false;
        this.inputs = props.Inputs.map((input, idx) => {
            input['idx'] = idx;
            input['value'] = '';
            return input;
        });
        this.state = {
            errorMessage: "",
            data: this.inputs.map(input => {
                let dataField = input.labelText.split('(')[0];
                return { field: dataField, value: input.value };
            })
        };
        this.nextPage = props.GoNext
    }
    generateErrorMessage() {
        return (
            <div className="text-center alert alert-danger">Error: {this.state.errorMessage}</div>
        );
    }

    updateInputValue(event) {
        let exactInput = this.state.data[event.target.id];
        exactInput.value = event.target.value;
    }
    renderInputField(inputData) {
        return (
            <div className="mb-3" key={inputData.id}>
                <label htmlFor={inputData.id} className="form-label">
                    {inputData.labelText}
                </label>
                <input type={inputData.type} required className="form-control" id={inputData.idx} onChange={this.updateInputValue.bind(this)} defaultValue={inputData.value} />
            </div>
        );
    }

    submitValidation(event) {
        event.preventDefault();
        const { navigate, location } = this.props;
        for (let i = 0; i < this.inputs.length; i++) {
            let validationResult = this.inputs[i].validation(this.state.data[i].value);

            if (validationResult.isValid) continue;
            this.setState({ errorMessage: validationResult.errorMessage });
            this.formValidated = false;
            return;
        }
        this.setState({ errorMessage: "" });
        this.formValidated = true;
        if(location.state === null)
            navigate(this.nextPage, { state:{
                data: this.state.data
            } });
        else
            navigate(this.nextPage, { state:{
                data: location.state.data.concat(this.state.data)
            } });
    }

    render() {
        let errorComponent = (this.state.errorMessage !== "") ? this.generateErrorMessage() : "";
        return (
            <form className="view h-100 d-flex flex-column justify-content-center p-5 bg-dark text-light">
                <h1 className="text-center">Please complete this information</h1>
                <div className="container w-50 d-flex flex-column align-items-center p-2">
                    {errorComponent}
                    {this.inputs.map(this.renderInputField.bind(this))}
                    {/* <Link className="btn btn-light" to={this.nextPage} onClick={this.submitValidation.bind(this)} >Submit Information</Link> */}
                    <button className="btn btn-light" onClick={this.submitValidation.bind(this)}>Submit information</button>
                </div>
            </form>
        );
    }
};
export default function Form(props) {
    const location = useLocation()
    const navigate = useNavigate();
    return <BasicForm {...props} navigate={navigate} location={location} />;
}