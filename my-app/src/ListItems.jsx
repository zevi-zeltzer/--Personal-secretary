

function ListItems() {
    const arrList = ["shopping.","fix the phone.","make an appointment with the doctor!!"];
  return (
    <div className="list">
        <h2 className="titleList">my list</h2>
        {arrList.map(item=>{
            return <div className="itemCheck"><input type="checkbox" className="checkList"/> 
            <h3 className="items">{item}</h3></div>
            
        })}
         
    </div>
  )
}

export default ListItems