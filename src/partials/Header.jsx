import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  const tabs = [
		{
			name: "About",
			href: "#about",
		},
		{
			name: "Tracks",
			href: "#tracks",
		},
		{
			name: "Schedule",
			href: "#schedule",
		},
		{
			name: "Sponsors",
			href: "#sponsors",
		},
		{
			name: "Register",
			href: "#register",
		},
		{
			name: "FAQ",
			href: "#faq",
		},
	];

	return (
		<header
			className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
				!top && "bg-white backdrop-blur-sm shadow-lg"
			}`}>
			<div className="max-w-6xl mx-auto px-5 sm:px-6">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Site branding */}
					<div className="flex-shrink-0 mr-4">
						{/* Logo */}
						<a href="#" className="flex gap-2" aria-label="Cruip">
							<svg
								className="w-8 h-8"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg">
								<defs>
									<radialGradient
										cx="21.152%"
										cy="86.063%"
										fx="21.152%"
										fy="86.063%"
										r="79.941%"
										id="header-logo">
										<stop stopColor="#F9931C" offset="0%" />
										<stop stopColor="#F9931C" offset="25.871%" />
										<stop stopColor="#F8B05C" offset="100%" />
									</radialGradient>
								</defs>
								<rect
									width="32"
									height="32"
									rx="16"
									fill="url(#header-logo)"
									fillRule="nonzero"
								/>
							</svg>
							<p className="self-center font-bold text-orange-600">#ACK</p>
							<p className="self-center font-semibold">JMI</p>
						</a>
					</div>

					{/* Site navigation */}
					<nav className="flex flex-grow">
						<ul className="flex flex-grow justify-end flex-wrap items-center">
							{tabs.map((tab, index) => (
								<li>
									<a
										href={tab.href}
										className={`font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out
                      ${
												document.location.hash === tab.href &&
												"text-orange-600 font-semibold"
											}
										`}>
										{tab.name}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
