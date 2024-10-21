import { useState } from "react";
import socialArrow from "../assets/social-arrow.svg";
import Patreon from "../assets/patreon.svg";
import Boosty from "../assets/boosty.svg";
import smallArrow from "../assets/small_arrow.svg";

function News() {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleSubscribe = async () => {
		if (!email) {
			// setError("Please enter your email address");
			return;
		}

		setLoading(true);

		try {
			const res = await fetch("http://185.247.185.44/index.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					list_id: "589589",
				}),
			});

			if (!res.ok) {
				throw new Error("Network response was not ok");
			}

			setSuccess(true);
			setTimeout(() => {
				setSuccess(false);
				setEmail("");
			}, 1000);
		} catch (error) {
			console.error("Subscription failed:", error);
		} finally {
			setLoading(false);
		}
	};

    const handleEmailClick = () => {
        window.location.href = "mailto:kreidpix@gmail.com";
    }
	return (
		<>
			<div className="news">
				<div className="news-text">
                    {/* <img src={newsBlur} alt="" /> */}
					<span>GET THE{" "}
					<span className="special">NEWS</span>
                    </span>
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
								<br />
								ON PATREON
							</div>
							<a
								href="https://www.patreon.com/kreidpix"
								className="patreon-link"
							>
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
								<br />
								ON BOOSTY
							</div>
							<a
								href="https://boosty.to/kreidpix"
								className="boosty-link"
							>
								<img src={socialArrow} alt="" />
							</a>
						</div>
					</div>
				</div>

				<div className="company-email">
                    <div className="company-email-span" onClick={handleEmailClick} style={{cursor: "pointer"}}>
					    <span>KREIDPIX@GMAIL.COM</span>
                    </div>
					<div className="company-email-img" onClick={handleEmailClick}>
						<img src={smallArrow} alt="" />
					</div>
				</div>
			</div>
		</>
	);
}

export default News;
