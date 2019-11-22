import React from "react";
import './group.scss';

function Group(props) {
  return (
    <div className="group">
      <div className="group__row group__row--heading">
        <div className="group__cell group__cell--heading group__cell--player">Player</div>
        <div className="group__cell group__cell--heading">P</div>
        <div className="group__cell group__cell--heading">W</div>
        <div className="group__cell group__cell--heading">D</div>
        <div className="group__cell group__cell--heading">L</div>
        <div className="group__cell group__cell--heading">GF</div>
        <div className="group__cell group__cell--heading">GA</div>
        <div className="group__cell group__cell--heading">GD</div>
        <div className="group__cell group__cell--heading">PTS</div>
      </div>
      {props.children}
    </div>
  );
}

export default Group;
