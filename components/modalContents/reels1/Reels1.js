import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { InstagramEmbed } from "react-social-media-embed";

//* Header */
export const header = "Reel 1";

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
	<div className="mb-8">
		<p>This is the first reel I ever created. I also enjoy creating and editing videos, especially when the video and music blend perfectly.</p>
	</div>
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
export default function Reels1() {
	return (
		<div>
			<div className="flex justify-center mb-5">
				<InstagramEmbed url="https://www.instagram.com/reel/CrdNk7wp1V7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className="w-full" />
			</div>
			{bodyContent}
		</div>
	);
}
