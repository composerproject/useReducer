import './App.css'
import Result from './component/Result.jsx'
import Input from "./component/Input.jsx"
import Button from './component/Button.jsx';
import { useReducer } from 'react';
import Pad from './component/Pad.jsx';
import Operations from './component/Operations.jsx';

const initialState = {
    num1: '',
    num2: '',
    result: '',
    acc:'',
    op:''
}
const reducer = (state, action) => {
    switch (action.type) {

        case 'set_value1':  
          if(state.op == 0){
            return {
              ...state,
              num1: state.num1 == '' ? action.payload.value : String(state.num1) + String(action.payload.value),
              result:''
            };
          } else {
            return {
              ...state,
              num2: state.num1 == '' ? action.payload.value : String(state.num2) + String(action.payload.value),
              result:''
            }
          }
        
        case 'set_op':
          return {
            ...state,
            op: action.payload.op
          };

        case 'set_value':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        case 'addition':
            return {
                ...initialState,
                result: parseFloat(state.num1) + parseFloat(state.num2)
            }

        case 'soustract':
            return {
                ...initialState,
                result: parseFloat(state.num1) - parseFloat(state.num2)
            }

        case 'multiply':
            return {
                ...initialState,
                result: parseFloat(state.num1) * parseFloat(state.num2)
            }

        case "reset":
            return initialState;

        default:
            return state;
    }
}

function App() {
    

    const [state, dispatch] = useReducer(reducer, initialState)

    const addition = () => {
        dispatch({type: 'addition'})
    }

    const substract = () => {
        dispatch({type: 'soustract'})
    }

    const multiply = () => {
        dispatch({type: 'multiply'})
    }

    const calculate = () => {
        switch(state.op) {
          case 'add':
            addition();
            break;
          case 'sub':
            substract();
            break;
          case 'multi':
            multiply();
            break;
        }
    }

  return (
    <>
    <Pad changeValue={dispatch}/>
    <Operations changeValue={dispatch} calculate={calculate}/>
    <Result num1={state.num1} op={state.op} num2={state.num2} result={state.result}/>

    </>
  )


}

export default App;

