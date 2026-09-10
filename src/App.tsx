import './App.css'
import { useState } from 'react'
import Herosection from './components/herosection'
import Navbar from './components/navbar'
import Playercards from './components/playercards'
import Footer from './components/footer'

function App() {
  const [coins, setCoins] = useState(1500);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#10251d]">
      <Navbar coins={coins} />
      <Herosection />
      <Playercards coins={coins} setCoins={setCoins} />
      <Footer />
    </div>
  )
}

export default App
