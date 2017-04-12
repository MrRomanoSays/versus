import React from 'react'

const Grid5Top2Bottom = function (props) {
  return (
    <div>
      <section className="cf">
        <div className="fl w-100 tc pv1">
          <div className="f6 fw4 avenir">{props.image1Description}</div>
          <img src={props.image1}/>
        </div>
        <div className="fl w-100 tc pv1">
          <div className="f6 fw4 avenir">{props.image2Description}</div>
          <img src={props.image2} />
        </div>
        <div className="fl w-100 tc pv1">
          <div className="f6 fw4 avenir">{props.image3Description}</div>
          <img src={props.image3} />
        </div>
        <div className="fl w-100 tc pv1">
          <div className="f6 fw4 avenir">{props.image4Description}</div>
          <img src={props.image4} />
        </div>
        <div className="fl w-100 tc pv1">
          <div className="f6 fw4 avenir">{props.image5Description}</div>
          <img src={props.image5} />
        </div>
      </section>

      <section className="cf">
        <div className="fl w-100-s w-50-ns tc pv1">
          <div className="f6 fw4 avenir">{props.image6Description}</div>
          <img src={props.image6} />
        </div>
        <div className="fl w-100-s w-50-ns tc pv1">
          <div className="f6 fw4 avenir">{props.image7Description}</div>
          <img src={props.image7} />
        </div>
      </section>
    </div>
  )
}

export default Grid5Top2Bottom
