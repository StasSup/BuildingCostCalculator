import getRequest from "../API/API";

const CHOOSE_BUILDING ='CHOOSE_BUILDING'
const HEIGHT ='HEIGHT'
const MATERIAL ='MATERIAL'
const SIZE_X ='SIZE_X'
const SIZE_Y ='SIZE_Y'
const SET_RESULT = 'SET_RESULT'
const STATE_ZEROING = 'STATE_ZEROING'

let initialState = {
    building: '',
    height: '',
    material: '',
    size_x: '',
    size_y: '',
    result: []
}

const StepReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_BUILDING: {
            return {
                ...state,
                building: action.building
            }
        }
        case HEIGHT: {
            return {
                ...state,
                height: action.height
            }
        }
        case MATERIAL: {
            return {
                ...state,
                material: action.material
            }
        }
        case SIZE_X: {
            return {
                ...state,
                size_x: action.size_x
            }
        }
        case SIZE_Y: {
            return {
                ...state,
                size_y: action.size_y
            }
        }
        case SET_RESULT: {
            return {
                ...state,
                result: action.result
            }
        }
        case STATE_ZEROING: {
            state = initialState
            return {
                ...state
            }
        }
        default: return state
    }
}

export const chooseBuildingActionCreator = (building) => ({type: CHOOSE_BUILDING, building})
export const chooseHeightActionCreator = (height) => ({type: HEIGHT, height})
export const chooseMaterialActionCreator = (material) => ({type: MATERIAL, material})
export const sizeXActionCreator = (size_x) => ({type: SIZE_X, size_x})
export const sizeYActionCreator = (size_y) => ({type: SIZE_Y, size_y})
export const setResult = (result) => ({type: SET_RESULT, result})
export const stateZeroingAC = () => ({type: STATE_ZEROING})


export const getResult = (state) => {
    return (dispatch) => {
        getRequest(state.building, state.height, state.material, state.size_x, state.size_y).then(response => {
            dispatch(setResult(response))
        })
    }
}

export default StepReducer
