import { useEffect, useState, useRef } from "react";
import GameBlock from "./GameBlock";
import arrow from "../assets/arrow.svg";

export const GamesList = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 1200) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="games-wrapper">
			<div className="games" ref={scrollRef}>
				<GameBlock />
				{/* <GameBlock /> */}
				{/* <GameBlock /> */}
                {/* <GameBlock /> */}
			</div>
			{showButton && (
				<button
					onClick={scrollRight}
					className="scroll-button-right"
				>
					<img src={arrow} alt="" />
				</button>
			)}
		</div>
	);
};
