import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import poster from "./journposter.png";

//* Header */
export const header = "School Webinar Poster";

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
export const bodyContent = <p className="mb-8">A simple poster for a school seminar about journalism.</p>;

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
export default function JournPoster() {
	return (
		<div>
			<div className="flex flex-col items-center">
				<div className="lg:w-custom-modal justify-items-center my-5">
					<Image alt="" className="mb-10" src={poster} width={1000} height={1000} />
				</div>
			</div>

			{bodyContent}
		</div>
	);
}
