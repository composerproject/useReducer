const OpButton = ({op, changeValue}) => {
    let symbol = '';
    switch (op){
        case 'add':
            symbol='+';
            break;
        case 'sub':
            symbol='-';
            break;
        case 'multi':
            symbol='x';
            break;
    }

        const handleClick = (e) => {
            changeValue({type:'set_op', payload: {op}});
        }

    return (
        <button className="op-btn" onClick={handleClick}>{symbol}</button>
    )
}

export default OpButton


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