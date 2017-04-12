import React from 'react'

import backgroundPhoto from '../images/hockey-kid.jpg'

const PlayerProfileTemplate = function (props) {
  return (
    <div>

    <div className="cf" style={{background: `url(${props.backgroundPhoto}) no-repeat center fixed`, backgroundSize: 'cover'}}>
<div className="fr pa3 pa4-ns bg-white black-70 measure-wide times">
  <header className="">
    <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Player Profile</h3>
    <h4 className="f3 fw4 i lh-title mt0">Subheadline Placeholder</h4>
  </header>


    <div className="fl w-100">

      {props.mainContent}

      <form className="black-80">







          <legend className="f5 b bb b--dark-red athelas tracked ttu mb3 lh-title mb3">Location Preferences</legend>

          <div className="">
            <label className="f6 b db mb">Street Address <span className="normal black-60">(optional)</span></label>
            <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
            <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
          </div>

          <div className="">
            <label className="f6 b db mb">City <span className="normal black-60">(optional)</span></label>
            <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
            <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
          </div>

          <div className="">
            <label className="f6 b db mb">State <span className="normal black-60">(optional)</span></label>
            <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
            <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
          </div>

          <div className="">
            <label className="f6 b db mb">Zipcode <span className="normal black-60">(optional)</span></label>
            <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
            <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
          </div>




          <legend className="f5 b bb b--dark-red athelas tracked ttu mb3 lh-title mb3">Basic Demographics</legend>

          <div className="cf">
            <div className="fl w-50">

              <fieldset id="gender" className="bn">
                <legend className="fw7 mb2">Gender</legend>
                <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="male" value="male"/>
                  <label className="lh-copy">Male</label>
                </div>

                <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="female" value="female"/>
                  <label className="lh-copy">Female</label>
                </div>
              </fieldset>

            </div>

            <div className="fl w-50">
              <fieldset id="age" className="bn">
                <legend className="fw7 mb2">Age</legend>
                <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="male" value="male"/>
                  <label className="lh-copy">18-29</label>
                </div>

                <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="female" value="female"/>
                  <label className="lh-copy">30-39</label>
                </div>

                <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="female" value="female"/>
                  <label className="lh-copy">40-49</label>
                </div>

                <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="female" value="female"/>
                  <label className="lh-copy">50-59</label>
                </div>

                <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="female" value="female"/>
                  <label className="lh-copy">60 & Older</label>
                </div>

              </fieldset>
            </div>
          </div>


          <legend className="f5 b bb b--dark-red athelas tracked ttu mb3 lh-title mb3">Additional Info</legend>
          <div>
            <label className="f6 b db mb2">Bio/Description <span className="normal black-60">(optional)</span></label>
            <textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
            <small id="comment-desc" className="f6 black-60">Helper text for a form control. Can use this text to <a href="#" className="link underline black-80 hover-blue">link to more info.</a></small>
          </div>

      </form>


        <a href="#0" className="f4 no-underline black bg-animate hover-bg-dark-red hover-white inline-flex items-center pa3 ba border-box">
          <span className="pr1">Save</span>
          <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{fill: 'currentcolor'}}>
          <title>chevronRight icon</title>
          <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
        </svg>
        </a>
        <a href="#" className="fr f4 black link hover-red pa3">Cancel</a>

      </div>

  </div>
</div>
</div>
  )
}

export default PlayerProfileTemplate
