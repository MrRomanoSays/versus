import React from 'react'
import { map, filter, compose, contains, toLower, length } from 'ramda'

import Header from './header'
import ButtonList from './button-list'

const LocationList = function (props) {


  const locationBySport = function (location) {
    return contains(toLower(props.game), location.sports)
  }


  const locationToListView = function (location) {
    return (
      <li className="list pb4" key={location.name}>
        <div className={`cf avenir bt b--black-60 bw1 ${props.gameLocation === location && 'bg-light-yellow'}`}
        onClick={e => props.setLocation(location)}
        >

        <div className="fl w-100 ttu tracked f6 b pt3 pl3 pb3 bg-black-60 white ">
          {location.name}
        </div>

        <div className="fl w-100 pl3 pb1 pt2 i ">
        {`${location.streetAddress} ${location.city}, ${location.state} ${location.zipcode}`}
        </div>

        <div className="fl w-33  pl3 pr3">
          <dl className="f6 lh-title mv2">
            <dt className="dib b pv1">Days Open</dt><br/>
            <dd className="dib ml0 gray">{`${location.scheduleDays}`}</dd>
          </dl>
        </div>

        <div className="fl w-33 pv1 pl3 pr3">
          <dl className="f6 lh-title mv2">
            <dt className="dib b">Daily Hours</dt><br/>
            <dd className="dib ml0 gray">{`${location.scheduleHours}`}</dd>
          </dl>
        </div>

        <div className="fl w-33 pv1 pl3 pr3 ">
            <dl className="f6 lh-title mv2">
              <dt className="dib b">Indoor: </dt>
              <dd className="dib ml0 gray pl2">{`${location.indoor}`}</dd>
              <br />
              <dt className="dib b pt2">Outdoor: </dt>
              <dd className="dib ml0 gray pl2">{`${location.outdoor}`}</dd>
            </dl>
        </div>

        <div className="fl w-100 pv0 pl3 pr3">
          <dl className="f6 lh-title mv2">
            <dt className="dib b pr2">Sports Available</dt>
            <dd className="dib ml0 gray">{`${map(sport=>" " + sport)(location.sports)}`}</dd>
          </dl>
        </div>

        <div className="fl w-100 pv1 pl3 pr3">
          <dl className="f6 lh-title mv2">
            <dt className="dib b">Description</dt>
            <dd className="dib ml0 f6 fw4">{`${location.description}`}</dd>
          </dl>
        </div>


        </div>
      </li>
    )
  }
  return (
    <div>
      <Header
        headline={`Locations Supporting ${props.game} (${compose(
        length(),
        map(locationToListView),
        filter(locationBySport)
      )(props.allLocations)})`}
      />

      <hr />
        <ul>
          {compose(
            map(locationToListView),
            filter(locationBySport)
          )
            (props.allLocations)}
        </ul>

    </div>
  )
}

export default LocationList
