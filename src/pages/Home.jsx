import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import About from "../partials/About";
import Tracks from "../partials/Tracks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import Banner from "../partials/Banner";
import Schedule from "../partials/Schedule";
import Sponsers from "../partials/Sponsers";
import Register from "../partials/Register";
import FAQ from "../partials/Faq";

function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden" id="">
			{/*  Site header */}
			<Header />

			{/*  Page content */}
			<main className="flex-grow">
				{/*  Page sections */}
				<HeroHome />
				<About />
				<Tracks />
				<Schedule />
				<Sponsers />
				<Register />
				<FAQ />

				{/* <Testimonials />
				<Newsletter /> */}
			</main>

			<Banner />

			{/*  Site footer */}
			<Footer />
		</div>
	);
}

export default Home;