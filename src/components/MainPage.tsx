import Stripes from "./Stripes";
import SocialLinks from "./Social";
import News from "./News";
import logo from "../assets/logo.svg";
import Footer from "./Footer";
import SteamEmbed from "./SteamEmbed";
import { GamesList } from "./Games";

function Main() {
	return (
		<>
			<div className="container" id="start">
				{/* <Stripes /> */}
				<div className="enter-wrapper">
					<div className="enter">
						<div className="back-blur"></div>
						<div className="img-cont">
							<img src={logo} className="logo" alt="логотип" />
						</div>
						<h1 className="enter-text">
							<span style={{ color: "fff", opacity: 0.6 }}>
								We
							</span>{" "}
							<span style={{ color: "fff", opacity: 0.6 }}>
								draw
							</span>{" "}
							entertainment with pixels
						</h1>
						<SocialLinks />
					</div>
				</div>
				<GamesList />
				<div className="wish-list-wrapper">
					<SteamEmbed />
				</div>
				<div className="news-wrapper">
					<News />
				</div>

				<div className="footer-wrapper">
					<Footer />
				</div>
			</div>
		</>
	);
}

export default Main;
