import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

//* Header */
export const header = "Guess My Number";

//* Image/Carousel */
export const ModalCarousel = () => (
	<div className=" h-64 sm:h-96 mb-5">
		<Carousel>
			{["web5.png", "web6.1.png"].map((src, index) => (
				<Image key={index} src={`/${src}`} alt={`Image ${index + 1}`} className="w-full h-full object-cover" width={500} height={500} />
			))}
		</Carousel>
	</div>
);

//* Body */
export const bodyContent = (
	<p>
		This third project is a simple game where users guess a secret number between 1 and 20. If the user's input is lower than the secret number, the game displays the message, "Too low!" Oppositely, if the input is higher, the message "Too high!" appears. When the user correctly guesses the secret number, their score is calculated based on the number of attempts, and the background changes to green.
		<br />
		<br />
		All the functionalities in this project are implemented using DOM manipulation techniques, functions, and if-else statements.
	</p>
);

//* Footer */
export const FooterContent = () => (
	<div className="flex justify-start gap-2">
		<Link isBlock color="foreground" href="https://github.com/jeromealmoguera/guess-my-number" target="_blank" className="btn-modal-source">
			Source Code
		</Link>

		<Link isBlock color="foreground" href="https://jeromealmoguera.github.io/guess-my-number/" target="_blank" className="btn-modal-live">
			Live Demo
		</Link>
	</div>
);

// components/ModalContent1.js
export default function ModalContent2() {
	return (
		<div>
			<ModalCarousel />
			{bodyContent}
		</div>
	);
}
