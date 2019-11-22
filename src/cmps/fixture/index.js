import React from "react";
import Player from "../player"
import afc from "../../assets/img/afc.png";
import dfc from "../../assets/img/dfc.png";
import bmfc from "../../assets/img/bmfc.png";
import psg from "../../assets/img/psg.png";
import thfc from "../../assets/img/thfc.png";
import rmfc from "../../assets/img/rmfc.png";
import cfc from "../../assets/img/cfc.png";
import lfc from "../../assets/img/lfc.png";
import jfc from "../../assets/img/jfc.png";
import amfc from "../../assets/img/amfc.png";
import nfc from "../../assets/img/nfc.png";
import mcfc from "../../assets/img/mcfc.png";
import fcb from "../../assets/img/fcb.png";
import mufc from "../../assets/img/mufc.png";
import efc from "../../assets/img/efc.png";
import gfc from "../../assets/img/gfc.png";
import bfc from "../../assets/img/bfc.png";
import ifc from "../../assets/img/ifc.png";

function Fixture(props) {
  const badges = {
    afc,
    dfc,
    bmfc,
    psg,
    thfc,
    rmfc,
    cfc,
    lfc,
    jfc,
    amfc,
    nfc,
    mcfc,
    fcb,
    mufc,
    efc,
    bfc,
    gfc,
    ifc
  };

  return (
    <div className={`group__row group__row--fixture ${props.className}`}>
      <div className="group__cell group__cell--player">
        <img className="group__badge" src={badges[props.homeBadge]} alt="" />
        <Player
          className="group__player-name"
          playerName={props.homePlayerName}
          totalWon={props.homeTotalWon}
          totalDrawn={props.homeTotalDrawn}
          totalLost={props.homeTotalLost}
          trophies={props.homeTrophies}
        />
      </div>
      <div className="group__scoring">
        <p className="group__score">
          {props.homeGoals} {props.homeGoals > -1 ? "-" : "V"} {props.awayGoals}
        </p>
        {props.homeAggGoals > -1 && (
          <p className="group__agg">
            ({props.homeAggGoals} - {props.awayAggGoals} agg{props.awayGoalWinner ? ', ' + props.awayGoalWinner + ' goes through on away goals)' : ')'}
          </p>
        )}
      </div>
      <div className="group__cell group__cell--player group__cell--away">
        <img className="group__badge" src={badges[props.awayBadge]} alt="" />
        <Player
          className="group__player-name"
          playerName={props.awayPlayerName}
          totalWon={props.awayTotalWon}
          totalDrawn={props.awayTotalDrawn}
          totalLost={props.awayTotalLost}
          trophies={props.awayTrophies}
        />
      </div>
    </div>
  );
}

export default Fixture;
