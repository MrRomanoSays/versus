import React from 'react'

import ButtonFontAwesome from './button-font-awesome'
import Grid5to1 from './grid-5to1'

const BasicDemographics = function (props) {
  return (
    <div>
      {props.sectionHeader}

      <Grid5to1
        age={props.age}
        cell1="18-29"
        handleChange={props.handleAgeChange}
        cell2="30-39"
        cell3="40-49"
        cell4="50-59"
        cell5="60 & Older"
      />

        <div className="w-100 vh-5 tc">
            <div className={`v-mid dib inline-flex items-center ma3 br-100 ba b--black-10 h3 w3  ${props.gender === "Male" && 'bg-light-yellow ba b--black '}`}
              onClick={ e => props.genderHandleChange("Male")}>

              <div className="br-100 w3 h3 ba b--black-10 pa2 tc">
                <ButtonFontAwesome
                  iconName="fa-male"
                  iconSize="fa-3x"
              /></div>

            </div>

            <div className={`v-mid dib inline-flex items-center ma3  br-100 ba b--black-10 h3 w3   ${props.gender === "Female" && 'bg-light-yellow ba b--black'}`}
              onClick={ e => props.genderHandleChange("Female")}>

              <div className="br-100 w3 h3 ba b--black-10 pa2 tc">
                <ButtonFontAwesome
                  iconName="fa-female"
                  iconSize="fa-3x"
              /></div>

            </div>
        </div>



    </div>

  )
}

export default BasicDemographics
