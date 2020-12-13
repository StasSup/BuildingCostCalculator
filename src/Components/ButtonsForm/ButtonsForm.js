import React from "react";
import "./ButtonsForm.css"
import {NavLink} from "react-router-dom";
import {BUILDING_ENUM} from "../../appConstants";


const ButtonsForm = (props) => {
    return (
        <div className="btnWrap">
            <NavLink exact to={`/step/${1}`} className={'btn'}>
                Отмена
            </NavLink>
            {((props.building == BUILDING_ENUM.house || props.building == '') && props.step == 4) || ((props.building == BUILDING_ENUM.garage || props.building == '') && props.step == 3)
                ? <NavLink exact to={`/step/${Number(props.step) + 1}`} onClick={() => props.getRes(props.state)}
                           className={'btn'}>
                    Рассчитать
                </NavLink>
                : <NavLink exact to={`/step/${Number(props.step) + 1}`} className={'btn'}>
                    Далее
                </NavLink>}
        </div>
    )
}


export default ButtonsForm
