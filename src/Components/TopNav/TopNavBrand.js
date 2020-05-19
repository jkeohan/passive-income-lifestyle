import React from 'react'

function TopNavBrand(props) {

  return (
    <div className="brand_area">
        <div className="brand1">
          <a
            className="nasa_logo"
            href="http://www.nasa.gov"
            target="_blank"
            title="visit nasa.gov"
          >
            NASA
          </a>
        </div>
        <div className="brand2">
          <a
            className="top_logo"
            href="https://science.nasa.gov/"
            target="_blank"
            title="Explore NASA Science"
          >
            NASA Science
          </a>
          <a className="sub_logo" href="/mars-exploration/#" title="Mars">
            Mars Exploration Program
          </a>
        </div>
      </div>
  )
}

export default TopNavBrand