import React from "react";
import "./ButtonsForm.css"
import {NavLink} from "react-router-dom";;


const NewCalculation = (props) => {
    return (
        <div className="btnWrap">
            <NavLink exact to={`/step/${1}`} onClick={props.stateZeroing} className={'btn'}>
                Новый рассчет
            </NavLink>
        </div>
    )
}


export default NewCalculation