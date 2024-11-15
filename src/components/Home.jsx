import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import Footer from './Footer';

const Home = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText(() => text + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='area relative z-0 bg-black w-screen h-screen'>
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
			<div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
                <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
                 Hi, I'm&nbsp;<span className='text-7xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>{text}</span>
                </h1>
                <p className='mt-3 text-xl max-w-[580px]'>I am passionate about leveraging my skills in AI and data science to create innovative, data-driven solutions.</p>
</div>
     
			</div>
			<Footer/>
		</div>	
	);
}

export default Home;