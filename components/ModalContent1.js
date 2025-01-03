import { Carousel } from "flowbite-react";
import Image from "next/image";

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

// components/ModalContent1.js
export default function ModalContent1() {
	return (
		<div>
			<ModalCarousel />

			<p>They say, you know when you know So let's face it, you had me at hello Hesitation never helps How could this be anything, anything else? When all I dream of is your eyes All I long for is your touch And, darlin', something tells me that's enough, mm You can say that I'm a fool And I don't know very much But I think they call this love</p>
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
