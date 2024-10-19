import gameone from "../assets/600x900.png"
import presskit from "../assets/press_kit.svg"
import itchio from "../assets/itch_io.svg"
import steam from "../assets/steam.svg"

function GameBlock() {
	return (
		<>
			<div className="block">
                <div className="img-block">
                <img src={gameone} alt="" className="game-img" />
                </div>
                <div className="buttons-container fade-in">
				<div className="doubled-button">
					<a href="" className="press-kit-btn-link">
                        <div className="press-kit-btn-container">
                            <img src={presskit} alt="" style={{width: 24, height: 24}}/>
                            <span>PRESS KIT</span>
                        </div>
                    </a>
					<a href="" className="itch-io-btn-link">
                        <div className="itch-io-btn-container">
                            <img src={itchio} alt="" style={{width: 24, height: 24}}/>
                            <span>ITCH.IO</span>
                        </div>
                    </a>
				</div>
				<a href="#" className="get-on-steam-btn">
                    <div className="steam-btn-container">
                        <img src={steam} alt="" style={{width: 24, height: 24}}></img>
                        <span>GET ON STEAM</span>
                    </div>
                </a>
			</div>
            </div>
		</>
	);
}

export default GameBlock;
