
function EqualButton({calculate}) {
    const handleClick = () => {
        calculate();
    }

  return (
    <button  className="equal-btn" onClick={handleClick} >=</button>
  )
}

export default EqualButton