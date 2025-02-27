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
import { Link } from "@nextui-org/react";

import ModalWindowContent, { header as Header1, bodyContent as bodyContent1, FooterContent as FooterContent1 } from "../components/modalContents/modalWindow/ModalWindowContent";
import ModalThumbnail from "../components/modalContents/modalWindow/thumbnail.png";

import GuessMyNumberContent, { header as Header3, bodyContent as bodyContent3, FooterContent as FooterContent3 } from "../components/modalContents/guessMyNumber/GuessMyNumberContent";
import guessThumbnail from "../components/modalContents/guessMyNumber/thumbnail.png";

import PigGameContent, { header as Header2, bodyContent as bodyContent2, FooterContent as FooterContent2 } from "../components/modalContents/pigGame/PigGameContent";
import PigGameThumbnail from "../components/modalContents/pigGame/thumbnail.png";

import Bankist, { header as BankistHeader, bodyContent as BankistContent, FooterContent as BankistFooter } from "../components/modalContents/bankist/Bankist";
import BankistThumbnail from "../components/modalContents/bankist/home.png";

import Belle, { header as Header4, bodyContent as bodyContent4 } from "../components/modalContents/belle/Belle";
import BelleThumbnail from "../components/modalContents/belle/thumbnail.png";

import BibleStudy, { header as Header5, bodyContent as bodyContent5 } from "../components/modalContents/biblestudy/BibleStudy";
import BibleStudyThumbnail from "../components/modalContents/biblestudy/thumbnail.png";

import Hive, { header as Header7, bodyContent as bodyContent7 } from "../components/modalContents/hive/Hive";
import HiveThumbnail from "../components/modalContents/hive/thumbnail.png";

import CapstonePoster, { header as Header6, bodyContent as bodyContent6 } from "../components/modalContents/capstoneposter/CapstonePoster";
import CapstonePosterThumbnail from "../components/modalContents/capstoneposter/capstone.jpg";

import NailPoster, { header as Header8, bodyContent as bodyContent8 } from "../components/modalContents/nailposter/NailPoster";
import NailPosterThumbnail from "../components/modalContents/nailposter/nailposter.png";

import JournPoster, { header as Header9, bodyContent as bodyContent9 } from "../components/modalContents/journposter/JournPoster";
import JournPosterThumbnail from "../components/modalContents/journposter/journposter.png";

import PromPoster, { header as Header10, bodyContent as bodyContent10 } from "../components/modalContents/promposter/PromPoster";
import PromPosterThumbnail from "../components/modalContents/promposter/promposter.png";

import Reels1, { header as Header11, bodyContent as bodyContent11 } from "../components/modalContents/reels1/Reels1";
import Reels1Thumbnail from "../components/modalContents/reels1/poster.png";

import Reel2, { header as Header12, bodyContent as bodyContent12 } from "../components/modalContents/reels2/Reels2";
import Reel2Thumbnail from "../components/modalContents/reels2/poster.png";

import Reel3, { header as Header13, bodyContent as bodyContent13 } from "../components/modalContents/reels3/Reels3";
import Reel3Thumbnail from "../components/modalContents/reels3/poster.png";

import Reel4, { header as Header14, bodyContent as bodyContent14 } from "../components/modalContents/reels4/Reels4";
import Reel4Thumbnail from "../components/modalContents/reels4/poster.jpg";

import Gradientdiv from "../components/Gradientdiv";
import { motion } from "motion/react";

