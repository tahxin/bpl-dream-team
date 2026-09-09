import logo from '../assets/logo-footer.png'
import { AiFillDollarCircle } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-16 py-2 px-2 text-color-black bg-white">
      <img src={logo} alt="Logo" className="h-14" />
      <ul className="flex space-x-4 text-black">
        <li>Home</li>
        <li>Fixture</li>
        <li>Team</li>
        <li>Schedules</li>
      </ul>
      <div className="flex items-center space-x-2 text-black">
        <h2>1000 Coins</h2>
        <AiFillDollarCircle />
      </div>
    </nav>
  )
}