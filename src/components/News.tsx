import socialArrow from "../assets/social-arrow.svg";
import companyEmailArrow from "../assets/company-email-arrow.svg";
import Patreon from "../assets/patreon.svg";
import Boosty from "../assets/boosty.svg";

function News() {
	return (
		<>
			<div className="news">
				<div className="news-text">
					<span>GET THE </span>
                    <span className="special">NEWS</span>
				</div>
				<div className="email-field">
					<input
						type="text"
						placeholder="YOUR EMAIL"
						className="email-input"
					/>
					<button className="email-btn">SUBSCRIBE</button>
				</div>

				<div className="doubled-sub">
					<div className="patreon-btn">
						<div className="patreon-img-container">
							<img src={Patreon} alt="" />
						</div>
						<div className="doubled-patreon-container">
							<div className="patreon-text">
                            <span>SUPPORT US</span> ON PATREON
							</div>
							<img src={socialArrow} alt="" />
						</div>
					</div>
					<div className="boosty-btn">
						<div className="boosty-img-container">
							<img src={Boosty} alt="" />
						</div>
						<div className="doubled-boosty-container">
							<div className="boosty-text">
                                <span>SUPPORT US</span> ON BOOSTY
							</div>
							<img src={socialArrow} alt="" />
						</div>
					</div>
				</div>

				<div className="company-email">
					<span>KREIDPIX@GMAIL.COM</span>
					<img src={companyEmailArrow} alt="" />
				</div>
			</div>
		</>
	);
}

export default News;