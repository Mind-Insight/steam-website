import Stripes from "./Stripes";
import SocialLinks from "./Social"
import GameBlock from "./GameBlock";
import logo from "../assets/logo.svg";

function Main() {
	return (
		<div className="container">
            <div className="enter-wrapper">
                <div className="enter">
                    <div className="logo-container">
                        <img
                            src={logo}
                            className="logo"
                            alt="логотип"
                        />
                    </div>
                    <h1 className="enter-text">
                        <span style={{ color: "fff", opacity: 0.6 }}>We</span>{" "}
                        <span style={{ color: "fff", opacity: 0.6 }}>create</span>{" "}
                        entertainment with pixels
                    </h1>
                    <SocialLinks/>
                </div>
            </div>
            <div className="games-wrapper">
                <div className="games">
                    <GameBlock/>
                    <GameBlock/>
                    <GameBlock/>
                    <GameBlock/>
                </div>
            </div>
		</div>
	);
}

export default Main;
