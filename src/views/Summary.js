import React from "react";
import { useLocation, Link } from "react-router-dom";

function renderInputResult(data){
    return (
        <div className="d-flex fs-2" key={data.field}>
            <p className="col">{data.field}: </p>
            <p className="col text-start">{data.value}</p>
        </div>   
    );
}

export default function Summary(){
    const location = useLocation();
    let mainComponent = (location.state == null || location.state.data.length !== 5) ?
            <div className="text-center alert alert-danger">Both forms must be filled completely</div>
            :  location.state.data.map(renderInputResult.bind(this));
    return(
        <div className="h-100 text-light bg-dark container-fluid align-items-center justify-content-center p-5">
            <h1 className="text-center">Summary</h1>
            <div className="container">
                {mainComponent}
            </div>
            <Link to='/' className="btn btn-light mx-auto">Take the quizz again</Link>
        </div>
    );
}