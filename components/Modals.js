// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
// import { ScrollShadow } from "@nextui-org/scroll-shadow";
// import { Carousel } from "flowbite-react";
// import { Button } from "@nextui-org/react";
// import Image from "next/image";

// // components/Modal.js
// export default function Modals({ isOpen, onOpenChange, onClose, children }) {
// 	if (!isOpen) return null;

// 	return (
// 		<Modal
// 			hideCloseButton
// 			isOpen={isOpen}
// 			onOpenChange={(open) => {
// 				if (!open) onClose();
// 			}}
// 			placement="center"
// 			scrollBehavior="inside"
// 			className=" mt-16 h-5/6 w-3/6 max-w-none"
// 			classNames={{
// 				body: "px-10",
// 				backdrop: "bg-[#101825]/75 backdrop-opacity-40",
// 				base: "border-[#292f46] bg-[#19172c] dark:bg-dark-blue text-[#a8b0d3]",
// 				header: "border-b-[1px] border-[#292f46] text-dark-orange uppercase ",
// 				footer: "border-t-[1px] border-[#292f46]",
// 			}}
// 		>
// 			<ModalContent>
// 				{(onClose) => (
// 					<>
// 						<ModalHeader className="flex flex-col gap-1 font-main text-2xl ml-2">To-Do List</ModalHeader>
// 						<ScrollShadow hideScrollBar>
// 							<div className="h-64 sm:h-96 mb-5">
// 								<Carousel>
// 									<Image src="/web1.png" alt="Image 1" className="w-full h-full object-cover" width={500} height={500} />
// 									<Image src="/web2.png" alt="Image 2" className="w-full h-full object-cover" width={500} height={500} />
// 									<Image src="/web3.png" alt="Image 3" className="w-full h-full object-cover" width={500} height={500} />
// 									<Image src="/web4.png" alt="Image 4" className="w-full h-full object-cover" width={500} height={500} />
// 								</Carousel>
// 							</div>

// 							<ModalBody className="font-sub">{children}</ModalBody>
// 						</ScrollShadow>
// 						<ModalFooter className="flex justify-start px-10 ">
// 							<Button color="primary" variant="light" onPress={onClose} className="hover:bg-white/25 text-white">
// 								Source Code
// 							</Button>
// 							<Button onPress={onClose} className="dark:bg-dark-orange dark:hover:bg-dark-orange/75">
// 								Live Demo
// 							</Button>
// 						</ModalFooter>
// 					</>
// 				)}
// 			</ModalContent>
// 		</Modal>
// 	);
// }

//************************ ================================================= ************************/

// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
// import { ScrollShadow } from "@nextui-org/scroll-shadow";
// import { Button } from "@nextui-org/react";

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

// export default function Modals({ isOpen = false, onOpenChange, onClose, children }) {
// 	return (
// 		<Modal
// 			hideCloseButton
// 			isOpen={isOpen}
// 			onOpenChange={(open) => {
// 				if (!open) onClose(); // Close the modal if clicked outside
// 			}}
// 			placement="center"
// 			scrollBehavior="inside"
// 			className="mt-16 h-5/6 w-3/6 max-w-none"
// 			classNames={{
// 				body: "px-10",
// 				backdrop: "bg-[#101825]/75 backdrop-opacity-40",
// 				base: "border-[#292f46] bg-[#19172c] dark:bg-dark-blue text-[#a8b0d3]",
// 				header: "border-b-[1px] border-[#292f46] text-dark-orange uppercase",
// 				footer: "border-t-[1px] border-[#292f46]",
// 			}}
// 		>
// 			<ModalContent>
// 				{() => (
// 					<>
// 						<ModalHeader className="flex flex-col gap-1 font-main text-2xl ml-2">To-Do List</ModalHeader>
// 						<ScrollShadow hideScrollBar>
// 							<ModalBody className="font-sub">{children}</ModalBody>
// 						</ScrollShadow>
// 						<ModalFooterButtons onClose={onClose} />
// 					</>
// 				)}
// 			</ModalContent>
// 		</Modal>
// 	);
// }

//************************ ================================================= ************************/

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

export default function Modals({ isOpen = false, onOpenChange, onClose, headerContent, bodyContent, footerContent }) {
	return (
		<Modal
			hideCloseButton
			isOpen={isOpen}
			onOpenChange={(open) => {
				if (!open) onClose(); // Close the modal if clicked outside
			}}
			placement="center"
			scrollBehavior="inside"
			className="mt-16 h-auto max-h-[80vh] lg:max-h-[90vh] lg:mt-5 w-5/6  lg:max-w-4xl"
			classNames={{
				body: "px-10",
				backdrop: "bg-[#101825]/75 backdrop-opacity-40",
				base: "border-[#292f46] bg-[#19172c] dark:bg-dark-blue text-[#a8b0d3]",
				header: "border-b-[1px] border-[#292f46] text-dark-orange uppercase",
				footer: "border-t-[1px] border-[#292f46]",
			}}
		>
			<ModalContent>
				{() => (
					<>
						<ModalHeader className="flex flex-col gap-1 font-main text-xl lg:text-2xl ml-2">{headerContent}</ModalHeader>
						<ScrollShadow hideScrollBar>
							<ModalBody className="font-sub text-sm md:text-base flex-1  ">{bodyContent}</ModalBody>
						</ScrollShadow>
						<ModalFooter className="flex justify-start px-10 ">{footerContent}</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
