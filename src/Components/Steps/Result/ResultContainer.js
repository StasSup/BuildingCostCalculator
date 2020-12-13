import React from 'react';
import {connect} from "react-redux";
import Result from "./Result";

const ResultContainer = (props) => {
    return (
        <Result result={props.result}/>
    )
}

let mapStateToProps = (state) => {
    return{
        result: state.StepData.result
    }
}

export default connect (mapStateToProps, null)(ResultContainer)
