import discord from "../assets/social/discord.svg";
import youtube from "../assets/social/youtube.svg";
import instagram from "../assets/social/insta.svg";
import twitter from "../assets/social/twitter.svg";
import reddit from "../assets/social/reddit.svg";
import tiktok from "../assets/social/tiktok.svg";

function SocialLinks() {
	return (
		<div className="links-row">
			<a
				href="https://discord.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="link-container">
					<img src={discord} alt="Discord" />
				</div>
			</a>
			<a
				href="https://twitter.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="link-container">
					<img src={twitter} alt="Twitter" />
				</div>
			</a>
			<a
				href="https://youtube.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="link-container">
					<img src={youtube} alt="YouTube" />
				</div>
			</a>
			<a
				href="https://reddit.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="link-container">
					<img src={reddit} alt="Reddit" />
				</div>
			</a>
			<a
				href="https://instagram.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="link-container">
					<img src={instagram} alt="Instagram" />
				</div>
			</a>
			<a
				href="https://tiktok.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="link-container">
					<img src={tiktok} alt="TikTok" />
				</div>
			</a>
		</div>
	);
}

export default SocialLinks;
