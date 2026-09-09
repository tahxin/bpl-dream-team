import logo from '../assets/logo-footer.png'
import { AiFillDollarCircle } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 text-color-black">
      <img src={logo} alt="Logo" />
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>Fixture</li>
        <li>Team</li>
        <li>Schedules</li>
      </ul>
      <div className="flex items-center space-x-2">
        <p>1000 Coins</p>
        <AiFillDollarCircle />
      </div>
    </nav>
  )
}