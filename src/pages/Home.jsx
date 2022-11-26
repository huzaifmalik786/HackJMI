import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import About from "../partials/About";
import Tracks from "../partials/Tracks";
import Footer from "../partials/Footer";
import Schedule from "../partials/Schedule";
import Sponsors from "../partials/Sponsors";
import Register from "../partials/Register";
import FAQ from "../partials/Faq";


import JMI from "../images/brands/jmi.png";
import CountdownTimer from "../partials/CountdownTimer";

function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden" id="">
			{/*  Site header */}
			<Header />

			{/*  Page content */}
			<main className="flex-grow">
				{/*  Page sections */}
				<HeroHome />
				<CountdownTimer />
				<About />
				<Tracks />
				<Schedule />
				<Sponsors />
				<Register />
				<FAQ />

				{/* <Testimonials />
				<Newsletter /> */}
			</main>

			{/*  Site footer */}
			{/* <Footer /> */}
			<div className="p-5 flex md:flex-row gap-10  flex-col justify-around mt-16 border-t-2 ">
				<p className="w-full md:text-left text-center">HACK JMI</p>

				<p className=" w-full flex justify-center">
					Made with ❤️ by
					<span className="text-orange-500 ml-2">HACK JMI Team</span>
				</p>
				<p className=" w-full justify-center md:justify-end flex">
					<a href="https://jmi.ac.in">
						<img src={JMI} className="w-10" />
					</a>
				</p>
			</div>
		</div>
	);
}

export default Home;