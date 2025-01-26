import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import home from "./home.png";
import homepage from "./homepage.png";
import login from "./login.png";
import registration from "./registration.png";

//* Header */
export const header = "Bible Study";

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
export const bodyContent = <p className="mb-8">This is a simple web design activity from my second year of college. I created this project when Figma was first introduced to us by our teacher. It wasn’t difficult to learn, as I already had experience using Adobe products like Photoshop.</p>;

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
export default function BibleStudy() {
	return (
		<div className="flex flex-col items-center">
			{/* <ModalCarousel /> */}
			{/* object-cover size-fit h-max */}

			<div className="lg:w-custom-modal justify-items-center mb-5 ">
				<h1 className="text-center text-dark-orange font-bold text-lg lg:text-xl py-5">Full Preview</h1>
				<Image alt="" className="mb-10 w-full" src={home} width={1000} height={1000} />

				<h2 className="text-center text-dark-orange font-bold text-lg lg:text-xl py-5">Landing Page</h2>
				<Image alt="" className="mb-10 w-full" src={homepage} width={1000} height={1000} />

				<h2 className="text-center text-dark-orange font-bold text-lg lg:text-xl py-5">Log In Page</h2>
				<Image alt="" className="mb-10 w-full" src={login} width={1000} height={1000} />

				<h2 className="text-center text-dark-orange font-bold text-lg lg:text-xl py-5">Registration Page</h2>
				<Image alt="" className="mb-10 w-full" src={registration} width={1000} height={1000} />
			</div>

			{bodyContent}
		</div>
	);
}
