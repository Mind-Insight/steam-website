import discord from "../assets/social/discord.svg";
import youtube from "../assets/social/youtube.svg";
import instagram from "../assets/social/insta.svg";
import twitter from "../assets/social/twitter.svg";
import reddit from "../assets/social/reddit.svg";
import tiktok from "../assets/social/tiktok.svg";
import footerLogo from "../assets/footer-logo.svg";

function Footer() {
	return (
		<div className="footer">
			<div className="privacy-policy">
				<a href="#">
					<span>PRIVACY POLICY</span>
				</a>
				KREIDPIX@GMAIL.COM
			</div>
			<div className="footer-logo">
				<a href="#start"><img src={footerLogo} alt="" /></a>
			</div>
			<div className="links-row" style={{ gap:11 }}>
				<a
					href="https://discord.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="link-container" style={{width: 40, height: 40}}>
						<img src={discord} alt="Discord" style={{width: 22, height: 17}} />
					</div>
				</a>
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="link-container" style={{width: 40, height: 40}}>
						<img src={twitter} alt="Twitter" style={{width: 18.77, height: 17.57}}/>
					</div>
				</a>
				<a
					href="https://youtube.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="link-container" style={{width: 40, height: 40}}>
						<img src={youtube} alt="YouTube" style={{width: 27.4, height: 18.79}}/>
					</div>
				</a>
				<a
					href="https://reddit.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="link-container" style={{width: 40, height: 40}}>
						<img src={reddit} alt="Reddit" style={{width: 25.84, height: 23.49}}/>
					</div>
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="link-container" style={{width: 40, height: 40}}>
						<img src={instagram} alt="Instagram" style={{width: 22.2, height: 21.26}}/>
					</div>
				</a>
				<a
					href="https://tiktok.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="link-container" style={{width: 40, height: 40}}>
						<img src={tiktok} alt="TikTok" style={{width: 18.79, height: 21.14}}/>
					</div>
				</a>
			</div>
		</div>
	);
}

export default Footer;
