import { useEffect, useState } from "react";

function Stripes() {
	const [stripesCount, setStripesCount] = useState(
		Math.floor(window.innerWidth / 115)
	);

	const updateStripesCount = () => {
		setStripesCount(Math.floor(window.innerWidth / 85));
	};

	useEffect(() => {
		window.addEventListener("resize", updateStripesCount);
		return () => {
			window.removeEventListener("resize", updateStripesCount);
		};
	}, []);

	return (
		<div className="wrapper">
			<div className="background-stripes">
				{Array.from({ length: stripesCount }, (_, index) => (
					<div key={index} className="stripe" />
				))}
			</div>
		</div>
	);
}

export default Stripes;
