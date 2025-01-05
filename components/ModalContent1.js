import Image from "next/image";
import { Carousel } from "flowbite-react";
import { Button } from "@nextui-org/react";

export const header = "I Think They Call This Love";

export const ModalCarousel = () => (
	<div className=" h-64 sm:h-96 mb-5">
		<Carousel>
			{["web1.png", "web2.png", "web3.png", "web4.png"].map((src, index) => (
				<Image key={index} src={`/${src}`} alt={`Image ${index + 1}`} className="w-full h-full object-cover" width={500} height={500} />
			))}
		</Carousel>
	</div>
);

export const bodyContent = <p>They say, you know when you know So let's face it, you had me at hello Hesitation never helps How could this be anything, anything else? When all I dream of is your eyes All I long for is your touch And, darlin', something tells me that's enough, mm You can say that I'm a fool And I don't know very much But I think they call this love</p>;

export const FooterContent = ({ onClose }) => (
	<div className="flex justify-start px-10">
		<Button color="primary" variant="light" onPress={onClose} className="hover:bg-white/25 text-white">
			Source Code
		</Button>
		<Button onPress={onClose} className="dark:bg-dark-orange dark:hover:bg-dark-orange/75">
			Live Demo
		</Button>
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
