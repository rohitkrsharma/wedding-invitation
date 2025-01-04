import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const weddingDate = new Date("2025-03-06T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = weddingDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white  py-10 px-5 md:px-20 text-center">
      <h2 className="text-2xl md:text-3xl font-playfair font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500 mb-6">Countdown to Our Special Day</h2>
      {Object.keys(timeLeft).length > 0 ? (
        <div className="flex justify-center gap-4 font-poppins text-lg md:text-xl font-semibold text-gray-800">
          <div className="flex flex-col items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500 text-3xl md:text-4xl">{timeLeft.days}</span>
            <span>Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500 text-3xl md:text-4xl">{timeLeft.hours}</span>
            <span>Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500 text-3xl md:text-4xl">{timeLeft.minutes}</span>
            <span>Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500 text-3xl md:text-4xl">{timeLeft.seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
      ) : (
        <p className="text-lg md:text-xl text-gray-700">The big day has arrived! 🎉</p>
      )}
    </section>
  );
};

export default CountdownTimer;
