import EqualButton from "./EqualButton"
import OpButton from "./OpButton"

function Operations({changeValue, calculate}) {
  return (
    <>
    <OpButton op="add" changeValue={changeValue}/>
    <OpButton op="sub" changeValue={changeValue}/>
    <OpButton op="multi" changeValue={changeValue}/>
    <div>
        <EqualButton op="equal" calculate={calculate} />
    </div>
    </>
  )
}

export default Operations