import Stripes from "./Stripes";
import SocialLinks from "./Social"
import logo from "../assets/logo.svg";

function Main() {
	return (
		<div className="container">
			<Stripes />
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
	);
}

export default Main;
