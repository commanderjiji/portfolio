import React, { ReactNode, useState, useEffect } from "react";

const useGradientPosition = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updateMousePosition = (ev: MouseEvent) => {
			const scrollX = window.scrollX || 0; // Horizontal scroll offset
			const scrollY = window.scrollY || 0; // Vertical scroll offset

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

	return mousePosition;
};

interface GradientdivProps {
	children: ReactNode;
	className?: string;
}

const Gradientdiv: React.FC<GradientdivProps> = ({ children, className = "" }) => {
	const { x, y } = useGradientPosition();

	return (
		<div
			style={{
				zIndex: -999,
				backgroundImage: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.05), rgba(16, 24, 37, 0.5) 20%)`,
			}}
			className={className}
		>
			{children}
		</div>
	);
};

export default Gradientdiv;
