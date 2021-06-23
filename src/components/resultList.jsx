export const ResultList = (props) => {
    return (
      <div className="list">
        {props.laps.map(lap => {
          return <p>{lap}</p>
        })}
      </div>
    )
  }