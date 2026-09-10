import logo from '../assets/logo-footer.png'
import { AiFillDollarCircle } from "react-icons/ai";

interface NavbarProps {
  coins: number;
}

export default function Navbar({ coins }: NavbarProps) {
  return (
    <nav id="top" className="sticky top-0 z-50 border-b border-[#10251d]/10 bg-[#f6f4ee]/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="BPL Dream Team" className="h-12 w-auto" />
          </div>
          
          <ul className="hidden gap-7 text-sm font-semibold text-[#426052] md:flex">
            <li><a href="#top" className="transition-colors hover:text-[#10251d]">Home</a></li>
            <li><a href="#players" className="transition-colors hover:text-[#10251d]">Players</a></li>
            <li><a href="#players" className="transition-colors hover:text-[#10251d]">Build XI</a></li>
          </ul>
          
          <div className="flex items-center gap-2 border border-[#10251d]/15 bg-white px-3 py-2 sm:px-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#638070]">Coins</p>
              <p className={`text-lg font-bold transition-colors duration-200 ${
                coins < 0 ? 'text-red-600' : coins < 200 ? 'text-orange-600' : 'text-green-600'
              }`}>
                {coins} <span className="text-xs font-semibold">coins</span>
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
