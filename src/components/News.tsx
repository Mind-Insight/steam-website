import { useState } from "react";
import socialArrow from "../assets/social-arrow.svg";
import Patreon from "../assets/patreon.svg";
import Boosty from "../assets/boosty.svg";
import smallArrow from "../assets/small_arrow.svg";

function News() {
	const [email, setEmail] = useState("");
	const [loading, _] = useState(false);
	const [success, setSuccess] = useState(false);
	// const [error, setError] = useState(null);
	const handleSubscribe = async () => {
		if (!email) {
			// setError("Please enter your email address");
			return;
		}
		// setError("");

		try {
			const res = await fetch("http://localhost:8000/index.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					list_id: "588659",
				}),
			});

			if (!res.ok) {
				throw new Error("Network response was not ok");
			}

			// const data = await res.json();
			// setResponse(data);
			setSuccess(true);
			setTimeout(() => {
				setSuccess(false);
			}, 1200);
		} catch (error) {
			console.error("Subscription failed:");
		}
	};

	return (
		<>
			<div className="news">
				<div className="news-text">
					<span>GET THE </span>
					<span className="special">NEWS</span>
				</div>
				<div className="email-field">
					<input
						type="email"
						placeholder="YOUR EMAIL"
						className="email-input"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button
						className={success ? "email-btn success" : "email-btn"}
						onClick={handleSubscribe}
						disabled={loading}
					>
						{success ? "SUCCESS" : "SUBSCRIBE"}
					</button>
				</div>
				<div className="doubled-sub">
					<div className="patreon-btn">
						<div className="patreon-img-container">
							<img src={Patreon} alt="" />
						</div>
						<div className="doubled-patreon-container">
							<div className="patreon-text">
								<span>SUPPORT US</span>
								ON PATREON
							</div>
							<a href="https://www.patreon.com/kreidpix" className="patreon-link">
								<img src={socialArrow} alt="" />
							</a>
						</div>
					</div>
					<div className="boosty-btn">
						<div className="boosty-img-container">
							<img src={Boosty} alt="" />
						</div>
						<div className="doubled-boosty-container">
							<div className="boosty-text">
								<span>SUPPORT US</span>
								ON BOOSTY
							</div>
							<a href="https://boosty.to/kreidpix" className="boosty-link">
								<img src={socialArrow} alt="" />
							</a>
						</div>
					</div>
				</div>

				<div className="company-email">
					<span>KREIDPIX@GMAIL.COM</span>
					<div className="company-email-img">
						<img src={smallArrow} alt="" />
					</div>
				</div>
			</div>
		</>
	);
}

export default News;
