import React, { useEffect, useState } from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import About from "../partials/About";
import Tracks from "../partials/Tracks";
import Footer from "../partials/Footer";
import Schedule from "../partials/Schedule";
import Sponsors from "../partials/Sponsors";
import Register from "../partials/Register";
import FAQ from "../partials/Faq";

import JMI from "../images/brands/jmi.png";
import JMIwhite from "../images/brands/jmiwhite.png";
import CountdownTimer from "../partials/CountdownTimer";

export const DarkThemeContext = React.createContext({
	isDarkTheme: false,
});

function Home() {
	const [isDarkTheme, setIsDarkTheme] = useState();

	return (
		<DarkThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
			<div
				className="b-color transition-all flex flex-col min-h-screen overflow-hidden"
				id="">
				{/*  Site header */}
				<Header UpdateTheme={() => setIsDarkTheme(!isDarkTheme)} />

				{/*  Page content */}
				<main className="flex-grow">
					{/*  Page sections */}
					<HeroHome theme={isDarkTheme} />
					<CountdownTimer />
					<About />
					<Tracks />
					<Schedule />
					<Sponsors />
					<Register />
					<FAQ />
					{/* < />  */}
				</main>

				{/*  Site footer */}
				{/* <Footer /> */}
				<div className="b-color p-5 flex justify-around mt-16 border-t-2 ">
					<p className="theme-text w-full">HACK JMI</p>

					<p className="theme-text w-full flex justify-center">
						Made with ❤️ by
						<span className="text-orange-500 ml-2">HACK JMI Team</span>
					</p>
					<p className=" w-full justify-end flex">
						<a href="https://jmi.ac.in">
							{isDarkTheme ? (
								<img src={JMIwhite} className="w-10" />
							) : (
								<img src={JMI} className="w-10" />
							)}
						</a>
					</p>
				</div>
			</div>
		</DarkThemeContext.Provider>
	);
}

export default Home;
