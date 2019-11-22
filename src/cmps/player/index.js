import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./player.scss";

class Player extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			playerTrophies: "0"
		};
	}

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	renderSwitch() {
		switch (this.props.playerName) {
			case "Tej":
				return "1";
			case "Stephen":
				return "3";
			default:
				return "0";
		}
	}

	render() {
		return (
			<div className={`${this.props.className} player`}>
				<p className="player__label">
					<span
						className={`player__trophies player__trophies--${this.renderSwitch()}`}
					>
						<FontAwesomeIcon
							className="player__trophy"
							icon={["fas", "star"]}
						/>
						<FontAwesomeIcon
							className="player__trophy"
							icon={["fas", "star"]}
						/>
						<FontAwesomeIcon
							className="player__trophy"
							icon={["fas", "star"]}
						/>
					</span>
					{this.props.playerName}
				</p>
			</div>
		);
	}
}

export default Player;
