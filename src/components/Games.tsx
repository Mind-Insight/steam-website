import { useEffect, useState, useRef } from "react";
import GameBlock from "./GameBlock";
import arrow from "../assets/arrow.svg";

export const GamesList = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [showButton, setShowButton] = useState(false);
	const [canScroll, setCanScroll] = useState(false);

	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
		}
	};

	useEffect(() => {
		const handleResize = () => {
			if (scrollRef.current) {
				const containerWidth = scrollRef.current.clientWidth;
				const scrollWidth = scrollRef.current.scrollWidth;
				setCanScroll(scrollWidth > containerWidth);
				setShowButton(
					window.innerWidth <= 1200 && scrollWidth > containerWidth
				);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [showButton]);

	return (
		<div className="games-wrapper">
			<div className="games" ref={scrollRef}>
				<GameBlock />
                <GameBlock />
                <GameBlock />
                <GameBlock />
                <GameBlock />
                <GameBlock />
                <GameBlock />
                <GameBlock />
			</div>
			{/* {showButton &&
				canScroll && (
					<button
						onClick={scrollRight}
						className="scroll-button-right"
					>
						<img src={arrow} alt="Scroll Right" />
					</button>
				)} */}
		</div>
	);
};
