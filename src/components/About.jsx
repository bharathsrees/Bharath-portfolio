import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className="sm:w-[250px] w-full transition-all duration-500 transform hover:scale-105">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px]">
      <div
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{ background: '#151030' }}
      >
        <img
          src={service.icon}
          alt="service_icon"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div
        className="bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden"
        id="about"
      >
        <div className="flex flex-col justify-around">
          <div className="sm:px-16 px-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 transition-opacity duration-700 fade-in">
              Introduction
            </h2>
            <p className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px] text-justify transition-opacity duration-700 fade-in">
              👋 Hi, I'm Bharathsree, an aspiring AI and Data Science
              professional with a passion for app development and machine
              learning.
              <ul className="list-disc list-inside ml-4">
                <li className="transition-all duration-500 transform translate-y-0 slide-in">🔧 Experience with Microsoft Power Apps 🛠️</li>
                <li className="transition-all duration-500 transform translate-y-0 slide-in">📊 Building machine learning models</li>
                <li className="transition-all duration-500 transform translate-y-0 slide-in">☁️ Exploring cloud computing</li>
                <li className="transition-all duration-500 transform translate-y-0 slide-in">🚀 Passionate about solving real-world problems using technology</li>
                <li className="transition-all duration-500 transform translate-y-0 slide-in">💡 Delivering practical, impactful solutions in AI and data-driven innovation</li>
                <li className="transition-all duration-500 transform translate-y-0 slide-in">🎯 Engaging in hackathons and innovation events to push the limits of creativity and technology</li>
              </ul>
              <p className="mt-3 transition-opacity duration-700 fade-in">
                I love collaborating with tech communities, sharing knowledge,
                and constantly learning about emerging trends in AI and Data
                Science.
              </p>
            </p>
            <ButtonLink
              url="https://drive.google.com/file/d/1d0yBnVth7frd-y7kaofgGuK7Mng00mAq/view?usp=sharing"
              text="View Resume →"
              padding="p-3"
            />
          </div>

          <div className="mt-20 flex justify-center flex-wrap gap-7">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
