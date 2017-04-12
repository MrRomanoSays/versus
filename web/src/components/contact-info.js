import React from 'react'

import TextInput from './text-input'

const ContactInfo = function (props) {
  return (
    <div>
      {props.sectionHeader}
      <TextInput
        label="First Name"
        optional={false}
        help={null}
        placeholder={null}
        width={null}

        value={props.firstName}
        onChange={e => props.firstNameHandleChange(e.target.value)}
      />

      <TextInput
        label="Last Name"
        optional={false}
        help={null}
        placeholder={null}
        width={null}

        value={props.lastName}
        onChange={e => props.lastNameHandleChange(e.target.value)}
      />

      <TextInput
        label="Email"
        optional={false}
        help={null}
        placeholder={null}
        width={null}

        value={props.email}
        onChange={e => props.emailHandleChange(e.target.value)}
      />

      <TextInput
        label="Phone"
        optional={false}
        help={null}
        placeholder={null}
        width={null}

        value={props.phone}
        onChange={e => props.phoneHandleChange(e.target.value)}
      />

    </div>

  )
}

export default ContactInfo
