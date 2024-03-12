const NumButton = ({num, changeValue}) => {

    const handleClick = (e) => {
        // changeValue({type:'set_value', payload: {name:'num1', value:num}});
        changeValue({type:'set_value1', payload: {name:'num1', value:num}});
    }

    return (
        <button className="btn" onClick={handleClick}>{num}</button>
    )
}

export default NumButton


/*

const Button = ({name, handleClick}) => {

    return (
        <button onClick={handleClick}>{name}</button>
    )
}

export default Button
*/

/*
const Input = ({value, changeValue, name}) => {

    const handleChange = (e) => {
        const {value, name} = e.target

        if(!isNaN(parseFloat(value)) || value === '') {
            changeValue({type:'set_value', payload: {name, value}})
        }

    }

    return (
        <>
            <input type={'text'} name={name} value={value} onChange={handleChange} />
        </>
    )
}

export default Input

*/