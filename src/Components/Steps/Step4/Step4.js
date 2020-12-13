import React from 'react';
import '../Step.css'

const Step4 = (props) => {
    const onChangeInputX = (e) => {
        props.sizeX(e.target.value)
    }
    const onChangeInputY = (e) => {
        props.sizeY(e.target.value)
    }
    return (
        <div className="stepWrap">
            <div className="stepHeaderWrap">
                <p className="header">
                    Длина стен (в метрах):
                </p>
            </div>
            <div className="bodyInputWrap">
                <input className="bodyInputStyle" onChange={onChangeInputX} value={props.valueSize_x}/> x <input className="bodyInputStyle" onChange={onChangeInputY} value={props.valueSize_y}/>
            </div>
        </div>
    )
}

export default Step4