import React from 'react'

import Header from './header'
import SectionHeader from './section-header'



const PlayersAndSkill = function (props) {
  return (
    <div>

      {<SectionHeader
        headline={null}
        subHeadline={null}
        sectionTitle="Preferred Skill Level"
      />}

<div className="w-100 vh-5 tc">
          <div className={`v-mid dib inline-flex items-center ma3 br-100 ba b--black-10 h3 w3  ${props.skillLevel === "Beginner" && 'bg-light-blue ba b--black navy '}`}
            onClick={ e => props.setSkillLevel("Beginner")}>

          </div>

          <div className={`v-mid dib inline-flex items-center ma3  br-100 ba b--black-10 h3 w3   ${props.skillLevel === "Intermediate" && 'bg-light-blue ba b--black navy'}`}
            onClick={ e => props.setSkillLevel("Intermediate")}>

          </div>

          <div className={`avenir fw3 v-mid items-center dib inline-flex ma3 br-100 ba b--black-10 h3 w3 ${props.skillLevel === "Advanced" && 'bg-light-blue ba b--black navy'}`}
            onClick={ e => props.setSkillLevel("Advanced")}>
            Advanced
          </div>
</div>
          <div className={`avenir fw3 w-100 tc pa2 ba br2 b--black-20 ${props.skillLevel === "All Skill Levels" && 'bg-light-blue ba b--black navy'}`}
            onClick={ e => props.setSkillLevel("All Skill Levels")}>
            All Skill Levels
          </div>

          <div className={`tr avenir fw3 mb2 mt4 pl1 w-30 bt bb br b--black-20 pa1 ${props.skillLevel === "Beginner" && 'bg-light-blue bb bt br b--black navy '}`}
            onClick={ e => props.setSkillLevel("Beginner")}>
            Beginner
          </div>
          <div className={`tr avenir fw3 mb2 pl1 w-60 bt bb br b--black-20 pa1 ${props.skillLevel === "Intermediate" && 'bg-light-blue bb bt br b--black navy'}`}
            onClick={ e => props.setSkillLevel("Intermediate")}>
            Intermediate
          </div>
          <div className={`tr avenir fw3 mb2 pl1 w-90 bt bb br b--black-20 pa1 ${props.skillLevel === "Advanced" && 'bg-light-blue bb bt br b--black navy'}`}
            onClick={ e => props.setSkillLevel("Advanced")}>
            Advanced
          </div>
          <div className={`tc avenir fw3 w-100 pa1 bb b--black-20 ${props.skillLevel === "All Players Welcome" && 'bg-light-blue bb b--black navy'}`}
            onClick={ e => props.setSkillLevel("All Players Welcome")}>
            All Players Welcome
          </div>

          {<SectionHeader
            headline={null}
            subHeadline={null}
            sectionTitle="Minimum Players"
          />}

    <div className="cf tc">
      <div className="avenir fw3 fl w-100  bl bt br b--black-10 gray pa1">Quick Pick</div>
      <dl className={` fl w-33 ${props.currentMinCount === 3 && 'bg-light-blue'}`}
        onClick={e => props.setMinPlayers(3)}>
        <dd className="f3 fw6 ml0">3</dd>
      </dl>
      <dl className={` fl w-33 ${props.currentMinCount === 4 && 'bg-light-blue'}`}
        onClick={e => props.setMinPlayers(4)}>
        <dd className=" f3 fw6 ml0 bl br b--black-10">4</dd>
      </dl>
      <dl className={` fl w-33 ${props.currentMinCount === 5 && 'bg-light-blue'}`}
        onClick={e => props.setMinPlayers(5)}
        >
        <dd className=" f3 fw6 ml0">5</dd>
      </dl>

        <dl className=" fl w-33">
          <dd className="avenir bl b--black-10 gray  f6 fw4 ml0">Min Players</dd>
          <dd className="avenir bl bb b--black-10  f3 fw6 ml0 ">{props.currentMinCount}</dd>
        </dl>
        <dl className=" fl w-33"
          onClick={e =>
            props.addMinPlayer(props.currentMinCount + 1)}>
          <dd className="gray f6 bl br b--black-10 fw4 ml0 ">Add Player</dd>
          <dd className="f3 fw6 ml0 bb bl br b--black-10 ">+</dd>
        </dl>
        <dl className="fl w-33"
          onClick= { e =>
            props.subtractMinPlayer(props.currentMinCount - 1)}
        >
          <dd className="f6 fw4 ml0  br b--black-10 gray">Subtract Player</dd>
          <dd className="f3 fw6 ml0  br bb b--black-10">-</dd>
        </dl>
      </div>

        {<SectionHeader
          headline={null}
          subHeadline={null}
          sectionTitle="Maximum Players"
        />}

<div className="cf tc">
        <div className="avenir fw3 gray fl w-100 pa1 bl bt br b--black-10">Quick Pick</div>
        <dl className={`fl w-33 ${props.currentMaxCount === 10 && 'bg-ivory'}`}
          onClick={e => props.setMaxPlayers(10)}>
          <dd className="black-80 f3 fw6 ml0">10</dd>
        </dl>
        <dl className={`fl w-33 black-80 bl br b--black-10 ${props.currentMaxCount === 12 && 'bg-light-blue '}`}
          onClick={e => props.setMaxPlayers(12)}>
          <dd className="f3 fw6 ml0">12</dd>
        </dl>
        <dl className={`black-80 fl w-33 ${props.currentMaxCount === 18 && 'bg-light-blue  b--black navy'}`}
          onClick={e => props.setMaxPlayers(18)}
          >
          <dd className="f3 fw6 ml0">18</dd>
        </dl>

          <dl className="fl w-33">
            <dd className="avenir gray bl b--black-10 f6 fw4 ml0">Max Players</dd>
            <dd className="bl bb b--black-10 f3 fw6 ml0 ">{props.currentMaxCount}</dd>
          </dl>
          <dl className="fl w-33 "
            onClick={e =>
              props.addMaxPlayer(props.maxPlayers + 1)}
          >
            <dd className="avenir gray f6 fw4 ml0 bl br b--black-10">Add Player</dd>
            <dd className="bl bb br b--black-10 f3 fw6 ml0">+</dd>
          </dl>
          <dl className="fl w-33"
            onClick= { e =>
              props.subtractMaxPlayer(props.maxPlayers - 1)}
          >
            <dd className="avenir gray br b--black-10 f6 fw4 ml0 ">Subtract Player</dd>
            <dd className="avenir br bb b--black-10 f3 fw6 ml0 bg-40">-</dd>
          </dl>

        </div>

    </div>
  )
}

export default PlayersAndSkill
