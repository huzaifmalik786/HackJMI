import React from "react";
import { BsLinkedin, BsInstagram, BsDiscord } from "react-icons/bs";

function Contact() {
	return (
		<section className="relative" id="prizes">
			<div className="relative max-w-6xl mx-auto ">
				<div className="pt-12 md:pt-20 dark:text-white">
					{/* Section header */}
					<div className="w-full flex-col md:flex-row flex">
						<div className="md:w-1/3 bg-gradient-to-br from-orange-400 to-orange-600 p-10 rounded-l-lg rounded-lg">
							<h1 className="text-xl font-semibold text-white border-b-4 inline-block">
								Get In Touch
							</h1>
							<div className="pt-5 flex flex-col gap-5 text-white h-full">
								<div>
									<div className="text-md">Phone</div>
									<div className="text-lg opacity-70">+91-7303435034</div>
								</div>
								<div>
									<div className="text-md">Email</div>
									<div className="text-lg opacity-70">
										hackjmiteam@gmail.com
									</div>
								</div>
								<div className="flex-1" />
								<div className="flex gap-3 justify-start items-start pb-3 ">
									<button
										onClick={() => {
											window.open("https://www.instagram.com/hackjmi/");
										}}>
										<BsInstagram className="w-7 h-7 hover:scale-90 transition-all " />
									</button>
									<button
										onClick={() => {
											window.open("https://www.linkedin.com/company/hackjmi/");
										}}>
										<BsLinkedin className="w-7 h-7 hover:scale-90 transition-all " />
									</button>
									<button
										onClick={() => {
											window.open("https://discord.gg/Bpa9DYhA7T");
										}}>
										<BsDiscord className="w-7 h-7 hover:scale-90 transition-all " />
									</button>
								</div>
							</div>
						</div>
						<form className="md:w-2/3 p-10 bg-gray-100 dark:bg-transparent rounded-xl dark:text-white flex flex-wrap ">
							<div className="w-1/2 px-2">
								<label className="block text-sm font-medium text-gray-700/50 dark:text-white">
									Name
								</label>
								<input
									type="text"
									className="w-full p-3 rounded-lg border-2 border-gray-300 bg-transparent focus:outline-none focus:border-gray-400"
									placeholder="Name"
								/>
							</div>
							<div className="w-1/2 px-2">
								<label className="block text-sm font-medium text-gray-700/50 dark:text-white">
									Email
								</label>
								<input
									type="text"
									className="w-full p-3 rounded-lg border-2 border-gray-300 bg-transparent focus:outline-none focus:border-gray-400"
									placeholder="Email"
								/>
							</div>
							<div className="w-full px-2 mt-4">
								<label className="block text-sm font-medium text-gray-700/50 dark:text-white">
									Message
								</label>
								<textarea
									type="text"
									className="w-full p-3 rounded-lg border-2 border-gray-300 bg-transparent focus:outline-none focus:border-gray-400 resize-none"
									placeholder="Message"
									rows={5}
								/>
							</div>
							<div className="flex justify-end w-full px-2 mt-5">
								<button
									className="bg-gray-800 hover:translate-y-1 transition-all text-white px-5 py-2 rounded-lg
                                    dark:bg-gradient-to-bl dark:from-orange-400 dark:to-orange-600
                                ">
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
