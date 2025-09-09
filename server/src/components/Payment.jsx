import React from 'react'
export default function Payment({open,onClose,onPaid,lesson}){
  if(!open) return null
  return (
    <div className="modal">
      <div className="modalCard">
        <h3>Оформление подписки</h3>
        <p>Для доступа к этому уроку требуется подписка.</p>
        {lesson && <p>Вы пытались открыть: <strong>{lesson.title}</strong></p>}
        <div className="actions">
          <button className="btn" onClick={()=>{ onPaid() }}>Оплатить 3 000 ₽ (неделя)</button>
          <button className="btn ghost" onClick={onClose}>Отмена</button>
        </div>
        <p className="small">Это тест: оплата имитируется и доступ открывается мгновенно.</p>
      </div>
    </div>
  )
}
