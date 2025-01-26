import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import landingImg from "./landing-page.png";
import loginImg from "./login-page.png";
import forgotPassImg from "./forgot-password.png";
import forgotPassImg2 from "./forgot-password-2.png";
import forgotPassImg3 from "./forgot-password-3.png";

//* Header */
export const header = "Hive";

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
export const bodyContent = <p className="mb-8">This was one of our projects during our second year in college. I was assigned to design our website, while the others focused on programming.</p>;

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
export default function Hive() {
	return (
		<div className="flex flex-col items-center">
			{/* <ModalCarousel /> */}
			{/* object-cover size-fit h-max */}

			<div className="lg:w-custom-modal justify-items-center my-5">
				<h2 className="text-center text-dark-orange font-bold text-lg lg:text-xl py-5">Log In Page</h2>
				<Image alt="" className="mb-10" src={loginImg} width={1000} height={1000} />

				<h2 className="text-center text-dark-orange font-bold text-lg lg:text-xl py-5">Landing Page</h2>
				<Image alt="" className="mb-10" src={landingImg} width={1000} height={1000} />

				<h2 className="text-center text-dark-orange font-bold text-lg lg:text-xl py-5">Forgot Password Page</h2>
				<Image alt="" className="mb-5" src={forgotPassImg} width={1000} height={1000} />
				<Image alt="" className="mb-5" src={forgotPassImg2} width={1000} height={1000} />
				<Image alt="" className="mb-10" src={forgotPassImg3} width={1000} height={1000} />
			</div>

			{bodyContent}
		</div>
	);
}
