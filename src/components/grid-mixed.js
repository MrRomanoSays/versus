import React from 'react'

const PlayersAndSkill = function (props) {
  return (




  <div>
    <section>
      <h4>How Many Players</h4>
          <div className="fl w-20 tc pv4 b ttu tracked ba">
        Min
          </div>
          <div className="fl w-20 tc pv4 ba bg-near-white">
            ?
          </div>
          <div className={`fl w-20 tc pv4 ba ${props.minPlayers === 2 && 'bg-light-blue ba b--black navy'}`}
            onClick={e => props.setMinPlayers(2)}
          >
            2
          </div>
          <div className={`fl w-20 tc pv4 ba ${props.minPlayers === 3 && 'bg-light-blue ba b--black navy'}`}
            onClick={e => props.setMinPlayers(3)}
          >
            3
          </div>
          <div className={`fl w-20 tc pv4 ba ${props.minPlayers === 4 && 'bg-light-blue ba b--black navy'}`}
            onClick={e => props.setMinPlayers(4)}
          >
            4
          </div>
          <div className="fl w-20 tc pv4 b ttu ba">
        Max
          </div>
          <div className="fl w-20 tc pv4 ba bg-near-white">
           ?
          </div>
          <div className={`fl w-20 tc pv4 ba ${props.maxPlayers === "No Limit" && 'bg-light-blue ba b--black navy'}`}
            onClick={e => props.setMaxPlayers("No Limit")}
          >
            No Limit
          </div>
      </section>






      <section>
      <h4>Preferred Skill Level(s)</h4>
          <div className={`fl w-33 tc pv4 ba ${props.skillLevel === "Beginner" && 'bg-light-blue ba b--black navy'}`}
            onClick={ e => props.setSkillLevel("Beginner")}>
            Beginner
          </div>
          <div className={`fl w-33 tc pv4 ba ${props.skillLevel === "Intermediate" && 'bg-light-blue ba b--black navy'}`}
            onClick={ e => props.setSkillLevel("Intermediate")}>
            Intermediate
          </div>
          <div className={`fl w-33 tc pv4 ba ${props.skillLevel === "Advanced" && 'bg-light-blue ba b--black navy'}`}
            onClick={ e => props.setSkillLevel("Advanced")}>
            Advanced
          </div>
          <div className={`fl w-33 tc pv4 ba ${props.skillLevel === "All Players Welcome" && 'bg-light-blue ba b--black navy'}`}
            onClick={ e => props.setSkillLevel("All Players Welcome")}>
            All Players Welcome
          </div>
      </section>
    </div>
  )
}

export default PlayersAndSkill
