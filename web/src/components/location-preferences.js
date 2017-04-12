import React from 'react'

import TextInput from './text-input'

const LocationPreferences = function (props) {
  return (
    <div>
      {props.sectionHeader}
      <TextInput
        label="Street Address"
        optional={false}
        help={null}
        placeholder={null}
        width={null}

        value={props.streetAddress}
        onChange={e => props.streetAddressHandleChange(e.target.value)}
      />

      <TextInput
        label="City"
        optional={false}
        help={null}
        placeholder={null}
        width={null}

        value={props.city}
        onChange={e => props.cityHandleChange(e.target.value)}
      />

      <TextInput
        label="State"
        optional={false}
        help={null}
        placeholder={null}
        width={null}

        value={props.state}
        onChange={e => props.stateHandleChange(e.target.value)}
      />

      <TextInput
        label="Zipcode"
        optional={false}
        help={null}
        placeholder={null}
        width={null}

        value={props.zipcode}
        onChange={e => props.zipcodeHandleChange(e.target.value)}
      />

    </div>
  )
}

export default LocationPreferences
