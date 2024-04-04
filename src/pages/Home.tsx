import React from 'react';

const Home: React.FC = () => {
  return (
    <div className= "min-h-screen flex items-center justify-evenly p-5" style={{ transform: 'translateY(-20%)' }}>
      <div className="relative flex justify-start overflow-visible">
        <div className="rounded-full flex justify-center items-center overflow-visible ml-6" style={{
          width: '130px', 
          height: '10px', 
          boxShadow: '0 0 80px 80px rgba(194, 179, 152, 0.6)', // Glow effect
          background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)', // Background gradient
        }}>
          <img src={`${process.env.PUBLIC_URL}/roya.png`} alt="Descriptive Alt Text" style={{
            position: 'absolute', // Positioning the image to overflow
            maxWidth: '300px', // Allowing the image to be larger than the container
            maxHeight: '300px', // Allowing the image to be larger than the container
            zIndex: 1, // Ensuring the image is above the shadow
            
          }} />
        </div>
      </div>
      <div className="flex flex-col items-end" style={{zIndex: 2,}}>
        <span className="text-1xl mt-[-40px]">Top winning</span>
        <span className="font-roboto font-light mt-0  text-6xl   mr-6">Saluki</span>
        <span className="text-3xl font-bold text-gray-400 " style={{ marginTop: '-7px' }}>Breeder</span>
      </div>
    </div>
  );
};

export default Home;
