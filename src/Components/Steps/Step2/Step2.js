import React from 'react';
import '../Step.css'

const Step2 = (props) => {
    const onChangeInput = (e) => {
        props.chooseHeight(e.target.value)
    }
    return (
        <div className="stepWrap">
            <div className="stepHeaderWrap">
                <p className="header">
                    Количество этажей (число):
                </p>
            </div>
            <div className="bodyInputWrap">
                <input className="bodyInputStyle" onChange={onChangeInput} value={props.height}/>
            </div>
        </div>
    )
}


export default Step2
