import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import image1 from "./belle1.png";
import image2 from "./belle2.png";

//* Header */
export const header = "Belle";

//* Image/Carousel */
export const ModalCarousel = () => (
	<div className=" h-64 sm:h-96 mb-5">
		<Carousel>
			{[image1, image2].map((src, index) => (
				<Image key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" width={2000} height={2000} />
			))}
		</Carousel>
	</div>
);

//* Body */
export const bodyContent = (
	<p className="mb-8">
		This project was one of our activities during my internship. We were tasked with designing a website that offers beauty services and products. During this activity, we were taught that as a front-end developer, you may sometimes be responsible for creating the design from scratch. So, you need to be flexible and independent.
		<br />
		<br />
		As part of the task, we started by creating a wireframe, followed by a basic design system that included your color palettes, sizes, and fonts. Finally, we developed the actual design, all of which was done using Figma.
		<br />
		<br />
		We also had the opportunity to bring this design to life by coding it, which is the actual work of a front-end developer. However, we were unable to fully finish the project due to prioritizing our main assignment for the company. Instead, we submitted what we were able to finish within the given timeframe.
	</p>
);

//* Footer */
export const FooterContent = () => (
	<div className="flex justify-start gap-2">
		<Link isBlock color="foreground" href="https://github.com/jeromealmoguera/modal-window" target="_blank" className="btn-modal-source">
			Source Code
		</Link>

		<Link isBlock color="foreground" href="https://jeromealmoguera.github.io/modal-window/" target="_blank" className="btn-modal-live">
			Live Demo
		</Link>
	</div>
);

// components/modalWindowContent.js
export default function Belle() {
	return (
		<div>
			{/* <ModalCarousel /> */}
			{/* object-cover size-fit h-max */}
			<div className="justify-items-center mb-5">
				<div className="w-custom-modal ">
					<h1 className="text-center text-dark-orange font-bold text-xl py-5">Full Preview</h1>
					<Image alt="" className="mb-10" src={image1} width={1000} height={1000} />
					<h2 className="text-center text-dark-orange font-bold text-xl py-5">Revised Hero Section</h2>
					<Image alt="" className="mb-10" src={image2} width={1000} height={1000} />
				</div>
			</div>
			{bodyContent}
		</div>
	);
}
