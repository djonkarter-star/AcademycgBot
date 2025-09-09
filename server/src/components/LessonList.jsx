import React from 'react'
export default function LessonList({lessons, onOpen}){
  return (
    <div className="lessonsList">
      {lessons.map((l,idx)=>{
        const title = typeof l === 'string' ? l : l.title
        return (
          <div key={idx} className="lessonItem" onClick={()=>onOpen(typeof l === 'string' ? {title:l, video:null} : l)}>
            <div className="lessonTitle">{title}</div>
            <div className="lock">🔒</div>
          </div>
        )
      })}
    </div>
  )
}
