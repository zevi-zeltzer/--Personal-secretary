

function Time() {
    const date = new Date()
    const nowTime = date.toLocaleTimeString();
  return (
    <div className="time">
      <h2 className="titleTime">The time now is</h2>
      <h3 >{nowTime}</h3>
    </div>
  )
}

export default Time