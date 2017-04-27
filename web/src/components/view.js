import React from 'react'

import ButtonLeft from './button-back'

const View = function (props) {
  return (

      <article className="">

        <navigation>
          <div className="dt dt--fixed bg-black pa2">
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

          <header className="bt b--black-10">
            <div className="cf">
              <h1 className="avenir tc pl3-l fl w-100 pv1 f2-l pa4-s fw4 ttu tracked mb3 bg-black-70 gold ">{props.headline}</h1>
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
  onPrevious: React.PropTypes.func,
  onNext: React.PropTypes.func,
  onFinish: React.PropTypes.func,
  title: React.PropTypes.string
}

export default View
