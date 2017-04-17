import React from 'react'
import { map } from 'ramda'
import moment from 'moment'

import Header from './header'
import ButtonList from './button-list'


const GameList = function (props) {
  const gameToListView = function (game) {
    return (
      <li className="list pr4 pb4" key={game.gameCreator+game.sport+game.startTime}>
        <div className="cf avenir bt b--black-60 bw1">
        <div className="fl w-80 ttu tracked f6 b pt3 pl3 pb3 bg-black-60 white ">
          {game.sport} @ {game.gameLocation.name}<br />
        </div>
        <div className="fl w-20 tc pv3">ICON</div>
        <div className="fl w-100 pl3 pb1 pt1 i link">
          {`${game.gameLocation.streetAddress} ${game.gameLocation.city}, ${game.gameLocation.state} ${game.gameLocation.zipcode}`}
        </div>
        <div className="fl w-33">
          <ButtonList
            buttonText="Join Game"
          />
        </div>
        <div className="fl w-33">
          <ButtonList
            buttonText="More Info"
          />
        </div>
        <div className="fl w-33">
          <ButtonList
            buttonText="Leave Game"
          />
        </div>
        <div className="fl w-50 tc pv3">
          <div className="w-50-ns w-100 fl mb2">
            <div className="f6 fw4">Organizer:</div>
            <div className="f4 fw6">{game.gameCreator}</div>
          </div>
          <div className="w-50-ns w-100 fl">
            <div className="f6 fw4">Contact:</div>
            <div className="f4 fw6">{game.preferredContact}</div>
          </div>
        </div>
        <div className="fl w-50 tc pv3">
          <div className="w-50-ns w-100 fl mb2">
            <div className="f6 fw4">Start Time</div>
            <div className="f4 fw6">{moment(`${game.startTime}`, `HH:mm`).format(`h:mm a`)}</div>

          </div>
          <div className="w-50-ns w-100 fl">
            <div className="f6 fw4 ">End Time</div>
            <div className="f4 fw6">{game.endTime ? moment(`${game.endTime}`, `HH:mm`).format(`h:mm a`) : 'Not Provided'}</div>


          </div>
        </div>
        <div className="fl w-100 w-70-ns pv2 tc">
          <div className="f6 fw4">Skill Level</div>
          <div className="f6 fw6">{game.preferredSkillLevels}</div>
        </div>
        <div className="fl w-33 w-10-ns tc pv2">
          <div className="f6 fw4">Min</div>
          <div className="f4 fw6">{game.minPlayers}</div>
        </div>
        <div className="fl w-33 w-10-ns tc pv2">
          <div className="f6 fw4">Current</div>
          <div className="f4 fw6">?</div>
        </div>
        <div className="fl w-33 w-10-ns tc pv2">
          <div className="f6 fw4">Max</div>
          <div className="f4 fw6">{game.maxPlayers}</div>
        </div>

        </div>
      </li>


    )
  }
  return (
    <div>
      <Header
        headline="Current Games"
      />
        <div>
          <ul>
            {map(gameToListView)(props.allGames)}
          </ul>
        </div>
    </div>
  )
}

export default GameList
