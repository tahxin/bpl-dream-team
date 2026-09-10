import '../App.css';
import bannerMain from '../assets/banner-main.png';
import bannerShadow from '../assets/bg-shadow.png';

const herosection = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-20 pointer-events-none"></div>
            <div 
                className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4"
                style={{ backgroundImage: `url(${bannerShadow})` }}
            >
                <div className="text-center space-y-6 animate-fade-in">
                    <div className="mb-8">
                        <img src={bannerMain} alt="banner main" className="h-32 md:h-40 mx-auto" />
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className='text-gray-900 text-4xl md:text-6xl font-bold leading-tight'>
                            Assemble Your Ultimate
                            <span className="block text-amber-600">
                                Dream 11 Cricket Team
                            </span>
                        </h2>
                        
                        <p className='text-gray-700 text-lg md:text-2xl font-medium'>
                            Beyond Boundaries, Beyond Limits
                        </p>
                    </div>
                    
                    <div className="pt-4">
                        <button className="btn px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-lg">
                            Claim Free Credit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default herosection;