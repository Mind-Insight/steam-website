import React, { useEffect, useState } from "react";

function Stripes() {
	const stripesCount = 12;
	const [isVisible, setIsVisible] = useState(true);

	const handleResize = () => {
		setIsVisible(window.innerWidth > 360);
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		isVisible && (
			<div
				className="stripes-background"
				style={{ width: "1160px", overflow: "hidden" }}
			>
				{Array.from({ length: stripesCount }, (_, index) => (
					<div key={index} className="stripe" />
				))}
			</div>
		)
	);
}

export default Stripes;
