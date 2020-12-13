import React from 'react';
import ButtonsForm from "./ButtonsForm";
import {getResult} from "../../Redux/StepReducer";
import {connect} from "react-redux";

const ButtonsFormContainer = (props) => {
    return <ButtonsForm step={props.step} building={props.building} getRes={props.getRes} state={props.state} result={props.result}/>
}

let mapStateToProps = (state) => {
    return{
        state: state.StepData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getRes: (state) => {
            dispatch(getResult(state))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsFormContainer)
