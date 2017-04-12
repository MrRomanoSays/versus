import React from 'react'

import ButtonLeft from './button-back'

const View = function (props) {
  return (

      <article className="">

        <navigation>
          <div className="dt dt--fixed bg-near-white ba b--black-10">
            <div className="dtc tc">
              {props.buttonLeft}
            </div>

            <div className="dtc tc">
              {props.buttonCenter}
            </div>

            <div className="dtc tc">
              {props.buttonRight}
            </div>

          </div>
        </navigation>

          <header className="black-70 bt b--black-10">
            <div className="cf">
              <h1 className="fl w-100 pv0 f6 fw6 ttu tracked mb3 ">{props.headline}</h1>
            </div>
          </header>

        <section>
          {props.body}
        </section>


          <div className="db dn-s mt3 bt b--black-30">
            <p className="f7 black-70 mt2 pr4 tr">
              {props.footerText}
              </p>
          </div>


      </article>

  )
}


View.propTypes = {
  onPrevious: React.PropTypes.func.isRequired,
  onNext: React.PropTypes.func.isRequired,
  onFinish: React.PropTypes.func,
  title: React.PropTypes.string
}

export default View
