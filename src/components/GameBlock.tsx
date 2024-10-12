import game from "../assets/game.png";
import presskit from "../assets/press_kit.svg"
import itchio from "../assets/itch_io.svg"
import steam from "../assets/steam.svg"

function GameBlock() {
	return (
		<>
			<div className="block">
				<img src={game} alt="" />
				<div className="doubled-button">
					<a href="" className="press-kit-btn-link">
                        <div className="press-kit-btn-container">
                            <img src={presskit} alt="" />
                            <span>PRESS KIT</span>
                        </div>
                    </a>
					<a href="" className="itch-io-btn-link">
                        <div className="itch-io-btn-container">
                            <img src={itchio} alt="" />
                            <span>ITCH.IO</span>
                        </div>
                    </a>
				</div>
				<a href="#" className="get-on-steam-btn">
                    <div className="steam-btn-container">
                        <img src={steam} alt="" />
                        <span>GET ON STEAM</span>
                    </div>
                </a>
			</div>
		</>
	);
}

export default GameBlock;
