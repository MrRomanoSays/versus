import React from 'react'

const Grid4by2 = function (props) {
  return (
    <div>

      <section className="cf">
        <div className={`fl w-100 w-50-m w-25-l tc pv1 ${props.sport === props.image1Description && 'bg-light-blue'}`}
          onClick={e => props.setSport(props.image1Description)}>
          <div className="f6 fw4 avenir">{props.image1Description}</div>
          <img src={props.image1}/>
        </div>

        <div className={`fl w-100 w-50-m w-25-l tc pv1 ${props.sport === props.image2Description && 'bg-light-blue'}`}
          onClick={e => props.setSport(props.image2Description)}>
          <div className="f6 fw4 avenir">{props.image2Description}</div>
          <img src={props.image2} />
        </div>

        <div className={`fl w-100 w-50-m w-25-l tc pv1 ${props.sport === props.image3Description && 'bg-light-blue'}`}
          onClick={e => props.setSport(props.image3Description)}>
          <div className="f6 fw4 avenir">{props.image3Description}</div>
          <img src={props.image3} />
        </div>

        <div className={`fl w-100 w-50-m w-25-l tc pv1 ${props.sport === props.image4Description && 'bg-light-blue'}`}
          onClick={e => props.setSport(props.image4Description)}>
          <div className="f6 fw4 avenir">{props.image4Description}</div>
          <img src={props.image4} />
        </div>

      </section>


      <section className="cf">

        <div className={`fl w-100 w-50-m w-25-l tc pv1 ${props.sport === props.image5Description && 'bg-light-blue'}`}
          onClick={e => props.setSport(props.image5Description)}>
          <div className="f6 fw4 avenir">{props.image5Description}</div>
          <img src={props.image5} />
        </div>

        <div className={`fl w-100 w-50-m w-25-l tc pv1 ${props.sport === props.image6Description && 'bg-light-blue'}`}
          onClick={e => props.setSport(props.image6Description)}>
          <div className="f6 fw4 avenir">{props.image6Description}</div>
          <img src={props.image6} />
        </div>

        <div className={`fl w-100 w-50-m w-25-l tc pv1 ${props.sport === props.image7Description && 'bg-light-blue'}`}
          onClick={e => props.setSport(props.image7Description)}>
          <div className="f6 fw4 avenir">{props.image7Description}</div>
          <img src={props.image7} />
        </div>

        <div className={`fl w-100 w-50-m w-25-l tc pv1 ${props.sport === props.image8Description && 'bg-light-blue'}`}
          onClick={e => props.setSport(props.image8Description)}>
          <div className="f6 fw4 avenir">{props.image8Description}</div>
          <img src={props.image8} />
        </div>

      </section>
    </div>
  )
}

export default Grid4by2
