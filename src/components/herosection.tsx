import '../App.css';
import bannerMain from '../assets/banner-main.png';
import bannerShadow from '../assets/bg-shadow.png';

const herosection = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[#10251d]/88 pointer-events-none"></div>
            <div 
                className="relative z-10 flex min-h-[560px] flex-col items-center justify-center bg-cover bg-center px-5 py-20 sm:min-h-[620px]"
                style={{ backgroundImage: `url(${bannerShadow})` }}
            >
                <div className="max-w-4xl text-center">
                    <div className="mb-6">
                        <img src={bannerMain} alt="Cricket players celebrating" className="mx-auto h-28 object-contain sm:h-36" />
                    </div>
                    
                    <div>
                        <h1 className='text-4xl font-black leading-[.96] tracking-[-0.055em] text-[#f6f4ee] sm:text-6xl md:text-7xl'>
                            Pick the XI<br />that owns the night.
                        </h1>
                        <p className='mx-auto mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg'>
                            Spend your credits with intent, weigh the roles, and build a BPL side that feels like yours.
                        </p>
                    </div>
                    
                    <div className="mt-8">
                        <a href="#players" className="inline-flex min-h-12 items-center justify-center border border-[#b7dc55] bg-[#b7dc55] px-6 font-bold text-[#10251d] transition-colors hover:bg-transparent hover:text-[#b7dc55]">
                            Start picking
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default herosection;
