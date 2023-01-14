import React,{useContext} from "react";
import Trophy from "../assets/icons/winner.png";
import GOG from "../images/sponsors/GOG.png";
import XYZ from "../images/sponsors/xyz.png";
import XYZwhite from "../images/sponsors/xyzwhite.png";
import Logo from "../images/logo.png";
import { DarkThemeContext } from "../pages/Home";


function Prizes() {

	const { isDarkTheme } = useContext(DarkThemeContext);

	const handleprizebutton=()=>{
		document.querySelector(".prize").classList.remove("hidden");
		document.querySelector(".swags").classList.add("hidden");
	}
	const handleswagsbutton=()=>{
		document.querySelector(".prize").classList.add("hidden");
		document.querySelector(".swags").classList.remove("hidden");
	}
	return (
		<section className="relative" id="prizes">
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center ">
						<h1 className="dark:text-white h2 mb-4">Prizes</h1>
						<div className="flex items-center justify-evenly mb-5 mt-5">
							<button className="btn btn-primary mt-4 bg-orange-600 hover:scale-95
							hover:shadow-xl hover:shadow-orange-600/10 hover:bg-orange-700 transition-all
							text-white md:text-base text-sm" onClick={()=>handleprizebutton()}>Prizes</button>
							<button className="btn btn-primary mt-4 bg-orange-600 hover:scale-95
							hover:shadow-xl hover:shadow-orange-600/10 hover:bg-orange-700 transition-all
							text-white md:text-base text-sm" onClick={()=>handleswagsbutton()}>Swags for All</button>
						</div>
						<div className="swags hidden flex flex-col">
							<div className="flex items-center dark:text-white md:gap-10 gap-2 justify-center mt-2 md:pb-12 pb-16">
								<div className="md:w-1/5 w-1/2">
									<img src={Logo} className="w-full p-2 md:p-0" />
									<div className="">
										<p className="text-gray-600 dark:text-white/60"><strong>Free Hackathon Stickers</strong> from Hack JMI and our Sponsors.</p>
									</div>
								</div>
								<div className="md:w-1/5 w-1/2">
									<img src={isDarkTheme?`${XYZwhite}`:`${XYZ}`} className="w-full md:mb-4 md:p-5 p-3" />
									<div className="mt-6">
										<p className="text-gray-600 dark:text-white/60">Free <strong>.xyz</strong> domains from gen.xyz.</p>
									</div>
								</div>
								<div className="md:w-1/5 w-1/2 ">
									<img src={GOG} className="w-full mt-5 md:mt-1 md:p-5 p-3"/>
									<div className="mt-6">
										<p className="text-gray-600 dark:text-white/60">Free discount coupon codes for <strong>Geeks For Geeks</strong>.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="prize flex flex-col">
							<div className="flex items-center dark:text-white gap-10 justify-center w-full md:pb-12 pb-16">
								<div className="md:w-1/4 w-1/3">
									<img src={Trophy} className="w-full" />
									<h1 className="md:text-xl text-sm">
										<strong>1st</strong> Prize
									</h1>
									<div className="flex flex-col md:text-base text-sm">
										<p className="text-gray-600 dark:text-white/60">₹ 5,000</p>
									</div>
								</div>
								<div className="md:w-1/6 w-1/4 mt-10">
									<img src={Trophy} className="w-full" />
									<h1 className="md:text-xl text-sm">
										<strong>2nd</strong> Prize
									</h1>
									<div className="flex flex-col md:text-base text-sm">
										<p className="text-gray-600 dark:text-white/60">₹ 3,000</p>
									</div>
								</div>
								<div className="md:w-1/4 w-1/3">
									<img src={Trophy} className="w-full"/>
									<h1 className="md:text-xl text-sm">
										<strong>M16</strong>Labs Prize
									</h1>
									<div className="flex flex-col md:text-base text-sm">
										<p className="text-gray-600 dark:text-white/60">₹ 5,000</p>
									</div>
								</div>
							</div>
							<p className="text-gray-600 dark:text-gray-200 text-center italic">
								Winners will also get INR 5k+ worth of goodies from our
								sponsors.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Prizes;
