import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Rotate from "react-reveal/Rotate";
import { Link } from 'react-router-dom';
import '../Props/About.css';
export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                     <Rotate><h2 data-aos="zoom-in" className="text-2xl text-gray-900 font-bold md:text-4xl">
                         Hey I am Shriram Mithe  Passionate <span style={{color:"orange"}}>Frontend developer</span>
                      </h2></Rotate>
                      <p data-aos="zoom-in" data-aos-delay="600" className="mt-6 text-gray-600">
                      As a passionate and skilled Full Stack Developer, I bring a wealth of experience
                       and expertise in creating dynamic, responsive, and user-friendly web applications.
                        With a strong foundation in both front-end and back-end technologies, I excel at 
                        bridging the gap between design and functionality to deliver seamless digital experiences.
                      </p>
                      <Rotate><Link
                            className="inline-flex text-white items-center mt-4 px-6 py-3 font-medium bg-orange-500 rounded-lg hover:opacity-75"
                            to="/resume"
                        >
                            Download Resume
                        </Link></Rotate>
                        
                  </div>
              </div>
          </div>
          <Rotate top><div className='text-3xl font-bold mx-9 text-orange-500'>Technical Skills</div></Rotate>
          <div>
            <marquee>
            <button className='text-white rounded font-bold m-7 py-5 px-9 bg-orange-400'>Html</button>
            <button className='text-white rounded font-bold m-7 py-5 px-9 bg-gray-900'>Css</button>
            <button className='text-white rounded font-bold m-7 py-5 px-9 bg-red-900'>Javascript</button>
            <button className='text-white rounded font-bold m-7 py-5 px-9 bg-cyan-900'>Core Java</button>
            <button className='text-white rounded font-bold m-7 py-5 px-9 bg-orange-400'>React js</button>
            <button className='text-white rounded font-bold m-7 py-5 px-9 bg-pink-900'>Node js</button>
            <button className='text-white rounded font-bold m-7 py-5 px-9 bg-orange-400'>MySql</button>
            <button className='text-white rounded font-bold m-7 py-5 px-9 bg-blue-800'>Tailwind Css</button>
            <button className='text-white rounded font-bold m-7 py-5 px-9 bg-yellow-900'>Mongo DB</button>
            <button className='text-white rounded font-bold m-7 py-5 px-9 bg-gray-900'>Git</button>
            <button className='text-white rounded font-bold m-7 py-5 px-9 bg-yellow-400'>GitHub</button>
            </marquee>
          </div>
          <div>
            <h1 className='text-4xl text-pink-900 font-bold mt-20 ml-9 text-center'>My Services</h1>
          </div>
          <div className="Card">
          <div  className='flex justify-center items-center gap-8 '>
            <div data-aos="zoom-in" className='w-80 p-8 border-red-500 mt-10 shadow-[15px_25px_30px_-15px_rgba(0,0,0,0.9)]'>
            <img className='w-40 ml-12' src="https://static.vecteezy.com/system/resources/previews/003/573/245/non_2x/computer-repair-logo-template-software-development-design-desktop-service-vector.jpg" alt="" />
            <h2 className='text-center text-2xl font-bold mb-2 text-orange-400'>Web Development</h2>
            <p className='font-serif'>As a passionate and skilled Full Stack Developer, I bring a wealth of experience
                       and expertise in creating dynamic, responsive, and user-friendly web applications.
                        With a strong foundation in  front-end UI , UX technologies,</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className='w-80 p-8 border-red-500 mt-10 shadow-[15px_25px_30px_-15px_rgba(0,0,0,0.9)] '>
            <img className='w-20 ml-24 mb-6 rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/024/769/228/small_2x/web-development-blue-gradient-concept-icon-skill-to-learn-abstract-idea-thin-line-illustration-software-developer-computer-programming-isolated-outline-drawing-vector.jpg" alt="" />
            <h2 className='text-center text-2xl font-bold mb-2 text-orange-400'>Frontend Development</h2>
            <p className='font-serif'>As a passionate and skilled Full Stack Developer, I bring a wealth of experience
                       and expertise in creating dynamic, responsive, and user-friendly web applications.
                        With a strong foundation in  front-end UI , UX technologies,</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="1100" className='w-80 p-8 border-red-500 mt-10 shadow-[15px_25px_30px_-15px_rgba(0,0,0,0.9)]'>
            <img className='w-40 ml-12' src="https://static.vecteezy.com/system/resources/previews/003/573/245/non_2x/computer-repair-logo-template-software-development-design-desktop-service-vector.jpg" alt="" />
            <h2 className='text-center text-2xl font-bold mb-2 text-orange-400'>UI UX Desinger</h2>
            <p className='font-serif'>As a passionate and skilled Full Stack Developer, I bring a wealth of experience
                       and expertise in creating dynamic, responsive, and user-friendly web applications.
                        With a strong foundation in  front-end UI , UX technologies,</p>
            </div>
          </div>
          </div>
          
      <div className='m-10'>
      <Rotate><h1 className='text-orange-500 text-3xl font-bold m-10'>Project</h1></Rotate>
      <div className='flex justify-center items-center gap-8'>
      <div data-aos="zoom-in" className='bg-black text-white text-center w-[350px] shadow-[15px_25px_30px_-15px_rgba(0,0,0,0.9) p-8 rounded-full'>
        <Link to="https://github.com/shri-source/shri-source.git"><h1 className='text-2xl text-orange-500 font-semibold mb-4 text-center hover:text-blue-400'>Villa-Booking Website</h1></Link>
        <p>I have creating Villa-booking website using react js</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="600"  className='bg-black text-white text-center w-[350px] shadow-[15px_25px_30px_-15px_rgba(0,0,0,0.9) p-8 rounded-full'>
        <Link to="https://github.com/shri-source/shri-source.git"><h1 className='text-2xl hover:text-blue-400 text-orange-500 font-semibold mb-4 text-center'>Blood Donation Website</h1></Link>
        <p>I have creating Blood Donation website using Html JavaScript TailWind Css Material UI React Js</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="1200" className='bg-black text-white text-center w-[350px] shadow-[15px_25px_30px_-15px_rgba(0,0,0,0.9) p-8 rounded-full'>
        <Link to="https://github.com/shri-source/shri-source.git"><h1 className='text-2xl text-orange-500 font-semibold mb-4 text-center hover:text-blue-400'>Real Estate Website</h1></Link>
        <p>I have creating Real Estate website using react js and TailWind Css</p>
      </div>
      </div>
      </div>
      </div>
  );
}
