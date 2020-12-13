import React from 'react';
import {useDispatch} from "react-redux";
import Step1 from "./Step1";
import {chooseBuildingActionCreator} from "../../../Redux/StepReducer";

const Step1Container = (props) => {
    const dispatch = useDispatch()
    const chooseBuilding = (building) => {
        dispatch(chooseBuildingActionCreator(building))
    }
    return (
        <Step1 chooseBuilding={chooseBuilding}/>
    )
}

export default Step1Container
