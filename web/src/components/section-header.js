import React from 'react'

const SectionHeader = function (props) {
  return (
    <header>
  <h3 className="f3 fw7 lh-solid ttu tracked mb3 avenir">{props.headline}</h3>
    <h4 className="f5 fw4 mt0 lh-solid black-70 times i tracked">{props.subHeadline}</h4>
      <legend className="f5 b black-80 bb b--dark-red athelas tracked ttu mb3 lh-solid mb3">{props.sectionTitle}</legend>
</header>
  )
}

export default SectionHeader
