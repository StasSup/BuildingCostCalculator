import React from 'react';
import '../Step.css'
import {BUILDING_ENUM, BUILDING_ENUM_DESCRIPTION} from "../../../appConstants";

const Step1 = (props) => {
    return (
        <div className="stepWrap">
            <div className="stepHeaderWrap">
                <p className="header">
                    Что будем строить?
                </p>
            </div>
            <div className="bodyWrap">
                <p className="bodyContent" onClick={() => props.chooseBuilding(BUILDING_ENUM.house)}>
                    {BUILDING_ENUM_DESCRIPTION[BUILDING_ENUM.house]}
                </p>
                <p className="bodyContent" onClick={() => props.chooseBuilding(BUILDING_ENUM.garage)}>
                    {BUILDING_ENUM_DESCRIPTION[BUILDING_ENUM.garage]}
                </p>
            </div>
        </div>
    )
}

export default Step1
