import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sizeXActionCreator, sizeYActionCreator} from "../../../Redux/StepReducer";
import Step4 from "./Step4";

const Step4Container = (props) => {
    const dispatch = useDispatch()
    const valueSize_x = useSelector(state => state.StepData.size_x)
    const valueSize_y = useSelector(state => state.StepData.size_y)
    const sizeX = (size_x) => {
        dispatch(sizeXActionCreator(size_x))
    }
    const sizeY = (size_y) => {
        dispatch(sizeYActionCreator(size_y))
    }
    return (
        <Step4 sizeX={sizeX} sizeY={sizeY} valueSize_x={valueSize_x} valueSize_y={valueSize_y}/>
    )
}

export default Step4Container
