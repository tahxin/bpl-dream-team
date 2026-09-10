import logo from '../assets/logo-footer.png'
import { AiFillDollarCircle } from "react-icons/ai";

interface NavbarProps {
  coins: number;
}

export default function Navbar({ coins }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>
          
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-200">Home</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-200">Fixture</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-200">Team</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-200">Schedules</li>
          </ul>
          
          <div className="flex items-center gap-3 bg-gray-50 px-5 py-2 rounded-full border border-gray-200 shadow-sm">
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Balance</p>
              <p className={`text-lg font-bold transition-colors duration-200 ${
                coins < 0 ? 'text-red-600' : coins < 200 ? 'text-orange-600' : 'text-green-600'
              }`}>
                {coins}
              </p>
            </div>
            <AiFillDollarCircle className={`text-2xl transition-colors duration-200 ${
              coins < 0 ? 'text-red-600' : coins < 200 ? 'text-orange-600' : 'text-green-600'
            }`} />
          </div>
        </div>
      </div>
    </nav>
  )
}