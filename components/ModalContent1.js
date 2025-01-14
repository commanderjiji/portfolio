import Image from "next/image";
import { Carousel } from "flowbite-react";
import { Link } from "@nextui-org/react";

export const header = "Pig Game";

export const ModalCarousel = () => (
	<div className=" h-64 sm:h-96 mb-5">
		<Carousel>
			{["web1.png", "web2.png", "web3.png", "web4.png"].map((src, index) => (
				<Image key={index} src={`/${src}`} alt={`Image ${index + 1}`} className="w-full h-full object-cover" width={500} height={500} />
			))}
		</Carousel>
	</div>
);

export const bodyContent = (
	<div>
		<p>Pig Game is also part of the simple JavaScript project I am learning from a course. This project is designed to familiarize myself with DOM manipulation, specifically using its commonly used methods as well as how functions work. Additionally, for me to get used to applying the DRY (Don't Repeat Yourself) principle on my codes to avoid redundancy and maximize the reusability of my codes.</p>

		<br />
		<br />

		<h2 className="text-3xl font-bold text-orange-300">About the game</h2>

		<p>The "Pig Game" is a simple dice game where players take turns rolling a die to accumulate points. The goal is to be the first to reach 100 points.</p>

		<br />

		<strong>Game Mechanics:</strong>

		<ol>
			<li>1. Turn: On each turn, a player rolls a die.</li>
			<li>2. Point accumulation: If the player rolls a number between 2 and 6, they add that number to their running total for that turn.</li>
			<li>3. Pig out: But if the player rolls a 1, they lose all points accumulated during that turn and their turn ends.</li>
			<li>4. Hold: The player can choose to "hold" at any time, keeping the points they've accumulated during that turn and ending their turn.</li>
			<li>5. Winning: The first player to reach 100 points wins.</li>
		</ol>

		<br />

		<p>It’s a game of risk management, where you can accumulate more points by continuing to roll, but if you keep rolling and hit a 1, you lose all points for that turn.</p>
	</div>
);

export const FooterContent = () => (
	<div className="flex justify-start gap-2">
		<Link isBlock color="foreground" href="https://github.com/jeromealmoguera/Pig-game" target="_blank" className="btn-modal-source">
			Source Code
		</Link>

		<Link isBlock color="foreground" href="https://jeromealmoguera.github.io/Pig-game/" target="_blank" className="btn-modal-live">
			Live Demo
		</Link>
	</div>
);

// components/ModalContent1.js
export default function ModalContent1() {
	return (
		<div>
			<ModalCarousel />
			{bodyContent}
		</div>
	);
}

{
	/* <div className="h-64 sm:h-96 mb-5">
				<Carousel>
					{["web1.png", "web2.png", "web3.png", "web4.png"].map((src, index) => (
						<Image key={index} src={`/${src}`} alt={`Image ${index + 1}`} className="w-full h-full object-cover" width={500} height={500} />
					))}
				</Carousel>
			</div> */
}

// *(***************************************************)

// import { ModalFooter } from "@nextui-org/modal";
// import { Carousel } from "flowbite-react";
// import Image from "next/image";
// import { Button } from "@nextui-org/react";

// export const header = "I Think They Call This Love";

// const ModalFooterButtons = ({ onClose }) => (
// 	<ModalFooter className="flex justify-start px-10">
// 		<Button color="primary" variant="light" onPress={onClose} className="hover:bg-white/25 text-white">
// 			Source Code
// 		</Button>
// 		<Button onPress={onClose} className="dark:bg-dark-orange dark:hover:bg-dark-orange/75">
// 			Live Demo
// 		</Button>
// 	</ModalFooter>
// );

// export const ModalCarousel = () => (
// 	<div className=" h-64 sm:h-96 mb-5">
// 		<Carousel>
// 			{["web1.png", "web2.png", "web3.png", "web4.png"].map((src, index) => (
// 				<Image key={index} src={`/${src}`} alt={`Image ${index + 1}`} className="w-full h-full object-cover" width={500} height={500} />
// 			))}
// 		</Carousel>
// 	</div>
// );

// export default function ModalContent1({ onClose }) {
// 	return (
// 		<div>
// 			<ModalCarousel />
// 			<p>I Think They Call This Love</p>
// 			<ModalFooterButtons onClose={onClose} />
// 		</div>
// 	);
// }
