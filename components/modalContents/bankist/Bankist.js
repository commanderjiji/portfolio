import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import Image1 from "./home.png";
import Image2 from "./features.png";
import Image3 from "./operation.png";
import Image4 from "./testimonial.png";

//* Header */
export const header = "Modal Window";

//* Image/Carousel */
export const ModalCarousel = () => (
	<div className=" h-64 sm:h-96 mb-5">
		<Carousel>
			{[Image1, Image2, Image3, Image4].map((src, index) => (
				<Image key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" width={2000} height={2000} />
			))}
		</Carousel>
	</div>
);

//* Body */
export const bodyContent = (
	<p>
		This project is also from a course by <span>Jonas Schmedtmann</span>. Here, I learned more about advanced DOM manipulation and events.
		<br />
		<br />
		This particular project made me realize how powerful using a framework can be. I created a carousel, a sticky navigation bar, and a lot of CSS customizations — all with the help of DOM manipulation and event handling. It was a lot of information to take in, and I can’t say I fully understand everything yet. That’s why I’m still upskilling my JavaScript skills and continuing creating a projects.
		<br />
		<br />I also realized how important it is to understand how programming works behind the scenes. There are times when you know the syntax or the logic, but you don’t truly understand how it runs in the background or how the code interacts with the browser. This can lead to unexpected errors. Writing clean code is essential, and little by little, I’ve come to understand the importance of avoiding the "If it works, don’t touch it" mindset. Sure, the code might work and not immediately affect the output, but if it contradicts functions in subtle ways, it could cause hidden issues. The worst-case scenario is that refactoring becomes a nightmare if your project grows to thousands of lines of code.
	</p>
);

//* Footer */
export const FooterContent = () => (
	<div className="flex justify-start gap-2">
		<Link isBlock color="foreground" href="https://github.com/jeromealmoguera/bankist" target="_blank" className="btn-modal-source">
			Source Code
		</Link>

		<Link isBlock color="foreground" href="https://jeromealmoguera.github.io/bankist/" target="_blank" className="btn-modal-live">
			Live Demo
		</Link>
	</div>
);

// components/modalWindowContent.js
export default function Bankist() {
	return (
		<div>
			<ModalCarousel />
			{bodyContent}
		</div>
	);
}
