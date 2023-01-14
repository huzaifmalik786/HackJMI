import React from "react";
import Logo from "../../images/logo.png";

function Invite() {
	return (
		<div className="bg-gray-700 p-5 w-full rounded-xl flex flex-col">
			<div className="text-xs pb-2 italic opacity-30">
				You've been invited to join a server!
			</div>
			<div className="flex gap-5">
				<img src={Logo} className="w-10 rounded-full bg-white " />
				<h1 className="font-semibold self-center flex-grow">Hack JMI</h1>
				<button className="bg-green-500 text-white px-4 py-1 text-sm rounded-xl transition-all hover:scale-90">
					Accept
				</button>
			</div>
		</div>
	);
}

export default Invite;
