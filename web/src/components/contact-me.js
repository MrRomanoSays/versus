import React from 'react'
import backgroundImage from '../images/baseball-field-1548348_1920.jpg'
import 'font-awesome/css/font-awesome.css'
import romanoPhoto from '../images/romano.jpg'

const ContactMeHeader = function (props) {
  return (

      <div>
          <div className="w-100 cover" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="cf">

              <div className="fl-l w-50-l tc tr-l">
                <img className="ml4-l mr4-l mt4-l mb3-l mw6-l br2" src={romanoPhoto} />
              </div>

              <div className="fl-l w-100 w-50-l tc mt5-l">
                <div>
                  <h1 className="f2 f1-l fw1 white i">Joe Romano</h1>


                  <blockquote className="f6 f6-m f6-l lh-copy center mb4">
                    <div>
                      <a href="https://www.linkedin.com/in/lawrencejosephromano/" className="link white-80 pointer"><i className="fa pr1 ml1 fa-2x grow dim white-80 fa-linkedin-square" aria-hidden="true" /> </a>
                      <a href="https://codepen.io/MrRomanosays/" className="link white-80 pointer"><i className="fa fa-3x grow dim white-80 fa-codepen" aria-hidden="true" /> </a>
                      <a href="mailto:l.j.romano@gmail.com" className="link white-80 pointer"><i className="fa pl1 fa-2x grow dim white-80 fa-envelope" aria-hidden="true" /></a> <br />
                      <cite className="f6 ttu tracked fs-normal white-80"> Software Developer</cite><br />


                      <a href="https://github.com/MrRomanoSays" className="link white-80 pointer"><i className="dim fa v-top fa-3x grow  white-80 fa-github-square" aria-hidden="true" /> </a>


                    </div>
                  </blockquote>
                </div>
              </div>
              </div>
              </div>
              </div>
  )
}

export default ContactMeHeader



//
// <i className="fa v-top pt1 pr1 fa-2x grow dim white-80 fa-flickr" aria-hidden="true" />
// <i className="fa v-top pt1 pl1 fa-2x grow dim white-80 fa-twitter-square" aria-hidden="true" />
