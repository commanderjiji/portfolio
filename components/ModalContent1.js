import Image from "next/image";
import { Carousel } from "flowbite-react";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export const header = "Guess My Number";

export const ModalCarousel = () => (
	<div className=" h-64 sm:h-96 mb-5">
		<Carousel>
			{["web1.png", "web2.png", "web3.png", "web4.png"].map((src, index) => (
				<Image key={index} src={`/${src}`} alt={`Image ${index + 1}`} className="w-full h-full object-cover" width={500} height={500} />
			))}
		</Carousel>
	</div>
);

export const bodyContent = <p>This is a Guess My Number game!</p>;

export const FooterContent = () => (
	<div className="flex justify-start gap-2">
		<Link isBlock color="foreground" href="https://github.com/jeromealmoguera/guess-my-number" target="_blank" className="btn-modal-source">
			Source Code
		</Link>

		<Link isBlock color="foreground" href="https://github.com/jeromealmoguera/guess-my-number" target="_blank" className="btn-modal-live">
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
