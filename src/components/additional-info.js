import React from 'react'

import TextInput from './text-input'

const AdditionalInfo = function (props) {
  return (
    <div>
      <TextInput
        label="Equipment Check"
        optional={true}
        help={null}
        placeholder="I'll be bringing ________, and it'd be great if you brought ________"
        width={null}
        textInputRows={null}

        value={props.equipmentValue}
        onChange={props.equipmentHandleChange}
      />

      <TextInput
        label="More Info"
        optional={true}
        help="Do you want to tell players anything else?"
        placeholder={null}
        width={null}
        textInputRows={4}

        value={props.moreInfoValue}
        onChange={props.moreInfoHandleChange}
      />
    </div>


  )
}

export default AdditionalInfo
