import React from "react";
import Trophy from "../assets/icons/winner.png";

function Prizes() {
	return (
		<section className="relative" id="prizes">
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center ">
						<h1 className="theme-text h2 mb-4">Prizes</h1>
						<div className="flex flex-col">
							<div className="flex items-center dark:text-white gap-10 justify-center w-full md:pb-12 pb-16">
								<div className="w-1/5">
									<img src={Trophy} className="w-full" />
									<h1 className="md:text-xl">
										<strong>2nd</strong> Prize
									</h1>
									<div className="flex flex-col">
										<p className="text-gray-600 dark:text-white/60">₹ 4,000</p>
									</div>
								</div>
								<div className="w-1/4">
									<img src={Trophy} className="w-full" />
									<h1 className="md:text-xl">
										<strong>1st</strong> Prize
									</h1>
									<div className="flex flex-col">
										<p className="text-gray-600 dark:text-white/60">₹ 5,000</p>
									</div>
								</div>
								<div className="w-1/5">
									<img src={Trophy} />
									<h1 className="md:text-xl">
										<strong>3rd</strong> Prize
									</h1>
									<div className="flex flex-col">
										<p className="text-gray-600 dark:text-white/60">₹ 3,000</p>
									</div>
								</div>
							</div>
							<p className="text-gray-600 text-center italic">
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
