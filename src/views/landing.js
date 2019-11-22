import React, { Component } from "react";
import Group from "../cmps/group";
import GroupRow from "../cmps/group-row";
import Fixture from "../cmps/fixture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Landing extends Component {
	state = {
		toggleLeague: this.props.toggleLeague
	};

	toggle = () => this.setState({ toggleLeague: !this.state.toggleLeague });

	render() {
		return (
			<div>
				<button className="league__btn" onClick={this.toggle}>
					View {this.state.toggleLeague ? "Better League" : "Sunday League"}{" "}
					results{" "}
					<i className="league__btn-icon">
						<FontAwesomeIcon icon={["far", "sync-alt"]} />
					</i>
				</button>

				<div
					className={`${
						this.state.toggleLeague ? "league--visible" : "league"
					}`}
				>
					<h1 className="h1 h1--accent">Sunday League Nov 19</h1>

					<Group>
						<GroupRow
							badge="vfc"
							playerName="Conor"
							gamesWon={3}
							gamesDrawn={0}
							gamesLost={0}
							goalsFor={15}
							goalsAgainst={1}
						/>
						<GroupRow
							badge="afc"
							playerName="Harrison"
							gamesWon={3}
							gamesDrawn={0}
							gamesLost={1}
							goalsFor={9}
							goalsAgainst={9}
						/>
						<GroupRow
							badge="blfc"
							playerName="Tom"
							gamesWon={1}
							gamesDrawn={0}
							gamesLost={1}
							goalsFor={6}
							goalsAgainst={5}
						/>
						<GroupRow
							badge="acm"
							playerName="Jake"
							gamesWon={1}
							gamesDrawn={0}
							gamesLost={3}
							goalsFor={5}
							goalsAgainst={8}
						/>
						<GroupRow
							badge="nfc"
							playerName="Abdi"
							gamesWon={0}
							gamesDrawn={0}
							gamesLost={0}
							goalsFor={0}
							goalsAgainst={0}
						/>
						<GroupRow
							badge="cfc"
							playerName="Davide"
							gamesWon={0}
							gamesDrawn={0}
							gamesLost={0}
							goalsFor={0}
							goalsAgainst={0}
						/>
						<GroupRow
							badge="rbfc"
							playerName="Gustavo"
							gamesWon={0}
							gamesDrawn={0}
							gamesLost={0}
							goalsFor={0}
							goalsAgainst={0}
						/>
						<GroupRow
							badge="ajfc"
							playerName="Jasper"
							gamesWon={0}
							gamesDrawn={0}
							gamesLost={0}
							goalsFor={0}
							goalsAgainst={0}
						/>
						<GroupRow
							badge="asr"
							playerName="Michael"
							gamesWon={0}
							gamesDrawn={0}
							gamesLost={0}
							goalsFor={0}
							goalsAgainst={0}
						/>

						<GroupRow
							badge="dfc"
							playerName="Niccolo"
							gamesWon={0}
							gamesDrawn={0}
							gamesLost={0}
							goalsFor={0}
							goalsAgainst={0}
						/>
						<GroupRow
							badge="mufc"
							playerName="Sam"
							gamesWon={0}
							gamesDrawn={0}
							gamesLost={0}
							goalsFor={0}
							goalsAgainst={0}
						/>
						<GroupRow
							badge="imfc"
							playerName="Christian"
							gamesWon={0}
							gamesDrawn={0}
							gamesLost={1}
							goalsFor={0}
							goalsAgainst={2}
						/>
						<GroupRow
							badge="lzfc"
							playerName="Marek"
							gamesWon={0}
							gamesDrawn={0}
							gamesLost={2}
							goalsFor={0}
							goalsAgainst={10}
						/>
					</Group>
				</div>

				<div
					className={`${
						this.state.toggleLeague ? "league" : "league--visible"
					}`}
				>
					<h1 className="h1 h1--accent">Better League Oct 19</h1>

					<h2 className="h2">Final</h2>
					<Fixture
						homeBadge="thfc"
						homePlayerName="Addy"
						awayBadge="fcb"
						awayPlayerName="Stephen"
						homeGoals={0}
						awayGoals={1}
					/>

					<h2 className="h2">Semi finals</h2>
					<Fixture
						homeBadge="dfc"
						homePlayerName="Anveer"
						awayBadge="fcb"
						awayPlayerName="Stephen"
						homeGoals={2}
						awayGoals={3}
						homeAggGoals={3}
						awayAggGoals={8}
						// awayGoalWinner=""
					/>
					<Fixture
						homeBadge="thfc"
						homePlayerName="Addy"
						awayBadge="psg"
						awayPlayerName="Mihai"
						homeGoals={3}
						awayGoals={2}
						homeAggGoals={6}
						awayAggGoals={2}
						// awayGoalWinner=""
					/>

					<h2 className="h2">Quarter finals</h2>
					<Fixture
						homeBadge="afc"
						homePlayerName="Bart"
						awayBadge="psg"
						awayPlayerName="Mihai"
						homeGoals={0}
						awayGoals={6}
						homeAggGoals={1}
						awayAggGoals={6}
						// awayGoalWinner=""
					/>
					<Fixture
						homeBadge="thfc"
						homePlayerName="Addy"
						awayBadge="amfc"
						awayPlayerName="Nick"
						homeGoals={4}
						awayGoals={0}
						homeAggGoals={8}
						awayAggGoals={0}
						// awayGoalWinner=""
					/>
					<Fixture
						homeBadge="rmfc"
						homePlayerName="Christoffer"
						awayBadge="fcb"
						awayPlayerName="Stephen"
						homeGoals={0}
						awayGoals={8}
						homeAggGoals={1}
						awayAggGoals={13}
						// awayGoalWinner=""
					/>
					<Fixture
						homeBadge="lfc"
						homePlayerName="Christian"
						awayBadge="dfc"
						awayPlayerName="Anveer"
						homeGoals={2}
						awayGoals={4}
						homeAggGoals={4}
						awayAggGoals={7}
						// awayGoalWinner=""
					/>

					<h2 className="h2">Group A</h2>
					<Group>
						<GroupRow
							badge="afc"
							playerName="Bart"
							gamesWon={6}
							gamesDrawn={0}
							gamesLost={0}
							goalsFor={21}
							goalsAgainst={5}
						/>
						<GroupRow
							badge="amfc"
							playerName="Nick"
							gamesWon={2}
							gamesDrawn={1}
							gamesLost={2}
							goalsFor={16}
							goalsAgainst={9}
						/>
						<GroupRow
							badge="ifc"
							playerName="Harrison"
							gamesWon={1}
							gamesDrawn={2}
							gamesLost={3}
							goalsFor={9}
							goalsAgainst={19}
						/>

						<GroupRow
							badge="bfc"
							playerName="Sam"
							gamesWon={0}
							gamesDrawn={1}
							gamesLost={4}
							goalsFor={6}
							goalsAgainst={19}
						/>
					</Group>
					<h2 className="h2">Group B</h2>
					<Group>
						<GroupRow
							badge="nfc"
							playerName="Tej"
							gamesWon={6}
							gamesDrawn={0}
							gamesLost={0}
							goalsFor={22}
							goalsAgainst={5}
						/>

						<GroupRow
							badge="dfc"
							playerName="Anveer"
							gamesWon={2}
							gamesDrawn={2}
							gamesLost={2}
							goalsFor={8}
							goalsAgainst={11}
						/>
						<GroupRow
							badge="psg"
							playerName="Mihai"
							gamesWon={1}
							gamesDrawn={2}
							gamesLost={3}
							goalsFor={10}
							goalsAgainst={14}
						/>
						<GroupRow
							badge="gfc"
							playerName="Conor"
							gamesWon={0}
							gamesDrawn={2}
							gamesLost={4}
							goalsFor={7}
							goalsAgainst={17}
						/>
					</Group>
					<h2 className="h2">Group C</h2>
					<Group>
						<GroupRow
							badge="fcb"
							playerName="Stephen"
							gamesWon={6}
							gamesDrawn={0}
							gamesLost={0}
							goalsFor={37}
							goalsAgainst={1}
						/>
						<GroupRow
							badge="lfc"
							playerName="Christian"
							gamesWon={2}
							gamesDrawn={1}
							gamesLost={3}
							goalsFor={6}
							goalsAgainst={20}
						/>

						<GroupRow
							badge="mcfc"
							playerName="Jasper"
							gamesWon={2}
							gamesDrawn={0}
							gamesLost={4}
							goalsFor={7}
							goalsAgainst={14}
						/>
						<GroupRow
							badge="jfc"
							playerName="Michael"
							gamesWon={1}
							gamesDrawn={1}
							gamesLost={4}
							goalsFor={8}
							goalsAgainst={23}
						/>
					</Group>
					<h2 className="h2">Group D</h2>
					<Group>
						<GroupRow
							badge="thfc"
							playerName="Addy"
							gamesWon={6}
							gamesDrawn={0}
							gamesLost={0}
							goalsFor={15}
							goalsAgainst={4}
						/>
						<GroupRow
							badge="rmfc"
							playerName="Christoffer"
							gamesWon={2}
							gamesDrawn={1}
							gamesLost={3}
							goalsFor={6}
							goalsAgainst={9}
						/>
						<GroupRow
							badge="efc"
							playerName="Tom"
							gamesWon={1}
							gamesDrawn={2}
							gamesLost={3}
							goalsFor={7}
							goalsAgainst={10}
						/>
						<GroupRow
							badge="bmfc"
							playerName="Jake"
							gamesWon={0}
							gamesDrawn={3}
							gamesLost={3}
							goalsFor={5}
							goalsAgainst={10}
						/>
					</Group>
				</div>
			</div>
		);
	}
}

export default Landing;
