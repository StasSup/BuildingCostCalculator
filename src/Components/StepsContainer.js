import React, {useMemo} from 'react';
import {useParams} from "react-router";
import Step1Container from "./Steps/Step1/Step1Container";
import Step2Container from "./Steps/Step2/Step2Container";
import Step3Container from "./Steps/Step3/Step3Container";
import Step4Container from "./Steps/Step4/Step4Container";
import ButtonsFormContainer from "./ButtonsForm/ButtonsFormContainer";
import {useDispatch, useSelector} from "react-redux";
import {BUILDING_ENUM} from "../appConstants";
import ResultContainer from "./Steps/Result/ResultContainer";
import NewCalculation from "./ButtonsForm/NewCalculation";
import {stateZeroingAC} from "../Redux/StepReducer";

const StepsContainer = () => {
    const building = useSelector(state => state.StepData.building);
    const result = useSelector(state => state.StepData.result);
    const dispatch = useDispatch()
    const stateZeroing = () => {
        dispatch(stateZeroingAC())
    }
    let { step } = useParams()
    if (step == undefined || step == NaN) {
        step = 1
    }
    const stepComponentSelector = useMemo(() => {
        switch (step) {
            case '1':
                return <Step1Container />;
            case '2':
                return (building == BUILDING_ENUM.house) ? <Step2Container /> :  <Step3Container />;
            case '3':
                return (building == BUILDING_ENUM.house) ? <Step3Container /> : <Step4Container />;
            case '4':
                return (building == BUILDING_ENUM.house) ? <Step4Container /> : <ResultContainer />;
            case '5':
                return <ResultContainer />;
            default: return <Step1Container />
        }
    }, [step]);
    return (
        <div>
            <div className="headerWrap">
                <p className="headerContent">Калькулятор цены конструкций</p>
                <p className="headerStep">Шаг { step }</p>
            </div>
            {stepComponentSelector}
            <div>
                {result.result == undefined
                    ? <ButtonsFormContainer step = { step } building={building}/>
                    : <NewCalculation stateZeroing={stateZeroing}/> }

            </div>
        </div>
    );
};

export default StepsContainer;
