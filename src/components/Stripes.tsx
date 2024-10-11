import { useEffect, useState } from "react";

function Stripes() {
	const [stripesCount, setStripesCount] = useState(getStripesCount());

	function getStripesCount() {
		return Math.floor(window.innerWidth / 113);
	}

	const updateStripesCount = () => {
		setStripesCount(getStripesCount());
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
