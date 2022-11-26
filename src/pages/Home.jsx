import React,{useState} from 'react';

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
import JMIwhite from "../images/brands/jmiwhite.png";


function Home() {
	const [isdarktheme, setisdarktheme]= useState("");
	return (
		<div className=" b-color flex flex-col min-h-screen overflow-hidden" id="">
			{/*  Site header */}
			<Header x={setisdarktheme}/>

			{/*  Page content */}
			<main className="flex-grow">
				{/*  Page sections */}
				<HeroHome theme={isdarktheme} />
				<About />
				<Tracks />
				<Schedule theme={isdarktheme}/>
				<Sponsors theme={isdarktheme}/>
				<Register />
				<FAQ theme={isdarktheme}/>

				{/* <Testimonials />
				<Newsletter /> */}
			</main>

			{/*  Site footer */}
			{/* <Footer /> */}
			<div className="b-color p-5 flex justify-around mt-16 border-t-2 ">
				<p className="theme-text w-full">HACK JMI</p>

				<p className="theme-text w-full flex justify-center">
					Made with ❤️ by
					<span className="text-orange-500 ml-2">HACK JMI Team</span>
				</p>
				<p className=" w-full justify-end flex" >
					<a href="https://jmi.ac.in">
						{!isdarktheme?(
						<img src={JMIwhite} className="w-10" />
						):
						<img src={JMI} className="w-10" />
						}
					</a>
				</p>
			</div>
		</div>
	);
}

export default Home;