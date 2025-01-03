import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";

export default function ContentsModal() {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	return (
		<Modal
			hideCloseButton
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			placement="center"
			scrollBehavior="inside"
			className=" mt-16 h-5/6 w-3/6 max-w-none"
			classNames={{
				body: "px-10",
				backdrop: "bg-[#101825]/75 backdrop-opacity-40",
				base: "border-[#292f46] bg-[#19172c] dark:bg-dark-blue text-[#a8b0d3]",
				header: "border-b-[1px] border-[#292f46] text-dark-orange uppercase ",
				footer: "border-t-[1px] border-[#292f46]",
			}}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1 font-main text-2xl ml-2">To-Do List</ModalHeader>
						<ScrollShadow hideScrollBar>
							<div className="h-64 sm:h-96 mb-5">
								<Carousel>
									<Image src="/web1.png" alt="Image 1" className="w-full h-full object-cover" width={500} height={500} />
									<Image src="/web2.png" alt="Image 2" className="w-full h-full object-cover" width={500} height={500} />
									<Image src="/web3.png" alt="Image 3" className="w-full h-full object-cover" width={500} height={500} />
									<Image src="/web4.png" alt="Image 4" className="w-full h-full object-cover" width={500} height={500} />
								</Carousel>
							</div>

							<ModalBody className="font-sub">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
								<p>Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</p>
							</ModalBody>
						</ScrollShadow>
						<ModalFooter className="flex justify-start px-10 ">
							<Button color="primary" variant="light" onPress={onClose} className="hover:bg-white/25 text-white">
								Source Code
							</Button>
							<Button onPress={onClose} className="dark:bg-dark-orange dark:hover:bg-dark-orange/75">
								Live Demo
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
