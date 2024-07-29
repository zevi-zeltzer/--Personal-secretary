

function ButAlert() {
    let i =0;
    const arrText = ["hi eli & zeevi!!","click on my again!!","Thank you!!"]
  return (
    <div>
        <button className="but" onClick={()=>{alert(arrText[i%3],i++)}}>click my</button>
    </div>
  )
}

export default ButAlert