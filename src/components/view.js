import React from 'react'

import ButtonLeft from './button-back'

const View = function (props) {
  return (
    <div>
      <article className="pa4 pa5-l">
        <section>
          <header className="black-70 bt b--black-10">
            <div className="mb4-l cf">
              <h1 className="fl w-100 pv0 f6 fw6 ttu tracked mb4">{props.headline}</h1>
            </div>
          </header>
        </section>

        <section>
          {props.body}
        </section>

        <section>
          <footer>
            <div className="dt dt--fixed">
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
          </footer>
        </section>

        <section>
          <div className="db dn-s mt3 bt b--black-30">
            <p className="f7 black-70 mt2 pr4 tr">
              {props.footerText}
              </p>
          </div>
        </section>

      </article>

    </div>
  )
}


View.propTypes = {
  onPrevious: React.PropTypes.func.isRequired,
  onNext: React.PropTypes.func.isRequired,
  onFinish: React.PropTypes.func,
  title: React.PropTypes.string
}

export default View
