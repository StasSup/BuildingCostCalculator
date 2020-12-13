import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {chooseMaterialActionCreator} from "../../../Redux/StepReducer";
import Step3Garage from "./Step3Garage";
import Step3House from "./Step3House";
import {BUILDING_ENUM} from "../../../appConstants";

const Step3Container = (props) => {
    const dispatch = useDispatch()
    const building = useSelector(state => state.StepData.building);
    const chooseMaterial = (material) => {
        dispatch(chooseMaterialActionCreator(material))
    }
    return ((building == BUILDING_ENUM.house) ? <Step3House chooseMaterial={chooseMaterial}/> : <Step3Garage chooseMaterial={chooseMaterial}/>)
}

export default Step3Container
