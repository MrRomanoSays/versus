import React from 'react'

import { contains, toLower, head, toUpper, tail, pathOr, map } from 'ramda'

//TODO Need to make a mapper constant for my players.  Based on...



const GameCard = function (props) {

  const mapFunctionForCurrentPlayers = function (player) {
    return (
        <div className="dib">
          <article className="fl mw4 mh4 center bg-white br3 pa2 ba b--black-10 hover-bg-black-80 hover-white">
            <div className="tc">
              <img src={player.picture ? player.picture : "http://lorempixel.com/400/200/people"} className="br-100 w3 h3 dib ba b--black-60 " title="Player Avatar if available or Random Sports Image" />
              <div className="athelas f6 fw3">{`${toUpper(head(player.firstName))+tail(toLower(player.firstName))} ${toUpper(head(player.lastName))}`}</div>
            </div>
          </article>
        </div>
    )
  }


  return (


    <article className="cf ph3 ph5-ns pv5">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <div className="f6 ttu tracked gray">{props.gameDate}</div>

        <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
          {props.sport} @ {props.time}
        </h1>

        <h2 className="f3 mid-gray lh-title">
          {props.locationName}
        </h2>

        <div className="f6 ttu tracked gray mb1 lh-copy ">{props.streetAddress}</div>
        <div className="f6 ttu tracked gray  lh-copy bb bw1 mb2 pb2">{props.city}, {props.state} {props.zipcode}</div>


        <div className="flex items-center pt2 pb2 bg-gold bt b--gray ">

         <span className="lh-title ml3">Organizer:  {props.gameCreator}</span>
        </div>

        <div className="flex items-center pt3 pb3 bg-gold b--gray bb ">

          <span className="lh-title ml3 ">Contact:  {props.creatorContact}</span>
        </div>

<div className="avenir ttu tracked">
        <div className="fl w-100 w-33-ns tc pv1 bg-black-05 bl bb br b--gold">
          <div className="pv2">
            <div className="f6 fw4">Min</div>
            <div className="f4 fw6">{props.minPlayers}</div>
          </div>
        </div>

        <div className="fl w-100 w-34-ns tc pv1 bg-black-05 bb b--gold">
          <div className="pv2">
            <div className="f6 fw4">Current</div>
            <div className="f4 fw6">
               {props.currentPlayers < props.minPlayers ? `Need ${props.minPlayers-props.currentPlayers}` : props.currentPlayers >= props.minPlayers && props.currentPlayers <= props.maxPlayers ? `${props.maxPlayers-props.currentPlayers} spots left` : props.currentPlayers === props.maxPlayers ? `Full` : null }
              </div>
          </div>
        </div>

        <div className="fl w-100 w-33-ns tc pv1 bg-black-05 bl bb br b--gold">
          <div className="pv2">
            <div className="f6 fw4">Max</div>
            <div className="f4 fw6">{props.maxPlayers}</div>
          </div>
        </div>





{contains(props._id, pathOr("", ["player", "currentPlayers"], props))
  ?
  <div className="mv1 mv0-ns fl w-100 tc">
    <div className=" pointer dim pt1-ns mt1-ns mr1-ns br2-ns f4 white-90 lh-title bg-black-80">LEAVE GAME</div>
  </div>
  :
  <div className="mv1 mv0-ns fl w-100 tc">
      <div className=" pointer hover-gold pt1-ns mt1-ns mr1-ns br2-ns f4 white-90 lh-title bg-black-80">JOIN GAME</div>
  </div>
}
















</div>

      <header className="avenir fw4 ttu tracked f5 lh-copy measure b">Current Roster:</header>
          <div>{map(mapFunctionForCurrentPlayers)(pathOr("Awaiting Players...", ["currentPlayers"], props))}</div>



      </header>

      <div className="fn fl-ns w-50-ns">
        <header className="f5 lh-copy measure mt0-ns b">Preferred Skill Level(s):</header>
          <p className="f5 lh-copy measure mt0-ns">{props.preferredSkillLevel}</p>

        <header className="f5 lh-copy measure mt0-ns b">LOCATION DESCRIPTION:</header>
          <p className="f5 lh-copy measure mt0-ns">{props.locationDescription}</p>

        <header className="f5 lh-copy measure mt0-ns b">EQUIPMENT:</header>
          <p className="f5 lh-copy measure mt0-ns">{props.equipmentInfo}</p>

        <header className="f5 lh-copy measure mt0-ns b">More Info:</header>
          <p className="f5 lh-copy measure mt0-ns">{props.moreInfo}</p>
      </div>

    </article>

  )
}

export default GameCard


//TESTING MODEL
// <div className="mv1 mv0-ns fl w-100 w-50-ns tc">
//     <div className=" pointer  dim pt1-ns mt1-ns mr1-ns br2-ns f4 white-90 lh-title bg-black-80">LEAVE GAME</div>
// </div>
//
// <div className="mv1 mv0-ns fl w-100 w-50-ns tc ">
//     <div className=" pointer hover-bg-yellow hover-black pt1-ns mt1-ns ml1-ns br2-ns f4 white-90 lh-title bg-black-80">JOIN GAME</div>
// </div>
