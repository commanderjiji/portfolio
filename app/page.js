"use client";
import React from "react";
import Head from "next/head";

import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import html from "../public/html.png";
import css from "../public/css.png";
import js from "../public/js.png";
import react from "../public/react.png";
import laravel from "../public/laravel.png";
import php from "../public/php.png";
import tailwind from "../public/tailwind.png";
import bootstrap from "../public/bootstrap.png";
import { useState } from "react";
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import { CardHeader, CardFooter } from "@nextui-org/card";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Fragment, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import ContentsModal from "../components/ContentsModal";
// import ModalContent1, { header as Header1, bodyContent, FooterContent } from "../components/ModalContent1";
// import ModalContent2 from "../components/ModalContent2";
import Cards from "../components/Cards";
import Modals from "../components/Modals";

import ModalContent1, { header as Header1, bodyContent, FooterContent } from "../components/ModalContent1";
import ModalContent2, { header as Header2, bodyContent as bodyContent2, FooterContent as FooterContent2 } from "../components/ModalContent2";



// import "flowbite";
import { Carousel } from "flowbite-react";

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);

	const [isVertical, setIsVertical] = React.useState(true);

	const menuItems = ["Profile", "Dashboard", "Activity", "Analytics", "System", "Deployments", "My Settings", "Team Settings", "Help & Feedback", "Log Out"];

	const [year, setYear] = useState(new Date().getFullYear());

	useEffect(() => {
		// Update the year when the component mounts
		setYear(new Date().getFullYear());
	}, []);

	// const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	const [size, setSize] = React.useState("md");
	const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];
	const [scrollBehavior, setScrollBehavior] = React.useState("inside");

	const backdrops = ["opaque", "blur", "transparent"];
	// const handleOpen = (backdrop) => {
	// 	setBackdrop(backdrop);
	// 	onOpen();
	// };

	// const [isModalOpen, setIsModalOpen] = useState(false);
	// const [ModalContent, setModalContent] = useState(null);

	// const handleCardClick = (content) => {
	// 	setModalContent(content);
	// 	setIsModalOpen(true);
	// };

	// **********************

	const [modalData, setModalData] = useState({ isOpen: false, header: null, body: null, footer: null });

	const handleModalOpen = (header, body, footer) => {
		setModalData({ isOpen: true, header, body, footer });
	};

	const handleModalClose = () => {
		setModalData({ isOpen: false, header: null, body: null, footer: null });
	};

	// const [isModalOpen, setModalOpen] = React.useState(false);

	// const handleModalClose = () => setModalOpen(false);

	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Jerome Almoguera Portfolio</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className=" px-10 dark:bg-dark-blue ">
				<section className="min-h-screen mb-20">
					<div className="h-screen flex flex-col justify-center p-10">
						<div className="text-left ">
							<h2 className=" text-9xl py-2 font-main dark:text-white  tracking-tighter ">JEROME</h2>
							<h2 className=" text-9xl py-2 font-main -mt-11 dark:text-white tracking-tighter ">ALMOGUERA</h2>
						</div>
						<h3 className="font-sub text-2xl py-2 text-left dark:text-white">Aspiring Front-End Developer · Graphic Designer</h3>
						<div className="flex justify-start space-x-5">
							<a href="mailto:jeromealmoguera@gmail.com" target="_blank" className="text-dark-blue dark:text-white/75 hover:dark:text-white hover:text-slate-700">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
									<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
								</svg>
							</a>
							<a href="https://github.com/jeromealmoguera" target="_blank" className="text-dark-blue dark:text-white/75 hover:dark:text-white hover:text-slate-700">
								<span className="sr-only">GitHub</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
								</svg>
							</a>
							<a href="https://www.linkedin.com/in/jeromealmoguera/" target="_blank" className="text-dark-blue dark:text-white/75 hover:dark:text-white hover:text-slate-700">
								<span className="sr-only">LinkedIn</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
									<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
								</svg>
							</a>
							<a href="https://www.instagram.com/almoguerajeromeg/" target="_blank" className="text-dark-blue dark:text-white/75 hover:dark:text-white hover:text-gray-700">
								<span className="sr-only">Instagram</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
									<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
								</svg>
							</a>
						</div>

						{/* ============================================================= */}

						{/* <Cards title="Card 2"  /> */}

						{/* <Card isPressable onPress={() => handleCardClick(<ModalContent1 />)}>
							<CardBody>
								<p>Make beautiful websites regardless of your design experience.</p>
							</CardBody>
						</Card> */}

						{/* <Card isPressable shadow="sm" onClick={() => handleCardClick(<ModalContent1 />)}>
							<CardBody className="overflow-visible p-0">
								<p>THIS IS THE BODY</p>
							</CardBody>
							<CardFooter className="text-small justify-between">
								<p>THIS IS THE FOOTER</p>
							</CardFooter>
						</Card> */}

						{/* Modal */}

						{/* ============================================================= */}
					</div>
				</section>

				{/* SKILLS */}
				<section className="mb-20 ">
					<div>
						<h3 className=" text-6xl py-1 font-main font-black ml-8 dark:text-white">SKILLS</h3>
					</div>

					<div className=" lg:flex gap-5 pl-8">
						<div className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block" alt="Image" src={html} width={60} height={60} />
						</div>

						<div className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block" alt="Image" src={css} width={60} height={60} />
						</div>

						<div className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block" alt="Image" src={js} width={60} height={60} />
						</div>

						<div className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block" alt="Image" src={tailwind} width={60} height={60} />
						</div>

						<div className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block" alt="Image" src={bootstrap} width={60} height={60} />
						</div>

						<div className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block" alt="Image" src={react} width={60} height={60} />
						</div>

						<div className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block" alt="Image" src={php} width={60} height={60} />
						</div>

						<div className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block" alt="Image" src={laravel} width={60} height={60} />
						</div>
					</div>
				</section>

				{/*  PORTFOLIO */}
				<h3 className="text-6xl font-main ml-8  relative dark:text-white">PROJECTS</h3>
				<section className="h-custom-32 mb-20 -mt-16">
					{/* TABS */}
					<div className="flex flex-row  h-full">
						<Tabs
							radius={"none"}
							isVertical={isVertical}
							aria-label="Options"
							className="flex my-auto mr-10 pt-16 "
							classNames={{
								tabContent: "group-data-[selected=true]:text-dark-orange",
							}}
						>
							<Tab className="" title="Website">
								<ScrollShadow
									className="flex h-full items-center px-6 pt-16  overflow-x-auto w-custom-tab max-h-
  [&::-webkit-scrollbar]:h-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-[#1B2B46]"
								>
									<ol className="group flex w-1/2">
										<li>
											<Card isPressable onPress={() => handleModalOpen(Header1, <ModalContent1 />, <FooterContent onClose={handleModalClose} />)} className="group w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden hover:bg-slate-800/50  hover:shadow-xl hover:!opacity-100 group-hover:opacity-50">
												<CardBody className=" overflow-hidden py-2 ">
													<Image alt="Card background" className="object-cover  size-fit" src={web1} />
												</CardBody>
												<CardHeader className="z-auto pt-2 px-4 flex-col ">
													<h4 className="mb-2 font-bold text-large truncate w-full text-center ">{Header1}</h4>
													<small className="text-default-500 line-clamp-4 ">{bodyContent}</small>
												</CardHeader>

												<div className="flex  pl-6  rounded-b-lg ">
													<CardFooter className="  justify-evenly before:bg-white/10 overflow-hidden py-1 absolute bottom-1 w-[calc(80%_-_8px)] ml-1 mb-2">
														<Button className="text-tiny text-white bg-white/25 hover:bg-white/20 rounded-full" variant="light" color="default" radius="none" size="sm">
															Source Code
														</Button>
														<Button className="text-tiny bg-dark-orange hover:bg-orange-hover  text-white rounded-full" variant="solid" color="default" radius="none" size="sm">
															Live Demo
														</Button>
													</CardFooter>
												</div>
											</Card>
										</li>

										{/* onClick={() => handleCardClick(<ModalContent2 />)} */}
										<li>
											<Card isPressable onPress={() => handleModalOpen(Header2, <ModalContent2 />, <FooterContent2 onClose={handleModalClose} />)} className="group w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden hover:bg-slate-800/50 hover:shadow-xl hover:!opacity-100 group-hover:opacity-50">
												<CardBody className=" overflow-hidden py-2 ">
													<Image alt="Card background" className="object-cover  size-fit" src={web2} />
												</CardBody>
												<CardHeader className="z-auto pt-2 px-4 flex-col ">
													<h4 className="mb-2 font-bold text-large truncate w-full text-center">{Header2}</h4>
													<small className="text-default-500 line-clamp-4 ">{bodyContent2}</small>
												</CardHeader>

												<div className="flex  pl-6  rounded-b-lg ">
													<CardFooter className="  justify-evenly before:bg-white/10 overflow-hidden py-1 absolute bottom-1 w-[calc(80%_-_8px)] ml-1 mb-2">
														<Button className="text-tiny text-white bg-white/25 hover:bg-white/20 rounded-full" variant="light" color="default" radius="none" size="sm">
															Source Code
														</Button>
														<Button className="text-tiny bg-dark-orange hover:bg-orange-hover  text-white rounded-full" variant="solid" color="default" radius="none" size="sm">
															Live Demo
														</Button>
													</CardFooter>
												</div>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(Header2, <ModalContent2 />, <FooterContent2 onClose={handleModalClose} />)} className="w-72 h-custom-30 my-auto mr-10 bg-red-700 overflow-hidden ">
												<CardBody className=" overflow-hidden py-2 ">
													<Image alt="Card background" className="object-cover rounded-xl size-fit" src={web2} />
												</CardBody>
												<CardHeader className="z-auto pt-2 px-4 flex-col ">
													<h4 className="mb-2 font-bold text-large truncate w-full text-center">{Header2}</h4>
													<small className="text-default-500 line-clamp-4 ">{bodyContent2}</small>
												</CardHeader>

												<div className="flex  pl-6  rounded-b-lg ">
													<CardFooter className="  justify-evenly before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl  bottom-1 w-[calc(80%_-_8px)] shadow-small ml-1">
														<Button className="text-tiny text-white " variant="light" color="default" radius="none" size="sm">
															Source Code
														</Button>
														<Button className="text-tiny text-white " variant="solid" color="default" radius="none" size="sm">
															Live Demo
														</Button>
													</CardFooter>
												</div>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(Header2, <ModalContent2 />, <FooterContent2 onClose={handleModalClose} />)} className="w-72 h-custom-30 my-auto mr-10 bg-red-700 overflow-hidden ">
												<CardBody className=" overflow-hidden py-2 ">
													<Image alt="Card background" className="object-cover rounded-xl size-fit" src={web2} />
												</CardBody>
												<CardHeader className="z-auto pt-2 px-4 flex-col ">
													<h4 className="mb-2 font-bold text-large truncate w-full text-center">{Header2}</h4>
													<small className="text-default-500 line-clamp-4 ">{bodyContent2}</small>
												</CardHeader>

												<div className="flex  pl-6  rounded-b-lg ">
													<CardFooter className="  justify-evenly before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl  bottom-1 w-[calc(80%_-_8px)] shadow-small ml-1">
														<Button className="text-tiny text-white " variant="light" color="default" radius="none" size="sm">
															Source Code
														</Button>
														<Button className="text-tiny text-white " variant="solid" color="default" radius="none" size="sm">
															Live Demo
														</Button>
													</CardFooter>
												</div>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(Header1, <ModalContent1 />, <FooterContent onClose={handleModalClose} />)} className="w-72 h-custom-30 my-auto mr-10 bg-red-700 overflow-hidden ">
												<CardBody className=" overflow-hidden py-2 ">
													<Image alt="Card background" className="object-cover rounded-xl size-fit" src={web1} />
												</CardBody>
												<CardHeader className="z-auto pt-2 px-4 flex-col ">
													<h4 className="mb-2 font-bold text-large truncate w-full text-center">{Header1}</h4>
													<small className="text-default-500 line-clamp-4 ">{bodyContent}</small>
												</CardHeader>

												<div className="flex  pl-6  rounded-b-lg ">
													<CardFooter className="  justify-evenly before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl  bottom-1 w-[calc(80%_-_8px)] shadow-small ml-1">
														<Button className="text-tiny text-white " variant="light" color="default" radius="none" size="sm">
															Source Code
														</Button>
														<Button className="text-tiny text-white " variant="solid" color="default" radius="none" size="sm">
															Live Demo
														</Button>
													</CardFooter>
												</div>
											</Card>
										</li>
									</ol>
								</ScrollShadow>
							</Tab>

							<Tab title="Web Design">
								<div className="flex h-full items-center justify-center">
									<Card isPressable onPress={() => handleModalOpen(Header2, <ModalContent2 />, <FooterContent2 onClose={handleModalClose} />)} className="w-72 h-custom-30 my-auto mr-10 bg-red-700 overflow-hidden ">
										<CardBody className=" overflow-hidden py-2 ">
											<Image alt="Card background" className="object-cover rounded-xl size-fit" src={web2} />
										</CardBody>
										<CardHeader className="z-auto pt-2 px-4 flex-col ">
											<h4 className="mb-2 font-bold text-large truncate w-full text-center">{Header2}</h4>
											<small className="text-default-500 line-clamp-4 ">{bodyContent2}</small>
										</CardHeader>

										<div className="flex  pl-6  rounded-b-lg ">
											<CardFooter className="  justify-evenly before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl  bottom-1 w-[calc(80%_-_8px)] shadow-small ml-1">
												<Button className="text-tiny text-white " variant="light" color="default" radius="none" size="sm">
													Source Code
												</Button>
												<Button className="text-tiny text-white " variant="solid" color="default" radius="none" size="sm">
													Live Demo
												</Button>
											</CardFooter>
										</div>
									</Card>
								</div>
							</Tab>
							<Tab title="Poster">
								<div className="flex h-full items-center justify-center">
									<Card isPressable onPress={() => handleModalOpen(Header2, <ModalContent2 />, <FooterContent2 onClose={handleModalClose} />)} className="w-72 h-custom-30 my-auto mr-10 bg-red-700 overflow-hidden ">
										<CardBody className=" overflow-hidden py-2 ">
											<Image alt="Card background" className="object-cover rounded-xl size-fit" src={web2} />
										</CardBody>
										<CardHeader className="z-auto pt-2 px-4 flex-col ">
											<h4 className="mb-2 font-bold text-large truncate w-full text-center">{Header2}</h4>
											<small className="text-default-500 line-clamp-4 ">{bodyContent2}</small>
										</CardHeader>

										<div className="flex  pl-6  rounded-b-lg ">
											<CardFooter className="  justify-evenly before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl  bottom-1 w-[calc(80%_-_8px)] shadow-small ml-1">
												<Button className="text-tiny text-white " variant="light" color="default" radius="none" size="sm">
													Source Code
												</Button>
												<Button className="text-tiny text-white " variant="solid" color="default" radius="none" size="sm">
													Live Demo
												</Button>
											</CardFooter>
										</div>
									</Card>
								</div>
							</Tab>

							<Tab title="Reels">
								<div className="flex h-full items-center justify-center">
									<Card isPressable onPress={() => handleModalOpen(Header2, <ModalContent2 />, <FooterContent2 onClose={handleModalClose} />)} className="w-72 h-custom-30 my-auto mr-10 bg-red-700 overflow-hidden ">
										<CardBody className=" overflow-hidden py-2 ">
											<Image alt="Card background" className="object-cover rounded-xl size-fit" src={web2} />
										</CardBody>
										<CardHeader className="z-auto pt-2 px-4 flex-col ">
											<h4 className="mb-2 font-bold text-large truncate w-full text-center">{Header2}</h4>
											<small className="text-default-500 line-clamp-4 ">{bodyContent2}</small>
										</CardHeader>

										<div className="flex  pl-6  rounded-b-lg ">
											<CardFooter className="  justify-evenly before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl  bottom-1 w-[calc(80%_-_8px)] shadow-small ml-1">
												<Button className="text-tiny text-white " variant="light" color="default" radius="none" size="sm">
													Source Code
												</Button>
												<Button className="text-tiny text-white " variant="solid" color="default" radius="none" size="sm">
													Live Demo
												</Button>
											</CardFooter>
										</div>
									</Card>
								</div>
							</Tab>
						</Tabs>

						{/* <Modals isOpen={isModalOpen} onClose={handleModalClose} headerContent={Header1} bodyContent={<ModalContent1 />} footerContent={<FooterContent onClose={handleModalClose} />} /> */}

						<Modals isOpen={modalData.isOpen} onClose={handleModalClose} headerContent={modalData.header} bodyContent={modalData.body} footerContent={modalData.footer} />

						{/* <Modals isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
							{ModalContent}
						</Modals> */}
					</div>
				</section>

				{/* ABOU ME */}
				<section className=" bg-red-600 mb-20 h-custom-32">
					<h3 className="text-6xl py-1 font-main font-black ml-8 bg-orange-800">ABOUT ME</h3>
					<div className="flex ">
						<div className="flex-1 bg-slate-500 pl-8">
							<div className="flex  my-8">
								<Image alt="Content" src={web6} width={400} height={400} className="w-40 h-40 rounded-full object-cover size-min " />
							</div>
							<div className="mb-5 bg-amber-200/75 ">
								<h4 className="text-5xl tracking-tighter text-gray-800 dark:text-gray-200  font-main font-black uppercase ">Jerome Almoguera</h4>
								<p className="text-md  text-gray-800 dark:text-gray-200  font-sub">Front-End Developer • Front-end Developer</p>
							</div>
							<p className="text-md py-2 pr-10 text-gray-800 dark:text-gray-200 font-sub bg-cyan-200/75">When the rain Is blowing in your face And the whole world Is on your case I could offer you A warm embrace To make you feel my love. When the evening shadows And the stars appear And there is no one there To dry your tears I could hold you For a million years To make you feel my love</p>
						</div>

						{/* WORK EXPERIENCE */}

						<ScrollShadow hideScrollBar className="flex-1 bg-blue-400 overflow-scroll overflow-x-hidden ">
							<ol className=" h-custom-30   ">
								<li className="mb-5">
									<div className="bg-green-700 flex">
										<header className="bg-green-800 flex-2 pr-5 font-sub text-xs font-medium uppercase pt-1 text-white/75  ">September — JULY 2016</header>
										<div className="flex-1">
											<h5 className="font-sub text-lg font-semibold mb-3">Desktop Support Engineeer · Qstrike Innovation Phils., OPC</h5>
											<p className="font-sub text-sm text-white/75">Desktop support engineering is a sector of engineering that involves resolving a variety of information technology (IT) issues. As IT professionals, desktop support engineers fix issues with a company's desktop computers. They also work with laptops and mitigate security and server issues that affect business networks.</p>
										</div>
									</div>
								</li>
								<li className="mb-5">
									<div className="bg-green-700 flex">
										<header className="bg-green-800 flex-2 pr-5 font-sub text-xs font-medium uppercase pt-1 text-white/75">September — JULY 2016</header>
										<div className="flex-1">
											<h5 className="font-sub text-lg font-semibold mb-3">Front-End Developer Intern · Qstrike Innovation Phils., OPC</h5>
											<p className="font-sub text-sm text-white/75">Desktop support engineering is a sector of engineering that involves resolving a variety of information technology (IT) issues. As IT professionals, desktop support engineers fix issues with a company's desktop computers. They also work with laptops and mitigate security and server issues that affect business networks.</p>
										</div>
									</div>
								</li>
								<li className="mb-5">
									<div className="bg-green-700 flex">
										<header className="bg-green-800 flex-2 pr-5 font-sub text-xs font-medium uppercase pt-1 text-white/75">September — JULY 2016</header>
										<div className="flex-1">
											<h5 className="font-sub text-lg font-semibold mb-3">Desktop Support Engineeer · Qstrike Innovation Phils., OPC</h5>
											<p className="font-sub text-sm text-white/75">Desktop support engineering is a sector of engineering that involves resolving a variety of information technology (IT) issues. As IT professionals, desktop support engineers fix issues with a company's desktop computers. They also work with laptops and mitigate security and server issues that affect business networks.</p>
										</div>
									</div>
								</li>

								<li className="mb-5">
									<div className="bg-green-700 flex">
										<header className="bg-green-800 flex-2 pr-5 font-sub text-xs font-medium uppercase pt-1 text-white/75">September — JULY 2016</header>
										<div className="flex-1">
											<h5 className="font-sub text-lg font-semibold mb-3">Desktop Support Engineeer · Qstrike Innovation Phils., OPC</h5>
											<p className="font-sub text-sm text-white/75">Desktop support engineering is a sector of engineering that involves resolving a variety of information technology (IT) issues. As IT professionals, desktop support engineers fix issues with a company's desktop computers. They also work with laptops and mitigate security and server issues that affect business networks.</p>
										</div>
									</div>
								</li>

								<li className="mb-5">
									<div className="bg-green-700 flex">
										<header className="bg-green-800 flex-2 pr-5 font-sub text-xs font-medium uppercase pt-1 text-white/75">September — JULY 2016</header>
										<div className="flex-1">
											<h5 className="font-sub text-lg font-semibold mb-3">Desktop Support Engineeer · Qstrike Innovation Phils., OPC</h5>
											<p className="font-sub text-sm text-white/75">Desktop support engineering is a sector of engineering that involves resolving a variety of information technology (IT) issues. As IT professionals, desktop support engineers fix issues with a company's desktop computers. They also work with laptops and mitigate security and server issues that affect business networks.</p>
										</div>
									</div>
								</li>
							</ol>
						</ScrollShadow>
					</div>
				</section>

				{/* ========================== CONTACT ========================== */}
				<section className=" mb-20">
					{/* <div>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
						Since the beginning of my journey as a freelance designer and developer, I've done remote work for
						<span className="text-teal-500"> agencies </span>
						consulted for <span className="text-teal-500">startups </span>
						and collaborated with talanted people to create digital products for both business and consumer use.
						</p>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">I offer from a wide range of services, including brand design, programming and teaching.</p>
						</div> */}

					<h3 className=" text-6xl py-1 font-main font-black ml-8 dark:text-white">CONTACT</h3>
					<div className=" container my-5 pl-8 ">
						<section className="">
							<p className="mb-12 w-3/5 dark:text-white">I’m excited to connect! Whether it’s for project discussions, collaboration opportunities, or any inquiries, don’t hesitate to reach out—I’d be glad to help!</p>

							<div className="flex flex-wrap ">
								<div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
									<div className="flex flex-wrap">
										<div className="mb-8 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6 ">
											<a href="mailto:jeromealmoguera@gmail.com" target="_blank">
												<div className="flex items-start ">
													<div className="inline-block my-auto rounded-md bg-teal-400-100  dark:text-white">
														<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
															<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
														</svg>
													</div>

													<div className="ml-6 grow">
														<p className="text-neutral-500 font-semibold ">Email</p>
														<p className="dark:text-white hover:underline font-light">jeromealmoguera@gmail.com</p>
													</div>
												</div>
											</a>
										</div>

										<div className="mb-8 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
											<a href="https://github.com/jeromealmoguera" target="_blank">
												<div className="flex items-start">
													<div className="inline-block my-auto rounded-md bg-teal-400-100  dark:text-white">
														<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
															<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
														</svg>
													</div>
													<div className="ml-6 grow">
														<p className="text-neutral-500 font-semibold ">GitHub</p>
														<p className="dark:text-white hover:underline font-light">@jeromealmoguera</p>
													</div>
												</div>
											</a>
										</div>
										<div className=" w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
											<a href="https://www.linkedin.com/in/jeromealmoguera/" target="_blank">
												<div className="align-start flex">
													<div className="inline-block my-auto rounded-md bg-teal-400-100  dark:text-white">
														<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
															<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
														</svg>
													</div>
													<div className="ml-6 grow">
														<p className="text-neutral-500 font-semibold ">LinkedIn</p>
														<p className="dark:text-white hover:underline font-light">@jeromealmoguera</p>
													</div>
												</div>
											</a>
										</div>
										<div className=" w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
											<a href="https://www.instagram.com/almoguerajeromeg/" target="_blank">
												<div className="align-start flex">
													<div className="inline-block  my-auto rounded-md bg-teal-400-100  dark:text-white">
														<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
															<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
														</svg>
													</div>
													<div className="ml-6 grow">
														<p className="text-neutral-500 font-semibold">Instagram</p>
														<p className="dark:text-white  hover:underline font-light">@almoguerajeromeg</p>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</section>

				<section className="border-y mb-12">
					<div className="justify-items-center h-screen content-center">
						<h1 className="font-main text-10xl tracking-tighter leading-none dark:text-white">THANKS</h1>
						<p className="font-mainLight text-5xl tracking-widest pl-12 dark:text-white">FOR VISITING</p>
					</div>
				</section>

				{/* <!-- Foooter --> */}
				<section>
					<div className="max-w-screen-xl px-4 py-5 mx-auto space-y-2 overflow-hidden sm:px-6 lg:px-8 ">
						<div className="flex justify-center space-x-5 ">
							<a href="https://github.com/jeromealmoguera" target="_blank" className="text-dark-blue dark:text-white/75 hover:dark:text-white hover:text-slate-700">
								<span className="sr-only">GitHub</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
								</svg>
							</a>
							<a href="https://www.linkedin.com/in/jeromealmoguera/" target="_blank" className="text-dark-blue dark:text-white/75 hover:dark:text-white hover:text-slate-700">
								<span className="sr-only">LinkedIn</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
									<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
								</svg>
							</a>
							<a href="https://www.instagram.com/almoguerajeromeg/" target="_blank" className="text-dark-blue dark:text-white/75 hover:dark:text-white hover:text-gray-700">
								<span className="sr-only">Instagram</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
									<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
								</svg>
							</a>
						</div>
						<p className="font-sub font-extralight text-xs text-center text-dark-blue dark:text-white/75 ">
							{`© ${year} | Design & Developed by `}
							<a href="https://www.linkedin.com/in/jeromealmoguera/" target="_blank" title="Connect with Jerome Almoguera on LinkedIn" className="underline  underline-offset-1 hover:dark:text-white">
								Jerome Almoguera
							</a>
						</p>
					</div>
				</section>
			</main>
		</div>
	);
}
