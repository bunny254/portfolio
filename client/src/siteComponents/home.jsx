import React from 'react';
import photo1 from '../assets/transparent_background.png';

const Home = () => {
  return (
    <div>
        <div className='xl:hidden'>
            <div className='flex justify-center'>
            <h1 className='mt-3 text-2xl text-[#4AD7D1]'>Software Engineer</h1>
            </div>
            <div>
                <img alt='simon_photo' src={photo1} className='h-[30%]'/>
            </div>
            <div className='flex justify-center'>
                <section>
                <h2 className='text-2xl text-white'> My name is Simon Wachira, a <br/>professional Software Engineer<br/>with a proven  ability to design<br/>and deliver object-oriented<br/>software development solutions.</h2>
                </section>
            </div>
            <div className='flex justify-center'>
                <button className='bg-[#4AD7D1] mt-6 p-3 mr-8 rounded-l-xl rounded-r-xl'>Hire Me</button>
                <button className='bg-[#4AD7D1] mt-6 p-3 ml-8 rounded-l-xl rounded-r-xl'>Resume</button>
            </div>
            
        </div>
    </div>
  )
}

export default Home;