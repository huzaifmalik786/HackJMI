import { RiMentalHealthFill } from "react-icons/ri";
import { BsBookFill } from "react-icons/bs";
import { AiFillBug } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { GiTechnoHeart, GiMoneyStack } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import { DiTechcrunch } from "react-icons/di";
const Tracks = [
	{
		id: 1,
		featured: "M16 Labs Featured Problem Statement",
		title: "Healthcare",
		description: `Solution/Improvement based upon the Core Healthcare Technology of M16Labs. <a href='https://m16labs.com/' >M16Labs</a> #HealthyIndia through #HealthyYou by Making Care & Wellness Accessible.`,
		icon: GiTechnoHeart,
	},
	{
		id: 2,
		title: "Education",
		description: "Upgrading the current educational system in India.",
		icon: BsBookFill,
	},
	{
		id: 3,
		title: "Cyber-Security",
		description:
			"Securing the internet. Development of protection of internet-connected systems such as hardware, software and data from cyber-threats.",
		icon: AiFillBug,
	},
	{
		id: 4,
		title: "Fintech",
		description:
			"Designing a technology that works towards enhancing and automating the delivery and use of financial services.",
		icon: GiMoneyStack,
	},
	{
		id: 5,
		title: "Blockchain",
		description: "Making the internet more decentralized!",
		icon: SiHiveBlockchain,
	},
	{
		id: 6,
		title: "IoT",
		description:
			"Solutions design to use Internet of things(IoT) to solve real-world industrial problems.",
		icon: DiTechcrunch,
	},
	{
		id: 7,
		title: "Open Innovation",
		description:
			"Open to your creativity. Solution based on Agri-tech, AR/VR, Metaverse, Smart City, Automation, etc.",
		icon: BiBrain,
	},
];

export default Tracks;
