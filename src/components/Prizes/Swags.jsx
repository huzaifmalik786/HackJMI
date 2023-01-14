import React, { useContext } from "react";
import GOG from "../../images/sponsors/GOG.png";
import XYZ from "../../images/sponsors/xyz.png";
import XYZwhite from "../../images/sponsors/xyzwhite.png";
import m16 from "../../images/sponsors/m16labs-logo.png";
import Logo from "../../images/logo.png";
import { DarkThemeContext } from "../../pages/Home";

function Swags() {
	const { isDarkTheme } = useContext(DarkThemeContext);

	return (
		<div className="swags flex flex-col">
			<div className="flex items-center dark:text-white md:gap-10 gap-2 justify-center mt-2 md:pb-12 pb-16">
				<div className="md:w-1/5 w-1/2">
					<img src={Logo} className="w-40 p-2 md:p-0 z-10" />
					<div className="">
						<p className="dark:text-white/60">
							<strong className="text-orange-600">
								Free Hackathon Stickers!!
							</strong>{" "}
							from Hack JMI and our Sponsors.
						</p>
					</div>
				</div>
				<div className="md:w-1/5 w-1/2">
					<img
						src={isDarkTheme ? `${XYZwhite}` : `${XYZ}`}
						className="w-full md:mb-4 md:p-5 p-3"
					/>
					<div className="mt-6">
						<p className=" dark:text-white/60">
							Free <strong className="text-orange-600">.xyz</strong> domains
							from gen.xyz.!!
						</p>
					</div>
				</div>
				<div className="md:w-1/5 w-1/2 ">
					<img src={GOG} className="w-full mt-5 md:mt-1 md:p-5 p-3" />
					<div className="mt-6">
						<p className=" dark:text-white/60">
							Free discount coupon codes for{" "}
							<strong className="text-orange-600">Geeks For Geeks</strong>.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Swags;
