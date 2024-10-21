function SteamEmbed() {
	return (
		<div className="steamEmbed">
            <div className="text">
                WISH<span>LIST</span>
            </div>

			<iframe
				src="https://store.steampowered.com/widget/500/?utm_source=homepage&utm_campaign=mycampaign"
				width="100%"
				height="190px"
                frameBorder="0"
			></iframe>
		</div>
	);
}

export default SteamEmbed;
