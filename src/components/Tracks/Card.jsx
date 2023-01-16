import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

function TrackCard({ index, track }) {
	const [ref, bounds] = useMeasure({
		scroll: false,
	});
	const [hover, setHover] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const resetMousePosition = () => {
		setMousePosition({ x: 0, y: 0 });
	};

	return (
		<motion.div
			className="w-full md:w-1/3 p-2"
			key={index}
			data-aos="fade-up"
			// data-aos-delay={index * 100}
			ref={ref}
			animate={hover ? "hover" : "idle"}
			variants={{
				idle: {
					scale: 1,
				},
				hover: {
					scale: 1.1,
					borderRadius: 20,
					rotateY: mousePosition.x % 30,
					rotateX: mousePosition.y % 30,
				},
			}}
			onHoverStart={() => {
				resetMousePosition();
				setHover(true);
			}}
			onPointerMove={(e) => {
				setMousePosition({
					x: e.clientX - bounds.x - bounds.width / 2,
					y: e.clientY - bounds.y - bounds.height / 2,
				});
			}}
			onHoverEnd={() => {
				resetMousePosition();
				setHover(false);
			}}>
			<div
				className="p-3 w-full h-full flex flex-col  group border-t-4 
											border-black
											dark:border-white/40
											dark:rounded-none
                                            hover:bg-white/20
											shadow-none transition-all
										">
				<div
					className={`text-orange-600 `}
					style={{
						textShadow: "0px 0px 10px #ffa6005e",
					}}>
					{track?.featured && "✨"} {track?.featured}
				</div>
				<div className="flex gap-2">
					<track.icon className="w-6 h-6 self-center dark:text-white" />
					<h1
						className="py-2 self-center text-xl font-semibold dark:text-white
												">
						{track.title}
					</h1>
				</div>
				<div className="flex flex-col">
					<div
						className="text-justify text-gray-500 track-description"
						dangerouslySetInnerHTML={{
							__html: track.description,
						}}
					/>
				</div>
			</div>
		</motion.div>
	);
}

export default TrackCard;
