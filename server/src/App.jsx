import React, {useState, useEffect} from 'react'
import CourseList from './components/CourseList'
import LessonList from './components/LessonList'
import Payment from './components/Payment'
import courses from './data/courses.json'
import { motion, AnimatePresence } from 'framer-motion'

export default function App(){
  const [direction, setDirection] = useState(null)
  const [course, setCourse] = useState(null)
  const [lesson, setLesson] = useState(null)
  const [showPayment, setShowPayment] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [tgInfo, setTgInfo] = useState(null)

  useEffect(()=>{
    try{
      const w = window.Telegram?.WebApp
      if(w){
        w.ready()
        setTgInfo({user: w.initDataUnsafe?.user || null})
      }
    }catch(e){}
  },[])

  const handleOpenLesson = (l) => {
    if(!isSubscribed){
      setShowPayment(true)
      setLesson(l)
      return
    }
    setLesson(l)
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="logo">AcademyCG</div>
        <div className="user">{tgInfo?.user ? tgInfo.user.first_name : 'Гость'}</div>
      </header>

      <main className="container">
        <AnimatePresence mode='wait'>
        {!direction && (
          <motion.section key="directions" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <h2>Выберите направление</h2>
            <CourseList data={courses} onSelect={(d)=>setDirection(d)}/>
          </motion.section>
        )}

        {direction && !course && (
          <motion.section key="courses" initial={{x:50,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-50,opacity:0}}>
            <button className="back" onClick={()=>setDirection(null)}>← Назад</button>
            <h2>{direction}</h2>
            <div className="coursesGrid">
              {Object.keys(courses[direction]).map(c=>(
                <div key={c} className="courseCard" onClick={()=>setCourse(c)}>
                  <div className="courseTitle">{c}</div>
                  <div className="meta">{courses[direction][c].length} уроков</div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {course && (
          <motion.section key="lessons" initial={{x:50,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-50,opacity:0}}>
            <button className="back" onClick={()=>setCourse(null)}>← Назад</button>
            <h2>{course}</h2>
            <LessonList lessons={courses[direction][course]} onOpen={handleOpenLesson}/>
          </motion.section>
        )}

        {lesson && isSubscribed && (
          <motion.section key="player" initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-20,opacity:0}}>
            <button className="back" onClick={()=>setLesson(null)}>← Назад</button>
            <h3>{lesson.title}</h3>
            <div className="videoWrap">
              <iframe src={lesson.video} title={lesson.title} frameBorder="0" allowFullScreen></iframe>
            </div>
          </motion.section>
        )}
        </AnimatePresence>
      </main>

      <footer className="footer">
        <div>Подписка: <strong>{isSubscribed ? 'Активна' : 'Не активна'}</strong></div>
        <div>
          <button className="btn" onClick={()=>setShowPayment(true)}>💳 Оформить подписку</button>
        </div>
      </footer>

      <Payment open={showPayment} onClose={()=>setShowPayment(false)} onPaid={()=>{ setIsSubscribed(true); setShowPayment(false); }} lesson={lesson} />
    </div>
  )
}
