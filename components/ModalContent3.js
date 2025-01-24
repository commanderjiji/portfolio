import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Link } from "@nextui-org/react";

//* Header */
export const header = "Modal Window";

//* Image/Carousel */
export const ModalCarousel = () => (
	<div className=" h-64 sm:h-96 mb-5">
		<Carousel>
			{["web5.png", "web6.1.png"].map((src, index) => (
				<Image key={index} src={`/${src}`} alt={`Image ${index + 1}`} className="w-full h-full object-cover" width={500} height={500} />
			))}
		</Carousel>
	</div>
);

//* Body */
export const bodyContent = (
	<p>
		This project is a very simple project that I learned from a JavaScript course. This project showcases some of the basic usage of Document Object Model (DOM) elements, including:
		<br />
		<br />• <code className="code-highlight">querySelector()</code> - Returns the <strong>first</strong> element that matches the class selectors <br />• <code className="code-highlight">querySelectorAll()</code> - Returns <strong>all</strong> element that matches the class selectors <br />• <code className="code-highlight">classList()</code> - This allows to manipulate class content attribute. Some of the common methods of <code className="code-highlight">classList()</code>; <code className="code-highlight">add()</code>, <code className="code-highlight">remove()</code>, <code className="code-highlight">replace()</code>, and <code className="code-highlight">toggle()</code> <br />• <code className="code-highlight">addEventListener()</code> - Sets up a function that will be called whenever the specified event is delivered to the target
		<br />
		<br />
		Source:{" "}
		<a className="hover:underline" href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">
			https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
		</a>
		<br />
		<br />
		<strong>NOTE: DOM methods and properties are not part of JavaScript</strong>
		<br />
		<br />
		In this project I simply used these DOM methods to implement a modal window with a basic functionalities for a user to interact.
	</p>
);

//* Footer */
export const FooterContent = () => (
	<div className="flex justify-start gap-2 ">
		<Link isBlock color="foreground" href="https://github.com/jeromealmoguera/modal-window" target="_blank" className="btn-modal-source ">
			Source Code
		</Link>

		<Link isBlock color="foreground" href="https://jeromealmoguera.github.io/modal-window/" target="_blank" className="btn-modal-live">
			Live Demo
		</Link>
	</div>
);

// components/ModalContent1.js
export default function ModalContent3() {
	return (
		<div>
			<ModalCarousel />
			{bodyContent}
		</div>
	);
}
