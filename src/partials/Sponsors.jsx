import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import Devfolio from "../images/sponsors/devfolio.png";
import Polygon from "../images/sponsors/polygon.png";
import Filecoin from "../images/sponsors/filecoin.png";
import Solana from "../images/sponsors/solana.png";
import Replit from "../images/sponsors/replit.png";

function Sponsers() {
	const sponsorData = {
		Platinum: [Devfolio, Polygon],
		Gold: [],
		Silver: [Filecoin, Solana, Replit],
	};

	return (
		<section className="relative" id="sponsors">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
				aria-hidden="true"></div>
			<div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<h1 className="h2 mb-4">Sponsors</h1>

						{Object.keys(sponsorData).map((key) => (
							<div className="w-full flex flex-col items-center mt-5">
								<h1 className="h4 my-5">{key} Sponsors</h1>
								<div className="flex flex-wrap justify-center items-center gap-4">
									{sponsorData[key].map((sponsor) => (
										<div className="w-1/3 md:w-1/4 p-2">
											<img src={sponsor} className="w-full" />
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="border" />
			</div>
		</section>
	);
}

export default Sponsers;
