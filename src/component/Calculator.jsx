import { useReducer } from 'react';

const initialState = {
    num1: '',
    num2: '',
    result: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'setNum1':
            return { ...state, num1: action.payload };
        case 'setNum2':
            return { ...state, num2: action.payload };
        case 'add':
            return { ...state, result: Number(state.num1) + Number(state.num2) };
        case 'multiply':
            return { ...state, result: Number(state.num1) * Number(state.num2) };
        default:
            return state;
    }
};

const Calculator = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        if (e.target.name === 'num1') {
            dispatch({ type: 'setNum1', payload: e.target.value });
        } else if (e.target.name === 'num2') {
            dispatch({ type: 'setNum2', payload: e.target.value });
        }
    };

    const add = () => {
        dispatch({ type: 'add' });
    };

    const multiply = () => {
        dispatch({ type: 'multiply' });
    };

    return (
        <>
            <p>Résultat : {state.result}</p>
            <input
                type="number"
                onChange={handleChange}
                value={state.num1}
                placeholder="Num1"
                name="num1"
            />
            <input
                type="number"
                onChange={handleChange}
                value={state.num2}
                placeholder="Num2"
                name="num2"
            />
            <button onClick={add}>+</button>
            <button onClick={multiply}>*</button>
        </>
    );
};

export default Calculator;
