import { useEffect } from 'react';
import './App.css';
import CountdownTimer from './components/CountdownTimer';
import EventDetails from './components/EventDetails';
import FamilyDetails from './components/FamilyDetails';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';
import Mantras from './components/Mantras';
import Venue from './components/Venue';

const generateConfetti = () => {
  const container = document.getElementById("confetti-container");

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDelay = `${Math.random() * 3}s`;
    confetti.style.animationDuration = `${3 + Math.random() * 2}s`;
    container.appendChild(confetti);
  }

  // Remove confetti after 5 seconds
  setTimeout(() => {
    container.innerHTML = "";
  }, 5000);
};

function App() {

  useEffect(() => {
    generateConfetti();
  }, []);
  return (
    <div className="relative">
      <div id="confetti-container" className="absolute inset-0 overflow-hidden z-50 pointer-events-none"></div>
      <Navbar />
      <Mantras />
      <CountdownTimer />
      <EventDetails />
      <Greeting />
      <Venue />
      <FamilyDetails />
      <Footer />
    </div>
  );
}

export default App;
