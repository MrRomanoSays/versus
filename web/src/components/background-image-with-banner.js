import React from 'react'

const BackgroundImageWithBanner = function (props) {
  return (
    <div>
      <div className="athelas vh-100 dt w-100 tc cover" style={{background: `url(${props.backgroundImage}) no-repeat center`}}>
      <div className="dtc v-mid">
        <div className="pa1 w-100 bg-white">
          <h1 className="f1 fw1 i black">{props.bannerText}</h1>
        </div>
        <blockquote className="ph0 mh0 measure f4 lh-copy center">
          {props.subText}
          {props.button}
        </blockquote>
      </div>
    </div>
  </div>
  )
}

export default BackgroundImageWithBanner



// import BackgroundImageWithBanner from '../components/background-image-with-banner'
// import backgroundImage from '../images/tall-building-with-hoop.jpg'
//
// <BackgroundImageWithBanner
//   backgroundImage={backgroundImage}
//   bannerText="If you add it, they will come."
//   subText==""
// />
