// import './Home.module.css';
import { useState } from "react";
import img from "../../assets/sunset-pool.jpg";
import Car from "./Section/Car/Car";
import Hotel from "./Section/Hotel/Hotel";
import Flight from "./Section/Flight/Flight";
import Tours from "./Section/Tours/Tours";
const Home = () => {
  const [tab, setTab] = useState('flight');
  const handleTab = (inputValue) => {
    setTab(inputValue);
  };

  return (
    <div className="bg-cover " style={{ backgroundImage: `url(${img})` }}>
      <div className="font-bold h-[100vh] flex items-center justify-center ">
        <div className="border bg-slate-800 p-4 opacity-100">
          {/* tabs here */}
          <div className={`flex gap-6  w-fit pr-5` }>
            <div
              className={` text-white w-25 p-2 cursor-pointer ${tab === "flight" &&'bg-red-600'}` }
              onClick={() => handleTab('flight')}
            >
              Flight
            </div>
            <div
              className={`text-white p-2 w-25 cursor-pointer ${tab === "hotel" && 'bg-red-600'}`}
              onClick={() => handleTab('hotel')}
            >
              Hotel
            </div>
            <div className={`text-white p-2 w-[60px] text-center cursor-pointer ${tab === 'car' && 'bg-red-600'}`} onClick={()=> handleTab('car')}>
              Car
            </div>
            <div className={`text-white p-2 w-25 cursor-pointer ${tab === 'tours' && 'bg-red-600'}`} onClick={()=>handleTab('tours')}>Tours</div>
          </div>
          {/* tab Content here */}
          <div className="relative pt-4">
            {tab === 'flight' && <Flight />}
            { tab === 'hotel' && <Hotel /> }
            {tab === 'car' && <Car />}
            {tab === 'tours' && <Tours />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
