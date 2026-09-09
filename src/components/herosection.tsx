
import '../App.css';
import bannerMain from '../assets/banner-main.png';
import bannerShadow from '../assets/bg-shadow.png'; 





const herosection = () => {
    return (
        <div  className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bannerShadow})` }}>
            <img src={bannerMain} alt="banner main" />
            <h2 className='text-black text-5xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <h6 className='text-black text-2xl'>Beyond Boundaries Beyond Limits</h6>
            <button className="btn btn-neutral bg-amber-400 text-black">Claim Free Credit</button>
        </div>
    );
};

export default herosection;