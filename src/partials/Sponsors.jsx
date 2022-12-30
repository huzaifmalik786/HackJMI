import React, { useState, useRef, useEffect, useMemo, useContext } from "react";
import Transition from "../utils/Transition";

import Devfolio from "../images/sponsors/devfolio.png";
import Polygon from "../images/sponsors/polygon.png";
import Filecoin from "../images/sponsors/filecoin.png";
import Solana from "../images/sponsors/solana.png";
import Replit from "../images/sponsors/replit.png";
import GMC from "../images/sponsors/GMC.png";
import NS from "../images/sponsors/NS.png";
import Replitwhite from "../images/sponsors/replitwhite.png";
import Filecoinwhite from "../images/sponsors/filecoinwhite.png";
import Devfoliowhite from "../images/sponsors/devfoliowhite.png";
import Polygonwhite from "../images/sponsors/polygonwhite.png";
import Solanawhite from "../images/sponsors/solanawhite.png";
import { DarkThemeContext } from "../pages/Home";

function Sponsers(props) {
	const { isDarkTheme } = useContext(DarkThemeContext);

	let sponsorData = useMemo(() => {
		if (!isDarkTheme) {
			return {
				Platinum: [Devfolio, Polygon],
				// Gold: [],
				Silver: [Filecoin, Solana, Replit, NS],
			};
		} else {
			return {
				Platinum: [Devfoliowhite, Polygonwhite],
				// Gold: [],
				Silver: [Filecoinwhite, Solanawhite, Replitwhite, NS],
			};
		}
	}, [isDarkTheme]);

	return (
		<section className="relative" id="sponsors">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className=" b-color absolute inset-0 bg-gray-100 pointer-events-none mb-16"
				aria-hidden="true"></div>
			<div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<h1 className="theme-text h2 mb-4">Sponsors</h1>

						{Object.keys(sponsorData).map((key) => (
							<div className="w-full flex flex-col items-center mt-5">
								<h1 className="theme-text h4 my-5">{key} Sponsors</h1>
								<div className="flex flex-wrap justify-center items-center gap-4">
									{sponsorData[key].map((sponsor) => (
										<div className="w-1/3 md:w-1/5 p-2">
											<img src={sponsor} className="w-full" />
										</div>
									))}
								</div>
							</div>
						))}
						<h1 className="theme-text h4 my-5">Certificate Partner</h1>
						<div className="flex justify-center items-center">
							<div className="w-1/6">
								<img src={GMC}/>
							</div>
						</div>
					</div>
				</div>

				<div className="border" />
			</div>
		</section>
	);
}

export default Sponsers;
