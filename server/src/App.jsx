import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;

    tg.ready();
    tg.expand();

    console.log("Telegram WebApp data:", tg.initDataUnsafe);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🚀 AcademyCG WebApp</h1>
      <p>Добро пожаловать, студент!</p>
    </div>
  );
}

export default App;
