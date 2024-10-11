import game from "../assets/game.png";

function GameBlock() {
	return (
		<>
			<div className="block">
				<img src={game} alt="" />
				<div className="doubled-button">
					<a href="" className="press-kit-btn"></a>
					<a href="" className="itch-io-btn"></a>
				</div>
				<a className="get-on-steam-btn"></a>
			</div>
		</>
	);
}

export default GameBlock;
