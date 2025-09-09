import React from 'react'

export default function CourseList({data, onSelect}){
  return (
    <div className="directions">
      {Object.keys(data).map(d=> (
        <div key={d} className="directionCard" onClick={()=>onSelect(d)}>{d}</div>
      ))}
    </div>
  )
}
