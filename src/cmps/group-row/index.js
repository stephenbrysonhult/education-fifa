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

import ajfc from "../../assets/img/ajfc.png";
import asr from "../../assets/img/asr.png";
import acm from "../../assets/img/acm.png";
import blfc from "../../assets/img/blfc.png";
import lzfc from "../../assets/img/lzfc.png";
import rbfc from "../../assets/img/rbfc.png";
import imfc from "../../assets/img/imfc.png";
import vfc from "../../assets/img/vfc.png";

function GroupRow(props) {
  function getGamesPlayed() {
    return props.gamesWon + props.gamesDrawn + props.gamesLost;
  }

  function getGoalDifference() {
    const goalDifference = props.goalsFor - props.goalsAgainst;

    if (goalDifference > 0) {
      return `+${goalDifference}`;
    }
    return goalDifference;
  }

  function getTotalPoints() {
    return props.gamesWon * 3 + props.gamesDrawn;
  }

  const badges = {
    ajfc,
    asr,
    acm,
    blfc,
    lzfc,
    rbfc,
    imfc,
    vfc,

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
    <div className={`group__row ${props.className}`}>
      <div className="group__cell group__cell--player">
        <img className="group__badge" src={badges[props.badge]} alt="" />
        <Player
          className="group__player-name"
          playerName={props.playerName}
          totalWon={props.totalWon}
          totalDrawn={props.totalDrawn}
          totalLost={props.totalLost}
          trophies={props.trophies}
        />
      </div>
      <div className="group__cell">{getGamesPlayed()}</div>
      <div className="group__cell">{props.gamesWon}</div>
      <div className="group__cell">{props.gamesDrawn}</div>
      <div className="group__cell">{props.gamesLost}</div>
      <div className="group__cell">{props.goalsFor}</div>
      <div className="group__cell">{props.goalsAgainst}</div>
      <div className="group__cell">{getGoalDifference()}</div>
      <div className="group__cell">{getTotalPoints()}</div>
    </div>
  );
}

export default GroupRow;
