import './App.css';
import CountdownTimer from './components/CountdownTimer';
import EventDetails from './components/EventDetails';
import FamilyDetails from './components/FamilyDetails';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Greeting />
      <CountdownTimer />
      <EventDetails />
      <FamilyDetails />
      <Footer />
    </div>
  );
}

export default App;
