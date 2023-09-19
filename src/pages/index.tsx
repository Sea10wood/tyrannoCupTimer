import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [remainingDays, setRemainingDays] = useState<number>(0);
  const [remainingHours, setRemainingHours] = useState<number>(0);
  const [remainingMinutes, setRemainingMinutes] = useState<number>(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(0);

  // 目標日時を設定
  const targetDate = new Date('2023-09-21T15:00:00Z').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = targetDate - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setRemainingDays(0);
        setRemainingHours(0);
        setRemainingMinutes(0);
        setRemainingSeconds(0);
      } else {
        const totalSeconds = Math.floor(timeDifference / 1000); // ミリ秒から秒に変換

        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        setRemainingDays(days);
        setRemainingHours(hours);
        setRemainingMinutes(minutes);
        setRemainingSeconds(seconds);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, );

  // レスポンシブなスタイルを定義
  const centerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // 画面の高さいっぱいに表示
    backgroundColor: '#fabe00',
  };

  const containerStyle: React.CSSProperties = {
    border: '2px solid white', // 白い四角の境界線を追加
    padding: '100px', // テキストからの余白を追加
    textAlign: 'center', // テキストを中央に配置
    backgroundColor: 'white',
  };

  const headingStyle: React.CSSProperties = {
    fontWeight: 'bold', 
    fontSize: '2vw',
    fontFamily: 'Orbitron, sans-serif',
    background: 'linear-gradient(100deg, #1af7fb, #fabe00)', // グラデーション背景
  WebkitBackgroundClip: 'text', // テキストを背景にクリップ
  WebkitTextFillColor: 'transparent', 
  };

  const timerTextStyle: React.CSSProperties = {
    fontWeight: 'bold', // 太字
    fontSize: '5vw',
    fontFamily: 'Orbitron, sans-serif',
  };

  return (
    <div style={centerStyle}>
         <div style={containerStyle}>

      <h1 style={headingStyle}>Hackz Hackathon ティラノカップ最終発表まで残り時間</h1>
      <p style={timerTextStyle}>
        {remainingDays} 日  {remainingHours} 時間 {remainingMinutes} 分 {remainingSeconds} 秒
      </p>
         </div>
    </div>
  );
};

export default CountdownTimer;
