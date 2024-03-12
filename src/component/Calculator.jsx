import {useState} from 'react';
import { useReducer } from 'react';


const initialState = {
    num1:0,
    num2:0,
    result: 0
}

const reducer = (state, action) => {
    switch(action.type) {

        case 'add':
            return {
                ...state,
                result: Number(state.num1) + Number(state.num2)
            }
        case 'multiply':
            return {
                ...state,
                result: state.num1 * state.num2
            }
    
        default:
            return state;
    }
}

const Calculator = () => {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')

    const handleChange1 = (e) => {
        const {value} = e.target
        setNum1(value)
        state.num1 = value;
    }

    const handleChange2 = (e) => {
        const {value} = e.target
        setNum2(value)
        state.num2 = value;
    }

    
    const [state, dispatch] = useReducer(reducer, initialState)

    const add = () => {
        dispatch({
            type: 'add'
        })
    }

    const multiply = () => {
        dispatch({
            type: 'multiply'
        })
    }



    return (
        <>
            <p>Résultat : {state.result}</p>
            <input type={'number'} onChange={handleChange1} value={num1} placeholder={"Num1"} name={"text"} />
            <input type={'number'} onChange={handleChange2} value={num2} placeholder={"Num2"} name={"text"} />
            <button onClick={add}>+</button>
            <button onClick={multiply}>*</button>
        </>
    )
}

export default Calculator;