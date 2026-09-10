import './App.css'
import { useState } from 'react'
import Herosection from './components/herosection'
import Navbar from './components/navbar'
import Playercards from './components/playercards'

function App() {
  const [coins, setCoins] = useState(1500);

  return (
    <>
      <Navbar coins={coins} />
      <Herosection />
      <Playercards coins={coins} setCoins={setCoins} />
    </>
  )
}

export default App