// import "flowbite";
import { Carousel } from "flowbite-react";

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);

	// const [isVertical, setIsVertical] = React.useState(true);

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

	const [isVertical, setIsVertical] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			const isLargeScreen = window.innerWidth >= 768; // md breakpoint in Tailwind CSS
			setIsVertical(isLargeScreen); // Automatically toggle vertical mode for large screens
		};

		handleResize(); // Set initial value
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Jerome Almoguera Portfolio</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Gradientdiv className=" px-5 lg:px-10 bg-dark-blue ">
				<section className="min-h-screen mb-20 ">
					<div className="h-screen flex flex-col justify-center lg:p-10">
						<div className="text-center md:text-left">
							<h2 className="  py-2 font-main dark:text-white  tracking-tighter text-5xl sm:text-7xl md:text-8xl lg:text-9xl">JEROME</h2>
							<h2 className="  py-2 font-main -mt-6 md:-mt-9 lg:-mt-11 dark:text-white tracking-tighter text-5xl sm:text-7xl md:text-8xl lg:text-9xl">ALMOGUERA</h2>
						</div>
						<h5 className=" text-xs sm:text-lg text-center lg:text-2xl md:text-left py-2 dark:text-white">Aspiring Front-End Developer · Graphic Designer</h5>
						<div className="flex justify-center md:justify-start space-x-3">
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
						<h3 className=" text-4xl md:text-5xl lg:text-6xl py-1 font-main font-black md:ml-4 lg:ml-8 dark:text-white">SKILLS</h3>
					</div>

					<div className=" w-full flex flex-wrap  ">
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:h-16 lg:w-16" alt="Image" src={html} />
						</motion.div>

						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" alt="Image" src={css} />
						</motion.div>

						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" alt="Image" src={js} />
						</motion.div>

						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" alt="Image" src={tailwind} />
						</motion.div>

						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" alt="Image" src={bootstrap} />
						</motion.div>

						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" alt="Image" src={react} />
						</motion.div>

						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" alt="Image" src={php} />
						</motion.div>

						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className=" relative text-center shadow-sm hover:shadow-lg dark:hover:bg-dark-blueLight p-5 rounded-md my-10 ">
							<Image className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" alt="Image" src={laravel} />
						</motion.div>
					</div>
				</section>

				{/*  PORTFOLIO */}
				<h3 className=" text-4xl md:text-5xl lg:text-6xl md:ml-4 lg:ml-8 font-main relative dark:text-white">PROJECTS</h3>
				<section className=" mb-20 h-full ">
					{/* TABS */}
					<ScrollShadow
						className="sm:flex sm:flex-row h-full overflow-auto w-full [&::-webkit-scrollbar]:h-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-[#1B2B46]"
					>
						<Tabs
							radius={"none"}
							aria-label="Options"
							isVertical={isVertical}
							className="flex my-auto m-5 md:items-center md:mr-5  "
							classNames={{
								tabContent: "group-data-[selected=true]:text-dark-orange",
							}}
						>
							{/* TAB Website  */}
							<Tab className="text-xs md:text-sm" title="Website">
								<div className="flex h-full items-center px-6 mb-5 w-custom-tab">
									<ol className="group flex w-1/2">
										<li>
											<Card isPressable onPress={() => handleModalOpen(Header1, <ModalWindowContent />, <FooterContent1 onClose={handleModalClose} />)} className="group w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50 hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50">
												<CardBody className=" overflow-hidden py-2 ">
													<Image alt="Card background" className="object-cover size-full " src={ModalThumbnail} width={2000} height={2000} />
												</CardBody>
												<CardHeader className="z-auto pt-2 px-4 flex-col ">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center">
														{Header1}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body ">{bodyContent1}</small>
												</CardHeader>

												<div className="flex  pl-6  rounded-b-lg ">
													<CardFooter className="  justify-evenly before:bg-white/10 overflow-hidden py-1 absolute bottom-1 w-[calc(80%_-_8px)] ml-1 mb-2">
														<Link isBlock color="foreground" href="https://github.com/jeromealmoguera/modal-window" target="_blank" className="btn-modalOut-source">
															Source Code
														</Link>
														<Link isBlock color="foreground" href="https://jeromealmoguera.github.io/modal-window/" target="_blank" className="btn-modalOut-live">
															Live Demo
														</Link>
													</CardFooter>
												</div>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(Header2, <PigGameContent />, <FooterContent2 onClose={handleModalClose} />)} className="group w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50 hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50">
												<CardBody className=" overflow-hidden py-2 ">
													<Image alt="Card background" className="object-cover size-fit h-max " src={PigGameThumbnail} width={2000} height={2000} />
												</CardBody>
												<CardHeader className="z-auto pt-2 px-4 flex-col ">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center">
														{Header2}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body ">{bodyContent2}</small>
												</CardHeader>

												<div className="flex  pl-6  rounded-b-lg ">
													<CardFooter className="  justify-evenly before:bg-white/10 overflow-hidden py-1 absolute bottom-1 w-[calc(80%_-_8px)] ml-1 mb-2">
														<Link isBlock color="foreground" href="https://github.com/jeromealmoguera/Pig-game" target="_blank" className="btn-modalOut-source">
															Source Code
														</Link>

														<Link isBlock color="foreground" href="https://jeromealmoguera.github.io/Pig-game/" target="_blank" className="btn-modalOut-live">
															Live Demo
														</Link>
													</CardFooter>
												</div>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(Header3, <GuessMyNumberContent />, <FooterContent3 onClose={handleModalClose} />)} className="group w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50  hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50">
												<CardBody className=" overflow-hidden py-2 ">
													<Image alt="Card background" className="object-cover size-fit h-max" src={guessThumbnail} width={2000} height={2000} />
												</CardBody>
												<CardHeader className="z-auto pt-2 px-4 flex-col ">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center ">
														{Header3}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body ">{bodyContent3}</small>
												</CardHeader>

												<div className="flex  pl-6  rounded-b-lg ">
													<CardFooter className="  justify-evenly before:bg-white/10 overflow-hidden py-1 absolute bottom-1 w-[calc(80%_-_8px)] ml-1 mb-2">
														<Link isBlock color="foreground" href="https://github.com/jeromealmoguera/guess-my-number" target="_blank" className="btn-modalOut-source">
															Source Code
														</Link>

														<Link isBlock color="foreground" href="https://jeromealmoguera.github.io/guess-my-number/" target="_blank" className="btn-modalOut-live">
															Live Demo
														</Link>
													</CardFooter>
												</div>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(BankistHeader, <Bankist />, <BankistFooter onClose={handleModalClose} />)} className="group w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50  hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50">
												<CardBody className=" overflow-hidden py-2 ">
													<Image alt="Card background" className="object-cover size-fit h-max" src={BankistThumbnail} width={2000} height={2000} />
												</CardBody>
												<CardHeader className="z-auto pt-2 px-4 flex-col ">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center ">
														{BankistHeader}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body ">{BankistContent}</small>
												</CardHeader>

												<div className="flex  pl-6  rounded-b-lg ">
													<CardFooter className="  justify-evenly before:bg-white/10 overflow-hidden py-1 absolute bottom-1 w-[calc(80%_-_8px)] ml-1 mb-2">
														<Link isBlock color="foreground" href="https://github.com/jeromealmoguera/bankist" target="_blank" className="btn-modalOut-source">
															Source Code
														</Link>

														<Link isBlock color="foreground" href="https://jeromealmoguera.github.io/bankist/" target="_blank" className="btn-modalOut-live">
															Live Demo
														</Link>
													</CardFooter>
												</div>
											</Card>
										</li>
									</ol>
								</div>
							</Tab>

							{/* TAB WEB DESIGN  */}
							<Tab className="text-xs md:text-sm" title="Web Design">
								<div className="flex h-full items-center px-6 mb-5 w-custom-tab">
									<ol className="group flex w-1/2">
										<li>
											<Card isPressable onPress={() => handleModalOpen(Header4, <Belle />)} className="group relative flex flex-col justify-center items-center w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50 hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50 gap-5">
												<CardBody className="flex flex-col items-center py-2">
													<Image alt="Card background" className="object-cover size-fit  w-full" src={BelleThumbnail} width={500} height={500} />
												</CardBody>
												<CardHeader className="pt-2 px-4 flex flex-col items-center rounded">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center">
														{Header4}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body">{bodyContent4}</small>
												</CardHeader>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(Header5, <BibleStudy />)} className="group relative flex flex-col justify-center items-center w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50 hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50 gap-5">
												<CardBody className="flex flex-col items-center py-2">
													<Image alt="Card background" className="object-cover size-fit  w-full" src={BibleStudyThumbnail} width={500} height={500} />
												</CardBody>
												<CardHeader className="pt-2 px-4 flex flex-col items-center rounded">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center">
														{Header5}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body">{bodyContent5}</small>
												</CardHeader>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(Header7, <Hive />)} className="group relative flex flex-col justify-center items-center w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50 hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50 gap-5">
												<CardBody className="flex flex-col items-center py-2">
													<Image alt="Card background" className="object-cover size-fit  w-full" src={HiveThumbnail} width={500} height={500} />
												</CardBody>
												<CardHeader className="pt-2 px-4 flex flex-col items-center rounded">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center">
														{Header7}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body">{bodyContent7}</small>
												</CardHeader>
											</Card>
										</li>
									</ol>
								</div>
							</Tab>

							{/* TAB POSTER  */}
							<Tab className="text-xs md:text-sm" title="Poster">
								<div className="flex h-full items-center px-6 mb-5  w-custom-tab">
									<ol className="group flex w-1/2">
										<li>
											<Card isPressable onPress={() => handleModalOpen(Header6, <CapstonePoster />)} className="group relative flex flex-col justify-center items-center w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50 hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50 gap-5">
												<CardBody className="flex flex-col items-center mt-5 ">
													<Image alt="Card background" className="object-cover size-fit h-full" src={CapstonePosterThumbnail} width={500} height={500} />
												</CardBody>
												<CardHeader className="pt-2 px-4 flex flex-col items-center rounded">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center">
														{Header6}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body">{bodyContent6}</small>
												</CardHeader>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(Header8, <NailPoster />)} className="group relative flex flex-col justify-center items-center w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50 hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50 gap-5">
												<CardBody className="flex flex-col items-center mt-5 ">
													<Image alt="Card background" className="object-cover size-fit h-full" src={NailPosterThumbnail} width={500} height={500} />
												</CardBody>
												<CardHeader className="pt-2 px-4 flex flex-col items-center rounded">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center">
														{Header8}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body">{bodyContent8}</small>
												</CardHeader>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(Header9, <JournPoster />)} className="group relative flex flex-col justify-center items-center w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50 hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50 gap-5">
												<CardBody className="flex flex-col items-center mt-5 ">
													<Image alt="Card background" className="object-cover size-fit h-full" src={JournPosterThumbnail} width={500} height={500} />
												</CardBody>
												<CardHeader className="pt-2 px-4 flex flex-col items-center rounded">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center">
														{Header9}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body">{bodyContent9}</small>
												</CardHeader>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(Header10, <PromPoster />)} className="group relative flex flex-col justify-center items-center w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50 hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50 gap-5">
												<CardBody className="flex flex-col items-center mt-5 ">
													<Image alt="Card background" className="object-cover size-fit h-full" src={PromPosterThumbnail} width={500} height={500} />
												</CardBody>
												<CardHeader className="pt-2 px-4 flex flex-col items-center rounded">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center">
														{Header10}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body">{bodyContent10}</small>
												</CardHeader>
											</Card>
										</li>
									</ol>
								</div>
							</Tab>

							{/* TAB REELS  */}
							<Tab className="text-xs md:text-sm" title="Reels">
								<div className="flex h-full items-center px-6 mb-5 w-custom-tab">
									<ol className="group flex w-1/2">
										<li>
											<Card isPressable onPress={() => handleModalOpen(Header11, <Reels1 />)} className="group relative flex flex-col justify-center items-center w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50 hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50 gap-5">
												<CardBody className="flex flex-col items-center mt-5  ">
													<Image alt="Card background" className="object-cover size-fit h-full" src={Reels1Thumbnail} width={500} height={500} />
												</CardBody>
												<CardHeader className="pt-2 px-4 flex flex-col items-center rounded">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center">
														{Header11}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body h-20">{bodyContent11}</small>
												</CardHeader>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(Header12, <Reel2 />)} className="group relative flex flex-col justify-center items-center w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50 hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50 gap-5">
												<CardBody className="flex flex-col items-center mt-5 h-72">
													<Image alt="Card background" className="object-cover size-fit h-full" src={Reel2Thumbnail} width={500} height={500} />
												</CardBody>
												<CardHeader className="pt-2 px-4 flex flex-col items-center rounded">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center">
														{Header12}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body h-20">{bodyContent12}</small>
												</CardHeader>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(Header13, <Reel3 />)} className="group relative flex flex-col justify-center items-center w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50 hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50 gap-5">
												<CardBody className="flex flex-col items-center mt-5 ">
													<Image alt="Card background" className="object-cover size-fit h-full" src={Reel3Thumbnail} width={500} height={500} />
												</CardBody>
												<CardHeader className="pt-2 px-4 flex flex-col items-center rounded">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center">
														{Header13}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body h-20">{bodyContent13}</small>
												</CardHeader>
											</Card>
										</li>

										<li>
											<Card isPressable onPress={() => handleModalOpen(Header14, <Reel4 />)} className="group relative flex flex-col justify-center items-center w-72 h-custom-30 my-auto mr-10 hover:text-dark-orange overflow-hidden bg-slate-800/50 md:bg-transparent md:hover:bg-slate-800/50 hover:shadow-xl md:hover:!opacity-100 md:group-hover:opacity-50 gap-5">
												<CardBody className="flex flex-col items-center mt-5 ">
													<Image alt="Card background" className="object-cover size-fit h-full" src={Reel4Thumbnail} width={500} height={500} />
												</CardBody>
												<CardHeader className="pt-2 px-4 flex flex-col items-center rounded">
													<motion.h4 whileHover={{ scale: 1.1 }} className="mb-2 font-bold text-large truncate w-full text-center">
														{Header14}
													</motion.h4>
													<small className="text-default-500 line-clamp-4 modalOut-body">{bodyContent14}</small>
												</CardHeader>
											</Card>
										</li>
									</ol>
								</div>
							</Tab>
						</Tabs>

						{/* <Modals isOpen={isModalOpen} onClose={handleModalClose} headerContent={Header1} bodyContent={<ModalContent1 />} footerContent={<FooterContent onClose={handleModalClose} />} /> */}

						<Modals isOpen={modalData.isOpen} onClose={handleModalClose} headerContent={modalData.header} bodyContent={modalData.body} footerContent={modalData.footer} />

						{/* <Modals isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
							{ModalContent}
						</Modals> */}
					</ScrollShadow>
				</section>

				{/* ABOU ME */}
				<section className="mb-20 h-full lg:h-modalH ">
					<h3 className="text-4xl md:text-5xl lg:text-6xl py-1 font-main font-black md:ml-4 lg:ml-8 dark:text-white">ABOUT ME</h3>
					<div className="md:flex">
						<div className="flex flex-col lg:flex-1 items-center text-center justify-center md:items-start md:text-left p-5 lg:pl-8">
							<div className="mb-5 lg:my-8">
								<Image alt="Content" src={web6} width={400} height={400} className="w-40 h-40 rounded-full object-cover size-min " />
							</div>
							<div className="mb-5">
								<h4 className="text-4xl lg:text-5xl tracking-tighter text-gray-800 dark:text-gray-200  font-main font-black uppercase ">Jerome Almoguera</h4>
								<p className="text-xs sm:text-sm lg:text-base  text-gray-800 dark:text-gray-200  ">Aspiring Front-End Developer • Graphic Designer</p>
							</div>

							<p className="text-sm lg:text-base py-2 lg:pr-10 text-gray-800 dark:text-gray-200  ">Hello, I'm Jerome Almoguera, graduated from La Verdad Christian College-Apalit, Philippines. During my internship, I worked as a front-end developer, but my first job led me to desktop support. Now, I’m determined to realign my career with my true passion for web development. </p>
						</div>

						{/* WORK EXPERIENCE */}

						<ScrollShadow hideScrollBar className="lg:flex-1  overflow-scroll overflow-x-hidden ">
							<ol className="group h-custom-30">
								<li className="group dark:text-white dark:hover:text-orange-400 md:hover:bg-slate-800/50 md:hover:shadow-l md:hover:!opacity-100  md:group-hover:opacity-50 mb-5 p-3 rounded-md">
									<div className="flex flex-col">
										<header className="lg:flex-2 w-52  text-xs font-medium uppercase pt-1 text-white/75 ">September 2023 — JULY 2024</header>
										<div className="lg:flex-1">
											<h5 className=" text-base font-semibold mb-3 ">Desktop Support Engineeer · Qstrike Innovation Phils., OPC</h5>
											<p className=" text-xs sm:text-sm text-white/75">
												<ul>
													<li className="mb-2">• Install, configure, and maintain computer hardware components, peripherals, and software applications.</li>
													<li className="mb-2">• Diagnose and resolve hardware and software issues, including troubleshooting and providing technical support to end‑users.</li>
													<li className="mb-2">• Analyze technical problems, identify root causes, and implement effective solutions to minimize downtime and disruptions.</li>
													<li className="mb-2">• Provide remote technical assistance to off‑site users through phone, email, or remote desktop tools (AnyDesk).</li>
												</ul>
											</p>
										</div>
									</div>
								</li>

								<li className="group dark:text-white dark:hover:text-orange-400 md:hover:bg-slate-800/50 md:hover:shadow-l md:hover:!opacity-100  md:group-hover:opacity-50 mb-5 p-3 rounded-md">
									<div className="flex flex-col">
										<header className="flex-2 w-52  text-xs font-medium uppercase pt-1 text-white/75">March — June 2023</header>
										<div className="flex-1">
											<h5 className=" text-base font-semibold mb-3">Front-End Developer Intern · Qstrike Innovation Phils., OPC</h5>
											<p className="text-xs sm:text-sm text-white/75">
												<ul>
													<li className="mb-2">• Collaborated in Agile development environments, participating in daily stand‑ups, sprint planning, demonstrations, and code reviews to deliver high‑quality code within project timelines.</li>
													<li className="mb-2">• Translated design mock‑ups into pixel‑perfect, standards‑compliant HTML, CSS, and JavaScript code using Figma.</li>
													<li className="mb-2">• Built and maintained reusable code libraries, frameworks (UI Kit), and components to streamline development processes and improve efficiency.</li>
												</ul>
											</p>
										</div>
									</div>
								</li>
							</ol>
						</ScrollShadow>
					</div>
				</section>

				{/* ========================== CONTACT ========================== */}
				<section className=" mb-20">
					<h3 className="text-4xl md:text-5xl lg:text-6xl py-1 font-main font-black md:ml-4 lg:ml-8 dark:text-white">CONTACT</h3>
					<div className=" container my-5 pl-8 ">
						<section>
							<p className="text-sm sm:text-base lg:text-lg mb-12 lg:w-3/5 dark:text-white">I’m excited to connect! Whether it’s for project discussions, collaboration opportunities, or any inquiries, don’t hesitate to reach out—I’d be glad to help!</p>

							<div className="flex flex-wrap ">
								<div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
									<div className="flex flex-wrap">
										<div className="mb-4 lg:mb-8 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6 ">
											<a href="mailto:jeromealmoguera@gmail.com" target="_blank">
												<div className="flex items-start">
													<div className="inline-block  my-auto rounded-md bg-teal-400-100  dark:text-white">
														<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-envelope w-7 h-7" viewBox="0 0 16 16">
															<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
														</svg>
													</div>

													<div className="ml-6 grow">
														<p className="text-neutral-500 font-semibold  text-xs sm:text-sm">Email</p>
														<p className="dark:text-white hover:underline font-light text-xs sm:text-sm">jeromealmoguera@gmail.com</p>
													</div>
												</div>
											</a>
										</div>

										<div className="mb-4 lg:mb-8 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
											<a href="https://github.com/jeromealmoguera" target="_blank">
												<div className="flex items-start">
													<div className="inline-block my-auto rounded-md bg-teal-400-100  dark:text-white">
														<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github w-7 h-7" viewBox="0 0 16 16">
															<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
														</svg>
													</div>
													<div className="ml-6 grow">
														<p className="text-neutral-500 font-semibold  text-xs sm:text-sm">GitHub</p>
														<p className="dark:text-white hover:underline font-light text-xs sm:text-sm">@jeromealmoguera</p>
													</div>
												</div>
											</a>
										</div>

										<div className="mb-4  w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
											<a href="https://www.linkedin.com/in/jeromealmoguera/" target="_blank">
												<div className="align-start flex">
													<div className="inline-block my-auto rounded-md bg-teal-400-100  dark:text-white">
														<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin w-7 h-7" viewBox="0 0 16 16">
															<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
														</svg>
													</div>
													<div className="ml-6 grow">
														<p className="text-neutral-500 font-semibold  text-xs sm:text-sm">LinkedIn</p>
														<p className="dark:text-white hover:underline font-light text-xs sm:text-sm">@jeromealmoguera</p>
													</div>
												</div>
											</a>
										</div>

										<div className="mb-4  w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
											<a href="https://www.instagram.com/almoguerajeromeg/" target="_blank">
												<div className="align-start flex">
													<div className="inline-block  my-auto rounded-md bg-teal-400-100  dark:text-white">
														<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-instagram w-7 h-7" viewBox="0 0 16 16">
															<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
														</svg>
													</div>
													<div className="ml-6 grow">
														<p className="text-neutral-500 font-semibold text-xs sm:text-sm">Instagram</p>
														<p className="dark:text-white  hover:underline font-light text-xs sm:text-sm">@almoguerajeromeg</p>
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

				<section className="border-y mb-5 lg:mb-12">
					<div className="justify-items-center h-screen content-center">
						<h1 className="font-main text-7xl sm:text-[110px] md:text-[150px]  lg:text-10xl tracking-tighter leading-none dark:text-white ">THANKS</h1>
						<p className="font-mainLight text-sm sm:text-xl md:text-3xl lg:text-5xl tracking-widest pl-5 sm:pl-7 lg:pl-12 dark:text-white ">FOR VISITING</p>
					</div>
				</section>

				{/* <!-- Foooter --> */}
				<section>
					<div className="max-w-screen-xl px-4 py-5 mx-auto space-y-2 overflow-hidden sm:px-6 lg:px-8 ">
						<div className="flex justify-center space-x-3 md:space-x-3 ">
							<a href="https://github.com/jeromealmoguera" target="_blank" className="text-dark-blue dark:text-white/75 hover:dark:text-white hover:text-slate-700">
								<span className="sr-only">GitHub</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github w-5 h-5 md:w-6 md:h-6" viewBox="0 0 16 16">
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
								</svg>
							</a>
							<a href="https://www.linkedin.com/in/jeromealmoguera/" target="_blank" className="text-dark-blue dark:text-white/75 hover:dark:text-white hover:text-slate-700">
								<span className="sr-only">LinkedIn</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin w-5 h-5 md:w-6 md:h-6" viewBox="0 0 16 16">
									<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
								</svg>
							</a>
							<a href="https://www.instagram.com/almoguerajeromeg/" target="_blank" className="text-dark-blue dark:text-white/75 hover:dark:text-white hover:text-gray-700">
								<span className="sr-only">Instagram</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-instagram w-5 h-5 md:w-6 md:h-6" viewBox="0 0 16 16">
									<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
								</svg>
							</a>
						</div>
						<p className=" font-extralight text-footer text-center text-dark-blue dark:text-white/75 ">
							{`© ${year} | Design & Developed by `}
							<a href="https://www.linkedin.com/in/jeromealmoguera/" target="_blank" title="Connect with Jerome Almoguera on LinkedIn" className="text-footer underline  underline-offset-1 hover:dark:text-white">
								Jerome Almoguera
							</a>
						</p>
					</div>
				</section>
			</Gradientdiv>
		</div>
	);
}
