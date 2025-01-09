import React, { ReactNode, useState, useEffect } from "react";

interface GradientDivProps {
	children: ReactNode;
	className: string;
}

const GradientDiv: React.FC<GradientDivProps> = ({ children, className }) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updateMousePosition = (ev: MouseEvent) => {
			const scrollX = window.scrollX || 0;
			const scrollY = window.scrollY || 0;
			setMousePosition({
				x: ev.clientX + scrollX,
				y: ev.clientY + scrollY,
			});
		};

		window.addEventListener("mousemove", updateMousePosition);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);

	return (
		<div
			style={{
				backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, red, blue 50%)`,
			}}
			className={className}
		>
			{children}
		</div>
	);
};

export default GradientDiv;
