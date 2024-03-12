const Result = ({num1, op, num2, result}) => {
    let symbol = '';

    switch (op){
        case 'add':
            symbol = '+'
            break;
        case 'sub':
            symbol = '-'
            break;
        case 'multi':
            symbol = 'x'
            break;
    }

    return (
        // <div>
        //     <input value={result} />
        // </div>
        <p>{num1 !== '' ? num1 : ''} {symbol !== '' ? symbol : ''} {num2 !== '' ? num2 : ''} {num1 === '' || op === '' || num2 === '' ? '' : '='} {result !== '' ? result : ''}</p>
    )
}

export default Result;