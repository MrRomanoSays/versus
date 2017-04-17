import React from 'react'
import { pathOr, map } from 'ramda'
import moment from 'moment'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Header from './header'
import ButtonList from './button-list'


const GameList = function (props) {
  const gameToListView = function (game) {
    return (
      <li className="tc tl-ns pr2 pb4 avenir" key={game.gameCreator+game.sport+game.startTime}>

        <div className="cf">
              <div className="shadow-5 fl w-60-ns w-100 f4 bg-yellow mv0 ph3 ba b--gold">
                <div className="pv1">
                  <div className="pv2">
                    <div className="f6 fw4 i">{pathOr("...", ["sport"], game)}</div>
                    <div className="f4-l f5-m f6-s fw6">{pathOr("...", ["gameLocation", "name"], game)}</div>
                  </div>
                </div>
              </div>

              <div className="fl w-40-ns w-100 f4 mv0 ttu tracked">
                <div className="fl w-33-ns w-50 tc pv1 bg-black-80 white-90 ba b--black-05">
                  <div className="pv2">
                    <div className="f6 fw4">Min</div>
                    <div className="f4-l f5-m f6-s fw6">{game.minPlayers}</div>
                  </div>
                </div>

                <div className="fl w-33-ns w-50 tc pv1 bg-black-80 white-90 ba b--black-05">
                  <div className="pv2">
                    <div className="f6 fw4">Max</div>
                    <div className="f4-l f5-m f6-s fw6">{game.maxPlayers}</div>
                  </div>
                </div>

                <div className="fl w-34-ns w-100 tc pv1 bg-black-80 white-90 ba b--black-05">
                  <div className="pv2">
                    <div className="f6 fw4">Current</div>
                    <div className="f4-l f5-m f6-s fw6">{game.currentPlayers < game.minPlayers ? `Need ${game.minPlayers-game.currentPlayers}` : game.currentPlayers >= game.minPlayers && game.currentPlayers <= game.maxPlayers ? `${game.maxPlayers-game.currentPlayers} spots left` : game.currentPlayers === game.maxPlayers ? `Full` : null }</div>
                  </div>
                </div>




              </div>
      </div>
      <div className="cf bb b--black-10 bw1">
              <div className="fl w-100 w-30-m w-40-l  f4 mv0 ph3 bl b--black-05">
                <div className="pv1">
                  <div className="pv2 mt1 mb1">
                      <div className="f6 fw4">{game.dateOfGame}</div>
                      <div className="f4-l f5-m f6-s fw6">{moment(`${game.startTime}`, `HH:mm`).format(`h:mm a`)}</div>
                  </div>
                </div>
              </div>

              <div className="fl w-100 w-60-m w-50-l f4 mv0 ph3 bl b--black-05">
                <div className="pv1 mt1 mb1">
                  <div className="pv2">
                      <div className="f6 fw4">Preferred Skill Level(s)</div>
                      <div className="f4-l f5-m f6-s fw6">{pathOr("All Players Welcome", ["preferredSkillLevels"], game)}</div>
                  </div>
                </div>
              </div>

              <Link to="/about/game" className="fl w-100 w-10-ns f4 mv0 avenir ttu tracked link"
                onClick={props.loadGameToState(game)}
              >
                <div className="br2 mt1 mb1 tc pv1 bg-black-20 black bl b--black-05 hover-yellow hover-bg-black-80">
                  <div className="pv2">
                    <div className="f6 fw4">MORE</div>
                    <div className="f4 fw6">></div>
                  </div>
                </div>
              </Link>
              <div className="w-100"></div>

      </div>
      </li>


    )
  }
  return (
    <div>
      <Header
        headline={`Games (${pathOr("", ["allGames"], props).length})`}
      />
        <div>
          <ul className="list pl1">
            {map(gameToListView)(props.allGames)}
          </ul>
        </div>
    </div>
  )
}

const connector = connect(state => state)

export default connector(GameList)
