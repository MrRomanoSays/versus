import React from 'react'

import TextInput from './text-area-input'

const PlayerBio = function (props) {
  return (
    <div>
      {props.sectionHeader}
      <TextInput
        label="Player Bio"
        optional={true}
        help={null}
        placeholder={null}
        width={null}
        textInputRows={5}

        value={props.bio}
        onChange={e => props.bioHandleChange(e.target.value)}

      />
    </div>
  )
}

export default PlayerBio
