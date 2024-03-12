import NumButton from "./NumButton"

function Pad({changeValue}) {
  return (
    <>
    <div>
        <NumButton num={1} changeValue={changeValue} />
        <NumButton num={2} changeValue={changeValue} />
        <NumButton num={3} changeValue={changeValue} />
    </div>
    <div>
        <NumButton num={4} changeValue={changeValue} />
        <NumButton num={5} changeValue={changeValue} />
        <NumButton num={6} changeValue={changeValue} />
    </div>
    <div>
        <NumButton num={7} changeValue={changeValue} />
        <NumButton num={8} changeValue={changeValue} />
        <NumButton num={9} changeValue={changeValue} />
    </div>
    <div>
        <NumButton num={0} changeValue={changeValue} />
    </div>
    </>
  )
}

export default Pad