import { Carousel } from "flowbite-react";
import Image from "next/image";

export const header = "Birds Of A Feather";

export const ModalCarousel = () => (
	<div className=" h-64 sm:h-96 mb-5">
		<Carousel>
			{["web5.png", "web6.1.png"].map((src, index) => (
				<Image key={index} src={`/${src}`} alt={`Image ${index + 1}`} className="w-full h-full object-cover" width={500} height={500} />
			))}
		</Carousel>
	</div>
);

// components/ModalContent1.js
export default function ModalContent2() {
	return (
		<div>
			<header />
			<ModalCarousel />

			<p>I want you to stay 'Til I'm in the grave 'Til I rot away, dead and buried 'Til I'm in the casket you carry If you go, I'm going too, uh 'Cause it was always you, alright And if I'm turning blue, please don't save me Nothing left to lose without my baby</p>
		</div>
	);
}
