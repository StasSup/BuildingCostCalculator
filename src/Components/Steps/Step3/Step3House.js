import React from 'react';
import '../Step.css';
import {MATERIAL_ENUM, MATERIAL_ENUM_DESCRIPTION} from "../../../appConstants";

const Step3Garage = (props) => {
    return (
        <div className="stepWrap">
            <div className="stepHeaderWrap">
                <p className="header">
                    Материал стен:
                </p>
            </div>
            <div className="bodyWrap">
                <p className="bodyContent" onClick={() => props.chooseMaterial(MATERIAL_ENUM.brick)}>
                    {MATERIAL_ENUM_DESCRIPTION[MATERIAL_ENUM.brick]}
                </p>
                <p className="bodyContent" onClick={() => props.chooseMaterial(MATERIAL_ENUM.cinderblock)}>
                    {MATERIAL_ENUM_DESCRIPTION[MATERIAL_ENUM.cinderblock]}
                </p>
                <p className="bodyContent" onClick={() => props.chooseMaterial(MATERIAL_ENUM.woodenbar)}>
                    {MATERIAL_ENUM_DESCRIPTION[MATERIAL_ENUM.woodenbar]}
                </p>
            </div>
        </div>
    )
}

export default Step3Garage
