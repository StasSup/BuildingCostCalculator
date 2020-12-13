import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Step2 from "./Step2";
import {chooseHeightActionCreator} from "../../../Redux/StepReducer";

const Step2Container = (props) => {
    const dispatch = useDispatch()
    const height = useSelector(state => state.StepData.height)
    const chooseHeight = (height) => {
        dispatch(chooseHeightActionCreator(height))
    }
    return (
        <Step2 chooseHeight={chooseHeight} height={height}/>
    )
}

export default Step2Container
